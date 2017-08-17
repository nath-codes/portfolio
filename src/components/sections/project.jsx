import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Project extends Component {

  getTags() {
    const { tags } = this.props.project;
    return tags.map(tag => <li key={tag}>{tag}</li>);
  }

  render() {
    const { title, img, url } = this.props.project;
    const tags = this.getTags();

    return (
      <a href={url} className="project" key={url}>
        <img
          src={img}
          className="project__img"
          alt={`Screenshot of ${title} website`}
        />
        <div className="project__meta">
          <div className="project__title">{title}</div>
          <ul className="projects__tags">{tags}</ul>
        </div>
      </a>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
