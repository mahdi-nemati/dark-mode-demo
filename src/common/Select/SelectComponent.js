import Select from "react-select";

const SelectComponent = ({ title, ...rest }) => {
  return (
    <div>
      <p>{title}</p>
      <Select {...rest} />
    </div>
  );
};

export default SelectComponent;
