import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import getConfig from '../../utils/getConfig'

const UserLogged = () => {

  const removeToken = () => {
    Storage.removeItem(`token`)
  }

  return (
    <article className='logged'>
      <i className='bx bxs-user-check' ></i>
      <h2 className='logged__h2'>User Logged</h2>

      <NavLink  className={'logged__sing-out'} to={'/login'} > <span onClick={removeToken}><a href="#"></a></span></NavLink>
    </article>
  )
}

export default UserLogged