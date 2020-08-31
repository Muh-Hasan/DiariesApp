import { createSlice, configureStore } from '@reduxjs/toolkit'
import { Diaries } from '../interface/diary'

const diarySlice = createSlice({
    name: 'diary',
    initialState: [] as Diaries[],
    reducers: {
        addDairy: (state, action) => {
           let newState = [...state]
           newState.push(action.payload)
           return newState 
        },
        remove: (state, action) => {
          let remove = [
              ...state.find()
          ]             
        }
    }
})

const store = configureStore({ reducer: diarySlice.reducer })

export const { addDairy , remove } = diarySlice.actions

export { diarySlice, store }