import React from "react"
import ReactDOM from "react-dom"
import { ChakraProvider } from "@chakra-ui/react"

import Layout from "app/components/layout"
import HomeScreen from "app/screens/Home"

import "./index.css"
import theme from "theme"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <HomeScreen></HomeScreen>
      </Layout>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
