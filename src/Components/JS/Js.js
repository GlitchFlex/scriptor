import React, { useState } from 'react';
import './Js.css';
import { VscCode, VscCopy } from 'react-icons/vsc';
import CodeMirror from '@uiw/react-codemirror';
import copy from 'copy-to-clipboard';
import { javascript } from '@codemirror/lang-javascript';
import { monokai } from '@uiw/codemirror-theme-monokai';
import { Tooltip, message } from 'antd';

function Js({ setJs, JS }) {
    const [localState, setLocalState] = useState(JS);

    const onChange = React.useCallback((value, viewUpdate) => {
        setJs(value);
        setLocalState(value);
    }, []);

    const copyHandler = () => {
        copy(localState);
        message.success("copied!")
    };

    return (
        <>
            <div className="editor">
                <Tooltip title="copy">
                {/* <span>Tooltip will show on mouse enter.</span> */}
                    <div className='icon-coverss' onClick={copyHandler}>
                        <VscCopy style = {{fontSize : "19", }}/>
                    </div>
                </Tooltip>
                <div className="title">.js</div>
                {/* <div style={{background : "red", width : "100%", height : "60px"}}></div> */}
                <CodeMirror
                    value={JS}
                    height="320px"
                    className="code-mirror"
                    theme={monokai}
                    extensions={[javascript({ jsx: true })]}
                    onChange={onChange}
                />
            </div>
        </>
    );
}

export default Js;
