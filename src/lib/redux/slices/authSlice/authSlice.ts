import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface AuthSliceState {
  authenticated: boolean
}

const initialState: AuthSliceState = {
  authenticated: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload
    }
  }
})