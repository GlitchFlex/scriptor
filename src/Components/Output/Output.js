import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './Output.css';
// import { Hook, Console, Decode, Unhook } from "console-feed";
// import Laugh from '../Laugh';


function Output({css, js, html, logs, setLogs}) {
    
    // const [logs, setLogs] = useState([]);

    const combiner=()=>{
       let output =  
        `
        <html>
            <head>
                <style>
                   
                    ${css}
                </style>
            </head>
            <body>
                    ${html}
                <script>
                    ${js}
                </script>
            </body>
        </html>
        `

        return output;
    }

    let result = combiner();

    //referrence to the iframe

    const iframeRef = useRef();

    // blind shootout

    // const originalConsoleLog = window.console.log;
    
    // modifying console.log method


    return (
    // <div className="output-sizer">    
    <div className="output-div">
        <iframe
            className='output-frame'
            ref={iframeRef}
            id = "i-frame"
            title='output'
            srcDoc={result}
            // onLoad={() => {
            //     Hook(iframeRef.current.contentWindow.console, (log) => {
            //     console.log("loaded")
            //       setLogs((prevLogs) => [...prevLogs, log])
            //     });
            //   }}
            style={{border : "none", height : "100%", width : "100%", }}
        ></iframe>
        
        
    </div>
    // </div>
  )
}

export default Output