import React from 'react';
import BookShelfChanger from './BookShelfChanger'

/**
 * The server returns book objects with the following keys. You can access them using props.bookData.{key_name}
 * 
 * {title, subtitle, authors, publisher, publishedDate, description, industryIdentifiers {type, identifier}, 
 * readingModes {text, image}, 
 * pageCount, printType, categories, maturityRating, allowAnonLogging, contentVersion,  
 * panelizationSummary {containsEpubBubbles, containsImageBubbles},imageLinks{smallThumbnail, thumbnail}, language, previewLink, 
 * infoLink, canonicalVolumeLink, id})
 */

function BookCard(props){
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${props.book.imageLinks.thumbnail}")`}}></div>
                <BookShelfChanger book={props.book}/>
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.authors}</div>  
        </div>
    )
}

export default BookCard