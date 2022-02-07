import SelectComponent from "../common/Select/SelectComponent";
import { useState } from "react";
import { useProductsAction } from "../Providers/ProductProvides";
import Search from "../common/Search/Search";
const Filter = () => {
  const dispatch = useProductsAction();
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const sortOptions = [
    { value: "highest", label: "most expensive" },
    { value: "lowest", label: "cheapest" },
  ];
  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption: selectedOption });
    setSort(selectedOption);
  };
  const filterOptions = [
    { value: "", label: "All" },
    { value: "Samsung", label: "Samsung" },
    { value: "Apple", label: "Apple" },
    { value: "Xiaomi", label: "Xiaomi" },
    { value: "Nookya", label: "Nookya" },
    { value: "One plus", label: "One plus" },
    { value: "microsoft", label: "microsoft" },
  ];
  const filterHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption: selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
    setFilter(selectedOption);
  };
  return (
    <>
    <Search filter={filter} />
      <SelectComponent
        value={sort}
        onChange={sortHandler}
        options={sortOptions}
        title="Sort By :"
      />
      <SelectComponent
        value={filter}
        onChange={filterHandler}
        options={filterOptions}
        title="Order By : "
      />
    </>
  );
};

export default Filter;
