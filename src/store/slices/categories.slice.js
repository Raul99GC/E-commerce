import { createSlice } from '@reduxjs/toolkit';
import {axios} from 'axios'

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {
        setCategoriesGlobal: (state, action) => action.payload
    }
})

export const { setCategoriesGlobal } = categoriesSlice.actions;


export default categoriesSlice.reducer;
