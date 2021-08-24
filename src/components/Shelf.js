import React, { Component } from 'react'
import BookCard from './BookCard'

class Shelf extends Component {

  /**
   * This helper method converts the bookShelfName to a String that can 
   * be displayed in the UI (wantToRead -> Want to Read)
   * @param {} bookShelfName an input String of the name of the shelf.
   * @returns a String that represents the name of the shelf.
   */

  bookShelfResolver(bookShelfName){
    switch(bookShelfName)
    {
      case "currentlyReading": return "Currenlty Reading";
      case "wantToRead": return "Want to Read";
      case "read": return "Read";
      default: return "None";
    }
  }

  render(){
      return (
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.bookShelfResolver(this.props.shelfName)}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                  this.props.shelfContent.map((book) => (
                      <li key={book.id}>
                          <BookCard 
                            book = {book}
                            onDeleteBook={this.props.onDeleteBook}
                            onUpdateShelf={this.props.onUpdateShelf}
                          />
                      </li>
                  ))
                }
              </ol>
            </div>
          </div> 
      )
  }
}

export default Shelf