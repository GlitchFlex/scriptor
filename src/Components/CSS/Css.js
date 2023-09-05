import React from 'react';
import './Css.css';
import { VscCode } from 'react-icons/vsc';
import CodeMirror from '@uiw/react-codemirror';
// import { html } from '@codemirror/lang-html';
import { sass } from '@codemirror/lang-sass';
import { monokai } from '@uiw/codemirror-theme-monokai';

function Css({ setCss, CSS }) {
    const onChange = React.useCallback((value, viewUpdate) => {
        setCss(value);
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
                    value={CSS}
                    height="320px"
                    className='code-mirror'
                    theme={monokai}
                    extensions={[sass({ indented: true })]}
                    onChange={onChange}
                />
            </div>
        </>
    );
}

export default Css;
