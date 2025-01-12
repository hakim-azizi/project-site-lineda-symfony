import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ItemProps } from '../contexts/ProductProvider';
import { ImageZoomer } from '../component/ImageZoomer';
import { CartContext } from '../contexts/CartContext';

import '../style/item.css';
import '../style/form.css';


  export const Item: React.FC<{ articles: ItemProps[] }> = ({ articles }) => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const verif = location.split('/').filter((e) => e);

  const {
    addToCartHandler,
    val,
    singularPlural,
    price,
    quantityRef,
    validCartRef,
    options,
    closeAddCart,
    navigateToCart,
    objectDataUrl, // Utilisation de la méthode du contexte
  } = useContext(CartContext);

  const filteredArticles = articles.filter(
    (article) => article.name && article.name.toLowerCase() === verif[2]
  );

  if (filteredArticles.length === 0) {
    navigate('/404');
    return null;
  }

  const article = filteredArticles[0];


  return (
    <>
      <header>
        <h1 className='center'>{article.name}</h1>
      </header>
      <main>
        <section>
          <h2>{article.name}</h2>
          <aside className='picture'>
            <ImageZoomer picture={`../../${article.picture}`} />
          </aside>
          <article>
            <p>{article.description}</p>
            <form action='' method='get' id='cart' onSubmit={(e) => addToCartHandler(e, article)}>
              <label>
                Quantité :
                <select
                  name='quantity'
                  id='quantity'
                  ref={quantityRef}
                  onChange={() => val(article)}
                  required
                >
                  {options}
                </select>
              </label>
              <p>
                Prix : <span className='red-color'>{article.price} &euro;</span>
              </p>
              <p>
                <span id='singular'>Prix {singularPlural}</span> :{' '}
                <span className='red-color' id='price-items'>
                  {price !== 0 ? price : article.price} &euro;
                </span>
              </p>
              <button type='submit'>Ajouter au panier</button>
            </form>
          </article>
        </section>
        <div className='valid-cart' ref={validCartRef}>
           {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <object data={objectDataUrl} width='300' height='75'></object>
          <button onClick={navigateToCart}>Régler vos achats</button>
          <button onClick={closeAddCart}>Continuez vos achats</button>
        </div>
      </main>
    </>
  );
};


