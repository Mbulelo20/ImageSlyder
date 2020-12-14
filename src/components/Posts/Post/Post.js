import React, { Fragment } from 'react';
import { Card,CardMedia, Typography } from '@material-ui/core/';

import makeStyles from './styles';

const Post = ({ post }) => {
    const classes = makeStyles();
    
    return (
        <Fragment>
            <Card className={classes.card}>
                <CardMedia className={classes.cardImage} image={post.picture} title={post.title}>
                    <Typography className={classes.info}>
                        {post.title}
                    </Typography>
                </CardMedia>
            </Card>
        </Fragment>
    )
}
export default Post;
