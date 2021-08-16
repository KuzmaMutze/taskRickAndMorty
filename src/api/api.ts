import axios from 'axios';
import { CharactersAllType, CharacterType, ResultData } from './types';

export enum ResultCodesEnum {
  Success = 200,
  Error = 400,
}

export const instance = axios.create({
  baseURL: `https://rickandmortyapi.com/api/`,
});

export const charactersAPI = {
  getAllCharacters(page: number) {
    return instance.get(`character/?page=${page}`);
  },
  getCharacterByFilter(filter: string, page: number) {
    return instance.get(
      filter ? `character/?name=${filter}&page=${page}` : `character/?page=${page}`,
    );
  },
};
