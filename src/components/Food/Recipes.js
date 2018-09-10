import React from 'react'
// import { apiFetch } from '../../utils'
// import { apiUri } from '../../config'
import { recipes } from '../../config'

import FoodCard from './FoodCard'

import './styles.css'

class Recipes extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      recipes: []
    }
  }

  componentDidMount () {
    this.getRecipes()
  }

  async getRecipes () {
    // const response = await apiFetch(apiUri.recipes.pathname)
    // this.setState({ recipes: response.data })
    this.setState({ recipes: recipes.data })
  }

  render () {
    const recipes = this.state.recipes.map((recipe, i) => {
      const classes = { card: 'foodcard-card', media: 'foodcard-media' }
      return <FoodCard key={i} classes={classes} recipe={recipe} />
    })

    return recipes
  }
}

export default Recipes
