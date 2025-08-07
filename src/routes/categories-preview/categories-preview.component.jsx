import { useContext, Fragment } from "react";

import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    // Flatten all products from each category into a single array
    const allProducts = Object.values(categoriesMap).flat();

    return (
        <Fragment>
            {Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview key={title} title={title} products={products} />
                );
            })}
        </Fragment>
    );
};

export default CategoriesPreview;
