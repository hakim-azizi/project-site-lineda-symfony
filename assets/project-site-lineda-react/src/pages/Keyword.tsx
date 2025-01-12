
import React, { useContext } from 'react';
import { ProductContext,ItemProps } from '../contexts/ProductProvider';

import { useLocation,useNavigate } from 'react-router-dom';

export const Keyword : React.FC = () => {

    const navigate = useNavigate();
    
    const context=useContext(ProductContext);
    const location = useLocation().pathname;
    const keyword:string=location.replace('/learn-more/','');

    if (!context) {
        return <p>Chargement des données...</p>;
}

const { content, isLoading, error } = context;

if(error) return <p className='red-color'>Une Erreur c'est produite lors du chargement des données</p>

if (isLoading || !content.items.length)  return <p>Chargement des données...</p>;


const keywords: ItemProps[] = content.keywords;

const filteredKeywords = keywords.filter(
    (keywords) => keywords.name && keywords.name.toLowerCase() === keyword
  );

  if (filteredKeywords.length === 0) {
    navigate('/404');
    return null;
  }

const key=filteredKeywords[0];

    


    return <>
                    <header>
                        <h1 className='center'>{key.name}</h1>
                    </header>
                    <main>
                        <section>
                        <h2>{key.name}</h2>
				<article>
					<p>
					{key.description}
					</p>
				</article>
                {/* <aside className='home'>
					{articles.map((article)=><Items key={article.name} name={article.name} picture={article.picture} price={article.price} url={article.url} />)}
                </aside> */}
            </section>
        </main>
</>;
}
