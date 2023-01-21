import { configureStore } from '@reduxjs/toolkit';
import GreetingSliceReducer from './Greeting/Greeting';

export default configureStore({
  reducer: {
    greeting: GreetingSliceReducer,
  },
});
