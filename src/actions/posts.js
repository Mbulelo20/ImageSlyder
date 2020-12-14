import * as api from '../api/index.js'

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}


export const makePost = (post) => async (dispatch) => {
    try {
            const { data } = await api.makePost(post);
            dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error)
    }
}