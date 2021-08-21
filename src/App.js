import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './utils/BooksAPI'


class BooksApp extends React.Component {

  state = {
    updateCount: 0
  }

  updateShelves = (book,newShelf) => {
    this.setState((currentState) => ({
      updateCount: currentState.updateCount + 1
    }))
    BooksAPI.update(book,newShelf)
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks 
            onUpdateShelves={this.updateShelves}
          />
        )}/>

        <Route path='/search' render={({ history }) => (
          <SearchBooks
            onUpdateShelves={this.updateShelves}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
