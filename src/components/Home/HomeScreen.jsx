import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import axios from 'axios'
import './style/homeScreen.css'

const HomeScreen = () => {

  const [filterCategory, setFilterCategory] = useState('All products')
  const [productSearch, setProductSearch] = useState()
  // const [filterProduct, setFilterProduct] = useState()
  const products = useSelector(state => state.products)

  const [categories, setCategories] = useState()
  const [filterProducts, setFilterProducts] = useState()

  const allProducts = useSelector(state => state.products)

  useEffect(() => {

    if (filterCategory === 'All products') {
      setFilterProducts(allProducts)
    }
    else {
      const filter = allProducts.filter(e => e.category.name === filterCategory)
      setFilterProducts(filter)

    }

  }, [filterCategory])

  useEffect(() => {
    if (productSearch) {
      console.log(products)
      setFilterProducts(products.filter(e => e.title.toLowerCase().includes(productSearch.toLowerCase())))
    }
    else {
      setFilterProducts('')
    }

  }, [productSearch])

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
    axios.get(URL)
      .then(res => setCategories(res.data.data.categories))
      .catch(err => console.log(err))
  }, [])



  return (
    <div className='home'>
      <InputSearch
        setFilterCategory={setFilterCategory}
        categories={categories}
        setProductSearch={setProductSearch}
      />
      <div className='products-container'>
        {
          filterProducts ?
            filterProducts?.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
            :
            products?.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))

        }
      </div>
    </div>
  )
}

export default HomeScreen