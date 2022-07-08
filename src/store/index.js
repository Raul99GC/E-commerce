import {
    configureStore
}
from "@reduxjs/toolkit";
import products from './slices/products.slice'
import isLoading from './slices/isLoading.slice'
import categories from './slices/categories.slice'

export default configureStore({
    reducer: {
        products,
        isLoading,
        categories
    }
})