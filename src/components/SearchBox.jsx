import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/filtersSlice';
import css from './SearchBox.module.css';
import { selectNameFilter } from '../redux/selectors.js';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleChange}
      className={css.searchBox}
      placeholder="Search contacts"
    />
  );
};

export default SearchBox;
