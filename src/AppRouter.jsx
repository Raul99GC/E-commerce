import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import CartScreen from './components/Cart/CartScreen'
import HomeScreen from './components/Home/HomeScreen'
import LoginScreen from './components/Login/LoginScreen'
import ProtectedRoutes from './components/ProtectedRoutes'
import HeaderScreen from './components/Shared/HeaderScreen'
import PagesWithNavbar from './PagesWithNavbar'
import PurchaseScreen from './components/Purchases/PurchaseScreen'
import ProductScreen from './components/Products/ProductScreen'

import axios from 'axios'

import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'


function AppRouter() {
   // useEffect(() => {
   //   const newUser= {
   //     firstName: "Raul",
   //     lastName: "Aja",
   //     email: "juas1@gmail.com",
   //     password: "pass1234",
   //     phone: "1234567891",
   //     role: "admin"

   //   }
   //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
   //   axios.post(URL, newUser)
   //   .then(res => console.log(res.data))
   //   .catch(err => console.log(err.data))
   // }, [])


   const dispach = useDispatch()

   useEffect(() => {
      dispach(getAllProducts())
   }, [])

   return (

      <>
         <div className="appRouter">
            <Routes >

               <Route path='/' element={<PagesWithNavbar />}>

                  <Route element={< ProtectedRoutes />} >
                     <Route path='/cart' element={<CartScreen />} />
                     <Route path='/purchases' element={<PurchaseScreen />} />
                  </Route>
                  <Route path='/login' element={<LoginScreen />} />
                  <Route path='/' element={<HomeScreen />} />
                  <Route path="/product/:id" element={<ProductScreen />} />
               </Route>

            </Routes>
         </div>

      </>

   )
}

export default AppRouter
