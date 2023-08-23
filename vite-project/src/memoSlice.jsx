import { createSlice } from '@reduxjs/toolkit';
const memoSlice = createSlice({
  name: 'memo',
  initialState: '',
  reducers: {
    setMemo: (state, action) => action.payload,
  },
});
export const { setMemo } = memoSlice.actions;
export default memoSlice.reducer;