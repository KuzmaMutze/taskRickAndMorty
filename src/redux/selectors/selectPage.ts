import { AppStateType } from '../store';

export const selectPage = (state: AppStateType) => {
  return state.characters.page;
};
export const selectPages = (state: AppStateType) => {
  return state.characters.pages;
};
