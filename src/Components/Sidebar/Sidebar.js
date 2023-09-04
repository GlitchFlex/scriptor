import React, { useState } from 'react'
import './Sidebar.css';
import {  VscAdd, VscRocket, VscJson, VscExport, VscChromeClose } from "react-icons/vsc";
// import { MdMessage } from "react-icons/md";
// import { BiSearch } from "react-icons/bi";
import {NavLink} from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';
import SidebarMenu from './SidebarMenu';

const routes = [
    {
      path: "/",
      name: "Home",
      icon: <VscRocket />,
    },
    {
      path: "/create",
      name: "Create",
      icon: <VscAdd />,
    },
    {
      path: "/help",
      name: "Messages",
      icon: <VscJson />,
    },
    
  ];
  

const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const inputAnimation = {
      hidden: {
        width: 0,
        padding: 0,
        transition: {
          duration: 0.2,
        },
      },
      show: {
        width: "140px",
        padding: "5px 15px",
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
        width: "auto",
        transition: {
          duration: 0.5,
        },
      },
    };
  
    return (
      <>
        <div className="main-container">
          <motion.div
            animate={{
              width: isOpen ? "200px" : "55px",
  
              transition: {
                duration: 0.5,
                type: "spring",
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
                {isOpen ?  <VscChromeClose className='navControlx' onClick={toggle}/>   :<VscExport className = "navControl" onClick={toggle} />}
                
              </div>
            </div>
            
            <section className="routes">
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
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                );
              })}
            </section>
          </motion.div>
  
          <main>{children}</main>
        </div>
      </>
    );
  };

export default SideBar