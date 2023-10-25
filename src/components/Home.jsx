import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Rating from 'react-rating';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/home.css';
import Home_p from './home_p';
import appleImg from '../img/app3.jpg';
import apple2Img from '../img/app1.jpg';
import apple3Img from '../img/app2.png';
import bgimg from '../img/bgimg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping as faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars as faBars } from '@fortawesome/free-solid-svg-icons'
import { Card, Image, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { faStar as faStar } from '@fortawesome/free-solid-svg-icons'
import { faUser as faUser } from '@fortawesome/free-solid-svg-icons'
function Home() {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <main>
      <div className='mb-0' style={{ marginBottom: '0' }}>
        <Carousel data-bs-theme="light" >
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={appleImg}
              alt="First slide"
            />
            <Carousel.Caption>
              <h2 className='ff-inherit'>First slide label</h2>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={apple2Img}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h2 className='ff-inherit'>First slide label</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-auto"
              src={apple3Img}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2 className='ff-inherit'>First slide label</h2>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <h2 className='hp text-center mt-3'>Popular Products</h2>
      <div className='bg-white' style={{ height: '520px', marginBottom: '20px' }}>
        <div className="popular">
          <div className='container'>
            <Slider {...settings}>
              {
                Home_p.map((curElement) => {
                  return (
                    <div className='boxes' key={curElement.id} >
                      <Card className='box' style={{ width: '18rem', maxHeight: '500px' }}>
                        <Card.Img variant="top" className='img' style={{ maxHeight: '288px' }} src={curElement.img} alt='' />
                        <Card.Body className='card_body'>


                          <Card.Title className="box-title" ><h6>{curElement.Name || 'Product Name'}</h6></Card.Title>
                          <Card.Text className="box-description " style={{ maxHeight: '24px', }}>{curElement.type || 'Product Description'}</Card.Text>
                          <Card.Text className="box-price">Price: {curElement.price}</Card.Text>
                          <Rating className='align-items-center'
                            emptySymbol={<FontAwesomeIcon icon={faStar} style={{ color: "#fae500", }} />}
                            fullSymbol={<FontAwesomeIcon icon={faStar} style={{ color: "#dde000", }} />}
                          />
                        </Card.Body>
                        <div className="hover-icons">
                          <div className='d-flex justify-content-center'>
                            <Button variant='none' className='rounded-circle align-items-center m-2' style={{ background: 'white', height: '3rem', width: '3em', }}>
                              <FontAwesomeIcon icon={faCartShopping} style={{ color: "grey", fontSize: '15px' }} />
                            </Button>
                            <Button variant='none' className='rounded-circle align-items-center m-2' style={{ background: 'white', height: '3rem', width: '3em', }}>
                              <FontAwesomeIcon icon={faBars} style={{ color: "grey", fontSize: '15px' }} />
                            </Button>
                          </div>
                          <Button variant="none" className='rounded-pill mt-3' style={{ color: 'white', background: 'rgba(10,27,52,1)', }}>Select Options</Button>
                        </div>

                      </Card>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>
      </div>
    </main >
  )
};

export default Home;
