import React from 'react'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
const SocialMedia = () => (

    <div className="app__social">
        <div>

            <a href="https://www.linkedin.com/in/huatao-dong-892694208/">
                <BsLinkedin />
            </a>
        </div>

        <div>
            <a href="https://www.instagram.com/hunterbiu/">
                <BsInstagram />
            </a>
        </div>
        <div>
            <a href="https://www.facebook.com/hunter.don.98096">
                <FaFacebookF />
            </a>
        </div>
    </div>
);


export default SocialMedia
