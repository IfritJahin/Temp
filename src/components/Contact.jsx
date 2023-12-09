import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Bg from '../img/Bg.mp4'
import nbg from '../img/nbg.jpg'
import { Button, Container, Card, Col, Form, Row, Modal, InputGroup, Nav, Tabs, Tab, Image } from 'react-bootstrap';
function Contact() {
    return (
        <div className='card-below-header d-flex justify-content-center '>
            <video autoPlay muted loop id="background-video" className="w-100 vh-100 position-fixed top-0 left-0">
                <source src={Bg} type="video/mp4" />
            </video>
            <Card>
            </Card>
        </div >
    )
}

export default Contact
