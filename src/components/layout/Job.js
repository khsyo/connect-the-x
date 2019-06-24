import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class Job extends Component {
  handleApplyNow = () => {
    console.log("Apply now clicked");
  };

  handleSeeMore = e => {
    e.preventDefault();
    console.log(`See more clicked and ${e.id}`);
  };

  render() {
    const { jobs } = this.props;

    return (
      <div className="container col-md-9 col-sm-12">
        <h1 className="mb-4">
          Job Listings <i className="fas fa-arrow-up" />
        </h1>
        <div className="row">
          {jobs
            ? jobs.map(j => {
                return (
                  <div className="col-md-4 col-sm-6 mb-4" key={j.id}>
                    <div className="card">
                      <div className="card-header text-info font-weight-bold">
                        {j.title}
                      </div>
                      <div className="card-body">
                        <strong>{j.hiringCompany}</strong>
                        <br />
                        {j.city}, {j.country}
                        <br />
                        Salary: RM {j.salary}
                      </div>
                    </div>
                    <input
                      type="button"
                      className="btn btn-outline-success col-6"
                      value="Apply Now"
                      onClick={this.handleApplyNow}
                    />
                    <Link
                      to={`/job/${j.id}`}
                      className="btn btn-outline-danger col-6"
                    >
                      See More <i className="fas fa-info-circle" />
                    </Link>
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
