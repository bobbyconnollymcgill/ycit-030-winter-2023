import { configureStore, createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        bears: 0,
        birds: 0,
    },
    reducers: {
        increasePopulation: (state, action) => {
            console.log("action", action)

            state[action.payload.animal] += Number(action.payload.amount)
        },
        reset: (state) => {
            state.bears = 0
            state.birds = 0
        },
    },
})

console.log("counterSlice", counterSlice)

export const { increasePopulation, reset } = counterSlice.actions

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
})
