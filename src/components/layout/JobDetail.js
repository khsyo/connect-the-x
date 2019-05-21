import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class JobDetail extends Component {
  handleClick = e => {
    const { job } = this.props;
    console.log(job.title);
  };
  render() {
    const { job } = this.props;

    if (job) {
      return (
        <div className="container">
          <h3>Job Detail</h3>
          <span>Jesus Christ: {job.city} </span>
          <button
            className="btn btn-primary btn-block"
            onClick={this.handleClick}
          >
            Apply now
          </button>
        </div>
      );
    } else {
      return "The job you are looking for is not available";
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
