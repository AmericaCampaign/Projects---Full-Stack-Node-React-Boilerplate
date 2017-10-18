import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
}

function SimpleMediaCard (props) {
  const { classes } = props
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image='http://bit.ly/2yIaA8N'
          title='PSL'
        />
        <CardContent>
          <Typography type='headline' component='h2'>
            Pumpkin Spice Latte
          </Typography>
          <Typography component='p'>
            Dairy or Non-Dairy
          </Typography>
          <Typography component='p'>
            Sweet or Not-Sweet
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color='primary'>
            Share
          </Button>
          <Button dense color='primary'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleMediaCard)
