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
import Button from 'react-bootstrap/Button';
import { BsCart3 } from "react-icons/bs";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
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
        <h2 className='hp'>Popular Products</h2>
        <div className="popular">
          <div className='container'>
            <Slider {...settings}>
              {
                Home_p.map((curElement) => {
                  return (
                    <div className='boxes' key={curElement.id}>
                      <div className='box'>
                        <img className='img' src={curElement.img} alt=''>
                        </img>
                        <div className='cardicons'>
                          <OverlayTrigger variant='light' overlay={<Tooltip id="tooltip" >Add To Cart!</Tooltip>}>
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
                        <span className="box-title">{curElement.Name || 'Product Name'}</span>
                        <h4 className="box-description">{curElement.type || 'Product Description'}</h4>
                        <p className="box-price ">Price: {curElement.price}</p>
                        <Button variant="dark" size="m">Select Options</Button>
                      </div>
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
