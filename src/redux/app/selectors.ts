import type {RootState} from '../store';

export const selectIsInitialized = (state: RootState) =>
  state._persist.rehydrated;
