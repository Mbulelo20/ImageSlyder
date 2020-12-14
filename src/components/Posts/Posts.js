import React from 'react'
import {useSelector} from 'react-redux'
import Carousel from 'react-material-ui-carousel'
import Post from './Post/Post.js';

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    console.log(posts)
    
    return (
            <Carousel style={{marginTop: '100em'}}>
                {posts.map((post) => (
                    <Post post={post} />
                ))}
            </Carousel> 
            );
}

export default Posts;