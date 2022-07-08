import { createSlice } from '@reduxjs/toolkit';

export const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers: {
        isLoadingGlobal: (state, action) => action.payload
    }
})

export const { isLoadingGlobal } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
