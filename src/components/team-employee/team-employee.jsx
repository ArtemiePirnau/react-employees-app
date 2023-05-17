import "./team-employee.scss";

export const TeamEmployee = ({
  name,
  years,
  increase,
  onToggleIncrease,
  onDeleteEmployee,
}) => {
  let classNames = "list__item-title";

  if (increase) {
    classNames += " increase";
  }

  return (
    <li className="list__item">
      <div className="list__item-about">
        <h3 className={classNames}>{name}</h3>
        <button className="list__item-increase" onClick={onToggleIncrease}>
          📈
        </button>
      </div>
      <div className="list__item-info">
        <button className="list__item-delete" onClick={onDeleteEmployee}>
          🗑️
        </button>
        <h6 className="list__item-years">{years} years</h6>
      </div>
    </li>
  );
};
