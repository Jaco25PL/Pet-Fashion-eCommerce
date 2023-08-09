import './App.css'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'
import { NavBar } from './components/navBar/NavBar'

function App() {

  return (
    <div className='container'>
      <NavBar/>
      <ItemListContainer text={"Item List Container"}/>
    </div>

    )
}

export default App
