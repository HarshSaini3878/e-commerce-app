import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = () => {
  const imageStyle = {
    height: '500px', // Adjust the height as needed
   // Centers the image within the given area
  };

  return (
    <Carousel interval={3000} pause={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/banner4.jpg"
          alt="First slide"
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/banner2.jpg"
          alt="Second slide"
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/banner3.jpg"
          alt="Third slide"
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/banner5.jpg"
          alt="Third slide"
          style={imageStyle}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
