import React, {Component} from 'react' 
import { Link } from 'react-router-dom'
import _ from "lodash";

import * as BooksAPI from '../utils/BooksAPI'
import BookCard from './BookCard'


class SearchBooks extends Component{

/**
 * The debounce implementation followed the code shown in:
 * https://betterprogramming.pub/how-to-use-debounce-and-throttle-the-right-way-with-react-hooks-bf2c174728e
 * 
 **/ 

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      query: '',
      books: []
    }
    this.debounceSearch = _.debounce(this.onChange, 300);
  }

  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    })) 

    if (this.state.query.trim())
    {
      this.debounceSearch();    
    }
  }
  
  onChange = () => {
    if (this.state.query.trim() === "")
    {
      this.resetSearch()
    } else {
      BooksAPI.search(this.state.query.trim())
      .then((books) => {
        if (books.error)
        {
          this.resetSearch()
          alert("This is an invalid search term. Try a different term.")
        } else {
          this.setState(() => ({
            books
          }))
        }
      }).catch(err => alert(err))
      }
  }

  resetSearch = () => {
    this.setState(() => ({
      books: []
    })) 
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