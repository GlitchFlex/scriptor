import React, { useEffect, useState } from 'react';
import './CreateNew.css';
import SplitPane from 'react-split-pane';
import Html from '../../Components/HTML/Html';
import Css from '../../Components/CSS/Css';
import { useSelector } from "react-redux";

import Js from '../../Components/JS/Js';
import Output from '../../Components/Output/Output';

import Header from '../../Components/Header/Header';
import OutputModal from '../../Components/OutputModal/OutputModal';
import { userSelector } from "../../store/userSlice";
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';


function CreateNew() {

    const navigate =  useNavigate();
    const [html, setHtml] = useState("<div>Hello World </div>");
    const [css, setCss] = useState();
    const [js, setJs] = useState();
    const [logs, setLogs] = useState(["hellow"]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const user = useSelector(userSelector);
    // console.log(user,"logged in user");
    useEffect(()=>{
        if(user.googleId.length === 0){
            // message.error("please login to access this route")
            // console.log(user.googleId.length)
            navigate('/');
        }
    }, [])

    // console.log(html)
    return (
        <div className="box">
            <Header setIsModalOpen = {setIsModalOpen} isModalOpen = {isModalOpen} setCss = {setCss} setJs = {setJs} setHtml = {setHtml}/>
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
                        <Html setHtml = {setHtml} html = {html}/>
                        <SplitPane split="vertical" minSize={400} maxSize = {600} >
                            <Css css = {css} setCss={setCss}/>
                            <Js js = {js} setJs={setJs}/>
                        </SplitPane>
                    </SplitPane>
                    {/* idhar dyan de */}
                    <Output css = {css} html = {html} js = {js} logs={logs} setLogs={setLogs}/>
                </SplitPane>
            </div>
            <OutputModal isModalOpen = {isModalOpen} setIsModalOpen = {setIsModalOpen} css = {css} js = {js} html = {html}/>
        </div>
    );
}

export default CreateNew;
