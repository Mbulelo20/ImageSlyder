import React, {useState} from 'react'
import { TextField, Button} from '@material-ui/core';
import FileBase from 'react-file-base64'
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { makePost } from '../../actions/posts.js';

const Postaction = () => {
    const [postData, setPostData] = useState({
        title: '', picture:''
    })
    const classes = useStyles();
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        var ourData = { title: postData.title, picture: postData.picture.base64}
        console.log("handler-data" , ourData)
        dispatch(makePost(ourData))
        // console.log(ourData)
    }
    return (            
            <form autoComplete="off" noValidate className={`${classes.form} ${classes.form}`}>
            
                <TextField fullWidth name="title" value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})}></TextField>
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple= {false}
                        onDone= {(base64) => setPostData({...postData, picture: base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} color="primary" varient="cointaned" size="large" type="button" onClick={handleSubmit}>Save</Button>
            </form>
    )
}
export default Postaction;