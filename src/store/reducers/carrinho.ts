import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'

type CarrinhoState = {
  itens: Game[]
}

const InitialState: CarrinhoState = {
  itens: []
}

// Fatias de código que podem ser reutilizados (Funcionalidades)
// Nesse arquivo vamos ter os actions types e a função que irá criar o reducer
const carrinhoSlice = createSlice({
  // Nome da fatia
  name: 'carrinho',

  // Estado inicial
  initialState: InitialState,
  // Construção de toda a parte de mudança de estado
  reducers: {
    // Função adicionar recebe o estado(InitialState), no primeiro momento, depois vai ser o itens[](Estado atual)
    //Game é o que vai estar no Payload
    adicionar: (state, action: PayloadAction<Game>) => {
      // Armazenamento do Game em uma váriavel
      const jogo = action.payload

      if (state.itens.find((game) => game.id === jogo.id)) {
        // Se o jogo já está no carrinho, aumenta a quantidade
        alert('Item já está no carrinho!')
      } else {
        // Se o jogo não está no carrinho, adiciona
        state.itens.push(jogo)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions

// Aqui esta importando por default o reducer do slice, isso que será importado no store
export default carrinhoSlice.reducer
