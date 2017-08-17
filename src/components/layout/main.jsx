import React from 'react';
import Hero from '../sections/hero';
import About from '../sections/about';
import Projects from '../sections/projects';
import Frontend from '../sections/frontend';
import Backend from '../sections/backend';
import Contact from '../sections/contact';
import DevOps from '../sections/devops';
import projects from '../../data/projects';

export default () => (
  <main className="l-main">
    <Hero />
    <About />
    <Projects projects={projects} />
    <Frontend />
    <Backend />
    <DevOps />
    <Contact />
  </main>
);

