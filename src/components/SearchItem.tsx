import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCharacters, selectIsLoading } from '../redux/selectors/selectAllCharacters';
import { Card } from './Card';
import { Input } from './Input';
import { Pagination } from './Pagination';

export const SearchItem: React.FC = () => {
  const characters = useSelector(selectAllCharacters);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className="search-item">
      <Input />
      <Pagination />
      {!isLoading ? (
        <div className="search-item__cards">
          {characters.map((item) => (
            <Card
              key={item.id}
              status={item.status}
              name={item.name}
              species={item.species}
              img={item.image}
            />
          ))}
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};
