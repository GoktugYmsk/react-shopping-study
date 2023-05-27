import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedImage: '',
    resim: '1',
}

export const configure = createSlice({
    name: 'control',
    initialState,
    reducers: {
        setSelectedImage: (state, action) => {
            state.selectedImage = action.payload;
        },
        setResim: (state, action) => {
            state.resim = action.payload;
        },
    }
})

export const { setSelectedImage,setResim } = configure.actions

export default configure.reducer
