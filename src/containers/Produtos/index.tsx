import Produto from '../../components/Produto'
import { useGetJogosQuery } from '../../services/api'

import * as S from './styles'

export const Produtos = () => {
  // data e loading são recursos do toolKit reduz query
  // no data temos a resposta da API, sendo ele renomeado para jogos
  const { data: jogos, isLoading } = useGetJogosQuery()

  if (isLoading) return <h2>Carregando..</h2>

  return (
    <>
      <S.Produtos>
        {jogos?.map((game) => (
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
