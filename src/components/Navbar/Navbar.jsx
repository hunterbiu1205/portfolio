import React, { useState, useEffect } from 'react'

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss'
import { images } from '../../constants'

const Navbar = () => {

    const items = ['home', 'about', 'work', 'skills', 'contact']
    const [toggle, setToggle] = useState(false)

    const [navSize, setnavSize] = useState("7rem"); //nav height
    const [navColor, setnavColor] = useState("transparent");
    const [navBorder, setnavBorder] = useState("none");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("rgb(52,76,68)") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("5rem") : setnavSize("7rem");
        window.scrollY > 10 ? setnavBorder("2px solid #f1f2f5") : setnavBorder("");
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);


    return (
        <nav className="app__navbar"
            style={{
                backgroundColor: navColor,
                height: navSize,
                border: navBorder,
                transition: "all 1s"
            }}
        >
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
