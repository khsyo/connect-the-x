import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class Job extends Component {
  render() {
    const { jobs } = this.props;

    return (
      <div className="container">
        <div className="row">
          {jobs
            ? jobs.map(j => {
                return (
                  <div className="col-3 mb-2">
                    <div className="card">
                      <div className="card-header text-success">{j.title}</div>
                      <div className="card-body">
                        <strong>{j.hiringCompany}</strong>
                        <br />
                        {j.city}, {j.country}
                        <br />
                        Salary: RM {j.salary}
                      </div>
                    </div>
                    <input
                      type="submit"
                      className="btn btn-outline-success btn-block"
                      value="Apply Now"
                    />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

Job.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect([{ collection: "jobs" }]),
  connect(state => ({
    jobs: state.firestore.ordered.jobs
  }))
)(Job);
