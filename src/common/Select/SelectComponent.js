import Select from "react-select";

const SelectComponent = ({ title, ...rest }) => {
  return (
    <div class="w-2/5">
      <p class="text-gray-600 dark:text-slate-200">{title}</p>
      <Select {...rest} />
    </div>
  );
};

export default SelectComponent;
