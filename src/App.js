import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import AddBlog from "./components/AddBlog";
import BlogDetails from "./components/BlogDetails";
import ListBlog from "./components/ListBlog";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import configureStore from './store/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Navigation />
            <Provider store={store}>
            <Switch>
              <Route path="/" component={AddBlog} exact />
              <Route path="/blogdetails" component={BlogDetails} />
              <Route path="/listblog" component={ListBlog} />
              <Route component={Error} />
            </Switch>
          </Provider>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;