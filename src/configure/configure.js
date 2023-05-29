import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedImage: '',
    picture: 'Siyah',
}

export const configure = createSlice({
    name: 'control',
    initialState,
    reducers: {
        setSelectedImage: (state, action) => {
            state.selectedImage = action.payload;
        },
        setPicture: (state, action) => {
            state.picture = action.payload;
        },
    }
})

export const { setSelectedImage,setPicture } = configure.actions

export default configure.reducer
