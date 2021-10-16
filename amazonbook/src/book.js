import React from "react"
 export const Book = ( props ) =>
{
  //attribute,eventHandler
  const clickHandler = (e) =>
  {
    console.log(e.target)
    alert( "hello world" );
  }
  const complexExample = (author) =>
  {
    console.log(author)
  }
 const {img, title, author} = props
  return <article className="book" onMouseOver={() =>
  {
    console.log("Mouse on element")
  }}>
    <img src={img} alt="" />
    <h1 onClick={()=>console.log(title)}>{title}</h1>
    <h4 >{author}</h4>
    <button type="button" onClick={clickHandler}>Click</button>
    <button type="button" onClick={()=> complexExample(author)}>More Complex example</button>
  </article>
}