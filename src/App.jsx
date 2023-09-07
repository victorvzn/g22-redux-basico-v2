import { useState } from "react"
import ProductList from "./components/ProductList"
import { useEffect } from "react"
import ShoppingCart from "./components/ShoppingCart"

function App() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const url = 'https://dummyjson.com/products'

    const response = await fetch(url)

    const data = await response.json()

    setProducts(data.products)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <ProductList products={products}  />

      <ShoppingCart />
    </div>
  )
}

export default App
