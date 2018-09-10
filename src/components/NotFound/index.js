import React from 'react'

import './styles.css'

class NotFound extends React.Component {
  render = () =>
    <div className="not-found-container">
      <div>404</div>
      <div>Sorry, the page {this.props.location.pathname} is elusive.</div>
    </div>
}

export default NotFound
