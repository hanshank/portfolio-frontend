import React from 'react';
import urlFor from './helpers/urlFor';
import axios from 'axios';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      posts: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }


  componentDidMount() {
    const that = this
    fetch('http://localhost:3001/api/v1/posts')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        that.setState({
          isLoaded: true,
          posts: data
        });
      });
  }



  render() {
    const { isLoaded, posts } = this.state;


    if ( isLoaded == true ) {
      return (
        <div>
          {
            posts.map(function (post) {
              return (
                <div>
                  <div>
                    <h1 key={post.id}>{post.title}</h1>
                    <div>{post.content}</div>
                    <a href={post.slug}>Check it out</a>
                  </div>
                </div>
              )
            })
          }
        </div>
      );
    } else {
      return (
        <div>
          {console.log('hello')}
        </div>
      )
    }
  }
}

export default Blog;
