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
                            <li className={cl.list_item}><a href="#" className={cl.list_link}>Route</a></li>
                            <li className={cl.list_item}><a href="#" className={cl.list_link}>Dates</a></li>
                            <li className={cl.list_item}><a href="#" className={cl.list_link}>About us</a></li>
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
                    <div className={cl.rhomb_body_first}>
                        <span className={cl.rhombs_figure_first}></span>
                    </div>
                    <div className={cl.rhomb_body_second}><span className={cl.rhombs_figure_second}></span></div>
                    <div className={cl.rhomb_body_third}><span className={cl.rhombs_figure_third}></span></div>
                    <div className={cl.rhomb_body_fourth}><span className={cl.rhombs_figure_fourth}></span></div>
                    <div className={cl.rhomb_body_fifth}><span className={cl.rhombs_figure_fifth}></span></div>
                </div> 
            </div>

        </div>
    );
}

export default FirstBlock;