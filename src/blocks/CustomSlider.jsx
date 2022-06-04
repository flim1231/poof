import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'
import './styleSlide.css'

import slide1 from './../imgs/firstblock/slide1.png'
import slide2 from './../imgs/firstblock/slide2.png'
import slide3 from './../imgs/firstblock/slide3.png'
import slide4 from './../imgs/firstblock/slide4.png'
import slide5 from './../imgs/firstblock/slide5.png'

class CustomSlider extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='head1'>

                <Carousel nextIcon={false} prevIcon={false}>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />
                    <Carousel.Caption interval={4000}>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src={slide4}
                        alt="Third slide"
                    />
                    <Carousel.Caption interval={4000}>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src={slide5}
                        alt="Third slide"
                    />
                    <Carousel.Caption interval={4000}>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
            
        );
    }

}

export default CustomSlider;