import React, { useState } from 'react'
import './Header.css'
import {VscCheck, VscCheckAll, VscChromeClose, VscDebugRestart, VscEdit, VscMultipleWindows} from 'react-icons/vsc'
import { Button, Input, Tooltip } from 'antd';

function Header({isModalOpen, setIsModalOpen, setCss, setJs, setHtml}) {

    const [title, setTitle] = useState("Untitled");
    const [isTitleEditable, setIsTitleEditable] = useState(false);

    const toggleEdit = ()=>{
        if(isTitleEditable===false){
            setIsTitleEditable(true)
        }else{
            setIsTitleEditable(false);
        }
    }

    const expandHandler = ()=>{
        if(isModalOpen){
            setIsModalOpen(false);
        }else{
            setIsModalOpen(true);
        }
    }
    const saveHandler = ()=>{
       console.log("saved")
    }
    const resetHandler = ()=>{
        window.location.reload();
        setCss("");
        setJs("");
        setHtml("");
    }

    const menuList = [
        { name: "Save", icon: <VscCheckAll/> , saveHandler,},
        { name: "Reset", icon: <VscDebugRestart/> , click : resetHandler},
        { name: "Expand", icon: <VscMultipleWindows/>, click : expandHandler },
    ];

    

  return (
    <div className='header'>
        <div className='left'>
            {isTitleEditable ? <Input  bordered = {false} className='edit-input' defaultValue={title} onChange={(e)=>{setTitle(e.target.value)}}/> : 
            
            <h1 className='project-title'>{title}</h1>
            }
            {isTitleEditable ? <VscCheck className = 'edit-icon' onClick = {toggleEdit}/>
            :
            <VscEdit className='edit-icon' onClick={toggleEdit} />

            }
        </div>

        <div className='right'>
            
            {menuList.map((item)=>
                <Tooltip  title = {item.name}>
                <Button  className = "btn" bordered = {false} type="link" icon={item.icon}  onClick={item.click}>
                {item.name}
              </Button>
              </Tooltip>
            )}


        </div>
    </div>
  )
}

export default Header