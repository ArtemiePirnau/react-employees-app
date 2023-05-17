import { NoEmployees } from "../no-employees/no-employees.jsx";
import { TeamEmployee } from "../team-employee/team-employee.jsx";
import { FilterEmpployees } from "../filter-employees/filter-employees.jsx";
// import AddEmployee from "../add-employee/add-employee.jsx";
import { AddEmployee } from "../add-employee/add-employee.jsx";

import "./team.scss";

export const Team = ({
  data,
  onToggleIncrease,
  onAddEmployee,
  onDeleteEmployee,
  filter,
  onUpdateFilter,
}) => {
  const employeesList = data.map(({ id, name, years, increase }) => {
    return (
      <TeamEmployee
        key={id}
        name={name}
        years={years}
        increase={increase}
        onToggleIncrease={(e) => onToggleIncrease(id, e.currentTarget)}
        onDeleteEmployee={(e) => onDeleteEmployee(id, e.currentTarget)}
      />
    );
  });
  return (
    <div className="team">
      <FilterEmpployees filter={filter} onUpdateFilter={onUpdateFilter} />
      <AddEmployee onAddEmployee={onAddEmployee} />
      {employeesList.length === 0 ? (
        <NoEmployees />
      ) : (
        <ul className="team__list">{employeesList}</ul>
      )}
    </div>
  );
};
