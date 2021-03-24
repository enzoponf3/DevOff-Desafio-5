import React from "react"
import { Stack, Heading, Flex } from "@chakra-ui/layout"

const Layout: React.FC = ({ children }) => {
  return (
    <Stack padding={6}>
      <Heading
        marginY={22}
        as="h1"
        fontSize="2xl"
        fontWeight="bold"
        textAlign="left"
      >
        Pokedex
      </Heading>
      {children}
    </Stack>
  )
}
export default Layout
