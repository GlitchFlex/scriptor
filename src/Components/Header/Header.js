import React, { useState } from 'react';
import './Header.css';
import {
    VscCheck,
    VscCheckAll,
    VscChromeClose,
    VscDebugRestart,
    VscEdit,
    VscMultipleWindows,
} from 'react-icons/vsc';
import { Button, Checkbox, Input, Switch, Tooltip } from 'antd';
import { createProject, updateProjectById } from '../../API/Project';
import { useParams } from 'react-router-dom';

function Header({
    isModalOpen,
    setIsModalOpen,
    setCss,
    setJs,
    setHtml,
    css,
    js,
    isPublic,
    setIsPublic,
    html,
    title,
    setTitle,
}) {
    // const [title, setTitle] = useState("Untitled");
    const [isTitleEditable, setIsTitleEditable] = useState(false);

    const { id } = useParams();

    const toggleEdit = () => {
        if (isTitleEditable === false) {
            setIsTitleEditable(true);
        } else {
            setIsTitleEditable(false);
        }
    };

   

    const expandHandler = () => {
        if (isModalOpen) {
            setIsModalOpen(false);
        } else {
            setIsModalOpen(true);
        }
    };

    const resetHandler = () => {
        // window.location.reload();
        setTitle('');
        setCss('');
        setJs('');
        setHtml('');
    };

    const saveHandler = () => {
        const draft = {
            name: title,
            code: {
                js: js,
                css: css,
                html: html,
            },
            isPublic: isPublic,
        };

        if (id) {

            updateProjectById(id, draft);
        } else {
            createProject(draft);
        }
    };

    const menuList = [
        { name: 'Save', icon: <VscCheckAll />, click: saveHandler },
        { name: 'Reset', icon: <VscDebugRestart />, click: resetHandler },
        { name: 'Expand', icon: <VscMultipleWindows />, click: expandHandler },
    ];

    return (
        <div className="header">
            <div className="left">
                {isTitleEditable ? (
                    <Input
                        bordered={false}
                        className="edit-input"
                        defaultValue={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                ) : (
                    <h1 className="project-title">{title}</h1>
                )}
                {isTitleEditable ? (
                    <VscCheck className="edit-icon" onClick={toggleEdit} />
                ) : (
                    <VscEdit className="edit-icon" onClick={toggleEdit} />
                )}
                <Switch
                    style={{marginLeft : "15px"}}
                    onChange={(e)=>setIsPublic(e)}
                    checkedChildren={"public"}
                    unCheckedChildren={"private"}
                    defaultChecked = {isPublic ? true : false}
                />
            </div>

            <div className="right">
                {menuList.map((item) => (
                    <Tooltip title={item.name}>
                        <Button
                            className="btn"
                            bordered={false}
                            type="link"
                            icon={item.icon}
                            onClick={item.click}
                        >
                            {item.name}
                        </Button>
                    </Tooltip>
                ))}
            </div>
        </div>
    );
}

export default Header;
