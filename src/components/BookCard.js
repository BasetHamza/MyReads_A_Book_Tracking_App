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
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${props.bookData.imageLinks.thumbnail}")`}}></div>
                    <BookShelfChanger book={props}/>
                </div>
                <div className="book-title">{props.bookData.title}</div>
                <div className="book-authors">{props.bookData.author}</div> 
            </div>
        </li>
    )
}

export default BookCard