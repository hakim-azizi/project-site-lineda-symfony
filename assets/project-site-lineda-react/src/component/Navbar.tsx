import { NavLink } from 'react-router-dom';

import '../style/navbar.css';
import { CartContent } from './CartContent';
import { useContext, useEffect, useRef,useState } from 'react';
import { CartContext, CartContextType } from '../contexts/CartContext';

export interface MenuProps {
    menu: (event: React.MouseEvent<HTMLButtonElement>) => void;
    buttonRef: React.RefObject<HTMLButtonElement>;
	};

	export const Navbar: React.FC<MenuProps> = ({ menu,buttonRef }) => {
    const { total } = useContext<CartContextType>(CartContext);
	const openCartRef = useRef<HTMLDivElement | null>(null);
	const sizeUlRef = useRef<HTMLUListElement | null>(null);
	const [openViewCart,setOpenViewCart] = useState<number>(0);
	const [sizeUl,setSizeUl] = useState<number>(0);
  const [empty,setEmpty]=useState<boolean>(false);

// Observer pour détecter les changements dynamiques dans la taille de <ul>
useEffect(() => {
    const updateSize = () => {
      if (sizeUlRef.current && openCartRef.current) {
        // Récupérer la hauteur du contenu
        const contentHeight = sizeUlRef.current.clientHeight / 16; // clientHeight (en rem)

        // Ajouter le padding manuellement (haut + bas)
        const computedStyles = getComputedStyle(sizeUlRef.current);
        const paddingTop = parseFloat(computedStyles.marginTop) / 16; // Convertir en rem
        const paddingBottom = parseFloat(computedStyles.marginBottom) / 16; // Convertir en rem

        const newSize = contentHeight + paddingTop + paddingBottom; // Taille totale

        setSizeUl(newSize); // Mettre à jour la taille réelle

        // Si le panier est ouvert, appliquer immédiatement la hauteur
        if (openViewCart === 1) {
          openCartRef.current.style.height = `${newSize}rem`;
        }
      }
    };

    // Observer les changements de taille de <ul>
    const observer = new ResizeObserver(() => {
      updateSize();
    });

    if (sizeUlRef.current) {
      observer.observe(sizeUlRef.current);
      updateSize(); // Initialiser la taille au montage
    }

    return () => {
      if (sizeUlRef.current) {
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
        observer.unobserve(sizeUlRef.current);
      }
    };
  }, [openViewCart]);

  useEffect(() => {
if(total===0){
  setEmpty(false)
}else{setEmpty(true)}
  }, [total]);
  // Synchroniser la hauteur du panier avec son état initial
  useEffect(() => {
    if (openCartRef.current) {
      openCartRef.current.style.height = '0'; // Assurez-vous qu'il démarre fermé
    }
  }, []); // Exécuter une seule fois au chargement

  const openCart = () => {
    if (openCartRef.current) {
      if (openViewCart === 0) {
        setOpenViewCart(1);
        openCartRef.current.style.height = `${sizeUl}rem`; // Ouvrir le panier
      } else {
        setOpenViewCart(0);
        openCartRef.current.style.height = '0'; // Fermer le panier
      }
    }
  };

	return <>
		<header className='navbar'>
		<button
                ref={buttonRef}
                className='show'
                onClick={menu}
                aria-label='Main Menu'
            >
			<svg width='2.5rem' height='2.5rem' viewBox='0 0 100 100'>
				<path className='line line1' d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058' />
				<path className='line line2' d='M 20,50 H 80' />
				<path className='line line3' d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942' />
			</svg>
			</button>
	<NavLink to='./'><picture className='hidden'><img src='../../asset/pictures/logo.jpg' alt='lien vers l&apos;Accueil' title='accueil' /></picture></NavLink>
	<ul>
		<li className='show'><NavLink to='./'><img src='../../asset/pictures/home.png' alt='aller sur la page d&apos;accueil' title='Page d&apos;accueil' /></NavLink></li>
		<li><img src='../../asset/pictures/account.png' alt='Se connecter' title='Connexion' /></li>
		<li><NavLink to='contact'><img src='../../asset/pictures/contact.png' alt='Nous contacter' title='Contact' /></NavLink></li>
		<li onClick={openCart} style={!empty ? {} : { background: '#ff0000' } }><img src='../../asset/pictures/cart.png' alt='Ouvrir le panier' title='panier' /></li>
	</ul>
	</header>
	<div className='cart'  ref={openCartRef}>
		<CartContent pic={false} sizeUlRef={sizeUlRef} />
	</div>
	</>;
};
