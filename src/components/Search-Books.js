import React, { Component } from 'react';
import  {search} from "../BooksAPI";
import Book from "./Book";

class SearchBooks extends Component {
    
    constructor(){
        super();
        let savedBookCategory=localStorage.getItem('bookcategory');
        this.state={
            books:[],
            bookList:JSON.parse(savedBookCategory)
            
        }


        
       
    }
    
    displayBookList(){
        this.props.displayBookList();
    }

    autoComplete(e){

       
        let userInput=e.target.value;

        let checkForWhiteSpace=userInput.replace(/ /g,'');
    
       
        if(checkForWhiteSpace.length!==0){
           
       search(checkForWhiteSpace).then(function(result){
           
           this.setState({books:result})
        }.bind(this));

       
        }
       
       
    }
    onSave(categoryList){
       
       localStorage.setItem('categoryList',JSON.stringify(categoryList));

    }

   
    render(){
        let books_result='';
       
        let bookArry=this.state.books;
          
            if(this.state.books.error){
               bookArry='Result Not Found';
            }
            else{
            books_result=bookArry.map(book=>{
                let cat='none';
                if(this.state.bookList.find(x=>x.id===book.id)){
                    cat=this.state.bookList.find(x=>x.id===book.id).category;
                }
                
                
                  return(
                      <li key={book.id} id={book.id}>
                          
                        <Book book={book}  category={cat} onSave={this.onSave.bind(this)}/>
                          
                         
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