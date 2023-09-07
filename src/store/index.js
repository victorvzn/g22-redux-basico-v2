import { configureStore } from "@reduxjs/toolkit";

// reducer: son funciones que nos ayudan a transformar los estados que creamos. Ej: productos, citas médicas, categorias

import cartReducer from './cart/slice.js'

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})