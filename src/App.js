/* eslint-disable */ //worning: react-hooks/exhaustive-deps

import React, { Component } from "react";
import TOC2 from "./components/TOC2";
import Subject2 from "./components/Subject2";
import ReadContent from "./components/ReadContent";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "create",
      selected_content_id: 4,
      subject: { title: "WEB", sub: "world wide web!!!" },
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText Markup Language" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
        { id: 4, title: "React", desc: "React is for UI" },
        { id: 5, title: "Node", desc: "Node is for server" },
        { id: 6, title: "Express", desc: "Express is for web server" },
        { id: 7, title: "MongoDB", desc: "MongoDB is for database" },
        { id: 8, title: "MySQL", desc: "MySQL is for database" },
        { id: 9, title: "PostgreSQL", desc: "PostgreSQL is for database" },
      ]
    };
  }
  render() {
    // console.log("App render");
    let _title, _desc, _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }
    else if (this.state.mode === "read") {
      var i = 0;

      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      } 
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }
    else if (this.state.mode === "create") {
        _article = <CreateContent 
        onSubmit={(_title, _desc) => { 
          console.log(_title, _desc);  

          // this.state.contents.push는 원본을 변경 - 비추
          //var _contents = this.state.contents.push({id: this.state.contents.length + 1, title: _title, desc: _desc});

          // this.state.contents.concat는 새로운 배열을 만들어서 원본을 변경하지 않음 - 추천
          var _contents = this.state.contents.concat({id: this.state.contents.length + 1, title: _title, desc: _desc});

        

          this.setState({
            contents: _contents
          });
        }
      }></CreateContent>;
    }

    // console.log('render', this);

    return(
    <div className="App">
      <Subject2 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}
        onChangePage={() => {
          console.log("onChangePage render", this); // e.target is the anchor tag
          console.log(this.state.mode);
           this.setState({ mode: "welcome" });
        }}
      >
      </Subject2>
      <TOC2 data={this.state.contents} onChangePage={
        (id) => {
          this.setState({ 
            mode: "read",
            selected_content_id: Number(id) // convert string to number
          });
        }
      }></TOC2>

      <Control onChangeMode={(_mode)=>{
        this.setState({
          mode: _mode
        });
      }}></Control>

      {_article}
    </div>
    );
  }
}

export default App;
