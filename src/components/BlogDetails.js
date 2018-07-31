import React from 'react';
import { connect } from 'react-redux';

class BlogDetails extends React.Component {
    render() {
        let filter = 0
        this.props.blog.map((item) => {
            // console.log(item.id+' '+this.props.match.params.id)
            if(item.id==this.props.match.params.id)
                filter = item
        })
        return (
            
            <div>
                {console.log(filter)}
                <p>{filter.title}</p>
                <p>{filter.description}</p>
                

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