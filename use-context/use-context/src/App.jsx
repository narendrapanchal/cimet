import './App.css'
import AllRoutes from './AllRoutes'
import { CartContextProvider } from './context/CartContext'
import { CurrencyContextProvider } from './context/CurrencyContext'

function App() {

  return (
    <CurrencyContextProvider>

    <CartContextProvider>

    <AllRoutes/>
    </CartContextProvider>
    </CurrencyContextProvider>
  )
}

export default App
