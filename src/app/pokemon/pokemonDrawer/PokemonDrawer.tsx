import * as React from "react"
import { Pokemon } from "app/pokemon/types"
import {
  Flex,
  Progress,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import PokemonImage from "app/pokemon/pokemonImage"

interface Props {
  pokemon: Pokemon
  close: () => void
}

const PokemonDrawer: React.FC<Props> = ({ pokemon, close }) => {
  return (
    <motion.div
      style={{
        position: "fixed",
        zIndex: 1,
        height: "100vh",
        width: "full",
        top: 0,
        left: 0,
      }}
      initial={{ opacity: 1, x: 0 }}
      exit={{ x: -543, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        animate={{ scale: [0, 1] }}
        transition={{ duration: 0.3 }}
        style={{ height: "50vh", width: "100vw" }}
      >
        <Flex
          flexDirection="column"
          bgColor={pokemon.types[0].type.name}
          width="100%"
          height="100%"
          color="whitesmoke"
          justifyContent="space-between"
        >
          <Stack paddingTop={10} px={8} height="30%" width="100%">
            <Text
              fontSize="x-large"
              fontWeight="bold"
              onClick={close}
              align="left"
            >
              {"\u{1f860}"}
            </Text>
            <Flex justifyContent="space-between">
              <Flex flexDirection="column">
                <Text
                  fontWeight="extrabold"
                  align="left"
                  fontSize="xx-large"
                  textTransform="capitalize"
                  letterSpacing="widest"
                  my="3"
                >
                  {pokemon.name}
                </Text>
                <Flex>
                  {pokemon.types.map((type) => (
                    <Text
                      bgColor="whiteAlpha.300"
                      mr="3"
                      px="4"
                      py="2"
                      borderRadius="24"
                      textTransform="capitalize"
                      key={pokemon.id}
                    >
                      {type.type.name}
                    </Text>
                  ))}
                </Flex>
              </Flex>
              <Flex py="12" fontWeight="bold">
                #{pokemon.id}
              </Flex>
            </Flex>
          </Stack>
          <Stack position="relative" width="100%" height="55%">
            <motion.div
              style={{
                position: "relative",
                height: "100%",
                width: "auto",
                left: "50%",
                zIndex: 1,
              }}
              animate={{
                y: [-50, 100, 0],
                x: [200, -300, -120],
                opacity: [0, 0.5, 1],
                scale: [0.5, 1.2, 1],
              }}
              transition={{ duration: 1 }}
              exit={{ x: [25, -400] }}
            >
              <PokemonImage
                pokemonId={parseInt(pokemon.id)}
                alt={pokemon.name}
              ></PokemonImage>
            </motion.div>
          </Stack>
        </Flex>
      </motion.div>
      <motion.div
        animate={{ y: [500, 0] }}
        transition={{ duration: 0.4 }}
        style={{
          height: "60vh",
          width: "100%",
          backgroundColor: "whitesmoke",
          borderRadius: "32px",
          position: "absolute",
          top: "45%",
        }}
      >
        <Tabs
          isFitted
          position="relative"
          zIndex={3}
          marginY={5}
          variant="line"
        >
          <TabList>
            <Tab
              mt={5}
              px={0}
              pb={5}
              fontWeight="bold"
              fontSize="sm"
              _selected={{
                color: "black",
                borderBottom: "solid 1px blue",
              }}
              _focus={{ border: "none" }}
            >
              About
            </Tab>
            <Tab
              px={0}
              pb={5}
              mt={5}
              fontWeight="bold"
              fontSize="sm"
              _selected={{
                color: "black",
                borderBottom: "solid 1px blue",
              }}
              _focus={{ border: "none" }}
            >
              Base Stats
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stack mt="1rem">
                <Stack
                  width="100%"
                  display="flex"
                  direction="row"
                  alignItems="center"
                  mb="1rem"
                >
                  <Text color="blackAlpha.600" fontWeight="bold" width="25%">
                    Height
                  </Text>
                  <Text
                    fontWeight="medium"
                    textAlign="start"
                    width="75%"
                    pl="10%"
                  >
                    213
                  </Text>
                </Stack>
                <Stack
                  width="100%"
                  display="flex"
                  direction="row"
                  alignItems="center"
                  mb="1rem"
                >
                  <Text color="blackAlpha.600" fontWeight="bold" width="25%">
                    Weight
                  </Text>
                  <Text
                    fontWeight="medium"
                    textAlign="start"
                    width="75%"
                    pl="10%"
                  >
                    {pokemon.weight}
                  </Text>
                </Stack>
                <Stack
                  width="100%"
                  display="flex"
                  direction="row"
                  alignItems="center"
                  mb="1rem"
                >
                  <Text color="blackAlpha.600" fontWeight="bold" width="25%">
                    Abilities
                  </Text>
                  <Flex
                    textTransform="capitalize"
                    textAlign="start"
                    width="75%"
                    pl="10%"
                    fontWeight="medium"
                  >
                    {pokemon.abilities.map((a) => (
                      <p key={a}>{a.ability.name},</p>
                    ))}
                  </Flex>
                </Stack>
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack mt="1rem">
                {pokemon.stats.map((s) => (
                  <Stack
                    width="100%"
                    display="flex"
                    direction="row"
                    alignItems="center"
                    key={s}
                  >
                    <Text
                      textTransform="capitalize"
                      textAlign="start"
                      color="blackAlpha.600"
                      fontWeight="bold"
                      width="25%"
                    >
                      {s.stat.name}
                    </Text>
                    <Text
                      fontWeight="medium"
                      textAlign="start"
                      width="15%"
                      pl="5%"
                    >
                      {s.base_stat}
                    </Text>
                    <Progress
                      colorScheme={s.base_stat < 50 ? "red" : "green"}
                      width="xs"
                      height="3px"
                      min={0}
                      max={150}
                      value={s.base_stat}
                    />
                  </Stack>
                ))}
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </motion.div>
    </motion.div>
  )
}

export default PokemonDrawer
