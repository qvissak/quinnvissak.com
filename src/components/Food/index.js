import React from 'react'

import Recipes from './Recipes'

import './styles.css'

class Food extends React.Component {
  render () {
    return <div className="food-container">
      <div className="food-header-container">
        <img className="food-header-img" alt="sushi" src="/images/sushi.jpg" />
        <div className="food-header-title">Food</div>
      </div>
      {/* browse by component */}
      <div className="food-content-container">
        <div className="food-content-container-inner">
          <Recipes />
        </div>
      </div>
    </div>
  }
}

export default Food
