import React, {useEffect} from 'react';
import {Container,Grow, Grid} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import { getPosts } from './actions/posts'
import Postaction from './components/PostAction/Postaction.js'
import Posts from './components/Posts/Posts.js'
const App = () =>{
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      
      <Grow in>
        <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            
            <div style={{marginTop: '8em', height: '100%', width: '50%'}}>
            <div valign="middle" align="center"><p>might take a while to load...</p></div>
              <Posts  />
            </div>
            <Grid item xs={12} sm={4}>
              <Postaction />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App