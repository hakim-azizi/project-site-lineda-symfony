import React, { useContext } from 'react';
import { CartContext, CartContextType } from '../contexts/CartContext';
import { ItemProps } from '../contexts/ProductProvider';
import '../style/cart-content.css';

export type CartType={
	pic:boolean;
	sizeUlRef?: React.RefObject<HTMLUListElement>;
	}

export const CartContent : React.FC<CartType> = ({pic,sizeUlRef}) => {
	const { cart, removeFromCart, total, selectQuantity, quantityRef } =
	useContext<CartContextType>(CartContext);

	if (cart.length === 0) return <ul className='item' ref={sizeUlRef}><li>Votre panier est vide</li></ul>;

		return (
		<>
		<ul className='item' ref={sizeUlRef}>
		{cart.map((product: ItemProps) => (
			<li key={product.id}>
				{pic && <picture><img src={product.picture} alt={product.name} /></picture>}
					<ul>
					<li><h2>{product.name}</h2></li>
					<li>Prix: <span className='red-color'>{product.price}</span> &euro;</li>
					<li>{product.color || 'Pas de couleur'}</li>
					<li>
					<label>
						Quantité:{' '}
						<select
							ref={quantityRef}
							value={product.quantity} // Mise à jour réactive
							onChange={(e) =>
								selectQuantity({ id:product.id!, quantity: Number(e.target.value) })
							} >
							<option value={product.quantity}>{product.quantity}</option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
							<option value='6'>6</option>
							<option value='7'>7</option>
							<option value='8'>8</option>
							<option value='9'>9</option>
							<option value='10'>10</option>
						</select>
					</label>
					</li>
					<li>Sous-total : <span className='red-color'>{ product.quantity && product.price && product.quantity*product.price}</span> &euro;</li>
					<li><button onClick={() => {product.id && removeFromCart(product.id);
	}}>X</button></li>
		</ul>
		</li>
		))}
			<li><p>Total: <span className='red-color'>{total}</span> &euro;</p></li>
		</ul>
		</>
		)
} 
