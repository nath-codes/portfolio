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
      <section id="projects" className="l-section l-section--projects">
        <div className="l-container flex flex--column">
          <h2 className="heading heading--alt heading--projects">Projects</h2>
          <div className="wrapper--projects flex flex--between flex--wrap">
            {projects}
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
