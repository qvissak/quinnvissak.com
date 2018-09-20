import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { apiImageUrl, makeUniformURL } from '../../utils'

import './styles.css'

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}

class FoodCard extends React.Component {
  render () {
    const { classes, recipe: { name, description, image } } = this.props
    const uri = apiImageUrl(image.data.url)

    return <Card className={classes.card} style={{ maxWidth: 'initial' }}>
      <Link to={`/quinnvissak.com/food/${makeUniformURL(name)}`} style={{ textDecoration: 'none' }}>
        <CardMedia className={classes.media} image={uri} />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="headline" component="h2">{name}</Typography>
          <Typography component="p">{description}</Typography>
        </CardContent>
      </Link>
    </Card>
  }
}

export default withStyles(styles)(FoodCard)
