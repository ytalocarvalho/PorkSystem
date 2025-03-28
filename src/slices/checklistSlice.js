import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  openingChecklist: [],
  closingChecklist: [],
  status: 'idle',
};

export const loadChecklists = createAsyncThunk(
  'checklist/loadChecklists',
  async () => {
    const openingChecklist = await AsyncStorage.getItem('openingChecklist');
    const closingChecklist = await AsyncStorage.getItem('closingChecklist');
    return {
      openingChecklist: openingChecklist ? JSON.parse(openingChecklist) : [],
      closingChecklist: closingChecklist ? JSON.parse(closingChecklist) : [],
    };
  }
);

export const saveChecklists = createAsyncThunk(
  'checklist/saveChecklists',
  async (checklists, { getState }) => {
    const state = getState();
    await AsyncStorage.setItem('openingChecklist', JSON.stringify(state.checklist.openingChecklist));
    await AsyncStorage.setItem('closingChecklist', JSON.stringify(state.checklist.closingChecklist));
  }
);

const checklistSlice = createSlice({
  name: 'checklist',
  initialState,
  reducers: {
    toggleCheck(state, action) {
      const { type, id } = action.payload;
      const checklist = state[type];
      const item = checklist.find(item => item.id === id);
      if (item) {
        item.checked = !item.checked;
      }
    },
    clearAll(state, action) {
      const { type, initialItems } = action.payload;
      if (initialItems) {
        state[type] = initialItems;
      } else {
        const checklist = state[type];
        checklist.forEach(item => item.checked = false);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadChecklists.fulfilled, (state, action) => {
        state.openingChecklist = action.payload.openingChecklist;
        state.closingChecklist = action.payload.closingChecklist;
      })
      .addCase(saveChecklists.fulfilled, (state) => {
        // handle any necessary post-save actions
      });
  },
});

export const { toggleCheck, clearAll } = checklistSlice.actions;
export default checklistSlice.reducer;
