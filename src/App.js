import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './components/List-Books';
import SearchBooks from './components/Search-Books';
import { getAll } from './BooksAPI';

class BooksApp extends React.Component {
  constructor(){
    super();
  this.state = {
   
    showSearchPage: false,
    books:[]
  }
}


componentWillMount(){
  getAll().then(function(result){
   
    this.setState({
      books:result
    })
  }.bind(this));


}


 

  gotoSearchBooks(){
    this.setState({
      showSearchPage:true
    })
  }

  gotoBookList(){

    getAll().then(function(result){
   
      this.setState({
        books:result
      })
    }.bind(this));

    this.setState({
      showSearchPage:false
    })
  }

  onSave(){
   getAll().then(function(result){
    localStorage.setItem('booklist',JSON.stringify(result));
    
   });
   let savedBookList=localStorage.getItem('booklist');

   this.setState({
     books:JSON.parse(savedBookList)

   })

  }
 
  render() {
    
   
    
    return (
      <div className="app">   
          
       {this.state.showSearchPage ? (
         <SearchBooks displayBookList={this.gotoBookList.bind(this)} />
       ):(
         <ListBooks  books={this.state.books} onSave={this.onSave.bind(this)} searchBooks={this.gotoSearchBooks.bind(this)}/>
       )   }          
      </div>
    )
  }
}

export default BooksApp
