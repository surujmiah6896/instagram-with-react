import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const styles = {
  global:(props) =>({
    body:{
      bg:mode("gray.100", "#000")(props),
      color:mode("gray.800","whiteAlpha.900")(props)
    }
  })
}
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config, styles })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)
