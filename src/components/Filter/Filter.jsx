import { MdPersonSearch } from 'react-icons/md';
import React from 'react';
import { FaUserPlus, FaUser } from 'react-icons/fa';
import { Input, SearchField } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <SearchField>
      
      <Input
        type="text"
        name="filter"
        value={filterValue}
        onChange={changeFilter}
        placeholder="Filter"
      />
    </SearchField>
  );
};
