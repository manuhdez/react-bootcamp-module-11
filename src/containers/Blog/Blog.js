import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
// import axios from 'axios';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import './Blog.css';

class Blog extends Component {

  render () {

    // if (this.state.error) { posts = <p style={{textAlign: 'center'}} >Something went wrong!</p>; }

    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li><NavLink
                    to="/"
                    exact
                    activeClassName="active"
                    activeStyle={{textDecoration: 'underline'}}
                    >Home</NavLink>
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
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;