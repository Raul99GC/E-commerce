import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'

const InputSearch = ({ setProductsCategory }) => {

  const { handleSubmit, register, reset } = useForm()
  const dispatch = useDispatch()

  const submit = data => {
    console.log(data)
  }

  const categories = useSelector(state => state.categories)
  const products = useSelector(state => state.products)
  
  const changeCategoty = e => {
    products.filter(e.target.value)
  }
  
  console.log(categories)
  console.log(products)

  return (
    <form onSubmit={handleSubmit(submit)} className='form-home'>
      <div className="filter-Category">
        <h3>Category</h3>
        <div className="menu">
          <ul>
            {
              products.map(category => (
                <li key={category.id} >{category.category.name}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <input type="text" {...register('searchText')} />
      <button>Search</button>
    </form>
  )
}

export default InputSearch