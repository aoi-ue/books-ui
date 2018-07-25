import React, { Component } from "react";

const url = process.env.REACT_APP_BOOKS_API || `http://localhost:3000`;

class Author extends Component {
  constructor() {
    super();
    this.state = {
      authors: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const getAuthor = await fetch(`${url}/authors`);
    const authorList = await getAuthor.json();
    this.setState({
      authors: authorList
    });
  }

  render() {
    return (
      <div>
        {this.state.authors.map(author => <li key={author._id}>{author.name}</li>)}
      </div>
    );
  }
}

export default Author;
