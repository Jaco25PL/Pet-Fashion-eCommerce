import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/navBar/NavBar"
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer"
import { AboutUs } from "../components/AboutUs/AboutUs"
import { Cart } from "../components/Cart/Cart"

export const Router = () => {

    return (       
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path="/ourStory" element={<AboutUs/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
    )
}