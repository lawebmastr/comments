import React, {useCallback, useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import useApi from '../../utils/hooks/useApi';
import * as commentsService from '../../utils/api/comments';

const AddComment = () => {
  const [loading, sendMessageText] = useApi(commentsService.post);
  const [commentText, setCommentText] = useState('');

  const changeCommentText = useCallback((e) => {
    setCommentText(e.target.value);
  },[]);

  const sendMessage = useCallback((e) => {
    e.preventDefault();
    sendMessageText({text: commentText});
  },[commentText]);

  return (
    <Grid style={{ paddingRight: '15px', paddingLeft: '15px', paddingTop: '30px' }} container>
      <form style={{width: '100%',}} onSubmit={sendMessage} action="">
        <Grid item xs={12}>
          <textarea required style={{width: '50%', resize: 'none',   padding: '10px', border: '1px solid #ced4da', borderRadius: '.25rem',}} onChange={changeCommentText} rows="6" placeholder={'Enter your comment'} />
        </Grid>
        <Grid item xs={12}>
          <Button type={'submit'} variant="contained" color="primary" disableElevation>
            Send
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default AddComment;
