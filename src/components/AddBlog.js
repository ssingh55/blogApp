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

    componentDidMount(){
        // console.log(this.props.match.params.id)
        // console.log(this.props.blog)
        if(this.props.match.params.id!==undefined)
            {
                console.log('inside')
                let nextBlog = {};
                nextBlog.title = this.props.blog[0].title;
                nextBlog.description = this.props.blog[0].description;
                this.setState({
                    nextBlog
                })
            }
    }

    updateBlogState(field, event) {
        let nextBlog = Object.assign({}, this.state.nextBlog);
        nextBlog[field] = event.target.value;

        this.setState({
            nextBlog: nextBlog
        })
    }

    //addBlog
    addblog(event) {
        // console.log('ADD blog', this.state.nextBlog)
        if (this.state.nextBlog.title !== '' && this.state.nextBlog.description !== '')
            this.props.createBlogItem(this.state.nextBlog);

        //empty the text boxes using state
        let nextBlog = {};
        nextBlog.title = '';
        nextBlog.description = '';
        this.setState({
            nextBlog: nextBlog
        })
    }

    render() {
        return (
            <div className="addblog">
                <h1>Create blog</h1>
                <input type="text" placeholder="Enter title" value={this.state.nextBlog.title} onChange={this.updateBlogState.bind(this, 'title')} />
                <br />
                {/* <p>Enter the blog description</p> */}
                <textarea placeholder="Enter description" value={this.state.nextBlog.description} onChange={this.updateBlogState.bind(this, 'description')}></textarea>
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