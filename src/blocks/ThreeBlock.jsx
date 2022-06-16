import React from 'react';
import cl from './ThreeBlock.module.css'

function FirstBlock() {
    return ( 
        <div className={cl.wrapper}>
            <div className={cl.hotels}>
                <h1 className={cl.hotels_title}>Hotels</h1>


                <div className={cl.hotels_wherestay_info}>

                    <div className={cl.hotels_img_house}></div>

                    <h2 className={cl.wherestay_title}>Where to stay in Iceland</h2>

                    <h2 className={cl.wherestay_subtitle}>
                    The hotel base in Iceland is extremely well developed. Tourists are <br /> 
                    offered different types of hotels can be found in the center of the <br /> 
                    capital Reykjavik, as well as on the outskirts of the same capital. Each <br /> 
                    hotel is trying to survive in its own way because of the large number <br /> 
                    of competitors. That is why the tourist is offered a large number of <br /> 
                    options.
                    </h2>

                    <div className={cl.wherestay_button}>
                        <a href="#" className={cl.wherestay_button_text}>View Hotels</a>
                    </div>

                    <div className={cl.hotels_img_water}></div>

                </div>

            </div>

            <div className={cl.popularplaces}>

                <div className={cl.popularplaces_text}>
    
                    <h1 className={cl.popularplaces_title}>Popular places</h1>
    
                    <div className={cl.popularplaces_firstplace}>
                        <a href="#" className={cl.popularplaces_firstplace_text}>Northern Iceland</a>
                    </div>
    
                    <div className={cl.popularplaces_secondplace}>
                        <a href="#" className={cl.popularplaces_secondplace_text}>Southern Iceland</a>
                    </div>
    
                    <div className={cl.popularplaces_allplaces}>
                        <a href="#" className={cl.popularplaces_allplaces_text}>All locations</a>
                    </div>
                </div>

                <div className={cl.popularplaces_info}>

                    <div className={cl.popularplaces_firstimg}></div>

                    <div className={cl.popularplaces_placeinfo}>
                        <h1 className={cl.popularplaces_placeinfo_title}>Blue Lagoon</h1>
                    
                        <h2 className={cl.popularplaces_placeinfo_subtitle}>
                        A waste condensate storage pond at the <br /> 
                        Svartsengisvirkjun geothermal power plant, which <br /> 
                        became a popular tourist attraction after it <br /> 
                        became accessible in the 1990s. It is located on <br /> 
                        the Reykjanes Peninsula in the southwestern part <br /> 
                        of Iceland. <br />
                        </h2>

                        <div className={cl.popularplaces_placeinfo_button}>
                            <a href="#" className={cl.popularplaces_placeinfo_button_text}>Read on</a>
                        </div>

                    </div>

                    <div className={cl.popularplaces_secondimg}></div>

                </div>

                <div className={cl.popularplaces_slider}>

                        <div className={cl.popularplaces_slider_arrowprev}></div>

                        <div className={cl.popularplaces_sliderarea_body}>

                            <div className={cl.popularplaces_sliderarea}>

                                <div className={cl.popularplaces_sliderarea_scroll}></div>
                                
                            </div>

                        </div>

                        <div className={cl.popularplaces_slider_arrownext}></div>

                </div>

            </div>

            <div className={cl.vehiclerental_info}>

                <h1 className={cl.vehiclerental_title}>Vehicle rental</h1>

                <div className={cl.vehiclerental_info_text_body}>

                    <h2 className={cl.vehiclerental_info_title}>
                        You can rent any kind of transportation, <br />
                        whether it's a boat or a bicycle
                    </h2>

                    <h2 className={cl.vehiclerental_info_subtitle}>
                        Transport in Iceland is very extensive and so you can rent <br />
                        any type of vehicle. Transport is a very important part of <br />
                        your trip, and the comfort you get from this very...
                    </h2>

                    <div className={cl.vehiclerental_info_button}>
                        <a href="#" className={cl.vehiclerental_info_button_text}>Read on</a>
                    </div>

                    <span className={cl.vehiclerental_info_img}></span>

                </div>

            </div>

            <div className={cl.recreation}>

                <h1 className={cl.recreation_title}>Active recreation</h1>

                <div className={cl.recreation_info_body}>

                    <h2 className={cl.recreation_info_title}>Diving, sailing, fishing, excursions</h2>

                    <h2 className={cl.recreation_info_subtitle}>
                    In Iceland, besides the beautiful scenery, there are also <br /> 
                    active recreation. Mostly activities such as diving, bird <br /> 
                    watching, excursions, etc. are booked locally in <br /> 
                    Iceland, but our tour selection service allows you to <br /> 
                    choose a filter on the site with additional options that <br /> 
                    can be added if the tour allows. And yes, these options <br /> 
                    are added at an additional cost. 
                    </h2>

                    <div className={cl.recreation_info_button}>
                        <a href="#" className={cl.recreation_info_button_text}>Read on</a>
                    </div>

                </div>

                <div className={cl.recreation_firstimg}></div>

                <div className={cl.recreation_secondimg}></div>

            </div>

            <div className={cl.blog}>

                <h1 className={cl.blog_title}>Blog</h1>

                <div className={cl.blog_info}>

                    <div className={cl.blog_img}></div>

                    <h2 className={cl.blog_info_date}>28 May 2022</h2>

                    <h1 className={cl.blog_info_title}>Gudlfoss waterfall</h1>

                    <h2 className={cl.blog_info_subtitle}>
                    Tours in Iceland rarely go without a visit to the country's <br /> 
                    largest, most full-flowing and beautiful "golden" waterfall. <br /> 
                    The two steps are 11 meters and 21 meters high, and the <br /> 
                    depth of water fall up to 70 meters made this attraction one <br /> 
                    of the most visited and loved by tourists. When you come <br />
                    here, you will be able to take unique photos. Location of the <br />
                    site is no less interesting - the glacial river Hvitau. You can <br />
                    get there by sightseeing bus, as well as by private car - on a <br />
                    good asphalt road (near the waterfall there is not only a cafe, <br /> 
                    but also free parking for cars).
                    </h2>

                    <div className={cl.blog_info_button}>
                        <a href="#" className={cl.blog_info_button_text}>View All</a>
                    </div>

                </div>

        

            </div>

            <div className={cl.impressions}>

                <h1 className={cl.impressions_title}>Impressions</h1>

                <div className={cl.reviews}>

                    <h1 className={cl.reviews_title}>Customer reviews</h1>

                    <div className={cl.reviews_body}>
                        <div className={cl.firstreview}>
                        
                            <div className={cl.firstreview_img_body}>
                        
                                <div className={cl.firstreview_img}></div>
                                <span className={cl.firstreview_name}>Tom</span>
                                <span className={cl.firstreview_location}>Texas,USA</span>
                                <span className={cl.firstreview_date}>DATE OF JOURNEY JUNE, 2022</span>
                            </div>
                            <div className={cl.firstreview_comment}>
                                <h2 className={cl.comment_title}>Autotour to Northern Iceland</h2>
                                <div className={cl.comment_stars_body}>
                                    <ul className={cl.comment_stars}>
                                        <li className={cl.comment_stars_item}></li>
                                        <li className={cl.comment_stars_item}></li>
                                        <li className={cl.comment_stars_item}></li>
                                        <li className={cl.comment_stars_item}></li>
                                        <li className={cl.comment_stars_item}></li>
                                        <li>
                                            <span className={cl.comment_stars_rate}>5,0</span>
                                        </li>
                                    </ul>
                                </div>
                                <h2 className={cl.comment_subtitle}>
                                    Iceland is a country of amazing landscapes, hills, lakes, mountains, <br />
                                    etc. I was inspired to go to Iceland by the website of this travel <br />
                                    company. And no regrets in Iceland I managed to take so many <br />
                                    beautiful pictures that I even had a memory card on my camera full. I <br />
                                    chose the right tour for me, thanks to the filters on the website, and <br />
                                    hit the road. Iceland is one of the best countries I have visited <br />
                                    recently, I recommend it to everyone.
                                </h2>
                            </div>
                        </div>
                        <div className={cl.secondreview}>
                            <div className={cl.secondreview_img_body}>
                        
                                <div className={cl.secondreview_img}></div>
                                <span className={cl.secondreview_name}>Tom</span>
                                <span className={cl.secondreview_location}>Texas,USA</span>
                                <span className={cl.secondreview_date}>DATE OF JOURNEY JUNE, 2022</span>
                            </div>
                            <div className={cl.secondreview_comment}>
                                <h2 className={cl.comment_title}>Autotour to Northern Iceland</h2>
                                <div className={cl.comment_stars_body}>
                                    <ul className={cl.comment_stars}>
                                        <li className={cl.comment_stars_item}></li>
                                        <li className={cl.comment_stars_item}></li>
                                        <li className={cl.comment_stars_item}></li>
                                        <li className={cl.comment_stars_item}></li>
                                        <li className={cl.comment_stars_item}></li>
                                        <li>
                                            <span className={cl.comment_stars_rate}>5,0</span>
                                        </li>
                                    </ul>
                                </div>
                                <h2 className={cl.comment_subtitle}>
                                    Iceland is a country of amazing landscapes, hills, lakes, mountains, <br />
                                    etc. I was inspired to go to Iceland by the website of this travel <br />
                                    company. And no regrets in Iceland I managed to take so many <br />
                                    beautiful pictures that I even had a memory card on my camera full. I <br />
                                    chose the right tour for me, thanks to the filters on the website, and <br />
                                    hit the road. Iceland is one of the best countries I have visited <br />
                                    recently, I recommend it to everyone.
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className={cl.reviews_slider}>

                        <div className={cl.reviews_slider_arrowprev}></div>

                        <div className={cl.reviews_sliderarea_body}>

                            <div className={cl.reviews_sliderarea}>

                                <div className={cl.reviews_sliderarea_scroll}></div>
                                
                            </div>

                        </div>

                        <div className={cl.reviews_slider_arrownext}></div>

                    </div>

                </div>

            </div>

            <div className={cl.trip_form}>

                <h1 className={cl.trip_form_title}>Book a trip now</h1>

                <form action="" className={cl.form_body}>

                    <h2 className={cl.form_title}>Book a trip to Iceland</h2>

                    <input type="text" placeholder="Your name" className={cl.form_input_yourname} />

                    <input type="text" placeholder="Your last name" className={cl.form_input_yourlastname} />

                    <input type="text" placeholder="E-mail address" className={cl.form_input_email} />

                    <input type="num" placeholder="Mobile number" className={cl.form_input_number} />

                    <select name="choose_tour" id="#choose_tour" className={cl.form_select_choosetour}>

                        <option value="1" disabled selected>Choose a tour</option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                        <option value="5"></option>

                    </select>

                    <div className={cl.select_arrow}>
                        <span className={cl.select_arrow_img}></span>
                    </div>

                    <select name="extras" id="#extras"className={cl.form_select_extras}>

                        <option value="1" disabled selected>Optional extras</option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                        <option value="5"></option>

                    </select>

                    <div className={cl.select_arrow}>
                        <span className={cl.select_arrow_img}></span>
                    </div>

                    <input type="button" value="Book a tour" />

                </form>

                <div className={cl.trip_form_img}></div>

            </div>

            <div className={cl.contact}>

                <h1 className={cl.contact_title}>Contact</h1>

                <div className={cl.contact_info_img}></div>

                <div className={cl.contact_info_body}>


                    <div className={cl.contact_info_text}>
                        <h2 className={cl.contact_info_title}>
                            Feel free to ask any pressing <br />
                            questions
                        </h2>
                        <span className={cl.contact_info_location}>
                            c.Berlin, st.17 June street
                        </span>
                        <span className={cl.contact_info_email}>
                            smartravel@gmail.com
                        </span>

                        <h1 className={cl.contact_info_date}>
                        Office hours are Monday through Sunday. <br />
                        Office hours: 9:00 - 21:00
                        </h1>

                        <span className={cl.contact_info_number}>
                            +375 (28) 829 49 24
                        </span>
                    </div>

                </div>

            </div>

            <div className={cl.footer}>

                <div className={cl.footer_body}>

                    <div className={cl.tours}>

                        <h1 className={cl.tours_title}>Tours</h1>

                        <a href="#" className={cl.tours_cruise}>Cruise</a>

                        <a href="#" className={cl.tours_author}>Author's tours</a>

                        <a href="#" className={cl.tours_group}>Group tour</a>

                        <a href="#" className={cl.tours_tour}>Tour</a>

                    </div>

                    <div className={cl.active_recreation}>

                        <h1 className={cl.active_recreation_title}>Active recreaction</h1>

                        <a href="#" className={cl.recreation_diving}>Diving</a>

                        <a href="#" className={cl.recreation_sailing}>Sailing</a>

                        <a href="#" className={cl.recreation_fishing}>Fishing</a>

                        <a href="#" className={cl.recreation_excursions}>Excursions</a>

                    </div>

                    <ul className={cl.retreat}>

                        <li className={cl.retreat_title}>Planning a retreat</li>

                        <li href="#" className={cl.retreat_car}>Rent a car</li>

                        <li href="#" className={cl.retreat_bicycle}>Bicycle rental</li>

                        <li href="#" className={cl.retreat_tour}>Group tour</li>

                        <li href="#" className={cl.retreat_house}>Rental housing</li>

                    </ul>

                    <div className={cl.footer_contact}>

                        <h1 className={cl.footer_contact_title}>Contact</h1>

                        <div className={cl.footer_contact_img}>
                            <div className={cl.footer_contact_facebook_body}>
                                <a href="#" className={cl.footer_contact_facebook}></a>
                            </div>
                            <div className={cl.footer_contact_twitter_body}>
                                <a href="#" className={cl.footer_contact_twitter}></a>
                            </div>
                            <div className={cl.footer_contact_instagram_body}>
                                <a href="#" className={cl.footer_contact_instagram}></a>
                            </div>
                        </div>

                        <a href="tel:+375288294924" className={cl.footer_contact_number}>+375 (28) 829 49 24 </a>

                        <span href="#" className={cl.footer_contact_way}>Way of payment</span>

                        <div className={cl.footer_contact_cards}>
                            <div className={cl.footer_contact_visa_block}>
                                <a href="#" className={cl.footer_contact_visa_text}>VISA</a>
                            </div>
                            <div className={cl.footer_contact_mastercard_block}>
                                <a href="#" className={cl.footer_contact_mastercard_text}>MasterCard</a>
                            </div>
                        </div>
                        
                    </div>

                    <div className={cl.footer_logo}>
                        <span className={cl.footer_logo_text}>SMART TRAVEL</span>
                    </div>

                    <div className={cl.footer_arrow_body}>
                        <a href="#top" className={cl.footer_arrow}></a>
                    </div>

                    <div className={cl.footer_copyright}>
                        <span className={cl.footer_copyright_text}>2022 © all rights reserved</span>
                    </div>

                </div>

            </div>

        </div>
     );
}

export default FirstBlock;