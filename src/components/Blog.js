import React from 'react';
import { connect } from 'react-redux';

class BlogDetails extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {console.log(this.props.blog)}
                    {this.props.blog.map((item) => {
                       return( <li>
                            <span>{item.title}</span>
                            <span> {item.description} </span>
                            {/* <button>x</button> */}
                        </li>
                       )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        blog: state.blog
    }
}

export default connect(mapStateToProps)(BlogDetails);