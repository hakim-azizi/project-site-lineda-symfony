import React, { useContext, useState } from 'react';
// Import React and hooks for state management and context
import { ProductContext, ItemProps } from '../contexts/ProductProvider';
// Import Product context for accessing shared data
// Import type for article props
import { FormSearch } from '../component/FormSearch';
// Import FormSearch component for search input
import { Items } from '../component/Items';
// Import Items component for displaying individual articles
import { useLocation } from 'react-router-dom';
// Import hook to retrieve routing location information

export const Search: React.FC = () => {
  const location = useLocation(); // Get the current location from the router
  let { search } = location.state || { search: '', articles: [] }; // Retrieve search state or set defaults
  const [searchQuery, setSearchQuery] = useState<string>(search); // State for managing the search query
  const [requestSearch, setRequestSearch] = useState<string>(''); // State for the current search request
  const [filteredArticles, setFilteredArticles] = useState<ItemProps[]>([]); // State for the filtered articles

  const context = useContext(ProductContext); // Access the product context
  if (!context) {
    return <p>Chargement des données...</p>; // Render loading message if context is unavailable
  }

  const { content, isLoading, error } = context; // Destructure context data

  if (error) {
    return (
      <p className='red-color'>
        Une Erreur s'est produite lors du chargement des données
      </p>
    ); // Display error message if an error occurs
  }

  if (isLoading || !content.items.length) {
    return <p>Chargement des données...</p>; // Display loading message while data is loading
  }

  const articles: ItemProps[] = content.items; // Retrieve articles from context data

  return <>
        {/* Render the FormSearch component to handle search functionality */}
        <FormSearch
          articles={articles} // Pass articles as a prop
          setRequestSearch={setRequestSearch} // Function to update the search request
          requestSearch={requestSearch} // Current search request
          setFilteredArticles={setFilteredArticles} // Function to update filtered articles
          searchQuery={requestSearch || searchQuery} // Pass either requestSearch or searchQuery
          setSearchQuery={setSearchQuery} // Function to update searchQuery state
        />
        {/* Display the current search term */}
        <h1>Recherche : {requestSearch || searchQuery}</h1>
        {/* Render the filtered articles */}
        <aside className='home'>
          {filteredArticles.map((article) => (
            <Items
              key={article.name} // Unique key for each article
              name={article.name} // Article name
              picture={article.picture} // Article picture URL
              price={article.price} // Article price
              url={article.url} // Article URL
            />
          ))}
        </aside>
    </>;
};
