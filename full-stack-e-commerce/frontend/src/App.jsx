import { useState } from "react"
import { Routes, Route, useParams, useNavigate } from "react-router-dom"
import { useQuery } from "react-query"

import { storeName, storeDescription } from "./assets/store-info.json"

import { Header } from "./Header"
import { HeaderProfile } from "./HeaderProfile"
import { ProductList } from "./ProductList"
import { ProductCard } from "./ProductCard"

import "./App.css"

function useProducts(selectedCategory) {
    const { data } = useQuery(
        ["get-products-by-category", selectedCategory],
        () => {
            return fetch(
                `http://localhost:3000/products?category=${selectedCategory}`
            ).then((res) => res.json())
        }
    )

    return data
}

export function App() {
    const [selectedCategory, setSelectedCategory] = useState("")

    const products = useProducts(selectedCategory)

    return (
        <div className="App">
            <Header storeName={storeName} storeDescription={storeDescription}>
                <HeaderProfile />
            </Header>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProductList
                            products={products}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                    }
                />
                <Route
                    path="products/:id"
                    element={<SelectedProductView products={products} />}
                />
            </Routes>
        </div>
    )
}

function SelectedProductView(props) {
    const params = useParams()
    const navigate = useNavigate()

    const product = props.products?.find((p) => p.id === Number(params.id))

    return <ProductCard handleClick={() => navigate("/")} {...product} />
}
