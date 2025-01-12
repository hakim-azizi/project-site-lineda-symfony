import React from 'react';
import { Items } from './Items';
import { CategoryProps, ItemProps, SubCategoryProps } from '../contexts/ProductProvider';



type CategoryItemsProps = {
    category: CategoryProps[];
    articles: ItemProps[];
    subcategorySelection: boolean;
    arraySubCategory?:SubCategoryProps[];
};

export const CategoryItems: React.FC<CategoryItemsProps> = ({ category,arraySubCategory, articles,subcategorySelection }) => {
    
    return (<>
        {subcategorySelection && arraySubCategory && (
            <select>
                <option value=''>Sélectionnez une sous-categorie</option>
           {arraySubCategory.map((arraySubCat) => (
            <option key={arraySubCat.name} value={arraySubCat.name}>{arraySubCat.name}</option>
))}
        </select>)}
            <header>                
                <h1 className='center'>{category[0].name}</h1>
            </header>
            <main>
                <section>
                    <h2>{category[0].name}</h2>
                    <article>
                        <p>{category[0].description}</p>
                    </article>
                    <aside className='home'>
                        {articles.length===0 ? <p>Pour le moment il n'ya pas d'articles dans cette categorie</p> : (articles.map((article) => (
                            <Items
                                key={article.name}
                                name={article.name}
                                picture={article.picture}
                                price={article.price}
                                url={article.url}
                            />
                        )))}
                    </aside>
                </section>
            </main>
     </>   
    );
};
