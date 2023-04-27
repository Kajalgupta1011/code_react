import React, { Component } from "react";
import "./styles.css";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          name: "Kajal",
          lastName: "Gupta",
          qty: 10
        },
        {
          id: 2,
          name: "Jyoti",
          lastName: "Yadav",
          qty: 11
        },
        {
          id: 3,
          name: "Sonu",
          lastName: "Sharma",
          qty: 19
        }
      ]
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(id) {
    //add property in objects
    const temp = this.state.data.filter((item, idx) => idx === id);
    for (const ele of temp) {
      if (ele.id === id) {
        ele.checked = false;
        ele.show = true;
      }
    }

    //update the state according to use clicking on item
    this.setState((prevState) => ({
      data: prevState.data.map((item) =>
        item.id === id
          ? { ...item, checked: !item.checked, show: !item.show }
          : item
      )
    }));
  }

  render() {
    const { data } = this.state;

    return (
      <>
        {data.map((item) => (
          <div className="row" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              disabled={item.checked}
              onChange={() => this.handleCheckboxChange(item.id)}
            />

            {/* conditions for button id user click on item then it will be desable */}
            {!item.show ? <button>-</button> : null}

            <p>{item.qty}</p>

            {!item.show ? <button>+</button> : null}

            <p>{item.name}</p>

            <p>{item.lastName}</p>
          </div>
        ))}
      </>
    );
  }
}

export default App;
