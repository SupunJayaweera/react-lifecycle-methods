import React from "react";

class Instructor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Mounted - Instructor");
  }

  componentDidUpdate() {
    console.log("Update - Instructo");
  }

  componentWillUnmount() {
    console.log("UnMount - Instructot");
  }

  render() {
    console.log("Instructor render");
    return (
      <div>
        <div className="card bg-dark text-white">
          <div className="card-body">
            <div>
              <span className="h5">Name:</span> {this.props.instructor.name}
            </div>
            <div>
              <span className="h5">Email:</span> {this.props.instructor.email}
            </div>
            <div>
              <span className="h5">Phone:</span> {this.props.instructor.phone}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Instructor;
