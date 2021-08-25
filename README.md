# MyReads Project

This project is the first project of the Udacity Frontend Nanodegree. The project is focused on the use of [React](https://reactjs.org/). The starting code provided by Udacity includes the HTML and CSS, but not the React functionality.

## Installation & Launching Directions

1. To install the application clone this git repository or download as zip file
    ```
    $ git clone https://github.com/BasetHamza/MyReads_A_Book_Tracking_App.git
    ```
2. Go into the application folder

3. Install all project dependencies with  ```npm``` or ```yarn```

    ```$ npm install```
    
   or
   
   ```$ yarn install```

4. Start the application using ```npm``` or ```yarn```

    ```$ npm start```
    
   or
   
   ```$ yarn start```
   

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── utils
    │   ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── components # A folder that contains all the React components used in this project
    │   ├── ListBooks.js # A component responsible for presenting the current library with the three shelves to the user.
    │   ├── Shelf.js # A component responsible for presenting a shelf in the library used by the ListBooks component
    │   ├── SearchBooks.js # A component responsible of performing the search for books in the server.
    │   └── BookCard.js # A component that is responsible for presenting the book card to the user.
    │   └── BookShelfCHanger.js # A component that is used by BookCard to present the functionality of changing the shelf of a book.
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```


## Backend Server

A backend server is provided by Udacity's startup code. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods we use to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
