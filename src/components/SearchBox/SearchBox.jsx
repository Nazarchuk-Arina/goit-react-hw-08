import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.wrapper}>
      <p>Find contacts</p>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        className={s.input}
        placeholder="Enter name or number"
      />
    </div>
  );
};

export default SearchBox;
