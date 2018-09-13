import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class Postform extends Component {
  state = {
    title: "",
    body: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const post = { title: this.state.title, body: this.state.body };

    this.props.createPost(post);
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Add Post</h1>
        <div>
          <label>Title:</label>
          <br />
          <input
            className="form-control"
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.state.title}
          />
        </div>
        <br />
        <div>
          <label>Body:</label>
          <br />
          <textarea
            name="body"
            onChange={this.onChange}
            value={this.state.body}
            className="form-control"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary btn-l m-2">
          Submit
        </button>
      </form>
    );
  }
}

Postform.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(Postform);
