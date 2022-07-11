import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'

const UserLogged = () => {

  const [user, setUser] = useState()

  // useEffect(() => {
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
  //   axios.get(URL, getConfig)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }, [])

  const navigate = useNavigate()

  console.log(localStorage.getItem('token'))
  const removeToken = () => {
    localStorage.removeItem('token')
  }


  return (
    <article className='logged'>
      <i className='bx bxs-user-check' ></i>
      <h2 className='logged__h2'>User Logged</h2>

      <NavLink className={'logged__sing-out'} to={'/'} > <span onClick={removeToken}><div></div></span></NavLink>
    </article>
  )
}

export default UserLogged