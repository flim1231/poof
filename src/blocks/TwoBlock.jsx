import React, { useState } from 'react';
import { useEffect } from 'react';
import cl from './TwoBlock.module.css'

const TwoBlock = () => {

    const [bol, setBol] = useState(true)


    const handle_read = (e) => {    
        e.preventDefault()
        setBol(prevState => !prevState)
    }


        return ( 



            
            <div className={cl.wrapper}>

            

                {/* Iceland info */}
    
                <div className={cl.iceland_info}>
    
                    {/* Iceland_title_title */}
                    <span className={cl.iceland_title_title}>Iceland</span>
                    {/* Iceland title */}

                    <div className={cl.iceland_title}>
    
                        A land of huge volcanoes and <br />
                        protected green fields dotted with  <br />
                        tranquility and serenity. "Land of  <br />
                        Ice" is a country that welcomes all  <br />
                        travelers to its land <br />
                    </div>
    
                    {/* Iceland subtitle */}


                    <div className={cl.iceland_subtitle}>
                        {
                            bol ? <>
                            Mountains, rocky cliffs, undulating and smooth like waves in the <br />
                            Atlantic Ocean mountaineering enthusiasts, and just people who want <br />
                            a break from vanity should visit Iceland. 
                            </>
                                :   <>
                            Mountains, rocky cliffs, undulating and smooth like waves in the <br />
                            Atlantic Ocean mountaineering enthusiasts, and just people who want <br />
                            a break from vanity should visit Iceland. 
                            </>
                        }
                    </div>



                    {/* Iceland button */}

                    <div className={cl.iceland_button}>
                        <button onClick={handle_read} target="_blank" className={cl.iceland_button_text}>Read on</button>
                    </div>
    
                    {/* Iceland mountains */}
    
                    <div className={cl.iceland_mountains}>
                        <span className={cl.mountains_img}></span>
                    </div>
    
                    {/* Iceland waterfall */}
    
                    <div className={cl.iceland_waterfall}>
                        <span className={cl.waterfall_img}></span>
                    </div>
    
                </div>
    
                <div className={cl.choose_tour}>
    
                    {/* Choose a tour text */}
    
                    <span className={cl.choose_tour_text} id="choosetour" >Choose a tour</span>
    
    
                    {/* Burger */}
    
                    <div className={cl.choose_burger}>
                        <span></span>
                    </div>
    
    
    
                    {/* Cards */}
    
                    <div className={cl.cards}>
                        
                        {/* First card */}

                        <div className={cl.firstcard}>
                            <div className={cl.firstcard_img_body}>
                                <span className={cl.firstcard_img}></span>

                                <div className={cl.firstcard_img_compassblock}>
                                    <span className={cl.firstcard_compassimg}></span>
                                    <span className={cl.firstcard_compasstext}>Cruise</span>
                                </div>
                                
                                    <span className={cl.firstcard_img_daystext}>8 days</span>

                            </div>

                            <div className={cl.firstcard_text_body}>
                                <h1 className={cl.firstcard_title}>Waterfalls and glaciers in Iceland</h1>
                                <p className={cl.firstcard_price}>
                                    Price from <span className={cl.firstcard_price_weight}>$ 1,350</span>
                                </p>

                                <ul className={cl.firstcard_stars}>
                                    <li className={cl.firstcard_stars_item}></li>
                                    <li className={cl.firstcard_stars_item}></li>
                                    <li className={cl.firstcard_stars_item}></li>
                                    <li className={cl.firstcard_stars_item}></li>
                                    <li className={cl.firstcard_stars_item}></li>
                                    <li>
                                        <span className={cl.firstcard_stars_rate}>4,9</span>
                                    </li>
                                </ul>

                                <h2 className={cl.firstcard_subtitle}>
                                    The Arctic resort in the city of Iceland "Kópavogur" will suit fans <br />
                                    of icy landscapes and cold weather. The second most populous <br />
                                    (after Reykjavik) city and community in Iceland. It borders <br />
                                    Reykjavik to the north and is part of the agglomeration that is <br />
                                    home to 65% of the population of Iceland...
                                </h2>

                                <div className={cl.firstcard_button}>
                                    <a href="#" className={cl.firstcard_button_text}>View tour</a>
                                </div>

                            </div>
                        </div>

                        {/* Second card */}

                        <div className={cl.secondcard}>
                            <div className={cl.secondcard_img_body}>
                                <span className={cl.secondcard_img}></span>

                                <div className={cl.secondcard_img_compassblock}>
                                    <span className={cl.secondcard_compassimg}></span>
                                    <span className={cl.secondcard_compasstext}>Individual</span>
                                </div>
                                
                                <span className={cl.secondcard_img_daystext}>10 days</span>

                            </div>

                            <div className={cl.secondcard_text_body}>
                                <h1 className={cl.secondcard_title}>Individual tour around Iceland</h1>
                                <p className={cl.secondcard_price}>
                                    Price from <span className={cl.secondcard_price_weight}>$ 1,450</span>
                                </p>

                                <ul className={cl.secondcard_stars}>
                                    <li className={cl.secondcard_stars_item}></li>
                                    <li className={cl.secondcard_stars_item}></li>
                                    <li className={cl.secondcard_stars_item}></li>
                                    <li className={cl.secondcard_stars_item}></li>
                                    <li className={cl.secondcard_stars_item}></li>
                                    <li>
                                        <span className={cl.secondcard_stars_rate}>4,8</span>
                                    </li>
                                </ul>

                                <h2 className={cl.secondcard_subtitle}>
                                    This is a customized tour, which means that you will discover the <br />
                                    country on your own, but under our keen guidance. You don't need <br />
                                    any travel experience or knowledge of foreign languages. <br /> 
                                    Everything will be organized so that you <br />
                                    can enjoy a trip at your own pace at a pre-booked itinerary without worrying. <br />
                                </h2>

                                <div className={cl.secondcard_button}>
                                    <a href="#" className={cl.secondcard_button_text}>View tour</a>
                                </div>

                            </div>
                        </div>

                        {/* Third card */}

                        <div className={cl.thirdcard}>

                            <div className={cl.thirdcard_img_body}>
                                <span className={cl.thirdcard_img}></span>

                                <div className={cl.thirdcard_img_compassblock}>
                                    <span className={cl.thirdcard_compassimg}></span>
                                    <span className={cl.thirdcard_compasstext}>Group</span>
                                </div>
                                
                                <span className={cl.thirdcard_img_daystext}>12 days</span>

                            </div>

                            <div className={cl.thirdcard_text_body}>

                                <h1 className={cl.thirdcard_title}>Hiking in Iceland</h1>
                                <p className={cl.thirdcard_price}>
                                    Price from <span className={cl.thirdcard_price_weight}>$ 750</span>
                                </p>

                                <ul className={cl.thirdcard_stars}>
                                    <li className={cl.thirdcard_stars_item}></li>
                                    <li className={cl.thirdcard_stars_item}></li>
                                    <li className={cl.thirdcard_stars_item}></li>
                                    <li className={cl.thirdcard_stars_item}></li>
                                    <li className={cl.thirdcard_stars_item}></li>
                                    <li>
                                        <span className={cl.thirdcard_stars_rate}>4,7</span>
                                    </li>
                                </ul>

                                <h2 className={cl.thirdcard_subtitle}>
                                A town in the Reykjanes region in southwest Iceland. It is included <br />
                                in the municipality of Reykjanesbær whose population as of 2016 <br /> 
                                is 15,129. In 1995, Keflavik merged with nearby Njarðvík and <br /> 
                                Hafnir to form the municipality of Reykjanesbær.
                                </h2>

                                <div className={cl.thirdcard_button}>
                                    <a href="#" className={cl.thirdcard_button_text}>View tour</a>
                                </div>

                            </div>

                        </div>

                        {/* Fourth card */}

                        <div className={cl.fourthcard}>

                            <div className={cl.fourthcard_img_body}>
                                <span className={cl.fourthcard_img}></span>

                                <div className={cl.fourthcard_img_compassblock}>
                                    <span className={cl.fourthcard_compassimg}></span>
                                    <span className={cl.fourthcard_compasstext}>Autotour</span>
                                </div>
                                
                                <span className={cl.fourthcard_img_daystext}>14 days</span>

                            </div>

                            <div className={cl.fourthcard_text_body}>

                                <h1 className={cl.fourthcard_title}>A car tour around Iceland</h1>
                                <p className={cl.fourthcard_price}>
                                    Price from <span className={cl.fourthcard_price_weight}>$ 1,850</span>
                                </p>

                                <ul className={cl.fourthcard_stars}>
                                    <li className={cl.fourthcard_stars_item}></li>
                                    <li className={cl.fourthcard_stars_item}></li>
                                    <li className={cl.fourthcard_stars_item}></li>
                                    <li className={cl.fourthcard_stars_item}></li>
                                    <li className={cl.fourthcard_stars_item}></li>
                                    <li>
                                        <span className={cl.fourthcard_stars_rate}>4,9</span>
                                    </li>
                                </ul>

                                <h2 className={cl.fourthcard_subtitle}>
                                After driving around the island ten times and selecting the most <br />
                                beautiful and unforgettable places, we have created the perfect <br /> 
                                tour to Iceland for you! We have chosen the most <br />
                                convenient means of transportation to explore this place - motorhomes, <br /> 
                                trailers or, as they are also called, campers. <br />
                                </h2>

                                <div className={cl.fourthcard_button}>
                                    <a href="#" className={cl.fourthcard_button_text}>View tour</a>
                                </div>

                            </div>

                        </div>

                    </div>
    
                    <div className={cl.tour_slider}>

                        <div className={cl.tour_slider_arrowprev}></div>

                        <div className={cl.tour_sliderarea_body}>

                            <div className={cl.tour_sliderarea}>

                                <div className={cl.tour_sliderarea_scroll}></div>
                                
                            </div>

                        </div>

                        <div className={cl.tour_slider_arrownext}></div>

                    </div>
    
                </div>
            </div>
        );
    
}

export default TwoBlock;