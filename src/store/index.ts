import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import api from '../services/api'

// store -> é criada uma store com o reducer para
export const store = configureStore({
  // Root Reducer -> dentro dele temos todos os reducers
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  // middleware -> é adicionado o middleware da api(meio de campo do dispath e da store)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

// Definicição de tipo do estado global

export type RootReducer = ReturnType<typeof store.getState>
