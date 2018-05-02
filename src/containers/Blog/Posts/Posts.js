import React, {Component} from 'react';
import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: []
  }

  postSelectedHandler= (id) => {
    // this.setState({ selectedPostId: id });
    this.props.history.push(`/posts/${id}`);
  }

  componentDidMount() {
    axios.get('/posts')
    .then( response => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map( post => {
        return { ...post, author: 'Manu'}
      });

      this.setState({posts: updatedPosts});
    })
    .catch( error => this.setState({error: true}));
  }

  render() {

    let posts = this.state.posts.map( post => {
      return (
        // <Link to={`/${post.id}`} >
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        // </Link>
      );
    });

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;