import React, { useContext } from 'react';
import { ProductContext,ItemProps,CategoryProps } from '../contexts/ProductProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { Item } from './Item';
import { CategoryItems } from '../component/CategoryItems';
import { filterarticle } from '../component/LibraryOfFunctions';

export const Category: React.FC = () => {
	const context = useContext(ProductContext);
	const location = useLocation().pathname;
	const redirect=useNavigate();
	const verif = location.split('/').filter((e) => e);

		const navigate = useNavigate();

			if (!context) {
				return <p>Chargement des données...</p>;
		}

		const { content, isLoading, error } = context;

		if(error) return <p className='red-color'>Une Erreur c'est produite lors du chargement des données</p>

  if (isLoading || !content.items.length)  return <p>Chargement des données...</p>;
  
   // Récupération des données
  const articles: ItemProps[] = content.items;
  const category: CategoryProps[] = content.category
  const subCategory : CategoryProps[] = content.subCategory;



  

    const filteredCategory = category.filter(
      (cat) => cat.name && cat.name.toLowerCase() === verif[0]
    );

	const filteredSubCategory = subCategory.filter(
		(subCat) => subCat.category && subCat.category.toLowerCase() === verif[0]
	  );
  
    if (filteredCategory.length === 0) {
      // Rediriger vers la page 404 si aucune categorie n'est trouvé
			navigate('/404');
			return null; 
	}
	

	if(verif.length===1){
			return filteredCategory[0].name ? <CategoryItems category={filteredCategory} arraySubCategory={filteredSubCategory} articles={filterarticle(articles,filteredCategory[0].name)} subcategorySelection = {true} /> : null;
		}
		else if(verif.length===2 ){
			const filteredsubCategory = subCategory.filter(
				(sub) => sub.category && sub.category.toLowerCase() === verif[0] && sub.name && sub.name.toLowerCase() === verif[1]
			);

			if (filteredsubCategory.length === 0) {
				// Rediriger vers la page 404 si aucune categorie n'est trouvé
      navigate('/404');
      return null; 
    }
	
     return filteredCategory[0].name ? <CategoryItems category={filteredsubCategory} articles={filterarticle(articles,filteredCategory[0].name,filteredsubCategory[0].name)}  subcategorySelection = {false} /> : null;
    }

  else if(verif.length===3){
    const filteredarticle = articles.filter(
      (article) => article.category && article.category.toLowerCase() === verif[0] && article.subcategory && article.subcategory.toLowerCase() === verif[1] && article.name && article.name.toLowerCase() === verif[2]
    );
  
    if (filteredarticle.length === 0) {
      // Rediriger vers la page 404 si aucune categorie n'est trouvé
				navigate('/404');
				return null; 
			}
			return <><Item articles={articles} /></>

}else{ 
	redirect('404');
		return null; 
	}

}
