import React from 'react'
import { localImageUrl } from '../../utils'

import Recipes from './Recipes'

import './styles.css'

class Food extends React.Component {
  render () {
    const sushiImage = localImageUrl('/images/sushi.jpg')

    return <div className="food-container">
      <div className="food-header-container">
        <img className="food-header-img" alt="sushi" src={sushiImage} />
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
