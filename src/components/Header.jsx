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
            <header className='gradient-navbar fixed-top' variant="dark">
                {isScrolled ? (
                    <Card.Header className="gradient-navbar d-flex align-items-center justify-content-between px-3 py-0 shadow">
                        <img className="mr-3" style={{ width: '100px', marginLeft: '40px' }} src={BL} alt="Logo" />
                        <Navbar className="d-flex justify-content-center flex-grow-1 text-white align-items-center flex-grow-1">
                            <Link to='/Temp/' className='nav-link text-decoration-none m-3'>Home</Link>
                            <Link to='/shop' className='nav-link text-decoration-none m-3'>Shop</Link>
                            <Link to='/products' className='nav-link text-decoration-none m-3'>Products</Link>
                            <Link to='/contact' className='nav-link text-decoration-none m-3'>Contact</Link>
                            <Link to='/help' className='nav-link text-decoration-none m-3'>Help & Support</Link>

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
                        </Navbar>
                        <section id='icons' className="d-flex align-items-center px-1 text-white" >
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center m-3" onClick={() => setModalShow(true)}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "white", fontSize: '20px', verticalAlign: 'middle' }} />
                                </div>
                                <div className="d-flex align-items-center m-3">
                                    <Link className='text-decoration-none text-dark' onClick={() => setModalShow(true)}>
                                        <FontAwesomeIcon icon={faUser} style={{ color: "white", fontSize: '20px' }} />
                                    </Link>
                                    <LoginModel
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </div>

                                <div className="d-flex align-items-center m-3">
                                    <FontAwesomeIcon icon={faCartShopping} style={{ color: "white", fontSize: '20px' }} />
                                </div>

                                <div className="d-flex align-items-center m-3">
                                    <FontAwesomeIcon icon={faBars} style={{ color: "white", fontSize: '20px' }} />
                                </div>
                            </div>
                        </section>
                    </Card.Header>
                ) : (
                    <>
                        <Card.Header className="bg-light d-flex align-items-center justify-content-between px-2 py-0 shadow">
                            <div className="d-flex align-items-center">
                                <img className="mr-3" style={{ width: '100px', marginLeft: '100px' }} src={Logo} alt="Logo" />
                            </div>
                            <div className='align-items-center h-100px w-200px'>
                                <Form className="d-flex navbar-form navbar-left">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2 rounded-pill"
                                        aria-label="Search"
                                        style={{ width: '400px', marginLeft: '80px' }}
                                    />
                                    <Button className="rounded-pill" variant="outline-primary">
                                        Search
                                    </Button>
                                </Form>
                            </div>
                            <section id='icons' className="d-flex justify-content-end text-dark">
                                <div className="d-flex align-items-center m-2">
                                    <Link className='text-decoration-none text-dark' onClick={() => setModalShow(true)}>
                                        <FontAwesomeIcon icon={faUser} style={{ color: "#4084a1", fontSize: '20px' }} />
                                        <span className="m-2">My Account</span>
                                    </Link>
                                    <LoginModel
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </div>

                                <div className="d-flex align-items-center m-2">
                                    <FontAwesomeIcon icon={faCartShopping} style={{ color: "#4084a1", fontSize: '20px' }} />
                                    <span className="m-2 text">Your cart</span>
                                </div>

                                <div className="d-flex align-items-center m-2">
                                    <FontAwesomeIcon icon={faBars} style={{ color: "#4084a1", fontSize: '20px' }} />
                                    <span className="m-2 text">Wishlist</span>
                                </div>
                            </section>

                        </Card.Header>

                        <Navbar className="gradient-navbar text-white  py-2">
                            <Link to='/Temp/' className='nav-link text-decoration-none m-3'>Home</Link>
                            <Link to='/shop' className='nav-link text-decoration-none m-3'>Shop</Link>
                            <Link to='/products' className='nav-link text-decoration-none m-3'>Products</Link>
                            <Link to='/contact' className='nav-link text-decoration-none m-3'>Contact</Link>
                            <Link to='/help' className='nav-link text-decoration-none m-3'>Help & Support</Link>
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

                        </Navbar>
                    </>
                )}
            </header>
        </div>
    )
}


export default Header
