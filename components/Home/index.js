import React, {useCallback, useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import useApi from '../../utils/hooks/useApi';
import * as commentsService from '../../utils/api/comments';
import Comments from '../Comments';
import AddComment from '../AddComment';


const Home = () => {
  const [loading, fetchComments] = useApi(commentsService.get);
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [showMoreActive,setShowMoreActive] = useState(true);

  useEffect(() => {
    fetchComments(page).then((res) => {
      setPage(page + 1);
      setComments(res);
    });
  }, [fetchComments]);

  const showMore = useCallback(() => {
    const oldComments = [...comments];
    fetchComments(page).then((res) => {
      if(res.length > 0){
        setComments(oldComments.concat(res));
        setPage(page +1);
      } else {
        setShowMoreActive(false);
      }
    });
  },[comments, fetchComments, page]);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          STEPS COMMENTS
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <AddComment />
        {comments?.length > 0 ? <Comments showMoreActive={showMoreActive} showMore={showMore} comments={comments} /> : <p>LOADING</p> }
      </Container>
    </>
  );
};

export default Home;
