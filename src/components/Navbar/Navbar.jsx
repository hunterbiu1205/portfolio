import React, { useState } from 'react'

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss'
import { images } from '../../constants'

const Navbar = () => {

    const items = ['home', 'about', 'work', 'skills', 'contact']
    const [toggle, setToggle] = useState(false)

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.HD1} alt='logo' />
            </div>

            <ul className='app__navbar-links'>
                {items.map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                < HiMenuAlt4 onClick={() => setToggle(true)} />

                {/* if toggle is ture, then render mobile navigation*/}
                {toggle && (
                    <motion.div
                        whileInView={{ x: [150, 0] }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        {/* close menu once click*/}
                        <ul>
                            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                <li className="p-text" key={item} >
                                    {/* close menu and change to item once click*/}
                                    <a href={`#${item}`} onClick={() => setToggle(false)} >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}

            </div>
        </nav >
    );
};

export default Navbar
