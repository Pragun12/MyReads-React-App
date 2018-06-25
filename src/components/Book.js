import React, { Component } from 'react';
import { update } from '../BooksAPI';
class Book extends Component{

 constructor(){
        super();
        this.state={
            bookinfo:{},
           book:{},
           shelf:''
           
        }
      
    }

  

    changeHandler(e){
    
        
        this.setState({
            book:this.props.book,
            shelf:e.target.value
        },function(){

           update(this.state.book,this.state.shelf).then(function(result){
              
           });
        }
            
        )

        this.props.onSave();

    }
    render(){
     
      

      
        return(
            <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193}} >
            <img src={this.props.book.imageLinks.smallThumbnail} alt='test'/>
            <div className="book-shelf-changer">
                <select id={this.props.book.id} defaultValue={this.props.category} onChange={this.changeHandler.bind(this)}>
                <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            </div>
                          <div className="book-title">{this.props.book.title}</div>
                          <div className="book-authors">{this.props.book.authors}</div>
                          </div>
        );

    }
}

export default Book;