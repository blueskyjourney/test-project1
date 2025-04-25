import React, { Component } from 'react';

class TOC2 extends Component {
  shouldComponentUpdate(newProps, newState) {
    // console.log("TOC2 render", newProps.data, this.props.data);
    if (this.props.data === newProps.data) {
      //console.log("TOC2 render false", newProps.data, this.props.data);
      return false; // no update
    }
    else {
      //console.log("TOC2 render true", newProps.data, this.props.data);
      return true; // update
    }
  }

  render() {
    let toclist = this.props.data.map((content) => {
        return (
            <li key={content.id}>
            <a href={"/content/" + content.id + ".html"} 
                onClick={(e)=>{
                    // debugger; // for debugging
                    e.preventDefault(); // prevent default action of anchor tag
                    this.props.onChangePage(content.id); // call onChangePage function passed from App.js
                }}>{content.title}</a>
            </li>   
        );
    });
    return (
      <nav>
        <ul>
            {toclist}
        </ul>
      </nav>
    );
  }
}

export default TOC2;