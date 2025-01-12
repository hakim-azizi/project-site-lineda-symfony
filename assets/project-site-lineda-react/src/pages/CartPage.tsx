import React from 'react';
import { CartContent } from '../component/CartContent';

export const CartPage: React.FC = () => {
	return (
		<>
			<header>
				<h1 className='center'>Panier</h1>
			</header>
			<main>
				<section>
					<CartContent pic={true}/>
				</section>
			</main>
		</>
	);
};


