import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented(state): void {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>): void {
      state.value += action.payload;
    },
    reset(state): void {
      state.value = 0;
    }
  },
});

export const { incremented, amountAdded, reset } = counterSlice.actions;
export default counterSlice.reducer;