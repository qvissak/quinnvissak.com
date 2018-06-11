import React from 'react'

import { navigation } from '../../config'
import HeaderItem from './HeaderItem'

import './styles.css'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      nav: this.adjustNav()
    }
    this.adjustNavMenu = this.adjustNavMenu.bind(this)
  }

  componentDidMount () {
    window.addEventListener('resize', this.adjustNavMenu)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.adjustNavMenu)
  }

  adjustNav = () =>
    window.innerWidth < 481
      ? navigation.slice(0, navigation.length - 2)
      : navigation

  adjustNavMenu () {
    this.setState({ nav: this.adjustNav() })
  }

  render = () =>
    <div className="header-container">
      { this.state.nav.map((item, i) => <HeaderItem key={i} item={item} />) }
    </div>
}

export default Header
