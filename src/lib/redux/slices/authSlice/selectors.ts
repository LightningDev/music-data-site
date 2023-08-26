import type { ReduxState } from "../..";

export const selectAuthenticated = (state: ReduxState) => state.authentication.authenticated