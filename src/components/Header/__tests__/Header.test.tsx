import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '..'

import { Provider } from 'react-redux'
import { debug } from 'console'
import { renderizarComProvider } from '../../../utils/tests'
import { Plataformas, Titulo } from '../../Produto/styles'
describe('Teste para o componente header', () => {
  test('Deve Renderizar corretamento', () => {
    ///Sempre que trabalha com o Redux além de fazer o Render, ele deve ser feito com Provider
    // render(<Header itensNoCarrinho={[]} />)
    renderizarComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve renderizar com 2 itens no carrinho', () => {
    renderizarComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows'],
              preco: 150.99,
              precoAntigo: 199.9,
              titulo: 'Elden Rings'
            },
            {
              id: 2,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows', 'PS5', ''],
              preco: 199.99,
              precoAntigo: 299.9,
              titulo: 'Hogwarts Legacy'
            }
          ]
        }
      }
    })
    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
