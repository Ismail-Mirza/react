import React, { useState } from 'react';

const UseStateBasics = () =>
{
  const handleClick = () =>
  {
    if ( text.trim() == "random title" )
    {
      setText("hello world");
    }
    else
    {
      setText("random title");
    }
  
    
  }
  const [text, setText] = useState( 'random title' )
  return <React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>Change title</button>
  </React.Fragment>
}

export default UseStateBasics;
