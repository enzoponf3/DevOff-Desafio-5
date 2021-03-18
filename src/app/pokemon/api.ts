import { Pokemon } from "./types"

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
const ITEMS_PER_PAGE = 10

export default {
  list: (page = 1): Promise<Pokemon[]> => {
    return Promise.all(
      new Array(ITEMS_PER_PAGE + 1)
        .fill(true)
        .map((_, index) => index + (page - 1) * ITEMS_PER_PAGE)
        .slice(1)
        .map((id) => fetch(BASE_URL + id).then((res) => res.json()))
    )
  },
}
