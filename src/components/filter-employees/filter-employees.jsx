import "./filter-employees.scss";

export const FilterEmpployees = ({ onUpdateFilter }) => {
  const options = [
    {
      name: "all",
      text: "All employees",
    },
    {
      name: "moreThan18",
      text: "More than 18y",
    },
    {
      name: "increase",
      text: "Increase employees",
    },
  ];
  return (
    <div className="team__header">
      <h1 className="team__title">Employees</h1>
      <div className="team__header-filters">
        <select className="team__header-select">
          {options.map(({ name, text }) => {
            return (
              <option
                key={name}
                value={name}
                onClick={() => onUpdateFilter(name)}
              >
                {text}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
