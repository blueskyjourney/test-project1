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
      mode: 'read',
      selectContentId: null, // 선택된 컨텐츠 ID
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
        {
          id: 5,
          title: "JasonScript",
          desc1:
            "JasonScript is test only.",
          desc2:
            "JasonScript is the best in the world",
        },        
      ],
    };
  }

  handleTocClick = (id) => {
    console.log('TOC item clicked:', id);
    // id를 기반으로 mode를 "read"로 변경하고, 선택된 컨텐츠 ID를 설정합니다.
    this.setState({
      mode: "read",
      selectContentId: id,
    },
    () => {
      console.log('State updated:', this.state.mode, this.state.selectContentId);
    });
    
  };

  render() {
    // console.log("App render");
    let _title, _desc1, _desc2 = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc1 = this.state.welcome.desc1;
      _desc2 = this.state.welcome.desc2;
    } else if (this.state.mode === "read") {
      const selectedContent = this.state.contents.find(
        (content) => content.id === this.state.selectContentId
      );
      _title = selectedContent ? selectedContent.title : '';
      _desc1 = selectedContent ? selectedContent.desc1 : '';
      _desc2 = selectedContent ? selectedContent.desc2 : '';
    }

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        />
        <Subject />
        <TOC data={this.state.contents} onTocClick={this.handleTocClick}></TOC>
        <Content title={_title} desc1={_desc1} desc2={_desc2} />
      </div>
    );
  }
}

export default App;
