import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    this.getData("");
  }

  getData = async search => {
    const url =
      process.env.REACT_APP_BOOKS_API || `http://localhost:3000/books`;
    const getBooks = await fetch(url);
    const bookList = await getBooks.json();
    this.setState({
      books: bookList
    });
  };

  render() {
    return (
      <div>
        {this.state.books.map((book, id) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </div>
    );
  }
}

export default App;
