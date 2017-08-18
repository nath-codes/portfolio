import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Project from './project';

class Projects extends Component {

  getProjects() {
    return this.props.projects.map(project => <Project project={project} key={project.url} />);
  }

  render() {
    const projects = this.getProjects();

    return (
      <section className="l-section l-section--projects">
        <div className="l-container">
          <div className="l-section__inner l-section__inner--projects">
            <h2 className="heading">Projects</h2>
            <div className="wrapper--projects">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;
