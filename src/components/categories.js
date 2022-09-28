import React from 'react';
import { checkStatus } from '../redux/categories/categories';

import { useDispatch, useSelector } from 'react-redux';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  return (
    <div>
      <button
        type="button"
        className="check-status"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check status
      </button>
      <h4 className="under-constraction">{status}</h4>
    </div>
  );
};

export default Categories;
