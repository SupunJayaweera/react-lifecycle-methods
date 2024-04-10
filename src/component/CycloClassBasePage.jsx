import React from "react";
import { getRandomUser } from "../Utility/api";

class CycloClassBasePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
      inputName: "",
      inputFeedback: "",
    };
  }

  handleAddStudent = () => {
    this.setState((prevState) => {
      return {
        studentCount: prevState.studentCount + 1,
      };
    });
  };

  handleRemoveAllStudent = () => {
    this.setState((prevState) => {
      return {
        studentCount: 0,
      };
    });
  };

  componentDidMount = async () => {
    console.log("CycloClassBasePage componentDidMount");
    const response = await getRandomUser();
    console.log(response);
    this.setState((prevState) => {
      return {
        instructor: {
          name: response.data.first_name + " " + response.data.last_name,
          email: response.data.email,
          phone: response.data.phone_number,
        },
      };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("CycloClassBasePage componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("CycloClassBasePage componentWillUnmount");
  }

  render() {
    console.log("CycloClassBasePage render Component");
    return (
      <div>
        {this.state.instructor && (
          <div>
            <span className="h3 text-warning">Instructor</span>
            <i className="bi bi-toggle-off btn btn-success btn-sm"></i>
            <div className="card bg-dark text-white">
              <div className="card-body">
                <div>
                  <span className="h5">Name:</span> {this.state.instructor.name}
                </div>
                <div>
                  <span className="h5">Email:</span>{" "}
                  {this.state.instructor.email}
                </div>
                <div>
                  <span className="h5">Phone:</span>{" "}
                  {this.state.instructor.phone}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="p-3">
          <span className="h4 text-success">Feedback</span>
          <br />
          <input
            type="text"
            value={this.state.inputName}
            onChange={(e) => {
              this.setState({ inputName: e.target.value });
            }}
            placeholder="Name..."
          ></input>
          value={this.state.inputName}
          <br />
          <textarea
            placeholder="Feedback..."
            value={this.state.inputFeedback}
            onChange={(e) => {
              this.setState({ inputFeedback: e.target.value });
            }}
          ></textarea>
          Feedback : {this.state.inputFeedback}
        </div>
        <div className="p-3">
          <span className="h4 text-success">Students</span>
          <br />
          <div>Student Count : {this.state.studentCount}</div>
          <button
            className="btn btn-success btn-sm"
            onClick={this.handleAddStudent}
          >
            Add Student
          </button>
          &nbsp;
          <button
            className="btn btn-danger btn-sm"
            onClick={this.handleRemoveAllStudent}
          >
            Remove All Students
          </button>
        </div>
      </div>
    );
  }
}

export default CycloClassBasePage;
