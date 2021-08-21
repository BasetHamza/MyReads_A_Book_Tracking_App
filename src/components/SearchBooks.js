import React, {Component} from 'react' 
import { Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import BookCard from './BookCard'

class SearchBooks extends Component{

  state = {
    query: '',
    books: []
  }

  componentDidUpdate(prevState){
    /**
     * The server returns book objects with the following keys:
     * 
     * {title, subtitle, authors, publisher, publishedDate, description, industryIdentifiers, readingModes, 
     * pageCount, printType, categories, maturityRating, allowAnonLogging, contentVersion, panelizationSummary, 
     * imageLinks{smallThumbnail, thumbnail}, language, previewLink, infoLink, canonicalVolumeLink, id})
     */
    if (this.state.query.length > 0)
    {
      if (this.state.query !== prevState.query)
      {
        BooksAPI.search(this.state.query)
        .then((books) => {
          this.setState(() => ({
            books
          }))
        })
      }
    } else if (this.state.query.length === 0)
    {
      this.setState(() => ({
        query: '',
        books: []
      }))
    }
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }))    
  }

  render(){
    if (this.state.books.length > 0){
      console.log(this.state.books)
    }

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