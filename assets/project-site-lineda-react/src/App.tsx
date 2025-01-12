import { Outlet,useLocation } from 'react-router-dom';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ProductContext, ItemProps } from './contexts/ProductProvider';
import { CartProvider } from './contexts/CartContext';
import { Footer } from './component/Footer';
import { Navbar } from './component/Navbar';
import { Menu } from './component/Menu';
import { FormSearch } from './component/FormSearch';

import './style/App.css';


export const App: React.FC = () => {
  // Référence pour accéder au bouton
  const [openMenu, setOpenMenu] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const alignmentRef = useRef<HTMLDivElement>(null);
  const latestState = useRef({ screenWidth, openMenu });
  latestState.current = { screenWidth, openMenu };

  const location = useLocation().pathname; // Get the current pathname

  const menu = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current; // Référence au bouton
    if (button) {
      // Bascule la classe et l'attribut `aria-expanded`
      button.classList.toggle('opened');
      button.setAttribute('aria-expanded', button.classList.contains('opened').toString());
    }
    if (menuRef.current) {
      if (openMenu === 0) {
        setOpenMenu(1);
        menuRef.current.style.width = `${15.625}rem`;
      } else {
        setOpenMenu(0);
        menuRef.current.style.width = '0';
      }
    }
  };

  useEffect(() => {
    function handleResize() {
      const { openMenu } = latestState.current;
      setScreenWidth(window.innerWidth);
      if (menuRef.current) {
        if (window.innerWidth > 800) {
          menuRef.current.removeAttribute('style');
        } else {
          if (openMenu === 1) {
            menuRef.current.style.width = `${15.625}rem`;
          } else {
            menuRef.current.style.width = '0';
          }
        }
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      // Nettoyage de l'écouteur d'événement
      window.removeEventListener('resize', handleResize);
    };
  }, [openMenu, screenWidth]); // Ajout de dépendances

  // Consume the ProductContext to access application state
  const context = useContext(ProductContext);
  if (!context) {
    // Display a loading message if the context is not ready
   return <picture className='loader'><img src='asset/pictures/loader.gif' alt='chargement en cours' /></picture>;
  }

  const { content, isLoading, error } = context;
  // Destructure the context to extract content, loading status, and errors

  if (error) {
    // Display an error message if there was an issue fetching data
    return (
      <p className='red-color loader'>
        Une Erreur s'est produite lors du chargement des données ...
      </p>
    );
  }

  if (isLoading || !content.items.length) {
    // Display a loading message if data is still being fetched
    return <picture  className='loader'><img src='asset/pictures/loader.gif' alt='chargement en cours' /></picture>;
  }

 const articles: ItemProps[] = content.items;

  return (
    <>
    <CartProvider>
      <Navbar menu={menu} buttonRef={buttonRef} />
      <div className='alignment' ref={alignmentRef}>
      
        <Menu menuRef={menuRef} />
        <div>
        {location !== '/search' && <FormSearch articles={articles} />}
            <Outlet />
        </div>
        </div>
       </CartProvider >
      <Footer />
    </>
  );
}
