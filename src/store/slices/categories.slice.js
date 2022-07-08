import { createSlice } from '@reduxjs/toolkit';
import {axios} from 'axios'

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {
        setCategoriesGlobal: (state, actions) => actions.payload
    }
})



export const { setCategoriesGlobal } = categoriesSlice.actions;

export const allCategories = () => (dispach) => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories' 
    return axios.get(URL)
    .then(res => {
        console.log(res.data)
        dispach(setCategoriesGlobal(res.data.data.categories))
    })
    .catch(err => console.log(err))
}

export default categoriesSlice.reducer;
