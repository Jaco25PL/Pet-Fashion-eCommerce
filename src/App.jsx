import './App.css'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'
import { NavBar } from './components/navBar/navBar'

function App() {

  return (
    <div className='container'>
      <NavBar/>
      <ItemListContainer greeting={"Item List Container"}/>
    </div>
    )
}

export default App
