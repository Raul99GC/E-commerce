import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

const InputSearch = ({setFilterCategory, categories, setProductSearch}) => {

  const { handleSubmit, register, reset } = useForm()


  const submit = e => {
    e.preventDefault()
    console.log(e.target[0].value)
    setProductSearch(e.target[0].value)
  }

  // console.log(setNameCategory)
  const changeCategory = e => {
    console.log(e.target.id)
    setFilterCategory(e.target.id)
  }

  return (
    <form onSubmit={submit} className='form-home'>
      <div className="form-home__container">
        <div className="dropwown-items">
          <h3 className='dropwown-item__h3'>Categories <i className='bx bx-chevron-down' ></i> </h3>
          <div className="menu">
            <ul>
            <li onClick={changeCategory} id={'All products'} className='menu__item'>All products</li>
              {
                categories?.map(category => (
                  <li onClick={changeCategory} id={category.name} className='menu__item' key={category.id}>{category.name}</li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="form-home__search-container">
          <input className='form-home__input' placeholder='enter your product' type="text" {...register('searchText')} />
          <button className='form-home__button'>Search</button>
        </div>
      </div>
    </form>
  )
}

export default InputSearch