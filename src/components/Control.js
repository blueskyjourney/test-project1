import React from "react";

class Control extends React.Component {
  render() {
    return (
      <div className="Control">
        <input
          type="button"
          value="create"
          onClick={function (e) {
            e.preventDefault(); // prevent default action of anchor tag
            this.props.onChangeMode("create");
          }.bind(this)}
        ></input>
        <input
          type="button"
          value="update"
          onClick={function (e) {
            e.preventDefault(); // prevent default action of anchor tag
            this.props.onChangeMode("update");
          }.bind(this)}
        ></input>
        <input
          type="button"
          value="delete"
          onClick={function (e) {
            e.preventDefault(); // prevent default action of anchor tag
            this.props.onChangeMode("delete");
          }.bind(this)}
        ></input>
      </div>
    );
  }
}
export default Control;