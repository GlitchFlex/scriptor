import React, { useRef, useState } from 'react';
import './Html.css';
import { VscCode, VscCopy } from 'react-icons/vsc';
import CodeMirror from '@uiw/react-codemirror';
import copy from 'copy-to-clipboard';
import { html } from '@codemirror/lang-html';
// import { javascript } from '@codemirror/lang-javascript';
import { monokai } from '@uiw/codemirror-theme-monokai';
import { Tooltip, message } from 'antd';


function Html({ setHtml, HTML }) {

    const [localState, setLocalState] = useState(HTML);
    const onChange = React.useCallback((value, viewUpdate) => {
        setHtml(value);
        setLocalState(value);
    }, []);

    // console.log(HTML);

    const copyHandler = () => {
        copy(localState); 
        message.success("copied!")   
    };

    // console.log(HTML);


    
    return (
        <>
            <div className="editor">
                <Tooltip title="copy">
                {/* <span>Tooltip will show on mouse enter.</span> */}
                    <div className='icon-cover' onClick={copyHandler}>
                        <VscCopy style = {{fontSize : "19", }}/>
                    </div>
                </Tooltip>
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
