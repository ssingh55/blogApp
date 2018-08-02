import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as addAction from '../actions/blogActions';
import { bindActionCreators } from 'redux';

class ListBlog extends React.Component {
    componentWillMount() {
        this.props.actions.fetchBlogs();
    }
    deleteBlog = id => {
        console.log(this);
        console.log(id);
        this.props.actions.deleteBlog(id)
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.blog.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={this.props.match.url + '/' + item._id}>
                                    {item.title}
                                </Link>
                                <Link to={`/editblog/${item._id}`}>
                                    <button>Edit Blog</button>
                                </Link>
                                <button onClick={()=>this.deleteBlog(item._id)}>Delete</button>
                            </li>
                        )
                    })}
                </ul>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        blog: state.blog
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(addAction, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ListBlog);