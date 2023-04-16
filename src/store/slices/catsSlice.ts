import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MyCatModel } from 'components/CatForm/components/MyCatModel';

interface CatsState {
  cats: MyCatModel[];
}

const initialState: CatsState = {
  cats: [],
};

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    addCat: (state, action: PayloadAction<MyCatModel>) => {
      state.cats.push(action.payload);
    },
  },
});

export const { addCat } = catsSlice.actions;

export default catsSlice.reducer;
