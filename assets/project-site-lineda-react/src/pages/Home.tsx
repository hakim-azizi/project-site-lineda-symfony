import React, { useContext } from 'react';
// Import React and useContext hook to consume context
import { ProductContext, SiteProps, ItemProps, SubCategoryProps, CategoryProps } from '../contexts/ProductProvider';
// Import the ProductContext and the HomeProps type for type safety
import { Items } from '../component/Items';
  
import { filterarticle } from '../component/LibraryOfFunctions';

// Import the Items component and its props type
import '../style/home.css';
// Import the CSS styles specific to the Home component

export const Home: React.FC = () => {

  // Consume the ProductContext to access application state
  const context = useContext(ProductContext);
  if (!context) {
    // Display a loading message if the context is not ready
    return <picture><img src='asset/pictures/loader.gif' alt='chargement en cours' /></picture>;
  }

  const { content, isLoading, error } = context;
  // Destructure the context to extract content, loading status, and errors

  if (error) {
    // Display an error message if there was an issue fetching data
    return (
      <p className='red-color'>
        Une Erreur s'est produite lors du chargement des données
              </p>
    );
  }

  if (isLoading || !content.items.length) {
    // Display a loading message if data is still being fetched
    return <picture><img src='asset/pictures/loader.gif' alt='chargement en cours' /></picture>;
  }

  // Helper function to generate a random number within a specified range
  const randomiser = (max: number) => Math.floor(Math.random() * max);

  // Generate an array of unique random numbers
  const randomNumbers = (action: number) => {
    const numbers: number[] = [];
    while (numbers.length < 10) {
      const randomNumber = Math.floor(Math.random() * action);
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  };

  // Extract and type cast data from the context content
  const articles: ItemProps[] = content.items;
  const category: CategoryProps = content.category[randomiser(content.category.length)];
  const subCategory: SubCategoryProps = content.subCategory[randomiser(content.subCategory.length)];
  const homePage: SiteProps[] = content.site;
 
  return <>
          {/* Include the search form component */}
      <header>
        <h1 className='center'>{homePage[0].sitename}</h1>
        {/* Display the site name from the context */}
      </header>
      <img
        className='visual'
        src='asset/pictures/834e550a-baa2-490b-bbbb-50e3653674a3.jpg'
        alt=''
        /* Include a visual representation for the Home page */
      />
      <main>
        {/* Display the homepage subtitle, description, and a sample of articles */}
        <section>
          <h2>{homePage[0].subtitle}</h2>
          <p>{homePage[0].description}</p>
          <p>Voici une présentation de quelques articles</p>
          <aside className='home'>
            {/* Map over the random numbers array to display random items */}
            {randomNumbers(content.items.length).map((rand) => {
              // Extract the required properties for the Items component
             
              const { name, picture, price, url }: ItemProps = articles[rand];
              return (
                <Items
                  key={rand}
                  name={name}
                  picture={picture}
                  price={price}
                  url={url}
                />
              );
            })}
          </aside>
        </section>
        {/* Display a category section with a random category and its articles */}
        <section>
          <h2>{category.name}</h2>
          <article>
            <p>{category.description}</p>
          </article>
          <aside className='home'>
            {/* Map over the random numbers array to display random items from the category */}
            {category.name && filterarticle(articles,category.name||'not').length===0 ? <p>Pour le moment il n'ya pas d'articles dans cette categorie</p> : (randomNumbers(filterarticle(articles,category.name||'not').length).map((rand:number) => {

const { name, picture, price, url }: ItemProps  = filterarticle(articles,category.name||'not')[rand];
              return (
                <Items
                  key={rand}
                  name={name}
                  picture={picture}
                  price={price}
                  url={url}
                />
              );
            }))}
          </aside>
        </section>
        {/* Display a subcategory section with a random subcategory and its articles */}
        <section>
          <article>
            <h2>{`${subCategory.category}, ${subCategory.name}`}</h2>
            <p>{subCategory.description}</p>
          </article>
          <aside className='home'>
            {/* Map over the random numbers array to display random items from the subcategory */ }
            { (filterarticle(articles,subCategory.category||'not',subCategory.name).length===0) ? <p>Pour le moment il n'ya pas d'articles dans cette categorie</p> : (randomNumbers(filterarticle(articles,subCategory.category||'not',subCategory.name).length).map((rand:number) => {

const { name, picture, price, url }: ItemProps =  filterarticle(articles,subCategory.category||'not',subCategory.name)[rand];
return (
  <Items
    key={rand}
    name={name}
    picture={picture}
    price={price}
    url={url}
  />
);
            }))} 
          </aside>
        </section>
      </main>
      </>;
};
