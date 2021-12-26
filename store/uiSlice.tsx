import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface CounterState {
  location: string
}

const initialState: CounterState = {
  location: "home",
}

export const uiSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
        changeLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeLocation } = uiSlice.actions

export default uiSlice.reducer
