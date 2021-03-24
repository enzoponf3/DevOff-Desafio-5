import React from "react"
import { Img } from "@chakra-ui/image"

interface Props {
  pokemonId: number
  alt: string
}

const PokemonImage: React.FC<Props> = ({ pokemonId, alt }) => {
  return (
    <Img
      height="100%"
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
      alt={alt}
      objectFit="cover"
      loading="lazy"
    ></Img>
  )
}

export default PokemonImage
