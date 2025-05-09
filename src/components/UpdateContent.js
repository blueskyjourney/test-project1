import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,
      contents:''
    };
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }

  inputFormHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    console.log(this.props.data);
    return (
      <article>
        <h2>Update</h2>
        <form action="/update_process" method="post"
          onSubmit={
            (e) =>{
              e.preventDefault(); // prevent default action of anchor tag
              this.props.onSubmit(
                this.state.id,
                this.state.title,
                this.state.desc
              );
            }
          }>
          <input type="hidden" name="id" value={this.state.id}></input>
          <p>
            <input 
              type="text" 
              name="title" 
              placeholder="title" 
              value={this.state.title}
              onChange={this.inputFormHandler}
            ></input>
          </p>
          <p>
            <textarea 
              name="desc" 
              placeholder="description"
              value={this.state.desc}
              onChange={this.inputFormHandler}
            ></textarea></p>
          <p><input type="submit" value="submit"></input></p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;