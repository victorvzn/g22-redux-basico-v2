import { useDispatch } from "react-redux"

import { addToCart } from "../store/cart/slice"

const ProductList = ({ products }) => {
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    console.log(product)
    dispatch(addToCart(product))
  }

  return (
    <div>
      <h3>Product List</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
        {products.map(product => {
          return (
            <button
              key={product.id}
              onClick={() => handleAddToCart(product)}
            >
              {product.title}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ProductList