import { ItemProps } from '../contexts/ProductProvider';
import { NavLink } from 'react-router-dom';
import '../style/items.css';



export const Items: React.FC<ItemProps> = ({ name,picture,price,url }) => {
    return <>
    <figure><figcaption>{name}<br /><span className='red-color'>{`${price}`} &euro;</span></figcaption><NavLink to={`../../${url}`}><img src={`../../${picture}`} alt='' /></NavLink></figure>
	</>;
};
