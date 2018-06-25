import React, { Component } from 'react';
import Book from "./Book";



class ListBooks extends Component {
    
  constructor(){
    super();
    this.state={
      currentlyReading:[],
      read:[],
      wantToRead:[]
    }

    
  }

  

 componentWillReceiveProps(props){
  let c=[];
  let r=[];
  let w=[];
    props.books.map(book=>{
      
      if(book.shelf==='currentlyReading'){
       c.push(book);

      }
      else if(book.shelf==='read'){
        r.push(book);
      }
      else if(book.shelf==='wantToRead'){
        w.push(book);
      }
    })  
 
    this.setState({
      currentlyReading:c,
      read:r,
      wantToRead:w
    })

 }
 
  searchBooks(){
    this.props.searchBooks();
 }


 onSave(categoryList){
  // this.props.onSave(categoryList);
  localStorage.setItem('categoryList',JSON.stringify(categoryList));

}



    render(){
     
    
    
    
     let currentlyReading_element=this.state.currentlyReading.map(book=>{

     return(
      <li key={book.id} id={book.id}>
                          
      <Book book={book}  category="currentlyReading" onSave={this.onSave.bind(this)}/>
        
       
       </li>
      )

     });

     let read_element=this.state.read.map(book=>{

      return(
       <li key={book.id} id={book.id}>
                           
       <Book book={book}  category="read" onSave={this.onSave.bind(this)}/>
         
        
        </li>
       )
 
      });


      let wanttoread_element=this.state.wantToRead.map(book=>{

        return(
         <li key={book.id} id={book.id}>
                             
         <Book book={book}  category="wantToRead" onSave={this.onSave.bind(this)}/>
           
          
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
                   {currentlyReading_element}
                    </ol>
                    </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    
                         {wanttoread_element}    
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     
                    {read_element} 
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