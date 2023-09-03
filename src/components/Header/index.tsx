import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import cesta from '../../assets/cesta.png'
import * as S from './styles'
import { paraReal } from '../Produto'

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const itensFavoritos = useSelector(
    (state: RootReducer) => state.favorito.itens
  )

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensFavoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
