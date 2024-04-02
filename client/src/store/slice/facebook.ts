import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
interface FaceBookSliceState {
  profile: FacebookForm | null;
}
const initialState: FaceBookSliceState = {
  profile: null,
};
const facebookSlice = createSlice({
  name: 'facebook',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<FacebookForm | null>) => {
      state.profile = action.payload;
    },
  },
});

export const { setProfile } = facebookSlice.actions;

export const facebookReducer = facebookSlice.reducer;
