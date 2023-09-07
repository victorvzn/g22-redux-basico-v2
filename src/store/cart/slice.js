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
      // 
      return [...state, newProduct]
    },
    removeFromCart: (state, action) => {
      const productId = action.payload // productId

      return state.filter(product => product.id !== productId)
    },
    // changeQtyProductCart
  }
})

export default cartSlice.reducer // Exportando al estado inicial y a los reducers del slice

export const { addToCart, removeFromCart } = cartSlice.actions