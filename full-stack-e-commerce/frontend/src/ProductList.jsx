import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"

import { ProductCard } from "./ProductCard"

import "./ProductList.css"

function useCategories() {
    const { data } = useQuery("get-categories", () => {
        return fetch("http://localhost:3000/categories").then((res) =>
            res.json()
        )
    })

    return data
}

export function ProductList(props) {
    const navigate = useNavigate()
    const categories = useCategories()

    const items = props.products?.map((product) => {
        return (
            <ProductCard
                key={`product-cart-${product.id}`}
                handleClick={() => {
                    navigate(`/products/${product.id}`)
                }}
                {...product}
            />
        )
    })

    return (
        <div className="ProductList">
            <div className="select-container">
                <label htmlFor="product-category-selector">
                    Select a category:
                </label>
                <select
                    id="product-category-selector"
                    value={props.selectedCategory}
                    onChange={(e) => props.setSelectedCategory(e.target.value)}
                >
                    <option value={""}></option>
                    {categories?.map((category) => {
                        return (
                            <option
                                key={`product-list-category-${category}`}
                                value={category}
                            >
                                {category}
                            </option>
                        )
                    })}
                </select>
            </div>
            <div className="grid-container">{items}</div>
        </div>
    )
}
