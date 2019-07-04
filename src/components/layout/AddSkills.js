import React, { Component } from "react";

class AddSkills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const skillsUI = this.props.skills.map((skill, i) => (
      <li className="list-item mb-1" key={i}>
        <input
          type="text"
          value={skill}
          name="skill"
          onChange={this.props.handleSkillChange(i)}
          className="border border-secondary"
        />
        <i
          className="fas fa-plus ml-2 text-success"
          onClick={this.props.handleAddSkill}
        />
        <i
          className="fas fa-minus ml-2 text-danger"
          onClick={() => this.props.handleDeleteSkill(i)}
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
