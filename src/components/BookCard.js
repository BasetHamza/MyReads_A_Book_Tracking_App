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

    render(){
        console.log(this.props.book)

        const thumbnailURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX////MzMzJycnz8/PU1NT4+Pjd3d3Pz8/i4uLl5eXa2trv7+/q6ur7+/vs7Oz09PRY9WrJAAAEeElEQVR4nO2c2ZKDIBBFFZFNMf//tyPihmBM1DKtc8/D1AQ1xQkIzaJZBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD3WCUmqj6xEAtU2R8p56cXv8r0V3A2xyu+WIS03RErg9Tmlzn/kILlc0yXKMJERy/TsFQqaUJDJrpEnTAsEqffQtFneah1eX+7yaiWiv58MabcRbEz5EXlsWNyFfIaL3j1Kfouit5wx4XVUF9ZtX3yL9ltOLU5xBVPMCSueMiQCd+vkL4XDxpmhs36EpIcammYyrwiM6dn7DR2G7ZqTJaZVxy7S4KUbHcJNLXvPgdVqqjj+asau33SD3lVtPNHiaf9UqXhYU/PWU666/8W244ugmCma1Mpd/3f0iw7CUk2urH7bp/IUFMN4BqZ7+oOI8MhgKN2L9rcB19fExsSVTwaeQeQVDzVkKTiuYaZoTd3c3CM30+71T4pH+duCCmeMYvRGrm5ODufSKUTwZ1k2GThbDGhQf9uwzIwdOMvm7NHGWaVnPC3XcG7D48xXIXD8FpguAMYXgwMe2yhhTFGqGZ75vGOhrY2Y18uN3dgEDN0gcjWCLjg84gzl+p90KnabyQUl2aFzDcWHWofh7Hpr3lfVUUu6RThB3hBrl/W2rJSsqvWlNcpvqVycaacxnul6EqRUC08SMmjIusKVf8qQ6ejXQmWcdpj6mlXhNHEkrlXIRbvVv+aPE9MGBeuENevsg2pptQwxl6rR12zkphVaktWrl7kdjYSWtd/vV/l5vFd6FCteL12TbcItf6jXc37qM3KtKFbhVkNhIhFbR8YJm44GMLwSmCIlibBTQwrrd0TFS7IXj57IYTqwnHV/qPruITvYeiC62jDvh8Dz9NZqhLfw5Av7VZhUWxzD0O/vLKJOykaZNzHUNWb8HsbfpBJA0MCPN9wZXx4xJDY+LB7/jDe4XPEsGq/8dy1nmPYWiVUjhhmharpT6ceMrwFCcNCGKMXIdqjDLWLYBgPW5AnGVZ9FBo2IU8yFEOkHaTewrA0PJHHyHBcBK4WqQlDzTcWGK/FPdQcT+5GhqofFYbDwaRh7R7fPz2fuylYdHM5IsOX9PfhYmd3MmpjpKK2j+PSbqV0uTJ6h7j088jbtTXLcBOGFIDhRPfY9qMNG9Y2uosxw7MMs9qI5bj2YYYJYEgBGL4HhhT414ZCL1HLhJuvWzxk7alMv5lErq4XLokNXXjHCA3yNYtisWz+0rKgyFJp0fy95YzW5I1N/txaqM9IVceS/pQ3AOBa0i3NIWi1NHU8cj9I21usbyC+npUe/wjEenw8f7gDGF4MDHcAw4v5L4a29IzJ5YLZFauH+s+WouE4sh12rfNooDvsW1fRkb4CTO+jzykajlMS376TfZrGCN9UT9bw2/fqz34VEybSMcxk8K4gHzHHJTW8j75M7OD3+0/q4HsI7cVw+2kmhgmkmi8wQ5kUZnloGEbo+el0Am8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPwn/gD5PyigWcRzGQAAAABJRU5ErkJggg=="
        const authors = "n/A";
        
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${thumbnailURL}")`}}>  
                    </div>
                    <BookShelfChanger 
                        book={this.props.book}
                        onDeleteBook={this.props.onDeleteBook}
                        onUpdateShelves={this.props.onUpdateShelves}
                    />
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{authors}</div>  
            </div>
        )
    }
}

export default BookCard