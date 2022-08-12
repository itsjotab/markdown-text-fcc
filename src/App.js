import './App.css';
import React, { useEffect, useState } from 'react';
import { marked } from 'marked';


function App() {
  const [text, setText] = useState('')

  const words = `# Hello, There
  ## Welcome to my Page
  
  There's also [links](https://www.freecodecamp.org) to joining Free Code Camp and learning
   
  > These are a numbered list!
  1. And this is insane
  1. Its so fun!
  
  > This **word** is bold. This <em>word</em> is italic`


  return (
    <div className="App">
      <div>
        <h3 className='title'>Markdown</h3>
        <textarea
          id='editor'
          onChange={(e) => setText(e.target.value)}
        >{words}
        </textarea>
      </div>
      <div>
        <h3 id="preview" className='bold'>Preview</h3>
        <div
          className='preview'
          dangerouslySetInnerHTML={{ __html: marked.parse(text) }}>
        </div>
      </div>
    </div>
  );
}

export default App;
