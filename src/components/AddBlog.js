import React from 'react';
import { connect }  from 'react-redux'

function addblog(props){
    console.log(props.target.parentNode.children[1].value);
    console.log(props.target.parentNode.children[3].value);
}

const AddBlog = () => {
    return (
        <div className="addblog">
            <h1>Create blog</h1>
            <input type="text" placeholder="Enter title" />
            <br />
            {/* <p>Enter the blog description</p> */}
            <textarea placeholder="Enter description"></textarea>
            <br />
            <button onClick={addblog}>Add Blog</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        title: state.title,
        description: state.description
    }
}

export default connect(mapStateToProps)(AddBlog);