import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'

const CartInfo = ({ productCart }) => {

  const dispatch = useDispatch()

  const deleteProductFromCart = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${productCart.id}`

    axios.delete(URL, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(getAllProductsCart())
      })
      .catch(err => console.log(err.data))
  }



  return (
    <section className='cart-info'>
      <header className='cart-info__header'>
        <h3 className='cart-info__subtitle'>{productCart.brand}</h3>
        <h4 className='cart-info__title'>{productCart.title}</h4>
      </header>
      <div className="cart-info__descriptions">
        <p className='cart-info__quantity'>{productCart.productsInCart.quantity}</p>
        <p className='cart-info__price'>$ {productCart.price}</p>
      </div>
      <div onClick={deleteProductFromCart} className='cart__btn'>
        <i className='bx bx-trash' ></i>
      </div>
      <div className='cart-inf__separation' />
    </section>
  )
}

export default CartInfo