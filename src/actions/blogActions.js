import {UPDATE_BLOG, SINGLE_BLOG, DELETE_BLOG, FETCH_BLOGS, NEW_BLOG } from './constants';
import axios from 'axios';

// fetch all posts
export const fetchPosts = () => dispatch => {
    axios.get(`/api/blogs`)
        .then(myJson => {
            dispatch({
                type: FETCH_BLOGS,
                data: myJson.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
}



export const PostInput = (postData) => dispatch => {
    axios.post(`/api/blogs`,{
        data: postData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(myJson => {
        dispatch({
            type: NEW_BLOG,
            data: myJson.data
        });
    })
}


// update post
export const updatePost = (id, postData) => dispatch => {
    axios.put(`/api/blogs/` + id,{
        data: {
            description: postData
        },
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(myJson => {
        dispatch({
            type: UPDATE_BLOG,
            data: myJson.data
        });
    })
}


// delete post
export const deletePost = (id) => dispatch => {
    axios.delete(`/api/blogs/` + id)
        .then(myJson => {
            dispatch({
                type: DELETE_BLOG,
                data: myJson.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
}

// Search single post
export const singlePost = (id) => dispatch => {
    axios.get(`/api/blogs/` + id)
        .then(myJson => {
            dispatch({
                type: SINGLE_BLOG,
                data: myJson.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
}
