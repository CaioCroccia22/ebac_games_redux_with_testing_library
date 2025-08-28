import Produtos from '..'
import { renderizarComProvider } from '../../../utils/tests'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// Dados fakesd
const mocks = [
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
    categoria: 'Ação',
    imagem: '',
    plataformas: ['Windows', 'PS5', 'Xbox Series'],
    preco: 150.0,
    precoAntigo: 200.0,
    titulo: 'Gotham Knights'
  }
]

// Simulação servidor
const server = setupServer(
  rest.get(
    'http://localhost:4000/produtos',
    (requisicao, resposta, contexto) => {
      return resposta(contexto.json(mocks))
    }
  )
)

describe('Teste para o container produto', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('Deve renderizar corretamente', () => {
    renderizarComProvider(<Produtos />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })
})
