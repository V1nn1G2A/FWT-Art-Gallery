import { store, RootState } from '../store/store';

const getAccessToken = (): string | null => {
  const state = store.getState() as RootState;

  return state.auth.accessToken;
};

export default getAccessToken;
