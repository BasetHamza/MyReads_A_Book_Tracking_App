import React, { Component } from 'react'

class BookShelfChanger extends Component{

    state = {
        selectedShelve: {},
        shelves: [
            {
                label: "Currently Reading",
                value: "currentlyReading",
                className: ""
            },
            {
                label: "Want to Read",
                value: "wantToRead",
                className: ""
            },
            {
                label: "Read",
                value: "read",
                className: ""
            },
            {
                label: "None",
                value: "none",
                className: ""
            }
        ]
    }

    updateSelection(e) {
        /**On change, we want to update the className and invoke the update 
         * method for the book with the backend server 
         * */
        console.log(e.target.value)  
        this.setState({ fruit: e.target.value });
    }
    
    render(){
        return (
            <div className="book-shelf-changer">
                <select value={this.state.selectedShelve.value} onChange={this.updateSelection}>
                        <option value="move" disabled>Move to...</option>
                        {
                            this.state.shelves.map((shelf) =>
                                { return (
                                    <option value={shelf.value} className={shelf.className}>{shelf.label}</option>)
                                }
                            )
                        }
                </select>
            </div> 
        )
    }
}

export default BookShelfChanger