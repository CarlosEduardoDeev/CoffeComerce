import { ThemeProvider} from 'styled-components'
import { defaultTheme } from './Style/Theme/Default'
import {Router} from '../Router'
import {BrowserRouter} from 'react-router-dom'
import { GlobalStyle } from './Style/GlobalStyle/Global'
import { CoffeContextProvider } from './Contexts/CoffeContext'




function App() {
  return (
    <CoffeContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
        <Router/>
        <GlobalStyle/>
        </ThemeProvider> 
      </BrowserRouter>
    </CoffeContextProvider>
  )
}

export default App
