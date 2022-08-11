import './App.css';
import React, { useState } from 'react';
import { marked } from 'marked';


function App() {

  const [text, setText] = useState('')

  const Answer = () => {
    const answer = marked.parse(text)
    console.log(text)
    return answer
  }

  const elements = `# Welcome to my React Markdown Previewer!!!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really ~~crazy, even tables~~:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  `


  return (
    <div className="App">
      <div>
      <h3 className='markdown'>Markdown</h3>
        <textarea
          id='textarea'
          onChange={(e) => setText(e.target.value)}
        >{elements}
        </textarea>
        </div>
        <div>
      <h3 className='previewing'>Preview</h3>
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