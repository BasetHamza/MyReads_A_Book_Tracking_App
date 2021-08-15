import React, {Component} from 'react' 
import { Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'

class SearchBooks extends Component{

  state = {
    query: '',
    books: []
  }

  componentDidUpdate(prevState){
    if(this.state.query && this.state.query !== prevState.query) {
        BooksAPI.search(this.state.query)
        .then((booksObj) => {
         this.setState({ books: [...this.state.books, booksObj] })
        })}
        
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
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
            <li>
            {
this.state.books.map((book) =>
                book.authors
              )
            }
            </li>
          </ol>
        </div>
      </div>  
    )
  }
}

export default SearchBooks

/*
Objects are not valid as a React child (found: object with keys 
  {title, subtitle, authors, publisher, publishedDate, description, industryIdentifiers, readingModes, 
    pageCount, printType, categories, maturityRating, allowAnonLogging, contentVersion, panelizationSummary, 
    imageLinks, language, previewLink, infoLink, canonicalVolumeLink, id}). If you meant to render a collection of 
    children, use an array instead.
 */