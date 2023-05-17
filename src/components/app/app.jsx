import { Search } from "../search/search.jsx";
import { Team } from "../team/team.jsx";

import { Component } from "react";

import "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 0,
          name: "Ibrahim Hoover",
          years: "18",
          increase: false,
        },
        {
          id: 1,
          name: "Carrie O'Gallagher",
          years: "23",
          increase: true,
        },
        { id: 2, name: "Jerome Brown", years: 25, increase: false },
        {
          id: 3,
          name: "Ollie John",
          years: "24",
          increase: false,
        },
        {
          id: 4,
          name: "Husna Miranda",
          years: "30",
          increase: false,
        },
        {
          id: 5,
          name: "Fintan Willis",
          years: "19",
          increase: true,
        },
        {
          id: 6,
          name: "Willow Dillon",
          years: "30",
          increase: false,
        },
      ],
      term: "",
      filter: "",
    };
    this.nextId = 7;
  }
  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            increase: !item.increase,
          };
        }
        return item;
      }),
    }));
  };

  onAddEmployee = (name, years) => {
    const newItem = {
      id: this.nextId++,
      name,
      years,
      increase: false,
    };

    if (name === "" || years === "") {
      return;
    }

    this.setState(({ data }) => {
      const newArr = [...data, newItem];

      return {
        data: newArr,
      };
    });
  };

  onDeleteEmployee = (id) => {
    console.log(id);
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  onUpdateTerm = (term) => {
    this.setState({ term });
  };

  onUpdateFilter = (filter) => {
    this.setState({ filter });
  };

  onSearchEmployees = (items, term) => {
    if (term.length === 0) return items;

    return items.filter((employee) => {
      return employee.name.toLowerCase().indexOf(term) > -1;
    });
  };

  onFilterEmployees = (items, filter) => {
    switch (filter) {
      case "moreThan18":
        return items.filter((item) => item.years > 18);
      case "increase":
        return items.filter((item) => item.increase);
      default:
        return items;
    }
  };

  render() {
    const { data, term, filter } = this.state;
    const updatedData = this.onFilterEmployees(
      this.onSearchEmployees(data, term),
      filter
    );
    return (
      <div className="app">
        <Search onUpdateTerm={this.onUpdateTerm} term={term} />
        <Team
          filter={filter}
          onUpdateFilter={this.onUpdateFilter}
          data={updatedData}
          onToggleIncrease={this.onToggleIncrease}
          onAddEmployee={this.onAddEmployee}
          onDeleteEmployee={this.onDeleteEmployee}
        />
      </div>
    );
  }
}
export default App;
