import React, { Component } from 'react';

export default class DevOps extends Component {
  render() {
    return (
      <section id="devops" className="l-section l-section--devops">
        <div className="l-container flex">
          <article className="article">
            <h2 className="heading heading--alt heading--devops">Dev Ops</h2>
            <div className="copy copy--alt copy--devops">
              <p>
                  I tend to use Vagrant provisioned with Ansible for my local development environment,
                  although I&#39;ve also used Docker and Docker Compose.
              </p>
              <p>
                I use Travis CI for Continous Integration of my personal projects,
                but have also had exposure to other tools such as Jenkins and Codeship.
              </p>
            </div>
          </article>
        </div>
      </section>
    );
  }
}
