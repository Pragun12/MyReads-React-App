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
    this.setState({
      showSearchPage:false
    })
  }

 
  render() {
    
   
    
    return (
      <div className="app">   
          
       {this.state.showSearchPage ? (
         <SearchBooks displayBookList={this.gotoBookList.bind(this)} />
       ):(
         <ListBooks  books={this.state.books} searchBooks={this.gotoSearchBooks.bind(this)}/>
       )   }          
      </div>
    )
  }
}

export default BooksApp
