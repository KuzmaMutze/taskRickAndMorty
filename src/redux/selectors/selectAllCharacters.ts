import { AppStateType } from '../store';

export const selectAllCharacters = (state: AppStateType) => {
  return state.characters.items;
};

export const selectIsLoading = (state: AppStateType) => {
  return state.characters.loadingState;
};
