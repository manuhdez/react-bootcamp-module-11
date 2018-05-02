import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import axios from 'axios';
import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));
// import FullPost from './FullPost/FullPost';

class Blog extends Component {

  state = {
    auth: true
  }

  render () {
    // if (this.state.error) { posts = <p style={{textAlign: 'center'}} >Something went wrong!</p>; }

    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li><NavLink
                    to="/posts"
                    exact
                    activeClassName="active"
                    activeStyle={{textDecoration: 'underline'}}
                    >Posts</NavLink>
              </li>
              <li>
                <NavLink to={{
                  pathname: "/new-post",
                  hash: '#submit',
                  search: '?quick-submit=true'
                  }}>New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/*<Route path="/" exact render={() => <Posts />} />*/}
        <Switch>
          { this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null }
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Page not found</h1>} />
          {/*<Redirect from="/" to="/posts" />*/}
        </Switch>
      </div>
    );
  }
}

export default Blog;