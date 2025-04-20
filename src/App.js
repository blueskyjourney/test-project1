/* eslint-disable */ //worning: react-hooks/exhaustive-deps

import React, { Component } from "react";
import "./App.css";

import Subject from "./Subject";
import TOC from "./TOC";
import Content from "./Content";

import { useState } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      subject: { title: 'Freshman WEB', sub: 'Freshman world wide web!!!!' },
      welcome: { title: 'Welcome', desc1: 'Hello, React!!', desc2: 'React is a JavaScript library for building user interfaces.' },
      contents: [
        {
          id: 1,
          title: "HTML",
          desc1: "HTML is the standard markup language for Web pages.",
          desc2: "HTML stands for Hyper Text Markup Language",
        },
        {
          id: 2,
          title: "CSS",
          desc1:
            "CSS is a style sheet language used for describing the presentation of a document written in HTML or XML.",
          desc2: "CSS stands for Cascading Style Sheets",
        },
        {
          id: 3,
          title: "JavaScript",
          desc1:
            "JavaScript is a programming language that conforms to the ECMAScript specification.",
          desc2:
            "JavaScript is high-level, often just-in-time compiled, and multi-paradigm.",
        },
        {
          id: 4,
          title: "MasterScript",
          desc1:
            "MasterScript is a programming language that conforms to the ECMAScript specification.",
          desc2:
            "MasterScript is high-level, often just-in-time compiled, and multi-paradigm.",
        },        
      ],
    };
  }
  render() {
    console.log("App render");
    let _title,
      _desc1,
      _desc2 = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc1 = this.state.welcome.desc1;
      _desc2 = this.state.welcome.desc2;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[2].title;
      _desc1 = this.state.contents[2].desc1;
      _desc2 = this.state.contents[2].desc2;
    }

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        />
        <Subject />
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc1={_desc1} desc2={_desc2} />
      </div>
    );
  }
}

/* 
// old blog test page
function App() {
  let post = 'irvine favorite noodle shop';

  let [items, setItems] = useState([
    { id: 1, title: '남자코트 추천', date: '2월 17일 발행' },
    { id: 2, title: '강남 우동맞집', date: '2월 18일 발행' },
    { id: 3, title: '안녕하세요', date: '4월 18일 발행' },
  ]);

  let [like, setLike] = useState(0); 

  

  function changeItem() {
    let copyItems = [...items];
    copyItems[0].title = '여자코트 추천';
    setItems(copyItems);
  }

  function sortItems() {
    let copyItems = [...items];
    // sort() 메서드는 배열을 정렬하고, 그 배열을 반환합니다.
    // sort() 메서드는 기본적으로 문자열을 유니코드 코드 포인트 순서로 정렬합니다.
        copyItems.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });

    setItems(copyItems);
  }


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'skyblue', fontSize: '18px'}}>{post}</h4>
      </div>
      <button onClick={changeItem}>첫번째 아이템 여자코트 추전으로 변경</button>
      <button onClick={sortItems}>가나다순정렬</button>

      {
        items.map(item => (
          <div className='list'>
            <h4>{item.title} <span onClick={()=>{setLike(like+1);console.log(like);}}>👍</span> {like} </h4>
            <p>{item.date}</p>
          </div>
        ))
      }

      <h4 id={post}>{post}</h4>
    </div>
  );
} */

export default App;
