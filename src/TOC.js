import React, { Component } from 'react';

class TOC extends Component {
  render() {
    console.log('TOC render');
    let lists = [];
    this.props.data.map((data) => {
      lists.push(<li key={data.id}><a href={"/content/"+data.id}>{data.title}</a></li>);
    })
     
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;