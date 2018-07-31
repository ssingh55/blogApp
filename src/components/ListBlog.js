import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        blog: state.blog
    }
}

class ListBlog extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.blog.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={this.props.match.url + '/' + item.id}>
                                    {item.title}
                                </Link>
                                <Link to={`/allblogs/${item.id}`}>
                                    <button>Edit</button>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div >
        )
    }
}


export default connect(mapStateToProps)(ListBlog);