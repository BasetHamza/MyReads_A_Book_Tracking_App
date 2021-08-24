import React, {Component} from 'react' 
import { Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import BookCard from './BookCard'

class SearchBooks extends Component{

  state = {
    query: '',
    books: []
  }

  resetSearch = () => {
    this.setState(() => ({
      books: []
    })) 
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    })) 

    if (this.state.query.length > 0)
    {
      console.log('true')
      BooksAPI.search(this.state.query.trim())
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
    } else
    {
      console.log('false')
      this.resetSearch()
    }

  }

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className='close-search'
            to='/'>
              Close
          </Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author ..."
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.books.map((book) => (
                <li key={book.id}>
                  <BookCard 
                    book={book}
                    onUpdateShelves={this.props.onUpdateShelves}
                  />
                </li>
              )
              )
            }
          </ol>
        </div>
      </div>  
    )
  }
}

export default SearchBooks