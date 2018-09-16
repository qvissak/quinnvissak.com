import React from 'react'

import FoodCard from './FoodCard'

import './styles.css'

class Recipes extends React.Component {
  render () {
    const recipes = this.props.recipes.map((recipe, i) => {
      const classes = { card: 'foodcard-card', media: 'foodcard-media' }
      return <FoodCard key={i} classes={classes} recipe={recipe} />
    })
    return recipes.length > 0
      ? recipes
      : <div className="recipes-no-search-results">Sorry, no search results matching your criteria.</div>
  }
}

export default Recipes
