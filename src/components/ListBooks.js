import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import Shelf from './Shelf'

class ListBooks extends Component{

  state = {
    books: [] /**,
    library: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    } */
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => { 
        this.setState(() => ({
          books
        }))
      }
      )
  }

  componentDidUpdate(){
    this.buildShelves()
  }
  
  buildShelves(){
    const library = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }

    this.state.books.forEach( (book) => {
        if (book.shelf === "currentlyReading")
        {
          library.currentlyReading.push(book)
        } else if (book.shelf === "wantToRead")
        {
          library.wantToRead.push(book)
        } else if (book.shelf === "read")
        {
          library.read.push(book)
        }
      }
    )

    return library;
  }

  render(){
    const library = this.buildShelves();

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div> 
        <div className="list-books-content">
          {Object.keys(library).map( (bookShelfName) => (
            <div key={bookShelfName}>
              <Shelf shelfName={bookShelfName} shelfContent={library[bookShelfName]}/> 
            </div>
          ))}
        </div>
        
        <div>
          <Link to='/search' className="open-search">
            Add a book
          </Link>
        </div>
      </div>   
    )
  }
}

export default ListBooks
