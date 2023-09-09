import React, { useState } from 'react';
import './Css.css';
import { VscCode, VscCopy } from 'react-icons/vsc';
import CodeMirror from '@uiw/react-codemirror';
// import { html } from '@codemirror/lang-html';
import { sass } from '@codemirror/lang-sass';
import { monokai } from '@uiw/codemirror-theme-monokai';
import copy from 'copy-to-clipboard';
import { Tooltip, message } from 'antd';

function Css({ setCss, CSS }) {
    const [localState, setLocalState] = useState(CSS);
    const onChange = React.useCallback((value, viewUpdate) => {
        setCss(value);
        setLocalState(value)
    }, []);

    const copyHandler = () => {
        copy(localState);
        message.success('copied!');
    };

    return (
        <>
            <div className="editor">
                <Tooltip title="copy">
                    {/* <span>Tooltip will show on mouse enter.</span> */}
                    <div className="icon-coverss" onClick={copyHandler}>
                        <VscCopy style={{ fontSize: '19' }} />
                    </div>
                </Tooltip>
                <div className="title">.css</div>
                {/* <div style={{background : "red", width : "100%", height : "60px"}}></div> */}
                <CodeMirror
                    value={CSS}
                    height="320px"
                    className="code-mirror"
                    theme={monokai}
                    extensions={[sass({ indented: true })]}
                    onChange={onChange}
                />
            </div>
        </>
    );
}

export default Css;
