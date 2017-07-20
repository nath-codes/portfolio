import React from 'react';
import gitHubSvg from '../github.svg';

export default () => (
  <div className="social">
    <a
      href="https://github.com/nath-codes"
      className="social__logo"
      dangerouslySetInnerHTML={{ __html: gitHubSvg }}
    />
  </div>
);
