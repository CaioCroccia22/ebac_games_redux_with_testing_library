import * as S from './styles'

import { Game } from '../../App'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/index'

const Header = () => {
  // Acessa os dados da store dentro de um componente React
  // Acessa o array de jogos (Game[]) que definiuy lá no InitialState da Slice
  const itens = useSelector((state: RootState) => state.carrinho.itens)

  const valorTotal = itens.reduce((acc: number, item: Game) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Games</h1>
      <div>
        <img src={cesta} />
        <span data-testid="qtd-carrinho">{itens.length} itens</span>
      </div>
    </S.Header>
  )
}

export default Header
