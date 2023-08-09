import './App.css'
import { Logo } from './components/logos/Logos'
import { NavBar } from './components/navBar/NavBar'
import { ItemListContainer } from './container/itemListContainer/ItemListContainer'

function App() {

  return (
    <div className='container'>
      <NavBar/>
      <ItemListContainer text={"nombre"} about={"descripcion del producto"} price={"$1234"}/>
      <div className='logos'>
        <Logo/>
      </div>
    </div>

    )
}

export default App
