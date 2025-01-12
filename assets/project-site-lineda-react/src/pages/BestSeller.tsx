import React, { useContext } from 'react';
import { ProductContext,ItemProps } from '../contexts/ProductProvider';

import { Items } from '../component/Items';

export const BestSeller: React.FC = () => {
    const context = useContext(ProductContext);
    if (!context) {
        return <p>Chargement des données...</p>;
}

const { content, isLoading, error } = context;

if(error) return <p className='red-color'>Une Erreur c'est produite lors du chargement des données</p>

if (isLoading || !content.best_seller.length)  return <p>Chargement des données...</p>;

	
const articles:ItemProps[]=content.best_seller;



    return <>
		<header>
			<h1 className='center'>Top vente</h1>
			</header>
		<main>
				<section>
					<h2>Nos meilleurs vente</h2>
					<p>Retrouvez le top 10 des meilleurs vente :</p>
                    <aside>
					{articles.map((article) => (
                            <Items
                                key={article.name}
                                name={article.name}
                                picture={article.picture}
                                price={article.price}
                                url={article.url}
                            />
                        ))}
							</aside>
				</section>
		</main>
			
    </>;
}
