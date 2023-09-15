import React from 'react';
import './ProjectCard.css';
import { VscBracketDot, VscTrash } from 'react-icons/vsc';
import { Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';
import { deleteProjectById, getAllProject } from '../../API/Project';

function ProjectCard({ element, setShouldFetch }) {
    const navigate = useNavigate();
    const combiner = () => {
        let output = `
         <html>
             <head>
                 <style>
                    
                     ${element.code.css}
                 </style>
             </head>
             <body>
                     ${element.code.html}
                 <script>
                     ${element.code.js}
                 </script>
             </body>
         </html>
         `;

        return output;
    };

    const editHandler = ()=>{
        navigate(`/create/${element._id}`)
    }


    
  

    const deleteHandler = ()=>{
        deleteProjectById(element._id);
        setShouldFetch(true);
    }


    let result = combiner();
    return (
        <div className="projectCard" >
            <div className="frame-box">
                <iframe
                    title="projectCard"
                    srcDoc={result}
                    style={{ border: 'none', width: '100%', height: '100%', overflow : "hidden" }}
                ></iframe>
            </div>

            <div className="info">
                <h4 className="project-card-title">{element.name}</h4>
                <div className="icons">
                    <Tooltip title="edit">
                        <VscBracketDot className="delIcon"  onClick={editHandler}/>
                    </Tooltip>
                    <Tooltip title="delete">
                        <VscTrash className="delIcon" onClick={deleteHandler}/>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
