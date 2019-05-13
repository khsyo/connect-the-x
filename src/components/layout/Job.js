import React, { Component } from "react";
import PropTypes from "prop-types";

class Job extends Component {
  state = {
    job: [
      {
        title: "Frontend Developer",
        company: "Best Company",
        location: {
          city: "Kuala Lumpur",
          country: "Malaysia"
        },
        salary: 5000
      },
      {
        title: "Backend Developer",
        company: "Second Best Company",
        location: {
          city: "Melaka",
          country: "Malaysia"
        },
        salary: 4500
      },
      {
        title: "DevOps Engineer",
        company: "Third Best Company",
        location: {
          city: "Petaling Jaya",
          country: "Malaysia"
        },
        salary: 5000
      }
    ]
  };
  render() {
    const job = this.state.job.map(job => {
      return (
        <div className="card">
          <div className="card-header text-primary">{job.title}</div>
          <div className="card-body">
            <strong>{job.company}</strong>
            <br />
            {job.location.city} {job.location.country}
            <br />
            Salary: RM {job.salary}
          </div>
        </div>
      );
    });

    return <div className="container">{job}</div>;
  }
}

Job.propTypes = {};

export default Job;
