import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AuthSliceState {
  userId: number;
  jwtToken: string;
}

const initialState: AuthSliceState = {
  userId: -1,
  jwtToken: ""
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
    setJwtToken: (state, action: PayloadAction<string>) => {
      state.jwtToken = action.payload;
    },
  },
});
