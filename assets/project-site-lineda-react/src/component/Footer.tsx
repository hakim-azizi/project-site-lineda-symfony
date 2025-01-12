import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/footer.css';


export const Footer: React.FC = () => {
	return <>
		<footer>
			<NavLink to='https://web-developer-nantes.com'>Design by web developer Hakim AZIZI</NavLink>
		</footer>
	</>;
};
