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
import { useNavigate , useParams} from 'react-router-dom';
import { message } from 'antd';
import { getProjectById, useGetProjectById } from '../../API/Project';


function CreateNew() {

    const navigate =  useNavigate();
    const [html, setHtml] = useState("<div>Hello World </div>");
    const [css, setCss] = useState();
    const [js, setJs] = useState();
    const [logs, setLogs] = useState(["hellow"]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState("Untitled")
    const [isPublic, setIsPublic] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState();
    const user = useSelector(userSelector);
    

   useEffect(()=>{
        // if(localStorage.getItem("user"))
        const userObj = localStorage.getItem("user");
        if(!userObj){
           
            navigate('/');
        }
   })



  

    return (
        <div className="box">
            <Header title = {title} setIsPublic = {setIsPublic} isPublic = {isPublic} setTitle={setTitle} setIsModalOpen = {setIsModalOpen} isModalOpen = {isModalOpen} setCss = {setCss} setJs = {setJs} setHtml = {setHtml} css = {css} js ={js} html  = {html}/>
            
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
