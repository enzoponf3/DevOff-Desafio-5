import * as React from "react"

import { theme, Heading, Stack, Text } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/layout"

import { Pokemon } from "../types"
import PokemonImage from "../pokemonImage"
import PokemonDrawer from "../pokemonDrawer"

interface Props {
  pokemon: Pokemon
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const [selected, setSelected] = React.useState<boolean>(false)

  const handleClick = () => {
    console.log("clicked")
    setSelected(true)
  }

  const handleBack = () => {
    console.log("Close")
    setSelected(false)
  }

  return (
    <Stack
      position="relative"
      marginTop={0}
      px={6}
      py={3}
      height={28}
      bgColor={pokemon.types[0].type.name}
      borderRadius={18}
    >
      {selected && <PokemonDrawer pokemon={pokemon} close={handleBack} />}
      <Stack onClick={handleClick}>
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
        </Flex>
        <Stack position="absolute" right={1} height="5rem" bottom={1}>
          <PokemonImage
            pokemonId={parseInt(pokemon.id)}
            alt={pokemon.name}
          ></PokemonImage>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default PokemonCard
