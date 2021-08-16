import { charactersAPI, ResultCodesEnum } from '../../api/api';
import { CharacterType } from '../../api/types';
import { BaseThunkType, InferActionTypes } from '../store';

const initialState = {
  items: [] as Array<CharacterType>,
  loadingState: false as boolean,
};

type initialStateType = typeof initialState;
type ActionsType = InferActionTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType>;

export const charactersReducer = (state = initialState, action: ActionsType): initialStateType => {
  if (action.type === 'SET_CHARACTER') {
    return {
      ...state,
      items: action.payload,
    };
  } else if (action.type === 'SET_LOADING_STATE') {
    return {
      ...state,
      loadingState: action.payload,
    };
  }
  return state;
};

export const actions = {
  setCharacter: (payload: Array<CharacterType>) => ({ type: 'SET_CHARACTER', payload } as const),
  setLoadingState: (payload: boolean) => ({ type: 'SET_LOADING_STATE', payload } as const),
};

export const fetchCharacter = (): ThunkType => async (dispatch) => {
  let data = await charactersAPI.getAllCharacters();

  if (data.status === ResultCodesEnum.Success) {
    dispatch(actions.setLoadingState(true));
    dispatch(actions.setCharacter(data.data.results));
    dispatch(actions.setLoadingState(false));
  }
};

export const fetchCharacterByFilter =
  (filter: string): ThunkType =>
  async (dispatch) => {
    let data = await charactersAPI.getCharacterByFilter(filter);

    if (data.status === ResultCodesEnum.Success) {
      dispatch(actions.setLoadingState(true));
      dispatch(actions.setCharacter(data.data.results));
      dispatch(actions.setLoadingState(false));
    }
  };
