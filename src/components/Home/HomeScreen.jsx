import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import axios from 'axios'
import './style/homeScreen.css'

const HomeScreen = () => {


  const products = useSelector(state => state.products)
  const [listProducts, setListProducts] = useState()
  const [filterCategory, setFilterCategory] = useState('All products')
  const [categoryList, setCategoryList] = useState()
  const [productSearch, setProductSearch] = useState()
  const [filterProduct, setFilterProduct] = useState()

  const [categories, setCategories] = useState()


  useEffect(() => {

    if (filterCategory === 'All products') {
      setListProducts(products)
    } else {
      console.log('en el esle')
      const array = products?.filter(e => e.category.name === filterCategory)
      setListProducts(array)
    }


  }, [filterCategory])

  useEffect(() => {
    if (productSearch) {
      setFilterProduct(products.filter(e => e.category.name.includes(productSearch.toLowerCase())))
    }
    else {
      setFilterProduct('')
    }

  }, [productSearch])

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
    axios.get(URL)
      .then(res => setCategories(res.data.data.categories))
      .catch(err => console.log(err))
  }, [])


  console.log(categories)


  return (
    <div className='home'>
      <InputSearch
        setFilterCategory= {setFilterCategory}
        categories={categories}
      />
      <div className='products-container'>
        {
          // filterProduct ? 
          products?.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
          // : 

        }
      </div>
    </div>
  )
}

export default HomeScreen