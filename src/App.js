import './App.css';
import React, { useEffect, useState } from 'react';
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
      <h3 className='title markdown'>Markdown</h3>
        <textarea
          id='textarea'
          onChange={(e) => setText(e.target.value)}
          value={text}
        >
          # hello
        </textarea>
        </div>
        <div>
      <h3 className='bold'>Preview</h3>
      <div
        className='preview'
        dangerouslySetInnerHTML={{ __html: Answer() }}>
      </div>
      </div>
      <script src='https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'></script>
    </div>
  );
}

export default App;
