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
    const getBooks = await fetch(
      `http://localhost:3000/books`
    );
    const bookList  = await getBooks.json();
    this.setState({
      books: bookList
    })
  };

  render() {
    return <div>
    {this.state.books.map((book,id) => 
      <li key={book._id}> 
      {book.title} 
      </li>)}</div>;
  }
}

export default App;
