import React from "react"
import ReactDom from "react-dom"


//css
import './index.css'
//setup vars 
import {books} from "./books"
import {Book} from "./book"
function BookList()
{
  return <section className="booklist">
    {books.map( (book) =>
    {
      // const { img, title, author } = book;
      return <Book key={book.id } {...book}></Book>
    })}
    
  </section>
}

ReactDom.render( <BookList />, document.getElementById( "root" ) );