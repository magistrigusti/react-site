import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import lightImg from '../assets/1.jpg';
import darkImg from '../assets/2.jpg';


export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img 
              className="d-block w-100"
              src={lightImg}
              alt="Light Img"
          />

          <Carousel.Caption>
            <h3>Slider Image</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={darkImg}
            alt="Darl Img"
          />

          <Carousel.Caption>
            <h3>Slider Image</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}