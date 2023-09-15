import React, { useState } from 'react';
import './Sidebar.css';
import {
    VscAdd,
    VscRocket,
    VscExport,
    VscChromeClose,
    VscPackage,
    VscAccount,
} from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import SidebarMenu from './SidebarMenu';
import { Avatar } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, userSelector } from '../../store/userSlice';

const routes = [
    {
        path: '/home',
        name: 'Home',
        icon: <VscPackage />,
    },
    {
        path: '/create',
        name: 'Create',
        icon: <VscAdd />,
    },
    {
        path: '/explore',
        name: 'Explore',
        icon: <VscRocket />,
    },
];

const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const user = useSelector(userSelector);
    const dispatch = useDispatch();
    const USER = localStorage.getItem('user');

    // console.log(window.location.pathname);

    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: '140px',
            padding: '5px 15px',
            transition: {
                duration: 0.2,
            },
        },
    };

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: 'auto',
            transition: {
                duration: 0.5,
            },
        },
    };

    const logoutHandler = async () => {
        localStorage.removeItem('user');
        dispatch(
            setUser({
                id: '',
                name: '',
                picture: '',
                email: '',
                provider: '',
                googleId: '',
                isLoaded: false,
            })
        );
        // window.open(
        //   'http://localhost:2000/api/v1/auth/logout',
        //       '_self'
        // )

        window.open(`${process.env.REACT_APP_SERVER_URL}/auth/logout`, '_self');
    };

    return (
        <>
            <div className="main-container">
                <motion.div
                    animate={{
                        width: isOpen ? '200px' : '60px',

                        transition: {
                            duration: 0.5,
                            type: 'spring',
                            damping: 10,
                        },
                    }}
                    className={`sidebar `}
                >
                    <div className="top_section">
                        <AnimatePresence>
                            {isOpen && (
                                <motion.h1
                                    variants={showAnimation}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="logo"
                                >
                                    scriptor
                                </motion.h1>
                            )}
                        </AnimatePresence>

                        <div className="bars">
                            {isOpen ? (
                                <VscChromeClose
                                    className="navControlx"
                                    onClick={toggle}
                                />
                            ) : (
                                <VscExport
                                    className="navControl"
                                    onClick={toggle}
                                />
                            )}
                        </div>
                    </div>
                    {window.location.pathname === '/' && (
                        <section className="routes-root">
                            {/* <div style={{ width: '100%' }}> */}
                                {routes.map((route, index) => {
                                    if (route.subRoutes) {
                                        return (
                                            <SidebarMenu
                                                setIsOpen={setIsOpen}
                                                route={route}
                                                showAnimation={showAnimation}
                                                isOpen={isOpen}
                                            />
                                        );
                                    }

                                    return (
                                        <NavLink
                                            to={route.path}
                                            key={index}
                                            className="link"
                                            activeClassName="active"
                                        >
                                            <div className="icon">
                                                {route.icon}
                                            </div>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    // <div style = {{display : "flex", height : "100%", flexDirection : "column", justifyContent : "space-between"}}>
                                                    <motion.div
                                                        variants={showAnimation}
                                                        initial="hidden"
                                                        animate="show"
                                                        exit="hidden"
                                                        className="link_text"
                                                    >
                                                        {route.name}
                                                    </motion.div>
                                                    // </div>
                                                )}
                                            </AnimatePresence>
                                        </NavLink>
                                    );
                                })}
                            {/* </div> */}

                            {/* <div style={{ width: '100%' }}>
                                <NavLink
                                    onClick={logoutHandler}
                                    className="link"
                                    style={{ border: 'none' }}
                                >
                                    {' '}
                                    {USER ? (
                                        <Avatar
                                            // size={'small'}
                                            src={
                                                <img
                                                    src={
                                                        JSON.parse(USER).picture
                                                    }
                                                    alt="avatar"
                                                />
                                            }
                                        />
                                    ) : (
                                        <Avatar
                                            size={'64'}
                                            icon={<VscAccount />}
                                        />
                                    )}
                                    <AnimatePresence>
                                        {isOpen && (
                                            // <div style = {{display : "flex", height : "100%", flexDirection : "column", justifyContent : "space-between"}}>
                                            <motion.div
                                                variants={showAnimation}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="link_text"
                                            >
                                                Logout
                                            </motion.div>
                                            // </div>
                                        )}
                                    </AnimatePresence>
                                </NavLink>
                            </div> */}
                        </section>
                    )}

                    {window.location.pathname !== '/' && (
                        <section className="routes">
                            <div style={{ width: '100%' }}>
                                {routes.map((route, index) => {
                                    if (route.subRoutes) {
                                        return (
                                            <SidebarMenu
                                                setIsOpen={setIsOpen}
                                                route={route}
                                                showAnimation={showAnimation}
                                                isOpen={isOpen}
                                            />
                                        );
                                    }

                                    return (
                                        <NavLink
                                            to={route.path}
                                            key={index}
                                            className="link"
                                            activeClassName="active"
                                        >
                                            <div className="icon">
                                                {route.icon}
                                            </div>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    // <div style = {{display : "flex", height : "100%", flexDirection : "column", justifyContent : "space-between"}}>
                                                    <motion.div
                                                        variants={showAnimation}
                                                        initial="hidden"
                                                        animate="show"
                                                        exit="hidden"
                                                        className="link_text"
                                                    >
                                                        {route.name}
                                                    </motion.div>
                                                    // </div>
                                                )}
                                            </AnimatePresence>
                                        </NavLink>
                                    );
                                })}
                            </div>

                            <div style={{ width: '100%' }}>
                                <NavLink
                                    onClick={logoutHandler}
                                    className="link"
                                    style={{ border: 'none' }}
                                >
                                    {' '}
                                    {USER ? (
                                        <Avatar
                                            // size={'small'}
                                            src={
                                                <img
                                                    src={
                                                        JSON.parse(USER).picture
                                                    }
                                                    alt="avatar"
                                                />
                                            }
                                        />
                                    ) : (
                                        <Avatar
                                            size={'64'}
                                            icon={<VscAccount />}
                                        />
                                    )}
                                    <AnimatePresence>
                                        {isOpen && (
                                            // <div style = {{display : "flex", height : "100%", flexDirection : "column", justifyContent : "space-between"}}>
                                            <motion.div
                                                variants={showAnimation}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="link_text"
                                            >
                                                Logout
                                            </motion.div>
                                            // </div>
                                        )}
                                    </AnimatePresence>
                                </NavLink>
                            </div>
                        </section>
                    )}
                    
                </motion.div>

                {children}
            </div>
        </>
    );
};

export default SideBar;
