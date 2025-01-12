import React, { useEffect, useRef } from 'react';
// Import hooks for side effects and references
import { useLocation, useNavigate } from 'react-router-dom';
// Import hooks for interacting with routing

// Define the type for individual article properties
import { ItemProps } from '../contexts/ProductProvider';
// Define the type for a base component prop (list of articles)
export type BaseProps = {
  articles: ItemProps[];
};

// Define types for the props related to the search functionality
export type SearchProps = {
  setRequestSearch: React.Dispatch<React.SetStateAction<string>>; // State setter for the search request
  requestSearch: string; // The current search request
  setFilteredArticles: React.Dispatch<React.SetStateAction<ItemProps[]>>; // State setter for filtered articles
  searchQuery: string; // The current search query string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>; // State setter for the search query
};

// Combine BaseProps and optional SearchProps for this component
export type FormSearchProps = BaseProps & Partial<SearchProps>;

export const FormSearch: React.FC<FormSearchProps> = ({
  articles,
  setRequestSearch,
  requestSearch,
  setFilteredArticles,
  searchQuery,
  setSearchQuery,
}) => {
  const location = useLocation().pathname; // Get the current pathname
  const navigate = useNavigate(); // Hook for programmatic navigation
  const searchRef = useRef<HTMLInputElement>(null); // Reference to the search input element

  const isSearchContext = Boolean(
    setRequestSearch && requestSearch !== undefined && setFilteredArticles
  ); // Determine if the component is being used in a search context

  // Function to handle search form submission
  const query = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    if (searchRef.current !== null) {
      const search = searchRef.current.value; // Retrieve input value
      navigate('/search', { state: { search: search } }); // Navigate to the search page
    }
  };

  // Function to filter articles based on search input
  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isSearchContext && setRequestSearch && setFilteredArticles) {
      const input = event.target.value.toLowerCase(); // Normalize input value
      setRequestSearch(input); // Update the search request

      const research: string[] = input
        .split(' ')
        .filter((term) => term.trim() !== ''); // Split input into terms and filter out empty ones

      const filtered = articles.filter((article) => {
        const values = Object.values(article); // Get all values from the article object
        return values.some(
          (value) =>
            typeof value === 'string' &&
            research.some((term) => value.toLowerCase().includes(term)) // Check if terms match any value
        );
      });

      setFilteredArticles(filtered); // Update the filtered articles
      if (setSearchQuery && searchQuery !== '') setSearchQuery(''); // Clear the query if needed
    }
  };

  // Effect to apply filtering when searchQuery changes
  useEffect(() => {
    if (searchQuery !== '' && searchQuery)
      if (isSearchContext && setRequestSearch && setFilteredArticles) {
        const input = searchQuery.toLowerCase(); // Normalize search query
        setRequestSearch(input); // Update search request

        const research: string[] = input
          .split(' ')
          .filter((term) => term.trim() !== ''); // Split query into terms

        const filtered = articles.filter((article) => {
          const values = Object.values(article);
          return values.some(
            (value) =>
              typeof value === 'string' &&
              research.some((term) => value.toLowerCase().includes(term))
          );
        });

        setFilteredArticles(filtered); // Update the filtered articles
      }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [searchQuery]);

  // Render the component conditionally based on the current location
  return location !== '/search' ? (
    <form action='search' method='post' onSubmit={query}>
      <div className='search'>
        <button type='submit'>
          <img
            src='../../asset/pictures/search.jpg'
            alt='Faîtes votre recherche'
          />
        </button>
        <input ref={searchRef} defaultValue={searchQuery} />
      </div>
    </form>
  ) : (
    <label className='search'>
      <img
        src='../../asset/pictures/search.jpg'
        alt='Faîtes votre recherche'
      />
      <input
        ref={searchRef}
        value={searchQuery} // Ensure controlled input
        onChange={isSearchContext ? search : undefined} // Attach the search handler in search context
      />
    </label>
  );
};
