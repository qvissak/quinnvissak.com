import React from 'react'
import { localImageUrl } from '../../utils'

import { colors, email } from '../../config'
import './styles.css'

const styles = { color: colors.white }

class Footer extends React.Component {
  shouldComponentUpdate = () => false

  sendEmail () { document.location = 'mailto:' + email }

  makeIcon = (url, name, path) =>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img className="footer-icons" alt={name} src={localImageUrl(path)} />
    </a>

  render () {
    const emailIcon = localImageUrl('/icons/email.svg')

    return <footer className="footer-container" style={styles}>
      <div className="footer-item">
        code &rarr;
        {this.makeIcon('https://www.github.com/qvissak/quinnvissak.com', 'github', '/icons/github.svg')}
      </div>
      <div className="footer-item">Quinn Vissak &copy; 2020</div>
      <div className="footer-item">
        <a onClick={() => this.sendEmail()}>
          <img className="footer-icons" alt="email" src={emailIcon} />
        </a>
        {this.makeIcon('https://www.facebook.com/quinn.vissak', 'facebook', '/icons/facebook.svg')}
        {this.makeIcon('https://www.linkedin.com/in/quinn-vissak', 'linkedin', '/icons/linkedin.svg')}
      </div>
    </footer>
  }
}

export default Footer
