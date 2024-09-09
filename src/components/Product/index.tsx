import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ipsa
      esse obcaecati ipsam consequatur, aliquid unde itaque, qui temporibus
      similique, eveniet rerum quo ratione laboriosam saepe culpa labore cum!
      Mollitia.
    </Descricao>
  </Card>
)

export default Product
