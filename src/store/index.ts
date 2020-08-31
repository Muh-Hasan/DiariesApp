import { createSlice, configureStore } from '@reduxjs/toolkit'
import { Diaries } from '../interface/diary'

let newState: Diaries[];

const diarySlice: any = createSlice({
    name: 'diary',
    initialState: [] as Diaries[],
    reducers: {
        addDairy: (state, action) => {
            newState = [...state]
            newState.push(action.payload)
            return newState
        },
        remove: (state, action) => {
            newState = [...state]
            newState = newState.filter(rm => rm.id !== action.payload)
            return newState
        },
    }
})

const store = configureStore({ reducer: diarySlice.reducer })

export const { addDairy, remove } = diarySlice.actions

export { diarySlice, store }