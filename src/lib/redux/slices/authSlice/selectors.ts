import type { ReduxState } from "../..";

const selectUserId = (state: ReduxState) => state.authentication.userId;
const selectJwtToken = (state: ReduxState) => state.authentication.jwtToken;

export { selectUserId, selectJwtToken };