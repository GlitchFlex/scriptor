import React from 'react';
import './Js.css';
import { VscCode } from 'react-icons/vsc';
import CodeMirror from '@uiw/react-codemirror';
// import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import { monokai } from '@uiw/codemirror-theme-monokai';

function Js({ setJs, JS }) {
    const onChange = React.useCallback((value, viewUpdate) => {
        setJs(value);
    }, []);


    // extensions={html({ 
    //     matchClosingTags: true,
    //     autoClosetags : true
    // })}

    // extensions={[javascript({ jsx: true })]}

    return (
        <>
            <div className="editor">
                <div className="title">.css</div>
                {/* <div style={{background : "red", width : "100%", height : "60px"}}></div> */}
                <CodeMirror
                    value={JS}
                    height="320px"
                    className='code-mirror'
                    theme={monokai}
                    extensions={[javascript({ jsx: true })]}
                    onChange={onChange}
                />
            </div>
        </>
    );
}

export default Js;
