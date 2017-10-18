import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import ListSubheader from 'material-ui/List/ListSubheader'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import InboxIcon from 'material-ui-icons/MoveToInbox'
import DraftsIcon from 'material-ui-icons/Drafts'
import SendIcon from 'material-ui-icons/Send'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import StarBorder from 'material-ui-icons/StarBorder'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
})

class NestedList extends React.Component {
  state = { open: true }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render () {
    const { classes } = this.props
    return (
      <List className={classes.root} subheader={<ListSubheader>Premium Membership Benefits</ListSubheader>}>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary='Dial In A Drink' />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} transitionDuration='auto' unmountOnExit>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText inset primary='Dairy vs Non-Dairy' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText inset primary='Sweet vs Not-So-Sweet' />
          </ListItem>
        </Collapse>

        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary='Keep Track' />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} transitionDuration='auto' unmountOnExit>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText inset primary='See Previous Drinks' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText inset primary='Rank Your Favorites' />
          </ListItem>
        </Collapse>
      </List>
    )
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NestedList)
