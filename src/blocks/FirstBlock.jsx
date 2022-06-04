import React from 'react';

import cl from './FirstBlock.module.css'

function FirstBlock() {
    return ( 
        <div className={cl.wrapper}>
            {/* header elements 1-st block */}
            <div className={cl.header_container}>
                {/* Header menu */}
                <div className={cl.header_menu}>
                    <nav className={cl.menu_body}>
                        <ul className={cl.menu_list}>
                            <li className={cl.list_item1}><a href="#">Route</a></li>
                            <li className={cl.list_item2}><a href="#">Dates</a></li>
                            <li className={cl.list_item3}><a href="#">About us</a></li>
                        </ul>
                    </nav>
                </div>

                {/* Header logo */}
                <div className={cl.header_logo}>
                    <span className={cl.logo_text}>Smart Travel</span>
                </div>

                {/* Header number */}
                <div className={cl.header_phonenumber}>
                    <span className={cl.header_number}>+375 (28) 829 49 24 </span>
                </div>
                {/* Burger */}
            </div>
            {/* Main elements 1-st block */}
            <div className={cl.main_container}>
                {/* Titles 1-st block */}
                <div className={cl.main_titles}>
                    <div className={cl.main_title}>
                        <h1 className={cl.main_title_text}>Iceland</h1>
                    </div>
                    <div className={cl.main_subtitle}>
                        <h2 className={cl.main_subtitle_text}>Experience the splendor of nature</h2>
                    </div>
                </div>
                {/* Rhomb */}
                <div className={cl.main_rhombs}>
                    <div className={cl.rhombs_first_body}></div>

                    <div className={cl.rhombs_second_body}></div>

                    <div className={cl.rhombs_third_body}></div>

                    <div className={cl.rhombs_fourth_body}></div>

                    <div className={cl.rhombs_fifth_body}></div>
                </div> 
            </div>
        </div>
    );
}

export default FirstBlock;