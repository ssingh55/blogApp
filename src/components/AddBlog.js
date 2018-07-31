import React from 'react';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux';
import actions from '../actions';

class AddBlog extends React.Component {
    constructor() {
        super();
        this.state = {
            nextBlog: {
                title: '',
                description: ''
            }
        }
        this.addblog = this.addblog.bind(this);
    }

    updateBlog(field, event) {
        let nextBlog = Object.assign({}, this.state.nextBlog);
        nextBlog[field] = event.target.value;

        this.setState({
            nextBlog: nextBlog
        })
    }

    //addBlog
    addblog(event) {
        // console.log(event.target.parentNode.children[1].value);
        // console.log(event.target.parentNode.children[3].value);
        console.log('ADD blog', this.state.nextBlog)
        this.props.createBlogItem(this.state.nextBlog)
    }

    render() {
        return (
            <div className="addblog">
                <h1>Create blog</h1>
                <input type="text" placeholder="Enter title" value={this.state.nextBlog.title} onChange={this.updateBlog.bind(this, 'title')} />
                <br />
                {/* <p>Enter the blog description</p> */}
                <textarea placeholder="Enter description" value={this.state.nextBlog.description} onChange={this.updateBlog.bind(this, 'description')}></textarea>
                <br />
                <button onClick={this.addblog}>Add Blog</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        blog: state.blog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBlogItem: (blog) => dispatch(actions.createBlogItem(blog))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBlog);