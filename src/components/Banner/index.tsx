import { Imagem, Precos, Titulo } from './styles'

import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import { ButtonLink } from '../Button/styles'
import { Game } from '../../pages/Home'
import { useEffect, useState } from 'react'

import { formataPreco } from '../ProductsList'

import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
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
