import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExampleState } from "./types";

const initialState: ExampleState = {
  isLoading: false,
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    changeLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const exampleReducer = exampleSlice.reducer;
export const { changeLoading } = exampleSlice.actions;
