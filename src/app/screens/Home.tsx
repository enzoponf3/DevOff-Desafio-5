import * as React from "react"
import { SimpleGrid } from "@chakra-ui/layout"
import { Skeleton, Spinner } from "@chakra-ui/react"
import InfiniteScroll from "react-infinite-scroll-component"

import api from "app/pokemon/api"
import PokemonCard from "app/pokemon/pokemonCard"
import { Pokemon } from "app/pokemon/types"

const HomeScreen: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([])
  const [status, setStatus] = React.useState<
    "pending" | "resolved" | "rejected"
  >("pending")
  const [page, setPage] = React.useState<number>(1)

  React.useEffect(() => {
    api.list(page).then((pokemons) => {
      setPokemons(pokemons)
      setStatus("resolved")
      setPage(page + 1)
    })
  }, [])

  const loadMore = async () => {
    setPage((prevPage) => prevPage + 1)
    await api.list(page).then((pkmns) => {
      setPokemons([...pokemons, ...pkmns])
    })
  }

  if (status === "pending") {
    return (
      <SimpleGrid columns={2} gap={3}>
        <Skeleton
          speed={3}
          borderRadius={12}
          height={28}
          startColor="fire.400"
          endColor="teal.400"
        ></Skeleton>
        <Skeleton
          speed={3}
          borderRadius={12}
          height={28}
          startColor="fire.400"
          endColor="teal.400"
        ></Skeleton>
        <Skeleton
          speed={3}
          borderRadius={12}
          height={28}
          startColor="fire.400"
          endColor="teal.400"
        ></Skeleton>
      </SimpleGrid>
    )
  }
  return (
    <InfiniteScroll
      hasMore={true}
      loader={<Spinner color="green.400" thickness="6px" speed="1.5s" />}
      dataLength={pokemons.length}
      next={loadMore}
    >
      <SimpleGrid columns={2} gap={3}>
        {pokemons?.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  )
}

export default HomeScreen
