import React from 'react'
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

import './Header.scss'


const Header = () => {
    return (
        <div class='app__header app__flex' >
            <motion.div
                whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className='app__header-info'
            >
                <div className='header__title'>
                    <h1 className='title__name'>
                        <span>H</span>
                        <span>u</span>
                        <span>a</span>
                        <span>t</span>
                        <span>a</span>
                        <span>o</span>
                        <span>&nbsp;</span>
                        <span>D</span>
                        <span>o</span>
                        <span>n</span>
                        <span>g</span>
                    </ h1>

                    <h1 className='title__job'>
                        <span>W</span>
                        <span>e</span>
                        <span>b</span>
                        <span>&nbsp;</span>
                        <span>D</span>
                        <span>e</span>
                        <span>v</span>
                        <span>e</span>
                        <span>p</span>
                        <span>o</span>
                        <span>r</span>
                    </h1>
                </div>

                <div className="header__sum app__flex">
                    <p>Solution-driven web developer adept at contributing to highly collaborative work environment and finding solutions. Have experience developing consumer-focused website using HTML, CSS, PHP, JavaScript and frameworks. Good knowledge of the best practices for web design, user experience, and speed!</p>
                </div>

                <div className="header__contact">
                    <a href={require("../../assets/react.png")} download="GFG">
                        <button className="button" type="button">GET MY RESUME</button>
                    </a>
                    <a href="mailto:hunterbiu1205@gmail.com">
                        <button className="button" type="button">hunterbiu1205@gmail.com</button>
                    </a>
                </div>

            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className='app__header-img'
            >
                <img src={images.profile} alt="profile_bg" />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle} //it is an image
                    alt="profile_circle"
                    className='overlay_circle'
                />
            </motion.div>

        </div >
    );
}

export default AppWrap(Header, 'home');