import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Project extends Component {

  getImageSrcSet() {
    const { srcset } = this.props.project;
    return srcset.map(src => `${CDN}/img/${src.img} ${src.width}w`);
  }

  render() {
    const { title, url, img } = this.props.project;
    const srcset = this.getImageSrcSet();

    return (
      <a href={url} className="project" key={url}>
        <div className="project__meta">
          <div className="project__title">{title}</div>
        </div>
        <div className="project__hero">
          <div className="wrapper wrapper--project-button flex flex--column flex--centered">
            <div className="button button--project">Visit Site</div>
          </div>
          <div className="overlay overlay--project" />
          <img
            src={`${CDN}/img/${img}`}
            srcSet={srcset}
            className="project__img"
            alt={`Screenshot of ${title} website`}
          />
        </div>

      </a>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
