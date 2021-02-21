import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  apiCall = async () => {
    const formObj = {
      userName: this.state.email,
      password: this.state.password,
    };
    console.log(formObj);
    let response = await axios.post("http://localhost:3001/login", formObj);
    console.log(response);
  };

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <div class="d-flex justify-content-center">
          <input
            value={this.state.email}
            class="form-control col-sm-4"
            placeholder="Enter the Email"
            onChange={(event) =>
              this.setState({ ...this.state, email: event.target.value })
            }
          />
        </div>
        <br></br>
        <br></br>
        <div class="d-flex justify-content-center">
          <input
            value={this.state.password}
            type="password"
            class="form-control col-sm-4"
            placeholder="Enter the password"
            onChange={(event) =>
              this.setState({ ...this.state, password: event.target.value })
            }
          />
        </div>
        <br></br>
        <div class="d-flex justify-content-center">
          <button onClick={this.apiCall} type="button" class="btn btn-primary">
            submit
          </button>
        </div>
      </div>
    );
  }
}

export default App;
