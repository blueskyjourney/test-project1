import React, { Component } from 'react';

class Subject2 extends Component {
  render() {
    return (
      <header>
        <h1><a href="/" onClick={
            function (e) {
                e.preventDefault(); // prevent default action of anchor tag
                console.log("onClick render", this); // e.target is the anchor tag
                console.log(e);
                this.props.onChangePage(); // call onChangePage function passed from App.js
            }.bind(this)
        }>{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject2;