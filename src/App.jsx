import React, { useState } from 'react';
import AceEditor from 'react-ace';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'ace-builds/src-noconflict/ext-language_tools'; // Import language_tools for autocompletion
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

import 'ace-builds/src-noconflict/snippets/html'; // Import HTML snippets for autocompletion
import 'ace-builds/src-noconflict/snippets/css'; // Import CSS snippets for autocompletion
import 'ace-builds/src-noconflict/snippets/javascript'; // Import JavaScript snippets for autocompletion


const App = () => {
  const [htmlCode, setHtmlCode] = useState('<div class="hi" >Hello, this Code Editor by Shafique!</div>');
  
  const [cssCode, setCssCode] = useState(`
  .hi {
      background-color:#faada7;
      text-align: center;
      font-size: 30px;
      color: black;
      height: 100px;
      width: 600px;
      margin: 10px;
      position: relative;
      animation: borderAnimation 2s linear infinite;
    }
    
    @keyframes borderAnimation {
      0% {
        border-width: 5px;
      }
      25% {
        border-width: 10px;
      }
      50% {
        border-width: 5px;
      }
      75% {
        border-width: 10px;
      }
      100% {
        border-width: 5px;
      }
    }
    
  }
`);

  const [jsCode, setJsCode] = useState('// Your JavaScript code here');
  const [copied, setCopied] = useState({
    html: false,
    css: false,
    js: false,
  });


  const handleCodeChange = (value, language) => {
    switch (language) {
      case 'html':
        setHtmlCode(value);
        break;
      case 'css':
        setCssCode(value);
        break;
      case 'javascript':
        setJsCode(value);
        break;
      default:
        break;
    }
    setCopied({ html: false, css: false, js: false });
  };

  
  const getResultCode = () => {
    return `
      <html>
        <head>
          <style>
            ${cssCode}
          </style>
        </head>
        <body>
          ${htmlCode}
          <script>
            ${jsCode}
          </script>
          <div id="result" class="result-container" style="background-color: #272822; padding: 1rem; font-size: 20px;">
            <!-- Content of the result div -->
          </div>
        </body>
      </html>`;
  };
  
  
  
  

  
  return (
<div className='p-2'>
      <div className='grid grid-cols-1 gap-2 text-white lg:grid-cols-3'>
      {/* HTML Card */}
      <div className='bg-[#272822] p-4 rounded-lg shadow' style={{ width: '25rem', height: '20rem' }}>
        <div className='flex justify-between'>
          <h2 className='text-lg font-semibold text-white md-2'> HTML</h2>
          <CopyToClipboard text={htmlCode} onCopy={() => setCopied({ ...copied, html: true })}>
            <button>{copied.html ? '✔️Copied!' : '📝 HTML Code'}</button>
          </CopyToClipboard>
        </div>
        <AceEditor
            mode='html'
            theme='monokai'
            value={htmlCode}
            onChange={(value) => handleCodeChange(value, 'html')}
            width='100%'
            height='90%'
            enableLiveAutocompletion={true} // Enable autocompletion
            setOptions={{
              enableSnippets: true, // Enable snippets
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
      </div>

        {/* CSS Card */}
        <div className='bg-[#272822] p-4 rounded-lg shadow' style={{ width: '25rem', height: '20rem' }}>
        <div className='flex justify-between'>
          <h2 className='text-lg font-semibold text-white md-2'> CSS</h2>
          <CopyToClipboard text={cssCode} onCopy={() => setCopied({ ...copied, css: true })}>
            <button>{copied.css ? '✔️Copied!' : '📝 CSS Code'}</button>
          </CopyToClipboard>
          </div>
          <AceEditor
          mode='css'
          theme='monokai'
          value={cssCode}
          onChange={(value) => handleCodeChange(value, 'css')}
          width='100%'
          height='90%'
          enableLiveAutocompletion={true}
          setOptions={{
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
       
        </div>

        {/* JavaScript Card */}
        <div className='bg-[#272822] p-4 rounded-lg shadow' style={{ width: '25rem', height: '20rem' }}>
        <div className='flex justify-between'>
          <h2 className='text-lg font-semibold text-white md-2'> JavaScript</h2>
          <CopyToClipboard text={jsCode} onCopy={() => setCopied({ ...copied, js: true })}>
            <button>{copied.js ? '✔️Copied!' : '📝 JavaScript Code'}</button>
          </CopyToClipboard>
          </div>
          <AceEditor
          mode='javascript'
          theme='monokai'
          value={jsCode}
          onChange={(value) => handleCodeChange(value, 'javascript')}
          width='100%'
          height='90%'
          enableLiveAutocompletion={true}
          setOptions={{
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
       
        </div>

        {/* Code Result Card */}
        <div className='bg-[#272822] p-4 rounded-lg shadow' style={{ width: '78rem', height: '18rem' }}>
          <h2 className='text-lg font-semibold text-white md-2'> Code Result</h2>
          <div className='code-result-container' style={{ backgroundColor: '#272822', padding: '1rem' }}>
            <div dangerouslySetInnerHTML={{ __html: getResultCode() }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
