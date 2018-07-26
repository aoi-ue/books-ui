import React, { Component } from "react";

const url = process.env.REACT_APP_BOOKS_API || `http://localhost:3000`;

class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  async componentDidMount() {
    await this.getData();
  }

  async getData() {
    // const getBooks = await fetch(`${url}/books` );
    // const bookList = await getBooks.json();
    this.setState({
      books: [
        {
          title: "Hello",
          _id: "12345"
        }
      ]
    });
  }
  render() {
    return (
      <div>
        {this.state.books.map(book => <li key={book._id}>{book.title}</li>)}
      </div>
    );
  }
}

export default Books;
