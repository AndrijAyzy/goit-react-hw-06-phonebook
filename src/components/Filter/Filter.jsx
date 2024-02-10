import { FilterInput, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';


const Filter = () => {
	const dispatch = useDispatch();

	const handleChange = ({ target }) => {
	dispatch(setFilter(target.value))
}
  return (
    <Label>
      <h1>Contacts</h1>
      <FilterInput
        type="text"
        name="filter"
        placeholder="Filter"
        onChange={handleChange}
      ></FilterInput>
    </Label>
  );
};

export default Filter;
