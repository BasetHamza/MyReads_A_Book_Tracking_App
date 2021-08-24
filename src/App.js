import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './utils/BooksAPI'


class BooksApp extends React.Component {

  state = {
    books: [],
    updateCount: 0
  }

  componentDidMount(){
    /**
     * When the component mounts, we trigger the API call to retreive the books of the
     * user's library. We pool all of them into the books which is the state of the ListBooks
     * component.
     * 
     * The App owns this state because we will need it for the shelves view and the search to
     * to update each book's current shelf.
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

  updateShelf = (book,newShelf) => {

    BooksAPI.update(book,newShelf)


    this.setState((currentState) => ({
      books: currentState.books.filter((c) => {
        return c.id !== book.id
      }).concat(book)

      // updateCount: currentState.updateCount + 1
    }))
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks 
            onUpdateShelf={this.updateShelf}
            onDeleteBook={this.removeBook}
            books={this.state.books}
          />
        )}/>

        <Route path='/search' render={({ history }) => (
          <SearchBooks
            onUpdateShelf={this.updateShelf}
            books={this.state.books}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
