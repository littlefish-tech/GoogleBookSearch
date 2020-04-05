import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "./style.css";
import lib1 from "../../assets/images/lib1.jpg";
import lib2 from "../../assets/images/lib2.jpg";
import lib3 from "../../assets/images/lib3.jpg";
import lib4 from "../../assets/images/lib4.jpg"; 
import lib5 from "../../assets/images/lib5.jpg";



export default class MyCarousel extends Component {
  render() {
    return (
<Carousel
  autoPlay={2000}
  animationSpeed={1000}
  infinite
>
  <img className="carouselImg" src={lib1} />
  <img className="carouselImg" src={lib2} />
  <img className="carouselImg" src={lib3} />
  <img className="carouselImg" src={lib4} />
  <img className="carouselImg" src={lib5} />

</Carousel>
   );
  }
}




// import React from "react";

// function Jumbotron({ children }) {
//   return (
//     <div
//       style={{clear: "both", paddingTop: 120, textAlign: "center", fontSize: 38 }}
//       className="jumbotron"
//     >
//       {children}
//     </div>
//   );
// }

// export default Jumbotron;
