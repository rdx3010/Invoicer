import { React } from 'react'
import "./side.css"
import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useLocation } from "react-router-dom";

import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  Collapse,
  Form,
  InputGroup,
  Navbar,
  Nav,
  Pagination,
  Container,
  Row,
  Col
} from "react-bootstrap";

function Side(props) {
   
  // to check for active links and opened collapses
  let location = useLocation();
  // this is for the user collapse
  const [userCollapseState, setUserCollapseState] = useState(true);

  const [imenuId, setimenuId] = useState(9)

  const [menu , setMenu] = useState([
    {
      nme: "Menu 1"

    },
    {
      nme: "Menu 2"
    },
    {
      nme: "Menu 3"
    },
    {
      nme: "Menu 4"
    },
    {
      nme: "Menu 5"
    },
    {
      nme: "Menu 6"
    }
  ]);


  return (
    <>
      <div className="sidebar col-3" >
        <div className="sidebar-wrapper">
          <div className="logo">
            <a
              className="simple-text logo-mini"
              href="http://www.creative-tim.com"
            >
             
            </a>
            <a
              className="simple-text logo-normal"
              href="http://www.creative-tim.com"
            >
              Csharptek
            </a>
          </div>
          <div className="user">
            <div className="photo">
              <img alt="..." src="../../../assets/img/abc.png" />
            </div>
            <div className="info">
              <a
                className="collapsed"
                data-toggle="collapse"
                href="#pablo">
                <span>
                 {props.role}<b className="caret"></b>
                </span>
              </a>
              {/* <Collapse id="collapseExample" >
                <div>
                  <Nav as="ul">
                    <li>
                      <a
                        className="profile-dropdown"
                        href="#pablo"

                      >
                        <span className="sidebar-mini">MP</span>
                        <span className="sidebar-normal">My Profile</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="profile-dropdown"
                        href="#pablo"

                      >
                        <span className="sidebar-mini">EP</span>
                        <span className="sidebar-normal">Edit Profile</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="profile-dropdown"
                        href="#pablo"

                      >
                        <span className="sidebar-mini">S</span>
                        <span className="sidebar-normal">Settings</span>
                      </a>
                    </li>
                  </Nav>
                </div>
              </Collapse> */}
            </div>
          </div>
          {
            menu.map((menu, i) => (
              props.role == "User" ?
                i <= 3 ?
                  <div className="user" key={i}>
                    
                    <div className="info">
                      <a
                        className={userCollapseState ? "collapsed" : ""}
                        data-toggle="collapse"
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setUserCollapseState(!userCollapseState);
                          setimenuId(userCollapseState ? i : 9);
                        }}
                        aria-expanded={userCollapseState}
                      >
                        <span>
                          {menu.nme} <b className="caret"></b>
                        </span>
                      </a>
                      <Collapse id="collapseExample"  in={imenuId == i ? true : false}>
                        <div>
                          <Nav as="ul">
                            <li>
                              <a
                                className="profile-dropdown"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <span className="sidebar-mini">MP</span>
                                <span className="sidebar-normal">My Profile</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="profile-dropdown"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <span className="sidebar-mini">EP</span>
                                <span className="sidebar-normal">Edit Profile</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="profile-dropdown"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <span className="sidebar-mini">S</span>
                                <span className="sidebar-normal">Settings</span>
                              </a>
                            </li>
                          </Nav>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                  : null : props.role == "Admin" ?
                  i <= 4 ?
                  <div className="user" key={i}>
                    
                  <div className="info">
                    <a
                      className={userCollapseState ? "collapsed" : ""}
                      data-toggle="collapse"
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setUserCollapseState(!userCollapseState);
                        setimenuId(i);
                      }}
                      aria-expanded={userCollapseState}
                    >
                      <span>
                        {menu.nme} <b className="caret"></b>
                      </span>
                    </a>
                    <Collapse id="collapseExample"  in={imenuId == i ? true : false}>
                      <div>
                        <Nav as="ul">
                          <li>
                            <a
                              className="profile-dropdown"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <span className="sidebar-mini">MP</span>
                              <span className="sidebar-normal">My Profile</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="profile-dropdown"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <span className="sidebar-mini">EP</span>
                              <span className="sidebar-normal">Edit Profile</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="profile-dropdown"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <span className="sidebar-mini">S</span>
                              <span className="sidebar-normal">Settings</span>
                            </a>
                          </li>
                        </Nav>
                      </div>
                    </Collapse>
                  </div>
                </div> : null : props.role == "SuperAdmin" ?
                    i <= 5 ?
                    <div className="user" key={i}>
                    
                    <div className="info">
                      <a
                        className={userCollapseState ? "collapsed" : ""}
                        data-toggle="collapse"
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setUserCollapseState(!userCollapseState);
                          setimenuId(i);
                        }}
                        aria-expanded={userCollapseState}
                      >
                        <span>
                          {menu.nme} <b className="caret"></b>
                        </span>
                      </a>
                      <Collapse id="collapseExample"  in={imenuId == i ? true : false}>
                        <div>
                          <Nav as="ul">
                            <li>
                              <a
                                className="profile-dropdown"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <span className="sidebar-mini">MP</span>
                                <span className="sidebar-normal">My Profile</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="profile-dropdown"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <span className="sidebar-mini">EP</span>
                                <span className="sidebar-normal">Edit Profile</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="profile-dropdown"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <span className="sidebar-mini">S</span>
                                <span className="sidebar-normal">Settings</span>
                              </a>
                            </li>
                          </Nav>
                        </div>
                      </Collapse>
                    </div>
                  </div> : null : null
            )

            )
          }
        </div>
      </div>
    </>
  )
}

export default Side