import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/Logo.png'
import BL from '../img/bl2.png'
import LoginModel from './LoginModel'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass as faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping as faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser as faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars as faBars } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Card, Navbar, Col, Form, Row, Nav } from 'react-bootstrap';

function Header({ onSearch }) {

    const [isScrolled, setIsScrolled] = useState(false);
    window.addEventListener('DOMContentLoaded', (event) => {
        const selectElem = document.querySelector('.select');

        selectElem.addEventListener('mouseenter', function () {
            this.size = this.options.length;
        });

        selectElem.addEventListener('mouseleave', function () {
            this.size = 1;
        });
    });

    useEffect(() => {
        const handleScroll = () => {
            // Set isScrolled to true if the window is scrolled more than 50 pixels, otherwise false.
            setIsScrolled(window.scrollY > 50);
        };

        // Attach the scroll listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <header className='fixed-top'>
                {isScrolled ? (
                    <Navbar collapseOnSelect expand="sm" className="navbar-dark text-white d-flex align-items-center justify-content-between px-3 py-0 shadow" style={{ backgroundColor: '#0a1b34' }}>
                        <Link to='/Temp/'>
                            <Navbar.Brand>
                                <img className="mr-3" style={{ width: '100px', marginLeft: '40px' }} src={BL} alt="Logo" />
                            </Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav text-white " />
                        <Navbar.Collapse id="responsive-navbar-nav text-white" >
                            <Nav className="d-flex justify-content-center flex-grow-1 text-white align-items-center flex-grow-1" >
                                <Link to='/Temp/' className='nav-link text-white text-decoration-none m-3'>Home</Link>
                                <Link to='/shop' className='nav-link text-white text-decoration-none m-3'>Shop</Link>
                                <Link to='/products' className='nav-link text-white text-decoration-none m-3'>Products</Link>
                                <Link to='/contact' className='nav-link text-white  text-decoration-none m-3'>Contact</Link>
                                <Link to='/help' className='nav-link text-white text-decoration-none m-3'>Help & Support</Link>

                                <div className="dropdown">
                                    <button className="btn text-white text-decoration-none border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        All Categories
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">All Categories</a>
                                        <a className="dropdown-item" href="#">Laptops</a>
                                        <a className="dropdown-item" href="#">Phones</a>
                                        {/* ... other items ... */}
                                    </div>
                                </div>
                            </Nav>
                            <Nav>
                                <section id='icons' className="d-flex align-items-center px-1 text-white" >
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex align-items-center m-3" onClick={() => setModalShow(true)}>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "white", fontSize: '25px', verticalAlign: 'middle' }} />
                                        </div>
                                        <div className="d-flex align-items-center ">
                                            <Button variant='none' className='text-decoration-none text-dark' onClick={() => setModalShow(true)}>
                                                <FontAwesomeIcon icon={faUser} style={{ color: "white", fontSize: '25px' }} />
                                            </Button>
                                            <LoginModel
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            />
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <Button variant='none' style={{ position: 'relative' }} >
                                                <FontAwesomeIcon icon={faCartShopping} style={{ color: "white", fontSize: '25px' }} />
                                                <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                                                    style={{
                                                        color: 'white',
                                                        position: 'absolute',
                                                        height: '1.3rem',
                                                        width: '1.3rem',
                                                        bottom: 0,
                                                        right: '0',
                                                        transform: 'translate(5%, 5%)'

                                                    }}>3</div>
                                            </Button>

                                        </div>

                                        <div className="d-flex align-items-center m-3">
                                            <FontAwesomeIcon icon={faBars} style={{ color: "white", fontSize: '25px' }} />
                                        </div>
                                    </div>
                                </section>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                ) : (
                    <Navbar collapseOnSelect expand="lg" className="d-flex align-items-center justify-content-between px-3 py-0">
                        <Link to='/Temp/'>
                            <Navbar.Brand>
                                <img className="mr-3" style={{ width: '100px', marginLeft: '40px' }} src={BL} alt="Logo" />
                            </Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className=" d-flex justify-content-center flex-grow-1 text-white align-items-center flex-grow-1" >
                                <Link to='/Temp/' className='nav-link text-white text-decoration-none m-3'>Home</Link>
                                <Link to='/shop' className='nav-link text-white text-decoration-none m-3'>Shop</Link>
                                <Link to='/products' className='nav-link text-white text-decoration-none m-3'>Products</Link>
                                <Link to='/contact' className='nav-link text-white  text-decoration-none m-3'>Contact</Link>
                                <Link to='/help' className='nav-link text-white text-decoration-none m-3'>Help & Support</Link>

                                <div className="dropdown">
                                    <button className="btn text-white text-decoration-none border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        All Categories
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">All Categories</a>
                                        <a className="dropdown-item" href="#">Laptops</a>
                                        <a className="dropdown-item" href="#">Phones</a>
                                        {/* ... other items ... */}
                                    </div>
                                </div>
                            </Nav>
                            <Nav>
                                <section id='icons' className="d-flex align-items-center px-1 text-white" >
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex align-items-center m-3" onClick={() => setModalShow(true)}>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "white", fontSize: '25px', verticalAlign: 'middle' }} />
                                        </div>
                                        <div className="d-flex align-items-center ">
                                            <Button variant='none' className='text-decoration-none text-dark' onClick={() => setModalShow(true)}>
                                                <FontAwesomeIcon icon={faUser} style={{ color: "white", fontSize: '25px' }} />
                                            </Button>
                                            <LoginModel
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            />
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <Button variant='none' style={{ position: 'relative' }} >
                                                <FontAwesomeIcon icon={faCartShopping} style={{ color: "white", fontSize: '25px' }} />
                                                <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                                                    style={{
                                                        color: 'white',
                                                        position: 'absolute',
                                                        height: '1.3rem',
                                                        width: '1.3rem',
                                                        bottom: 0,
                                                        right: '0',
                                                        transform: 'translate(5%, 5%)'

                                                    }}>3</div>
                                            </Button>

                                        </div>

                                        <div className="d-flex align-items-center m-3">
                                            <FontAwesomeIcon icon={faBars} style={{ color: "white", fontSize: '25px' }} />
                                        </div>
                                    </div>
                                </section>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                )}
            </header>
        </div>
    )
}


export default Header
