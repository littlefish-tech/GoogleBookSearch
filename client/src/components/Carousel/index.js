import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import machineLearning from "../../img/machineLearning.jpg"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


 
class CarouselCard extends Component {
    render() {
        return (
          <Carousel
          autoPlay={2000}
          animationSpeed={1000}
          infinite
          >
            <img src={machineLearning} />
            <img src={machineLearning} />
            <img src={machineLearning} />
          </Carousel>
        );
      }
    }
export default CarouselCard;