/* eslint no-param-reassign: "error" */
import { createSlice } from '@reduxjs/toolkit';

const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
  SUCCESS: 'success',
});

export const GreetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    getdata: (state, action) => { state.data = action.payload; },
    setStatus: (state, action) => { state.status = action.payload; },
  },
});

export const { getdata, setStatus } = GreetingSlice.actions;

export default GreetingSlice.reducer;

// Thunks

export function fetchdata() {
  return async function fetchdataThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch('http://127.0.0.1:3000/api/v1/greetings');
      const data = await res.json();
      dispatch(getdata(data));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
