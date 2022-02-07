import { useProductsAction } from "../../Providers/ProductProvides";
import { useState } from "react";
const Search = ({ filter }) => {
  const [value, setValue] = useState("");
  const dispatch = useProductsAction();
  const changeHandler = (e) => {
    dispatch({ type: "filter", selectedOption: filter });
    dispatch({ type: "search", event: e });
    setValue(e.target.value);
  };
  return (
    <div>
      <p>Search for : </p>
      <input
        type="text"
        placeholder="Search..."
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default Search;
