import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/usersReducer'

export default configureStore({
  reducer: {
    user: userReducer
  },
});
