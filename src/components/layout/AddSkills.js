import React, { Component } from "react";

class AddSkills extends Component {
  state = {
    skillsList: [""]
  };

  onSkillChange = key => e => {
    const newSkillsList = this.state.skillsList.map((skill, skey) => {
      if (skey !== key) return skill;
      skill = e.target.value;
      return skill;
    });
    this.setState({
      skillsList: newSkillsList
    });
    // console.log(this.state.skillsList);
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

  passStateToAddJob = () => {
    const skillsList = this.state;
    this.props.fetchDataFromAddSkills(skillsList);
  };

  render() {
    const skillsUI = this.state.skillsList.map((skill, i) => (
      <li className="list-item mb-1" key={i}>
        <input
          type="text"
          value={skill}
          name="skill"
          onChange={this.onSkillChange(i)}
          className="border border-secondary"
        />
        <i className="fas fa-plus ml-2 text-success" onClick={this.addSkill} />
        <i
          className="fas fa-minus ml-2 text-danger"
          onClick={() => this.deleteSkill(i)}
        />
      </li>
    ));
    return (
      <div>
        <ul className="list-unstyled">{skillsUI}</ul>
      </div>
    );
  }
}

export default AddSkills;
