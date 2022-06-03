import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
const SocialMedia = () => (

    <div className="app__social">
        <div>

            <a href="https://twitter.com/Hunterbiu1">
                <BsTwitter />
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
