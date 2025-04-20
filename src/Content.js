import React, { Component } from 'react';

class Content extends Component {
  render() {
    console.log('Coponent render');
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>{this.props.desc1}</p>
        <p>{this.props.desc2}</p>
      </article>
    );
  }
}

export default Content;