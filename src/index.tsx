import React from "react"
import ReactDOM from "react-dom"
import { ChakraProvider } from "@chakra-ui/react"

import Layout from "app/components/Layout"
import HomeScreen from "app/screens/Home"

import "./index.css"

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			<Layout>
				<HomeScreen></HomeScreen>
			</Layout>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
)