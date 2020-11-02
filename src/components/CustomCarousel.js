import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const CustomCarousel = ({ images }) => {
  return (
    <Carousel>
      {images?.map((image, index) => (
        <Carousel.Item key={index.toString()}>
          <Image src={image.href} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
