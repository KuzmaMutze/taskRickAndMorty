import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useDebounce from '../hooks/debounse';
import { fetchCharacter, fetchCharacterByFilter } from '../redux/reducers/charactersReducer';

export const Input: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const debouncedSearchTerm = useDebounce(value, 500);

  useEffect(() => {
    if (debouncedSearchTerm && debouncedSearchTerm.length >= 2) {
      dispatch(fetchCharacterByFilter(debouncedSearchTerm));
    } else if (!debouncedSearchTerm) {
      dispatch(fetchCharacter());
    }
  }, [debouncedSearchTerm, dispatch]);

  const changeValueHendler = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };
  return <input value={value} onChange={changeValueHendler} />;
};
