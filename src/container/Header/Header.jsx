import React from 'react'

import { AppWrap } from '../../wrapper';
import './Header.scss'

const Header = () => {
    return (

        <div className='app__header'>

            <div className="header__intro">
                <h1>
                    <span>I</span>
                    <span>&nbsp;</span>
                    <span>L</span>
                    <span>e</span>
                    <span>a</span>
                    <span>r</span>
                    <span>n</span>
                    <span>,</span>
                    <span>&nbsp;</span>
                    <span>I</span>
                    <span>&nbsp;</span>
                    <span>D</span>
                    <span>e</span>
                    <span>v</span>
                    <span>e</span>
                    <span>l</span>
                    <span>o</span>
                    <span>p</span>
                    <span>,</span>
                    <span>&nbsp;</span>
                    <span>I</span>
                    <span>&nbsp;</span>
                    <span>G</span>
                    <span>r</span>
                    <span>o</span>
                    <span>w</span>
                </ h1>
            </div>

        </div >
    );
}

export default AppWrap(Header, 'home');
