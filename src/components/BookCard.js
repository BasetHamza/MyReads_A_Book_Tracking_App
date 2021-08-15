import React from 'react';
import BookShelfChanger from './BookShelfChanger'

function BookCard(props){
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${props.bookData.url}")`}}></div>
                    <BookShelfChanger/>
                </div>
                <div className="book-title">{props.bookData.title}</div>
                <div className="book-authors">{props.bookData.author}</div>
            </div>
        </li>
    )
}

export default BookCard