import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.compnent";
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) =>  
         <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
