import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface testReducer {
  id: number;
  name: string;
  avatar: string;
}

const initialState: testReducer = {
  id: 1,
  name: 'abc',
  avatar: 'abc',
}

export const testReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
  },
})

export const { } = testReducer.actions;
export default testReducer.reducer;