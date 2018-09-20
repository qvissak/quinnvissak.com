import React from 'react'
import { localImageUrl } from '../../utils'

class FilterBar extends React.Component {
  render () {
    const { tags, filterByTags, filter } = this.props
    const removeImage = localImageUrl('/icons/x.svg')

    return <div className="food-app-bar-tags">
      { tags.map(tag =>
        <div key={tag} className="food-app-bar-buttons" onClick={() => filter(tag)}>
          {tag}
          {' '}
          { filterByTags.includes(tag) ? <img alt="x" src={removeImage} className="food-app-bar-buttons-image" /> : null }
        </div>)
      }
    </div>
  }
}

export default FilterBar
