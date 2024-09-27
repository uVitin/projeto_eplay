import Tag from '../Tag'
import { ButtonLink } from '../Button/styles'

import { useGetFeaturedGameQuery } from '../../services/api'

import { Imagem, Precos, Titulo } from './styles'
import { parseToBrl } from '../../utils'
import Loader from '../Loader'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{parseToBrl(game.prices.old)}</span> <br />
            por apenas {parseToBrl(game.prices.current)}
          </Precos>
        </div>
        <ButtonLink
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta!"
        >
          Aproveitar
        </ButtonLink>
      </div>
    </Imagem>
  )
}

export default Banner
