import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar() {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://i.pinimg.com/originals/12/09/c3/1209c327430651c8626fa30c708568e4.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
           <Link className="navbar-brand" to={'/sign-in'}>
           Captain America
          </Link>
        </Navbar.Brand>
          <Nav>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'/sign-in'}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/sign-up'}>
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </Nav>
        </div>
      </nav>
      
    )
  }
}