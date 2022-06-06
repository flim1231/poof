import React from 'react';
import cl from './TwoBlock.module.css'

function FirstBlock() {
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
                Mountains, rocky cliffs, undulating and smooth like waves in the <br />
                Atlantic Ocean mountaineering enthusiasts, and just people who want <br />
                a break from vanity should visit Iceland. 
                </div>

                {/* Iceland button */}

                <div className={cl.iceland_button}>
                    <a href="#" className={cl.iceland_button_text}>Read on</a>
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

                <span className={cl.choose_tour_text}>Choose a tour</span>

                {/* Filter 1 */}

                <span className={cl.filter1}>With good reviews</span>

                <span href="#" className={cl.filter1_cancel}></span>

                {/* Filter2 */}

                <span className={cl.filter2}>Popular Tours</span>

                <span href="#" className={cl.filter2_cancel}></span>

                {/* Filter3 */}

                <span className={cl.filter3}>From cheap to expensive</span>

                <span href="#" className={cl.filter3_cancel}></span>

                {/* Burger */}

                <div className={cl.choose_burger}>
                    <span></span>
                </div>



                {/* Cards */}

                <div className={cl.firstcard}>
                {/* Img */}

                    <div className={cl.firstcard_img_body}>
                        <span className={cl.firstcard_img}></span>
                        <div className={cl.firstcard_text_body}></div>
                    </div>

                </div>

                <div className={cl.secondcard}>
                    <span className={cl.secondcard_img}></span>
                </div>

                <div className={cl.thirdcard}>
                    <span className={cl.thirdcard_img}></span>
                </div>

                <div className={cl.fourthcard}>
                    <span className={cl.fourthcard_img}></span>
                </div>


            </div>
        </div>
    );
}

export default FirstBlock;