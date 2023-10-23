import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/home.css';
import Home_p from './home_p';
import appleImg from '../img/app3.jpg';
import apple2Img from '../img/app1.jpg';
import apple3Img from '../img/app2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping as faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars as faBars } from '@fortawesome/free-solid-svg-icons'
import { Card, Image, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';


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

      <Carousel data-bs-theme="light" className='content-below-header' >
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
      <>
        <h2 className='hp text-center'>Popular Products</h2>
        <div className="popular">
          <div className='container'>
            <Slider {...settings}>
              {
                Home_p.map((curElement) => {
                  return (
                    <div className='boxes' key={curElement.id}>
                      <Card className='box'>
                        <Card.Img variant="top" className='img' src={curElement.img} alt='' />
                        <Card.Body>
                          <div className='cardicons'>
                            <OverlayTrigger variant='light' overlay={<Tooltip id="tooltip">Add To Cart!</Tooltip>}>
                              <span className="d-inline-block">
                                <FontAwesomeIcon icon={faCartShopping} style={{ color: "", fontSize: '20px', margin: '5px' }} />
                              </span>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip id="tooltip">Add To Wishlist!</Tooltip>}>
                              <span className="d-inline-block">
                                <FontAwesomeIcon icon={faBars} style={{ color: "", fontSize: '20px', margin: '5px' }} />
                              </span>
                            </OverlayTrigger>
                          </div>
                          <Card.Title className="box-title">{curElement.Name || 'Product Name'}</Card.Title>
                          <Card.Text className="box-description">{curElement.type || 'Product Description'}</Card.Text>
                          <Card.Text className="box-price">Price: {curElement.price}</Card.Text>
                          <Button variant="none" className='rounded-pill' size="lg" style={{ color: 'white', background: 'rgba(10,27,52,1)', }}>Select Options</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>
      </>
    </main>
  );
};

export default Home;
