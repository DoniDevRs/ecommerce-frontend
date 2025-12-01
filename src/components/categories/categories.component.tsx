import { useEffect, useState } from "react";
import axios from "axios";

//Utilities
import Category from "../../types/category.type";
import env from "../../config/env.config";

//Styles
import "./categories.styles.scss";

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    const fetchCategories = async () => {
        try {
            const {data} = await axios.get(`${env.apiUrl}/api/category`);

            setCategories(data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }

    console.log("Categories:", {categories});

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="categories-container">
            <div className="categories-content">

            </div>

        </div>
    )
}

export default Categories;