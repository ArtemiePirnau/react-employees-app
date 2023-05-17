import { useState } from "react";

import "./search.scss";

export const Search = ({ onUpdateTerm }) => {
  const [term, setTerm] = useState("");

  const onChangeTerm = (e) => {
    const term = e.target.value;
    setTerm(term);
    onUpdateTerm(term);
  };

  return (
    <form className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Search by the name 🔍"
        value={term}
        onChange={onChangeTerm}
      />
    </form>
  );
};
