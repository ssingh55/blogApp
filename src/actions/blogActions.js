import {UPDATE_BLOG, SINGLE_BLOG, DELETE_BLOG, FETCH_BLOGS, NEW_BLOG } from './constants';
import axios from 'axios';

// fetch all blogs
export const fetchBlogs = () => dispatch => {
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

export const blogInput = (blogData) => dispatch => {
    axios.post(`/api/blogs`,{
        data: blogData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(myJson => {
        console.log("blog23", myJson)
        dispatch({
            type: NEW_BLOG,
            data: myJson.data
        });
    })
}


// update blog
export const updateBlog = (id, blogData) => dispatch => {
    axios.put(`/api/blogs/` + id,{
        data: {
            description: blogData
        },
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(myJson => {
        dispatch({
            type: UPDATE_BLOG,
            data: myJson.data
        });
    })
}


// delete blog
export const deleteBlog = (id) => dispatch => {
    console.log('delete')
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

// Search single blog
export const singleBlog = (id) => dispatch => {
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
