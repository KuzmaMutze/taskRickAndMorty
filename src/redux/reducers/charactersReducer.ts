import { charactersAPI, ResultCodesEnum } from '../../api/api';
import { CharactersAllType, CharacterType } from '../../api/types';
import { BaseThunkType, InferActionTypes } from '../store';

const initialState = {
  items: [] as Array<CharacterType>,
  loadingState: false as boolean,
  page: 1 as number,
  pages: 0 as number,
};

type initialStateType = typeof initialState;
type ActionsType = InferActionTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType>;

export const charactersReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case 'SET_CHARACTER':
      return {
        ...state,
        items: action.payload.items,
        pages: action.payload.pages,
      };
    case 'SET_LOADING_STATE':
      return {
        ...state,
        loadingState: action.payload,
      };
    case 'SET_PAGE':
      return {
        ...state,
        page: action.payload,
      };
    default:
      break;
  }

  return state;
};

export const actions = {
  setCharacter: (payload: { items: Array<CharacterType>; pages: number }) =>
    ({ type: 'SET_CHARACTER', payload } as const),
  setLoadingState: (payload: boolean) => ({ type: 'SET_LOADING_STATE', payload } as const),
  setPage: (payload: number) => ({ type: 'SET_PAGE', payload } as const),
};

export const fetchCharacter =
  (page: number): ThunkType =>
  async (dispatch) => {
    let data = await charactersAPI.getAllCharacters(page);

    if (data.status === ResultCodesEnum.Success) {
      dispatch(actions.setLoadingState(true));
      // dispatch(actions.setCharacter(data.data.results));
      dispatch(actions.setCharacter({ items: data.data.results, pages: data.data.info.pages }));
      dispatch(actions.setLoadingState(false));
    }
  };

export const fetchCharacterByFilter =
  ({ search, page }: { search: string; page: number }): ThunkType =>
  async (dispatch) => {
    let data = await charactersAPI.getCharacterByFilter(search, page);

    if (data.status === ResultCodesEnum.Success) {
      dispatch(actions.setLoadingState(true));
      dispatch(actions.setCharacter(data.data.results));
      dispatch(actions.setLoadingState(false));
    }
  };
