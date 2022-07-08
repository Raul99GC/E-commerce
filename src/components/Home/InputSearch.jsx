import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

const InputSearch = ({setFilterCategory, categories}) => {

  const { handleSubmit, register, reset } = useForm()


  const submit = data => {
    console.log(data)
  }

  // console.log(setNameCategory)
  const changeCategory = e => {
    setFilterCategory(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='form-home'>
      <div className="form-home__container">
        <div className="dropwown-items">
          <h3 className='dropwown-item__h3'>Categories <i className='bx bx-chevron-down' ></i> </h3>
          <div className="menu">
            <ul>
            <li onClick={changeCategory} value={'All products'} className='menu__item'>All products</li>
              {
                categories?.map(category => (
                  <li onClick={changeCategory} value={category.name} className='menu__item' key={category.id}>{category.name}</li>
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