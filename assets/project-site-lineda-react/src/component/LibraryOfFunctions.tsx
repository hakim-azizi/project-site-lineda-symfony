import { ItemProps } from "../contexts/ProductProvider"; 

export const Verif = ()=>{
  const rand: string = Math.random().toFixed(20);
  const value: string = Date.now() + rand.replace('0.','');
  return {value};
};

export const filterarticle = (items:ItemProps[] & ItemProps[],cat:string,subcat?:string) => {
	return items.filter((art) =>
	  !subcat
		? art.category=== cat
		: art.category === cat &&
		  art.subcategory === subcat
	);
  };