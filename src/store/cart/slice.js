import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [
    // {id: 1, title: 'product1'},
    // {id: 2, title: 'product2'}
  ],
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload // Producto

      const productInCartIndex = state.findIndex(item => item.id === newProduct.id)

      if (productInCartIndex >= 0) {
        const newState = state.map(product => {
          if (product.id === newProduct.id) {
            console.log({
              quantity: product.quantity + 1
            })
              return {
              ...product,
              quantity: product.quantity + 1
            }
          }

          return product
        })

        return newState
      }

      const newState = [
        ...state,
        {
          ...action.payload, // product
          quantity: 1
        }
      ]

      return newState
    },
    removeFromCart: (state, action) => {
      const productId = action.payload // productId

      return state.filter(product => product.id !== productId)
    },
  }
})

export default cartSlice.reducer // Exportando al estado inicial y a los reducers del slice

export const { addToCart, removeFromCart } = cartSlice.actions