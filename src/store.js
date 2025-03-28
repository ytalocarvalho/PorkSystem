import { configureStore } from '@reduxjs/toolkit';
import checklistReducer from './slices/checklistSlice';

export const store = configureStore({
  reducer: {
    checklist: checklistReducer,
  },
});
