import { useSelector, useDispatch } from "react-redux"

import { removeFromCart } from "../store/cart/slice"

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId))
  }

  return (
    <div>
      <h3>ShoppingCart</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* {JSON.stringify(cart)} */}
        {cart.map(product => {
          return (
            <button
              key={product.id}
              style={{ backgroundColor: 'blue'}}
              onClick={() => handleRemoveFromCart(product.id)}
            >
              {product.title} - S/ {product.price}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ShoppingCart