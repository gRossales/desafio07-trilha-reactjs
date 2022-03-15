import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors:{
    gray: {
      "700": "#47585B",
      "500": "#999999",
      "300": "#99999980",
      "100": "#DADADA",
      "50": "#F5F8FA",
    }, 
    yellow: {
      "500": "#FFBA08",
      "300": "#FFBA0880"
    }
  },
  fonts:{
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.700'
      }
    }
  }
})