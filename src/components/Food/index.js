import React from 'react'
import { localImageUrl } from '../../utils'
import { recipes as response } from '../../config'

import FilterBar from './FilterBar'
import Recipes from './Recipes'

import './styles.css'

class Food extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      recipes: [],
      tags: [],
      filterByTags: []
    }
  }

  componentDidMount () {
    this.getRecipes()
  }

  async getRecipes () {
    this.setState({
      recipes: response.data,
      tags: response.data.reduce((arr, recipe) => {
        recipe.tags.forEach(tag => {
          if (!arr.includes(tag)) {
            arr.push(tag)
          }
        })
        return arr
      }, [])
    })
  }

  filter = (tag) => {
    if (!this.state.filterByTags.includes(tag)) {
      this.setState({ filterByTags: this.state.filterByTags.concat(tag) })
    } else {
      const indexToRemove = this.state.filterByTags.indexOf(tag)
      this.state.filterByTags.splice(indexToRemove, 1)
      this.setState({ filterByTags: this.state.filterByTags })
    }
  }

  render () {
    const sushiImage = localImageUrl('/images/sushi.jpg')
    // filter recipes by tags
    const recipes = this.state.filterByTags.length > 0
      ? this.state.recipes.filter(recipe => this.state.filterByTags.every(tag => recipe.tags.split(',').includes(tag)))
      : this.state.recipes

    return <div className="food-container">
      {/* sushi image header */}
      <div className="food-header-container">
        <img className="food-header-img" alt="sushi" src={sushiImage} />
        <div className="food-header-title">Food</div>
      </div>
      {/* browse by component */}
      <div className="food-app-bar-container">
        <div className="food-app-bar-header">
          <b>Filter</b>
          <span style={{ color: '#696969' }}> - {recipes.length} {recipes.length === 1 ? 'item' : 'items'}</span>
        </div>
        <FilterBar tags={this.state.tags} filterByTags={this.state.filterByTags} filter={this.filter} />
      </div>
      {/* recipe components */}
      <div className="food-content-container">
        <div className="food-content-container-inner">
          <Recipes recipes={recipes} />
        </div>
      </div>
    </div>
  }
}

export default Food
