import React from 'react'
import { recipes as response } from '../../config'
import { apiImageUrl, makeUniformURL } from '../../utils'

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
    const recipeImage = apiImageUrl(recipe.image.data.url)

    return <div className="recipedetails-container">
      <div className="recipedetails-title">{recipe.name}</div>
      <img alt={recipe.name} src={recipeImage} />
      <div>
        <div>Ingredients</div>
        <div dangerouslySetInnerHTML={{ __html: recipe.ingredients }}></div>
      </div>
      <div>
        <div>Directions:</div>
        <div dangerouslySetInnerHTML={{ __html: recipe.directions }}></div>
      </div>
    </div>
  }
}

export default RecipeDetails
