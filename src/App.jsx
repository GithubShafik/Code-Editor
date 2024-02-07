import React, { useState } from "react";
import AceEditor from "react-ace";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/snippets/javascript";

const App = () => {
  const [htmlCode, setHtmlCode] = useState(
    '<div class="hi" >Hello, this Code Editor by Shafique!</div> <button class="button-89" onclick={alert("Hello!")} role="button">Click me </button>'
  );

  const [cssCode, setCssCode] = useState(`
.button-89 {
  --b: 3px; 
  --s: .45em;
  --color: white;
  
  padding: calc(.5em + var(--s)) calc(.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background:
    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .6em;
  font-size: 16px;

  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-top: 15px;
}

.button-89:hover,
.button-89:focus-visible{
  --_p: 0px;
  outline-color: var(--color);
  outline-offset: .05em;
}

.button-89:active {
  background: var(--color);
  color: #fff;
}
`);

  const [jsCode, setJsCode] = useState("// Your JavaScript code here");
  const [copied, setCopied] = useState({
    html: false,
    css: false,
    js: false,
  });

  const handleCodeChange = (value, language) => {
    switch (language) {
      case "html":
        setHtmlCode(value);
        break;
      case "css":
        setCssCode(value);
        break;
      case "javascript":
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
    <div className="p-2">
<div className="gap-2 text-white sm:flex md:grid sm:flex-col lg:grid " >

        {/* HTML Card */}
        <div
          className="bg-[#272822] p-4 rounded-lg shadow  w-full md:w-96 xl:w-1/3 m-1"
          style={{ width: "auto", height: "20rem" }}
        >
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold text-white md-2 "> HTML</h2>
            <CopyToClipboard
              text={htmlCode}
              onCopy={() => setCopied({ ...copied, html: true })}
            >
              <button>{copied.html ? "✔️Copied!" : "📝 HTML Code"}</button>
            </CopyToClipboard>
          </div>
          <AceEditor
            mode="html"
            theme="monokai"
            value={htmlCode}
            onChange={(value) => handleCodeChange(value, "html")}
            width="100%"
            height="90%"
            enableLiveAutocompletion={true}
            setOptions={{
              enableSnippets: true,
              showLineNumbers: true,
              wrap: true,
              tabSize: 2,
            }}
          />
        </div>

        {/* CSS Card */}
        <div
          className="bg-[#272822] p-4 rounded-lg shadow w-full md:w-96 xl:w-1/3 m-1"
          // For mobile view, use full width
          style={{ width: "auto", height: "20rem" }}
        >
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold text-white md-2"> CSS</h2>
            <CopyToClipboard
              text={cssCode}
              onCopy={() => setCopied({ ...copied, css: true })}
            >
              <button>{copied.css ? "✔️Copied!" : "📝 CSS Code"}</button>
            </CopyToClipboard>
          </div>
          <AceEditor
            mode="css"
            theme="monokai"
            value={cssCode}
            onChange={(value) => handleCodeChange(value, "css")}
            width="100%"
            height="90%"
            enableLiveAutocompletion={true}
            setOptions={{
              enableSnippets: true,
              showLineNumbers: true,
              wrap: true,
              tabSize: 2,
            }}
          />
        </div>

        {/* JavaScript Card */}
        <div
          className="bg-[#272822] p-4 rounded-lg shadow w-full md:w-96 xl:w-1/3 m-1"
          // For mobile view, use full width
          style={{ width: "auto", height: "20rem" }}
        >
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold text-white md-2">
              {" "}
              JavaScript
            </h2>
            <CopyToClipboard
              text={jsCode}
              onCopy={() => setCopied({ ...copied, js: true })}
            >
              <button>{copied.js ? "✔️Copied!" : "📝 JavaScript Code"}</button>
            </CopyToClipboard>
          </div>
          <AceEditor
            mode="javascript"
            theme="monokai"
            value={jsCode}
            onChange={(value) => handleCodeChange(value, "javascript")}
            width="100%"
            height="90%"
            enableLiveAutocompletion={true}
            setOptions={{
              enableSnippets: true,
              showLineNumbers: true,
              wrap: true,
              tabSize: 2,
            }}
          />
        </div>

        {/* Code Result Card */}
        <div
          className="col-span-3 bg-[#272822] p-4 rounded-lg shadow md:w-full m-1"
          style={{ width: "auto", height: "18rem" }}
        >
          <h2 className="text-lg font-semibold text-white md-2">
            {" "}
            Code Result
          </h2>
          <div
            className="code-result-container"
            style={{ backgroundColor: "#272822", padding: "1rem" }}
          >
            <div dangerouslySetInnerHTML={{ __html: getResultCode() }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
