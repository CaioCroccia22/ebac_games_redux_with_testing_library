import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

// store -> é criada uma store com o reducer para
export const store = configureStore({
  // Root Reducer -> dentro dele temos todos os reducers
  reducer: {
    carrinho: carrinhoReducer
  }
})

// Definicição de tipo do estado global

export type RootReducer = ReturnType<typeof store.getState>
