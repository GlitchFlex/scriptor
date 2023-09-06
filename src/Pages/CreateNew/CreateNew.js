import React, { useState } from 'react';
import './CreateNew.css';
import SplitPane from 'react-split-pane';
import Html from '../../Components/HTML/Html';
import Css from '../../Components/CSS/Css';
import Js from '../../Components/JS/Js';
import Output from '../../Components/Output/Output';

function CreateNew() {

    const [html, setHtml] = useState();
    const [css, setCss] = useState();
    const [js, setJs] = useState();

    console.log(html);
    return (
        <div className="box">
            <div>
                {/* horizontal split */}
                <SplitPane
                    style={{ width: '100%' }}
                    split="horizontal"
                    minSize={359}
                    maxSize={359}
                    defaultSize={'48%'}
                >
                    <SplitPane
                        split="vertical"
                        defaultSize={'33%'}
                        minSize={400}
                        maxSize={600}
                    >
                        {/* <p>HTML</p> */}
                        <Html setHtml = {setHtml}/>
                        <SplitPane split="vertical" minSize={400} maxSize = {600} >
                            <Css css = {css} setCss={setCss}/>
                            <Js js = {js} setJs={setJs}/>
                        </SplitPane>
                    </SplitPane>
                    {/* idhar dyan de */}
                    <Output css = {css} html = {html} js = {js}/>
                </SplitPane>
            </div>
        </div>
    );
}

export default CreateNew;
