// Criação da função quer vasi criar uma versão personalizada da renderização dos components em testes
import { PreloadedState } from '@reduxjs/toolkit'
import { RenderOptions, render } from '@testing-library/react'
//tipo das opções que você pode passar para a função render do React Testing Library (@testing-library/react).

import { AppStore, RootState, ConfiguraStore } from '../store'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

//definição de um tipo para usar que usa o OMIT para não passar a propriedade queries
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

// Função que vai renderizar o component no contexto do redux
export function renderizarComProvider(
  elemento: React.ReactElement, //componente react que vai renderizar
  {
    preloadedState = {}, //estado inicial da stores
    store = ConfiguraStore(preloadedState),
    ...opcoesAdicionais
  }: ExtendedRenderOptions = {}
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Encapsulador({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return {
    store,
    ...render(elemento, { wrapper: Encapsulador, ...opcoesAdicionais })
  }
}
