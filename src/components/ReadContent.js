import React, { Component } from 'react';

class ReadContent extends Component {
    render() {
        // console.log("Content2 render");
      return (
        <article>
          <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p>
        </article>
      );
    }
  }

  export default ReadContent;