import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import harryPotter from "../../img/harryPotter.jpg"
import book2 from "../../img/book2.jpg"
import library3 from "../../img/library3.jpg"

 
class CarouselCard extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={harryPotter} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={book2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={library3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default CarouselCard;