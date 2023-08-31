import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/navBar/NavBar"
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer"
import { Contact } from "../components/Contact/Contact"
import { AboutUs } from "../components/AboutUs/AboutUs"

export const Router = () => {

    return (       
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:id' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/ourStory" element={<AboutUs/>}/>
          </Routes>
        </BrowserRouter>
    )
}