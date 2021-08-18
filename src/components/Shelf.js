import React, { Component } from 'react'
import BookCard from './BookCard'

class Shelf extends Component {

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
                            <BookCard book = {book}/>
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