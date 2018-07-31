import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddBlog from "./components/AddBlog";
import BlogDetails from "./components/BlogDetails";
import ListBlog from "./components/ListBlog";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Navigation />
            <Switch>
              <Route path="/" component={AddBlog} exact />
              <Route path="/blogdetails" component={BlogDetails} />
              <Route path="/listblog" component={ListBlog} />
              <Route component={Error} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;