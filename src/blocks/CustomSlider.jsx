import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'
import './styleSlide.css'

import img1shadow from './../imgs/firstblock/img1shadow.png'
import img2shadow from './../imgs/firstblock/img2shadow.png'
import img3shadow from './../imgs/firstblock/img3shadow.png'
import img4shadow from './../imgs/firstblock/img4shadow.png'
import img5shadow from './../imgs/firstblock/img5shadow.png'

class CustomSlider extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='head1'>
                
                <Carousel nextIcon={false} prevIcon={false}>
<<<<<<< HEAD
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={img1shadow}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="slider_title">Iceland</h3>
                        <p className="slider_subtitle">Experience the splendor of nature</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={img2shadow}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className="slider_title">Iceland</h3>
                        <p className="slider_subtitle">Experience the splendor of nature</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={img3shadow}
                        alt="Third slide"
                    />
                    <Carousel.Caption >
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={img4shadow}
                        alt="fourth slide"
                    />
                    <Carousel.Caption >
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={img5shadow}
                        alt="fifth slide"
                    />
                    <Carousel.Caption >
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
=======
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={img1shadow}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="slider_title">Iceland</h3>
                            <p className="slider_subtitle">Experience the splendor of nature</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={img2shadow}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3 className="slider_title">Iceland</h3>
                            <p className="slider_subtitle">Experience the splendor of nature</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={img3shadow}
                            alt="Third slide"
                        />
                        <Carousel.Caption >
                            <h3 className="slider_title">Iceland</h3>
                            <p className="slider_subtitle">Experience the splendor of nature</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={img4shadow}
                            alt="fourth slide"
                        />
                        <Carousel.Caption >
                            <h3 className="slider_title">Iceland</h3>
                            <p className="slider_subtitle">Experience the splendor of nature</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={img5shadow}
                            alt="fifth slide"
                        />
                        <Carousel.Caption >
                            <h3 className="slider_title">Iceland</h3>
                            <p className="slider_subtitle">Experience the splendor of nature</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
>>>>>>> 0e3af05e7ff7a612fe0a386595b87ff36c955ffd
                {/* Header menu */}
                <div className="header_menu">
                        <nav className="menu_body">
                            <ul className="menu_list">
                                <li className="list_item1"><a href="#">Route</a></li>
                                <li className="list_item2"><a href="#">Dates</a></li>
                                <li className="list_item3"><a href="#">About us</a></li>
                            </ul>
                        </nav>
                    </div>
                {/* Header logo */}
                    <div className="header_logo">
                        <span className="logo_text">Smart Travel</span>
                    </div>
                {/* Header number */}
                    <div className="header_number">
                        <span className="number_text">+375 (28) 829 49 24 </span>
                    </div>
            </div>
                

        );
    }

}

export default CustomSlider;