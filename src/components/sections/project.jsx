import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Project extends Component {

  getTags() {
    const { tags } = this.props.project;
    return tags.map(tag => <li className="project__tag" key={tag}>{tag}</li>);
  }

  render() {
    const { title, img, url } = this.props.project;
    const tags = this.getTags();

    return (
      <a href={url} className="project link" key={url}>
        <div className="project__img">
          <div className="wrapper wrapper--project-button">
            <div className="button button--project">Visit Site</div>
          </div>
          <div className="overlay overlay--project" />
          <img
            src={img}
            alt={`Screenshot of ${title} website`}
          />
        </div>
        <div className="project__meta">
          <div className="project__title">{title}</div>
          <ul className="project__tags">{tags}</ul>
        </div>
      </a>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
