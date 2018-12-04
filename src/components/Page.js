import React, { Component } from 'react';

class Page extends Component {
  render() {
    return (
      <div>
      <h1>Page</h1>
      {this.props.page}
      </div>
    );
  }
}

export default Page;
