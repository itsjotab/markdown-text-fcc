import './App.css';
import React, { useState } from 'react';
import { marked } from 'marked';
import "./Telet.jpg"


function App() {


  let words = "# This is a h1 \r ## This is a sub-heading... \r You can also make text **bold**... whoa! \r\n There's also [links](https://www.freecodecamp.org) to free code camp to learn how to do this! \r > This is a Block Quotes! \r 1. This is a numbered lists. \r\ ![Telet Logo](https://media.istockphoto.com/photos/slice-of-fresh-italian-classic-original-pepperoni-pizza-isolated-picture-id496546118?k=20&m=496546118&s=612x612&w=0&h=FgGIOX8GcwkqCJliArmc0C8MYoX0iWdbTC07gnje0ms=) \r\r Heres some code, `<div></div>`, between 2 backticks. \r\r     this is multi-line code:  function anotherExample(firstLine, lastLine) \r\r    {if (firstLine == '```' && lastLine == '```') \r\r    {return multiLineCode;}} ```"
 

  
  // ```
  // this is multi-line code:
  
  // function anotherExample(firstLine, lastLine) {
  //   if (firstLine == '```' && lastLine == '```') {
  //     return multiLineCode;
  //   }
  // }
  // ```
   
  const [text, setText] = useState(words);
  
  const answer = marked.parse(text)
  console.log(marked.parse(text))

  return (
    <div className="App">
      <div>
        <h3 className='title'>Markdown</h3>
        <textarea
          value={text}
          id='editor'
          onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
        <h3 className='bold'>Preview</h3>
        <div id="preview" 
        className='preview'
        dangerouslySetInnerHTML={{__html : answer }}> 
        </div>
      </div>
    </div>
  );
}

export default App;
