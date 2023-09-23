import { Router } from "./router/Router"
import { CartProvider } from "./context/cartContext"

function App() {
  return (

    <CartProvider>
      <Router />
    </CartProvider> 

  )
}

export default App
