import { ThemeProvider} from 'styled-components'
import { defaultTheme } from './Style/Theme/Default'
import {Router} from '../Router'
import {BrowserRouter} from 'react-router-dom'
import { GlobalStyle } from './Style/GlobalStyle/Global'




function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
      <Router/>
      <GlobalStyle/>
      </ThemeProvider> 
    </BrowserRouter>

  )
}

export default App
