import React, { useEffect } from 'react'
import './Output.css';


function Output({css, js, html}) {
    // useEffect(()=>{
    //     //method that combines all the css, js and html codes together whenever any of the props change
    //     combiner();
    // }, [css, js, html]);

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

  
    return (
    // <div className="output-sizer">    
    <div className="output-div">
        <iframe
            className='output-frame'
            title='output'
            srcDoc={result}
            style={{border : "none", height : "100%", width : "100%", }}
        ></iframe>
    </div>
    // </div>
  )
}

export default Output