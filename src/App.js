import './App.css';
import React, { useState } from 'react';
import { marked } from 'marked';


function App() {
  const [text, setText] = useState('')

  const Answer = () => {
    const answer = marked.parse(text);
    return answer

  }

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
          id='textarea'
          onChange={(e) => setText(e.target.value)}
        >
        </textarea>
      </div>
      <div>
        <h3 className='bold'>Preview</h3>
        <div
          className='preview'
          dangerouslySetInnerHTML={{ __html: Answer() }}>
        </div>
      </div>
    </div>
  );
}

export default App;
