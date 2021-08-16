import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from '../hooks/debounse';
import { fetchCharacter, fetchCharacterByFilter } from '../redux/reducers/charactersReducer';
import { selectPage } from '../redux/selectors/selectPage';

export const Input: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const page = useSelector(selectPage);

  const debouncedSearchTerm = useDebounce(value, 500);

  useEffect(() => {
    if (debouncedSearchTerm && debouncedSearchTerm.length >= 2) {
      dispatch(fetchCharacterByFilter({ search: debouncedSearchTerm, page }));
    } else if (!debouncedSearchTerm) {
      dispatch(fetchCharacter(page));
    }
  }, [debouncedSearchTerm, dispatch, page]);

  const changeValueHendler = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };
  return <input value={value} onChange={changeValueHendler} />;
};
