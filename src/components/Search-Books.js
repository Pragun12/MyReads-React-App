import React, { Component } from 'react';
import  {search} from "../BooksAPI";
import Book from "./Book";

class SearchBooks extends Component {
    
   state={
            books:[],
   
    }
    
    displayBookList(){
        this.props.displayBookList();
    }

    autoComplete(e){

       
        let userInput=e.target.value;

        console.log(userInput);

        let checkForWhiteSpace=userInput.replace(/ /g,'');
    
       
        if(checkForWhiteSpace.length!==0){
           
       search(checkForWhiteSpace).then(function(result){
           
           this.setState({books:result})
        }.bind(this));

       
       
        }
        else{
            
            this.setState({
                books:[]
            });
        }
       
       
    }
    
   
    render(){

        console.log(this.state.books);

        let books_result='';
       
        let bookArry=this.state.books;
          
            if(this.state.books.error){
               bookArry='Result Not Found';
            }
            else{
            books_result=bookArry.map(book=>{
               
                
                  return(
                      <li key={book.id} id={book.id}>
                          
                        <Book book={book}  category='none'/>
                          
                         
                    </li>
                  )

                
              })
            
           }

        
        return(

            <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={this.displayBookList.bind(this)}>Close</a>
              <div className="search-books-input-wrapper">
               
                <input type="text" placeholder="Search by title or author" onKeyUp={this.autoComplete.bind(this)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {books_result}
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks;