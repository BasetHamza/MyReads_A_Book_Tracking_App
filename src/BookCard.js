import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger'

class BookCard extends Component{
    
    state = {
        bookName: '',
        bookAuthor: '',
        bookImageURL: ''
    }

    render(){
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${this.state.bookImageURL}")`}}></div>
                        <BookShelfChanger/>
                    </div>
                    <div className="book-title">{this.state.bookName}</div>
                    <div className="book-authors">{this.state.bookAuthor}</div>
                </div>
            </li>
        )
    }
}

export default BookCard