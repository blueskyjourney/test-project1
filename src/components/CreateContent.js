import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
      return (
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post"
            onSubmit={
              function (e) {
                e.preventDefault(); // prevent default action of anchor tag
                this.props.onSubmit(
                  e.target.title.value,
                  e.target.desc.value
                );
              }.bind(this)
            }>
            <input type="hidden" name="id" value="0"></input>
            <p><input type="text" name="title" placeholder="title"></input></p>
            <p><textarea name="desc" placeholder="description"></textarea></p>
            <p><input type="submit" value="submit"></input></p>
          </form>
        </article>
      );
    }
  }

  export default CreateContent;