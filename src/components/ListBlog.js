import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListBlog extends React.Component {
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
                                <Link to={`/allblogs/${item._id}`}>
                                    <button>Edit</button>
                                </Link>
                                <button onClick={this.deleteItem}>Delete</button>
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

export default connect(mapStateToProps)(ListBlog);