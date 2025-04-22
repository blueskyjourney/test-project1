import React, { Component } from 'react';

class TOC extends Component {
  render() {
    // console.log('TOC render');
    let lists = [];
    this.props.data.map((data) => {
      lists.push(<li key={data.id}><a 
        href={'#${data.id}'}
        onClick={(e) => {
          e.preventDefault(); // 기본 링크 동작 방지
          this.props.onTocClick(data.id); // 부모 컴포넌트의 함수 호출
        }}>{data.title}</a></li>);
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