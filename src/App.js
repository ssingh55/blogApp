import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import AddBlog from "./components/AddBlog";
import BlogDetails from "./components/BlogDetails";
import ListBlog from "./components/ListBlog";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Blog from "./components/Blog";

class App extends Component {
  componentDidMount() {
    fetch('/api/blogs', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(function (data) {
        return data.json();
      })
      .then((req) => {
        console.log(req)
        console.log(this)
        this.props.dispatch({
          type: "SETSTATE",
          payload: req
        })
      })
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={AddBlog} exact />
            <Route path="/allblogs/:id" component={AddBlog} exact />
            <Route path="/listblog/:id" component={BlogDetails} />
            <Route path="/listblog" component={ListBlog} />
            <Route path="/allblogs" component={Blog} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      blog: state.blog
  }
}

export default connect(mapStateToProps)(App);