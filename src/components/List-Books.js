import React, { Component } from 'react';
import Book from "./Book";



class ListBooks extends Component {
    
  

 
  searchBooks(){
    this.props.searchBooks();
 }

booksUpdated(){
  this.props.booksUpdated();
}
 


    render(){
     
    
    
    
     let currentlyReading=this.props.books.filter(book=>book.shelf==='currentlyReading').map(book=>{

     return(
      <li key={book.id} id={book.id}>
                          
      <Book book={book}  category={book.shelf} booksUpdated={this.booksUpdated.bind(this)}/>
        
       
       </li>
      )

     });


     let wantToRead=this.props.books.filter(book=>book.shelf==='wantToRead').map(book=>{

      return(
       <li key={book.id} id={book.id}>
                           
       <Book book={book}  category={book.shelf} booksUpdated={this.booksUpdated.bind(this)}/>
         
        
        </li>
       )
 
      });


      let read=this.props.books.filter(book=>book.shelf==='read').map(book=>{

        return(
         <li key={book.id} id={book.id}>
                             
         <Book book={book}  category={book.shelf} booksUpdated={this.booksUpdated.bind(this)}/>
           
          
          </li>
         )
   
        });

    

      
        return(

            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                  
                      {currentlyReading}

                    </ol>
                    </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    
                      {wantToRead}


                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     {read}
                   
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={this.searchBooks.bind(this)}>Search book</a>
            </div>
          </div>
        )
    }
}
export default ListBooks;