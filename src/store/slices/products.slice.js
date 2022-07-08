import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { isLoadingGlobal } from './isLoading.slice'

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProductsGlobal: (state, action) => action.payload
    }
})


export const { setProductsGlobal } = productsSlice.actions;

export const getAllProducts = () => (dispach) => {
    dispach(isLoadingGlobal(true))
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'
    return axios.get(URL)
    .then(res => {
        dispach(isLoadingGlobal(false))
        dispach(setProductsGlobal(res.data.data.products))
    })
    .catch(err => console.log(err))
}

export default productsSlice.reducer;
