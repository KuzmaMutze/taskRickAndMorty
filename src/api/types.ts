import { ResultCodesEnum } from './api';

export type ResultData<T> = {
  data: T;
  config: configType;
  headers: headersType;
  request: XMLHttpRequest;
  status: ResultCodesEnum;
};

export type CharactersAllType = {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: any;
  };
  results: Array<CharacterType>;
};

export type CharacterType = {
  created: string;
  episode: Array<string>;
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url: string;
};

type configType = {
  adapter: () => void;
  baseURL: string;
  data: undefined;
  headers: {
    Accept: string;
  };
  maxBodyLength: number;
  maxContentLength: number;
  method: string;
  timeout: number;
  transformRequest: () => void;
  transformResponse: () => void;
  url: string;
  validateStatus: () => void;
  xsrfCookieName: string;
};

type headersType = {
  contenttype: string;
  expires: string;
  cacheControl: string;
  contentLength: string;
};
