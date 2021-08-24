import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import Shelf from './Shelf'

class ListBooks extends Component{

  state = {
    books: []
  }

  componentDidMount() {
    /**
     * When the component mounts, we trigger the API call to retreive the books of the
     * user's library. We pool all of them into the books which is the state of the ListBooks
     * component.
    */

    BooksAPI.getAll()
      .then((books) => { 
        this.setState(() => ({
          books
        }))
      }
      )
  }

  removeBook = (book) => {
    this.setState((currentState) => ({
      books: currentState.books.filter((c) => {
        return c.id !== book.id
      })
    }))

    BooksAPI.update(book,{})
  }

  /**
   * This function is used to build the library by organizing the books
   * into their corresponding shelves. The books are accessed through the
   * state books.
   * 
   * @returns the functions return the library object which has three arrays one for each shelf.
   */
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

    // First, we organize the books into their corresponding shelves.
    const library = this.buildShelves();

    /**
     * Then we use the Shelf Component to build the shelf.
     * We also have the Add button which routes us to the search page.
    */
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div> 
        <div className="list-books-content">
          {Object.keys(library).map( (bookShelfName) => (
            <div key={bookShelfName}>
              <Shelf 
                shelfName={bookShelfName} 
                shelfContent={library[bookShelfName]}
                onDeleteBook={this.removeBook}
                onUpdateShelves={this.props.onUpdateShelves}
              /> 
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
