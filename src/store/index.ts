import {
  combineReducers,
  configureStore,
  PreloadedState
} from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import api from '../services/api'

// store -> é criada uma store com o reducer para
// export const store = configureStore({
//   Root Reducer -> dentro dele temos todos os reducers
//   reducer: {
//     carrinho: carrinhoReducer,
//     [api.reducerPath]: api.reducer
//   },
//   middleware -> é adicionado o middleware da api(meio de campo do dispath e da store)
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware)
// })

//O Configure Store foi comentado pois para o jest não poderá ser utilizado para exportação

const RootReducer = combineReducers({
  carrinho: carrinhoReducer,
  [api.reducerPath]: api.reducer
})

export function ConfiguraStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState
  })
}

// Definicição de tipo do estado global

export type RootState = ReturnType<typeof RootReducer>

// Criar um tipo que vai representar o estado da aplicação
export type AppStore = ReturnType<typeof ConfiguraStore>
