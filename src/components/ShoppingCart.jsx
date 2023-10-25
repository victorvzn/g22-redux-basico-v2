import { useSelector, useDispatch } from "react-redux"

import { removeFromCart } from "../store/cart/slice"

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId))
  }

  const total = cart.reduce((acc, product) => {
    const qty = product.quantity
    const price = product.price
    const subtotal = qty * price
    return acc + subtotal
  }, 0)

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
              {product.title} - S/ {product.price} (qty: {product.quantity})
            </button>
          )
        })}
      </div>
      <div style={{ paddingTop: '10px' }}>
        <strong>TOTAL:</strong> S/ {total}
      </div>
    </div>
  )
}

export default ShoppingCart