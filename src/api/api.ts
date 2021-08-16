import axios from 'axios';

export enum ResultCodesEnum {
  Success = 200,
  Error = 400,
}

export const instance = axios.create({
  baseURL: `https://rickandmortyapi.com/api/`,
});

export const charactersAPI = {
  getAllCharacters() {
    return instance.get('character');
  },
  getCharacterByFilter(filter: string) {
    return instance.get(filter ? `character/?name=${filter}` : 'character');
  },
};
