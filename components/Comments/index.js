import React, {useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {timeSince} from '../../helpers';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  showMoreBtn: {
    textAlign: 'center'
  },
  role: {
    fontSize: '12px',
    borderRight: '1px solid grey',
    paddingRight: '5px',
    paddingLeft: '5px'
  },
  date: {
    fontSize: '12px',
    color: 'gray',
    paddingLeft: '5px'
  },
  commentText: {
    margin: '0',
  }
}));

const Comments = ( {showMoreActive, showMore, comments }) => {
  const classes = useStyles();

  const renderComment = useCallback((comment) => {
    return (
      <div key={comment.id}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Username" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  <span>
                    <strong>
                      {comment.username}
                    </strong>
                    {comment?.role === 'Moderator' && (<span className={classes.role}>
                      Moderator
                    </span>)}
                    <span className={classes.date}>
                      {timeSince(comment?.date)}
                    </span>
                  </span>
                </Typography>
                <Typography
                  component="p"
                  variant="body2"
                  className={classes.commentText}
                  color="textPrimary"
                >
                  {comment.text}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </div>
    );
  },[]);

  return (
    <>
      <List className={classes.root}>
        {comments.map(renderComment)}
      </List>
      {showMoreActive && (<Grid className={classes.showMoreBtn} item xs={12}>
        <Button onClick={showMore} variant="contained" color="primary" disableElevation>
                Show more
        </Button>
      </Grid>)}
    </>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
  showMore: PropTypes.func,
  showMoreActive: PropTypes.bool
};

export default Comments;
