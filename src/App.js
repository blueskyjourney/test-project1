/* eslint-disable */ //worning: react-hooks/exhaustive-deps

import React, { Component } from "react";
import TOC2 from "./components/TOC2";
import Subject2 from "./components/Subject2";
import ReadContent from "./components/ReadContent";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      selected_content_id: 4,
      max_content_id: 9,
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

  getReadContent() {
    var i = 0;

    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
        break;
      }
      i++;
    }

  }

  getContent() {
    let _id, _title, _desc, _article = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }
    else if (this.state.mode === "read") {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    }
    else if (this.state.mode === "create") {
      console.log(this.state.contents);
      _article = <CreateContent
        onSubmit={
          (_title, _desc) => {
            var _contents = Array.from(this.state.contents);
            _contents.push({ id: this.state.contents.length + 1, title: _title, desc: _desc });

            //var _contents = this.state.contents.concat({ id: this.state.contents.length + 1, title: _title, desc: _desc });

            this.setState({
              contents: _contents,
              mode: "read",
              selected_content_id: this.state.contents.length + 1
            });
          } 
        }></CreateContent>;
    }
    else if (this.state.mode === "update") {
      console.log("start of update");

      var _content = this.getReadContent();

      _article = <UpdateContent data={_content} onSubmit={
        (_id, _title,_desc) =>{
           var _contents = Array.from(this.state.contents);
          
          var i = 0;

          console.log("before while");

          while (i < _contents.length) {
            if (_contents[i].id === _id) 
            {
              _contents[i].title = _title;
              _contents[i].desc = _desc;
              break;
            }
            i++;
          }
          
          this.setState({
            contents: _contents,
            mode: "read"
          });
        }
        
      }></UpdateContent>;
    }

    return _article;
  }

  render() {
    return (
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

        <Control onChangeMode=
        {
          (_mode) => {
            if(_mode === "delete"){
              if(window.confirm("really?")){
                var _contents = Array.from(this.state.contents);
                var i = 0;
                while (i < _contents.length) {
                  if (_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1); // delete the content. only one content is deleted.
                    break;
                  }
                  i++;
                }
                this.setState({
                  contents: _contents,
                  mode: "welcome"
                });
                alert("deleted!!");
              }
            }
            else{
              this.setState({
                mode: _mode
              });
            }
          }
        }></Control>

        {this.getContent()}
      </div>
    );
  }
}

export default App;
