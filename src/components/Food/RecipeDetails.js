import React from 'react'
import { recipes as response } from '../../config'
import { makeUniformURL } from '../../utils'

import './styles.css'

class RecipeDetails extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      recipe: response.data.find(({ name }) => makeUniformURL(name) === props.match.params.recipe)
    }
  }

  render () {
    const { recipe } = this.state

    return <div className="recipedetails-container">
      <div className="recipedetails-title">{recipe.name}</div>
      <div className="recipedetails-description">{recipe.description}</div>
      <div className="recipedetails-content-container">
        <div className="recipedetails-ingredients">
          <div className="recipedetails-ingredients-text">Ingredients</div>
          <div dangerouslySetInnerHTML={{ __html: recipe.ingredients }}></div>
        </div>
        <div className="recipedetails-directions">
          <span className="recipedetails-directions-text">Directions</span>
          <div dangerouslySetInnerHTML={{ __html: recipe.directions }}></div>
        </div>
      </div>
    </div>
  }
}

export default RecipeDetails
