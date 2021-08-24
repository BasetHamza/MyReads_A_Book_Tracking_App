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
      searchedBooks: []
    }
    this.debounceSearch = _.debounce(this.onChange, 300);
  }

  state = {
    query: '',
    searchedBooks: []
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
      this.contactTheAPI()
    }
  }

  contactTheAPI = () => {
    BooksAPI.search(this.state.query.trim())
    .then((searchedBooks) => {
      if (searchedBooks.error)
      {
        this.resetSearch()
        alert("This is an invalid search term. Try a different term.")
      } else {

        // Update the shelf for the searched and displayed books to match the books on the shelf
        const updatedSearchedBooks = searchedBooks.map((searchedBook) => 
        {
          let isOnShelf = false;
          this.props.books.forEach( (bookOnShelf) => {
            if (searchedBook.id === bookOnShelf.id)
            {
             searchedBook.shelf = bookOnShelf.shelf 
             isOnShelf = true;
            }
            if (!isOnShelf)
            {
              searchedBook.shelf = "none" 
            }
          })
          return searchedBook;
        })
        this.setState(() => ({
          searchedBooks: updatedSearchedBooks
        }))
      }
    }).catch(err => alert(err))
  }

  resetSearch = () => {
    this.setState(() => ({
      searchedBooks: []
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
              this.state.searchedBooks.map((book) => (
                <li key={book.id}>
                  <BookCard 
                    book={book}
                    onUpdateShelf={this.props.onUpdateShelf}
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