import { createGenericSlice } from '../../libs/utils/createGenericSlice';
import { setError, setSuccess } from '../app';
import { IConfigState } from './types';

export const initialState: IConfigState = {};

export const configSlice = createGenericSlice({
  name: 'config',
  initialState,
  reducers: {
    getConfig(state, action) {
      state.config = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { getConfig } = configSlice.actions;

export default configSlice.reducer;
