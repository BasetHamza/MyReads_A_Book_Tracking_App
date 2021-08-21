import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger'

/**
 * The server returns book objects with the following keys. You can access them using props.bookData.{key_name}
 * 
 * {title, subtitle, authors, publisher, publishedDate, description, industryIdentifiers {type, identifier}, 
 * readingModes {text, image}, 
 * pageCount, printType, categories, maturityRating, allowAnonLogging, contentVersion,  
 * panelizationSummary {containsEpubBubbles, containsImageBubbles},imageLinks{smallThumbnail, thumbnail}, language, previewLink, 
 * infoLink, canonicalVolumeLink, id}), shelf
 */

class BookCard extends Component {    

    getAuthors = () => {
        if (this.props.book.hasOwnProperty('authors')) 
        {
            return this.props.book.authors
        } else {
            return "Author not available!"
        }
    }

    getThumbnailURL = () => {
        if (this.props.book.hasOwnProperty('imageLinks'))
        {
            return this.props.book.imageLinks.thumbnail
        } else {
            return "https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1732584341.jpg"
        }
    }

    render(){
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${this.getThumbnailURL()}")`}}>  
                    </div>
                    <BookShelfChanger 
                        book={this.props.book}
                        onDeleteBook={this.props.onDeleteBook}
                        onUpdateShelves={this.props.onUpdateShelves}
                    />
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.getAuthors()}</div>  
            </div>
        )
    }
}

export default BookCard