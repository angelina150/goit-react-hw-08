import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
const SearchBox = ({ value }) => {
  const dispatch = useDispatch();
  const onChangeSearchBox = (event) => {
    const action = changeFilter(event.target.value);
    dispatch(action);
  };
  return (
    <div className={css.wrapper}>
      <p className={css.inputName}>Find contacts by name </p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChangeSearchBox}
      />
    </div>
  );
};

export default SearchBox;
