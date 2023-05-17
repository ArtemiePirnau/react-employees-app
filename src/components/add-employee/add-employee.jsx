import { useState } from "react";
import "./add-employee.scss";
export const AddEmployee = ({ onAddEmployee }) => {
  const [info, setInfo] = useState({
    name: "",
    age: "",
  });

  const onValueChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  const cleanInput = () => {
    setInfo({ name: "", age: "" });
  };

  const { name, age } = info;
  return (
    <form className="add__employee" onSubmit={(e) => e.preventDefault()}>
      <input
        className="add__employee-input add__input-name"
        type="text"
        placeholder="Write your name"
        name="name"
        value={name}
        onChange={onValueChange}
      />
      <input
        className="add__employee-input add__input-age"
        type="text"
        placeholder="Write your age"
        name="age"
        value={age}
        onChange={onValueChange}
      />
      <button
        className="team__header-add"
        onClick={() => {
          onAddEmployee(name, age);
          cleanInput();
        }}
      >
        Add employees
      </button>
    </form>
  );
};
