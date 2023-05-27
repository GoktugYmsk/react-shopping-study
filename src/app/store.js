import { configureStore } from '@reduxjs/toolkit'
import configure from '../configure/configure'


export const store = configureStore({
    reducer: {
        componentControl: configure,
    },
})