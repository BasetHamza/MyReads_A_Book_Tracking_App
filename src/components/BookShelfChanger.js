import React, { Component } from 'react'

/**
 * The code of this Component is inspired by the article: 
 * https://www.pluralsight.com/guides/how-to-get-selected-value-from-a-mapped-select-input-in-react
 */

class BookShelfChanger extends Component{

    constructor(props) {
        super(props);
        this.state = {selectedShelf: this.search(props.book.shelf),
            shelves: [
                {
                    label: "Currently Reading",
                    value: "currentlyReading",
                },
                {
                    label: "Want to Read",
                    value: "wantToRead",
                },
                {
                    label: "Read",
                    value: "read",
                },
                {
                    label: "None",
                    value: "none",
                }
            ]
        };
    }

    search(nameKey){
        for (let i=0; i < this.state.shelves.length; i++) {
            if (this.state.shelves[i].value === nameKey) {
                return this.state.shelves[i];
            }
        }
    }

    /**
     * I feel that it is redundant to add the shelves again after the initilaization
     * in the constructor, but I am not sure how to elegantly do that.
     */
    state = {
        selectedShelf: {},
        shelves: [
            {
                label: "Currently Reading",
                value: "currentlyReading",
            },
            {
                label: "Want to Read",
                value: "wantToRead",
            },
            {
                label: "Read",
                value: "read",
            },
            {
                label: "None",
                value: "none",
            }
        ]
    }

    updateSelection = (e) => {
        if (e.target.value === "none")
        {
            this.setState(() => ({ 
                selectedShelf: {
                    label: "None",
                    value: {},
                } 
            }
            ));
            this.props.onDeleteBook(this.props.book);
        } else {
            const newShelf = this.search(e.target.value);
            this.setState(() => ({ 
                selectedShelf: newShelf
            }
            ));
            this.props.book.shelf = newShelf.value;
            this.props.onUpdateShelves(this.props.book,newShelf.value);
        }
    }

    /**
    componentDidUpdate(){
        console.log(this.props.book.shelf)
        console.log(this.state.selectedShelf)
        console.log(this.state.shelves)

        // Updating the book's shelf in the server
        BooksAPI.update(this.props.book,this.state.selectedShelf.value)

        // TODO: We want to invoke a method that updates the books state in the ListBooks Component.
    }
    */

    render(){
        return (
            <div className="book-shelf-changer">
                <select value={this.state.selectedShelf.value} onChange={this.updateSelection}>
                        <option value="move" disabled>Move to...</option>
                        {
                            this.state.shelves.map((shelf) =>
                                { return (
                                    <option key={shelf.value} value={shelf.value}>{shelf.label}</option>)
                                }
                            )
                        }
                </select>
            </div> 
        )
    }
}

export default BookShelfChanger