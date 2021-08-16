import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/reducers/charactersReducer';
import { selectPage, selectPages } from '../redux/selectors/selectPage';

type PropsType = {};
export const Pagination: React.FC<PropsType> = (props) => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const pages = useSelector(selectPages);

  let pagesBtn = [];

  for (let index = 1; index <= pages; index++) {
    pagesBtn.push(
      <span
        className="page"
        onClick={(e) => {
          dispatch(actions.setPage(index));
        }}>
        {index}
      </span>,
    );
  }

  const prevPageHandler = () => {
    dispatch(actions.setPage(page - 1));
  };

  const nextPageHandler = () => {
    dispatch(actions.setPage(page + 1));
  };

  return (
    <div className="pagination">
      {page > 1 && (
        <button className="page__btn" onClick={prevPageHandler}>
          Prev
        </button>
      )}

      {pagesBtn}

      {pages > page && (
        <button className="page__btn" onClick={nextPageHandler}>
          Next
        </button>
      )}
    </div>
  );
};
