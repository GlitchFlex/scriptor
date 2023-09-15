import React, { useEffect, useState } from 'react';
import './CreateNew.css';
import SplitPane from 'react-split-pane';
import Html from '../../Components/HTML/Html';
import Css from '../../Components/CSS/Css';
import { useSelector } from 'react-redux';

import Js from '../../Components/JS/Js';
import Output from '../../Components/Output/Output';

import Header from '../../Components/Header/Header';
import OutputModal from '../../Components/OutputModal/OutputModal';
import { userSelector } from '../../store/userSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { message } from 'antd';
import { getProjectById, useGetProjectById } from '../../API/Project';
import Loader from '../../Components/Loader/Loader';

function UpdateProject() {
    const navigate = useNavigate();
    const [html, setHtml] = useState();
    const [css, setCss] = useState();
    const [js, setJs] = useState();
    const [title, setTitle] = useState();
    const [isPublic, setIsPublic] = useState();
    const [logs, setLogs] = useState(['hellow']);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const [isLoading, setIsLoading] = useState(true);
   
    useEffect(() => {
        // if(localStorage.getItem("user"))
        const userObj = localStorage.getItem('user');
        if (!userObj) {
            console.log('user not found');
            navigate('/');
        }
    });

   
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await getProjectById(id);
          
            setCss(res.data.data.code.css)
            setJs(res.data.data.code.js)
            setHtml(res.data.data.code.html);
            setIsPublic(res.data.data.isPublic);
            setTitle(res.data.data.name);
            setIsLoading(false);
          } catch (error) {
            // Handle the error here, e.g., display an error message to the user
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    // if (project.data) {
    //     setCss(project.data.code?.css);
    //     setJs(project.data.code?.js);
    //     setHtml(project.data.code?.html);
    // }

    
    if (isLoading) return <Loader/>;

    return (
        <div className="box">    
                    <Header

                        setIsModalOpen={setIsModalOpen}
                        isModalOpen={isModalOpen}
                        setCss={setCss}
                        title = {title}
                        setTitle = {setTitle}
                        setJs={setJs}
                        isPublic={isPublic}
                        setIsPublic={setIsPublic}
                        setHtml={setHtml}
                        css={css}
                        js={js}
                        html={html}
                    />
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
                                <Html setHtml={setHtml} HTML={html}  />
                                <SplitPane
                                    split="vertical"
                                    minSize={400}
                                    maxSize={600}
                                >
                                    <Css CSS={css} setCss={setCss} />
                                    <Js JS={js} setJs={setJs} />
                                </SplitPane>
                            </SplitPane>
                            {/* idhar dyan de */}
                            <Output
                                css={css}
                                html={html}
                                js={js}
                                logs={logs}
                                setLogs={setLogs}
                            />
                        </SplitPane>
                    </div>

                    <OutputModal
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        css={css}
                        js={js}
                        html={html}
                    />
                
          
        </div>
    );
}

export default UpdateProject;
