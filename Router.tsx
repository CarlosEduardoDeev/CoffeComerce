import { Routes,Route} from 'react-router-dom'
import {Home} from './src/Pages/Home/index'
import {CartShopping} from './src/Pages/CartShopping/index'
import { DefaultLayout } from './src/Layout/DefaultLayout'


export function Router(){
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout/>}>
                <Route path='/' element={<Home/> }/>
                <Route path='/cart' element={<CartShopping />}/>
            </Route>
        </Routes>
    )
}