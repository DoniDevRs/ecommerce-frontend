import { FunctionComponent } from "react"
import Category from "../../types/category.type"

//Styles
import { CategoryContainer, CategoryTitle, ProductsContainer } from "./category-overview.styles";

interface CategoryOverviewProps {
    category: Category
}

const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({ category }) => {
    return (
        <CategoryContainer> 
            <CategoryTitle> {category.displayName} </CategoryTitle>
            <ProductsContainer>
                {/* Render products here */}
            </ProductsContainer>
        </CategoryContainer>
    )
}

export default CategoryOverview;