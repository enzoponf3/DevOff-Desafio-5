import React from "react"
import { Img } from "@chakra-ui/image"

interface Props {
  pokemonId: number
  alt: string
}

const PokemonImage: React.FC<Props> = ({ pokemonId, alt }) => {
  return (
    <Img
      position="absolute"
      right={-6}
      top={-2}
      height={20}
      width={20}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
      alt={alt}
      objectFit="cover"
    ></Img>
  )
}

export default PokemonImage
