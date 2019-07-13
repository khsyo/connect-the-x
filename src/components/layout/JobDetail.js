import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "./Spinner";
import JobImageLarge from "../job-hero-banner-720W.jpg";
import JobImageMedium from "../job-hero-banner-480W.jpg";
import JobImageSmall from "../job-hero-banner-320W.jpg";

class JobDetail extends Component {
  handleClick = e => {
    const { job } = this.props;
    console.log(job.jobTitle);
  };
  render() {
    const { job } = this.props;

    if (job) {
      return (
        <div className="container col-sm-12 col-md-9 border border-light pt-3">
          <div className="embed-responsive-4by3 mb-2">
            <img
              srcSet={`${JobImageLarge} 1280w, ${JobImageMedium} 640w, ${JobImageSmall} 320w`}
              src={JobImageLarge}
              alt="now hiring"
            />
          </div>
          <div className="row mb-2 col-sm-12 col-md-12 pl-0 d-flex justify-content-center">
            <h4 className="col-sm-8">
              <span className="text-info">We are looking for: </span>{" "}
              {job.jobTitle}
            </h4>
            <div className="col-sm-4 bg-success text-white d-flex flex-column justify-content-center">
              Expected salary: RM {job.salary}
            </div>
          </div>
          <div className="row col-sm-6 mb-2 text-secondary font-weight-bold">
            {job.hiringCompany}
            {"  -  "}
            {job.city}, {job.country}
          </div>
          <div className="row col-sm-6 d-flex flex-column">
            <h5 className="text-info">Job Description: </h5>
            <p>{job.jobDescription}</p>
          </div>
          <div className="row col-sm-6 d-flex flex-column">
            <h5 className="text-info">Skills Required: </h5>

            <ul>
              {job.skillsList ? job.skillsList.map(s => <li>{s}</li>) : null}
            </ul>
          </div>

          <button className="btn btn-primary mb-5" onClick={this.handleClick}>
            Apply now
          </button>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

JobDetail.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(props => [
    {
      collection: "jobs",
      storeAs: "job",
      doc: props.match.params.id
    }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    job: ordered.job && ordered.job[0]
  }))
)(JobDetail);
