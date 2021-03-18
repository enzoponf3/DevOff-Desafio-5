import React from "react"

import { theme, Heading, Stack, Text } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/layout"

import { Pokemon } from "../types"
import PokemonImage from "../pokemonImage"

interface Props {
  pokemon: Pokemon
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <Stack
      marginTop={0}
      px={6}
      py={3}
      height={28}
      bgColor={pokemon.types[0].type.name}
      borderRadius={18}
    >
      <Heading
        fontSize={12}
        textAlign="right"
        fontWeight="extrabold"
        color={theme.colors.blackAlpha[600]}
      >
        #{pokemon.id}
      </Heading>
      <Flex
        position="relative"
        justifyContent="space-between"
        color="white"
        alignContent="flex-end"
      >
        <Stack position="relative" top={-4} marginTop={0}>
          <Heading
            color={theme.colors.gray[100]}
            fontSize={12}
            as="h3"
            textTransform="capitalize"
          >
            {pokemon.name}
          </Heading>
          {pokemon.types.map((type) => (
            <Text
              key={pokemon.id}
              textTransform="capitalize"
              mt={1}
              fontSize={8}
              width="fit-content"
              px={3}
              py={0.2}
              bgColor="whiteAlpha.500"
              borderRadius={12}
              color={theme.colors.gray[800]}
            >
              {type.type.name}
            </Text>
          ))}
        </Stack>
        <PokemonImage
          pokemonId={parseInt(pokemon.id)}
          alt={pokemon.name}
        ></PokemonImage>
      </Flex>
    </Stack>
  )
}

export default PokemonCard
