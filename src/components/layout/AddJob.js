import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

import AddSkills from "./AddSkills";

class AddJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hiringCompany: "",
      jobTitle: "",
      salary: "",
      city: "",
      country: "",
      jobDescription: "",
      skillsList: [""]
    };
  }

  onChange = e => {
    //handle change in user input
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    //Handle form submit request, data should flow into firestore
    const newJob = this.state;
    const { history, firestore } = this.props;

    firestore.add({ collection: "jobs" }, newJob).then(() => history.push("/"));
  };

  // componentDidMount() { //DOESN"T WORK
  //   const { companyName } = this.props.profile;
  //   this.setState({
  //     companyName
  //   });
  //   console.log(companyName);
  // }

  onSkillChange = key => e => {
    const newSkillsList = this.state.skillsList.map((skill, skey) => {
      if (skey !== key) return skill;
      skill = e.target.value;
      return skill;
    });
    this.setState({
      skillsList: newSkillsList
    });
  };

  addSkill = e => {
    e.preventDefault();
    //Add another skill input
    let newSkillsList = [...this.state.skillsList, ""];
    this.setState({
      skillsList: newSkillsList
    });
  };

  deleteSkill = i => {
    //handling delete skill
    if (this.state.skillsList.length > 1) {
      let deletedSkillsList = this.state.skillsList.filter(
        (skill, j) => i !== j
      );
      this.setState({
        skillsList: deletedSkillsList
      });
    } else {
      alert("Pls insert at least one skill!");
    }
  };

  static getDerivedStateFromProps(props, state) {
    const { hiringCompany } = props.profile;
    return { hiringCompany };
  }

  render() {
    const { hiringCompany } = this.state;
    return (
      <div className="row col-md-12 mx-auto">
        <div className="card col-md-10 px-0 mx-auto">
          <h2 className="card-header">Post a job</h2>
          <div className="card-body">
            <form className="d-flex flex-column" onSubmit={this.onSubmit}>
              <div className="row d-flex justify-content-start">
                <div className="form-group col-md-3">
                  <label htmlFor="hiringCompany">Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="hiringCompany"
                    required
                    //this ensure the component starts as a controlled component
                    //& doesn't yield undefined result
                    value={hiringCompany == null ? "" : hiringCompany}
                    readOnly
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="jobTitle">Job Title</label>
                  <input
                    type="text"
                    id="jobTitle"
                    className="form-control"
                    name="jobTitle"
                    required
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="salary">Salary</label>
                  <input
                    type="number"
                    id="salary"
                    className="form-control"
                    name="salary"
                    required
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <h6>Location</h6>
              <div className="row d-flex justify-content-start">
                <div className="form-group col-md-3">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    required
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    name="country"
                    required
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-9">
                  <label htmlFor="jobDescription">Job Description</label>
                  <textarea
                    placeholder="Write your requirement for potential candidate..."
                    className="form-control"
                    id="jobDescription"
                    name="jobDescription"
                    rows="5"
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <h6>Skills Requirement</h6>
                  <AddSkills
                    skills={this.state.skillsList}
                    handleSkillChange={this.onSkillChange}
                    handleAddSkill={this.addSkill}
                    handleDeleteSkill={this.deleteSkill}
                  />
                </div>
              </div>

              <input
                className="btn btn-info mx-auto"
                type="submit"
                value="Post a job"
                onClick={this.onSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddJob.propTypes = {
  // add proptype here
  auth: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }))
)(AddJob);
