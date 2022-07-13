import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';


export const testReducer = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: {
    value: ''
  },
  reducers: {
    
  },
})

export const { } = testReducer.actions;
export default testReducer.reducer;