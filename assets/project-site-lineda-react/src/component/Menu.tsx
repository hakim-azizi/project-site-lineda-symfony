import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductProvider';
import { NavLink } from 'react-router-dom';

import '../style/menu.css';

export type ElementProps = {
	menuRef: React.RefObject<HTMLDivElement>;
	};

	export const Menu:React.FC<ElementProps> = ( { menuRef } ) =>{

		const context = useContext(ProductContext);
		
		if (!context) {
		  return <p>Chargement des données...</p>;
		}
const { content } = context;		
return <>
<header 
className='menu'
ref={menuRef}>

<ul> 
	<li><NavLink to='search'>Recherche</NavLink></li>
	<li><NavLink to='best-seller'>Top-vente</NavLink></li>
	<li><NavLink to='list'>Catalogue</NavLink></li>
		     {content.category.map((cat) => (
	<li key={cat.id}>{cat.name && <NavLink to={cat.name.toLowerCase()}>{cat.name}</NavLink> }
		<ul>
		{content.subCategory.map((sub) => (
			cat.name && sub.name && sub.category===cat.name && (<li key={sub.id}><NavLink to={`${cat.name.toLowerCase()}/${sub.name.toLowerCase()}`}>{sub.name}</NavLink></li>)
		))}
		</ul>
	</li>
	      ))}
	<li>En savoir plus
		<ul>
		{content.keywords.map((key) => (
			<li key={key.name}><NavLink to={`learn-more/${key.name}`}>{key.name}</NavLink></li>
		))}
		</ul>
	</li>
	<li><NavLink to='condition-of-sale' target='_blank'>Condition de vente</NavLink></li>
</ul>
</header>
</>;
};
