import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddBlog from "./components/AddBlog";
import BlogDetails from "./components/BlogDetails";
import ListBlog from "./components/ListBlog";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Blog from "./components/Blog";

class App extends Component {
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

export default App;