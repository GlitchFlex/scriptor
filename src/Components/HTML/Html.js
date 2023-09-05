import React from 'react';
import './Html.css';
import { VscCode } from 'react-icons/vsc';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
// import { javascript } from '@codemirror/lang-javascript';
import { monokai } from '@uiw/codemirror-theme-monokai';

function Html({ setHtml, HTML }) {
    const onChange = React.useCallback((value, viewUpdate) => {
        setHtml(value);
    }, []);


    // extensions={html({ 
    //     matchClosingTags: true,
    //     autoClosetags : true
    // })}

    // extensions={[javascript({ jsx: true })]}

    return (
        <>
            <div className="editor">
                <div className="title">.html</div>
                {/* <div style={{background : "red", width : "100%", height : "60px"}}></div> */}
                <CodeMirror
                    value={HTML}
                    height="320px"
                    className='code-mirror'
                    theme={monokai}
                    // lang={html}
                    extensions={[html({ autoCloseTags :true, matchClosingTags : true, htmlCompletion : true })]}
                    // extensions={[html()]}
                    onChange={onChange}
                />
            </div>
        </>
    );
}

export default Html;
