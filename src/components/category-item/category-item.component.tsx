import { FunctionComponent } from "react";

import Category from "../../types/category.type";

import "./category-item.styles.scss";

interface CategoryItemProps {
    category: Category;
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ( { category }) => {
    return (
        <div className="category-item-container"
            style={ { backgroundImage: `url(${category.imageUrl})` } }
        >
            <div className="category-name-container">
                <p>{category.displayName}</p>
                <p>Explorar</p>

            </div>
        </div>
    )

}

export default CategoryItem;