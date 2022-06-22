import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

// const abouts = [
//     { title: 'Web Development', description: 'I am a good web developer.', imgUrl: images.about01 },
//     { title: 'Web Design', description: 'I am a good web developer.', imgUrl: images.about02 },
//     { title: 'UI/UX', description: 'I am a good web developer.', imgUrl: images.about03 },
//     { title: 'Web Animations', description: 'I am a good web developer.', imgUrl: images.about04 },
// ];

const About = () => {

    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]'

        client.fetch(query)
            .then((data) => setAbouts(data))
    }, []);


    return (
        <>

            <div className="app__about">

                <div className="app__about_intro">

                    <motion.div
                        whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                        className='app__header-info'
                    >
                        <div className='header__title'>
                            <h1>
                                Huatao Dong
                            </ h1>
                            <h1 className='title__job'>
                                Web Developer
                            </h1>
                        </div>

                        <div className="header__sum">
                            <p>Junior Web Developer is seeking an opportunity to extend my knowledge in web development, web design, and mobile application development solutions to meet business needs. Having a positive outlook and am always willing to learn new traits. I work well both independently and as part of a team!</p>
                        </div>

                        <div className="header__contact">
                            <a href={require("../../assets/Huatao_Dong.pdf")} download="GFG">
                                <button className="button" type="button">GET MY RESUME</button>
                            </a>
                            <a href="mailto:hunterbiu1205@gmail.com">
                                <button className="button" type="button">EMAIL ME</button>
                            </a>
                        </div>

                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, delayChildren: 0.5 }}
                        className='app__header-img'
                    >
                        <img className="profile" src={images.profile} alt="profile_bg" />
                        <motion.img
                            whileInView={{ scale: [0, 1] }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            src={images.circle} //it is an image
                            alt="profile_circle"
                            className='overlay_circle'
                        />
                    </motion.div>

                </div>

                <div className="about_me">
                    <h1 className="head-text">About Me</h1>
                    <p>
                        Back 4 years ago, I quit my job at the China Coast Guard and ended my five-year career as a corporal sailor. During those five years, my colleagues and I successfully completed over 100 search and rescue, interception of smuggling, and fisheries law enforcement operations. These five years of work have left me with valuable experience and wealth in life.
                    </p>

                    {/* <div className="cg_image">
                        <img src={images.cg1} />
                        <img src={images.cg2} />
                        <img src={images.cg3} />
                        <img src={images.cg4} />
                    </div> */}
                    <p>
                        In 2018, I made the most important choice of my life and came to Australia to become a student at the University of Adelaide. Computer science is the study of computation, automation, and information. It is generally considered an academic field of study with a wide range of research, applications and employment directions. As the main technology of the third industrial revolution, it is still one of the core disciplines and has a bright future development, which is why I decided to study this major. Web development is an exciting career because it's always evolving and constantly changing. It has the opportunity for people to grow and interact with new tools and new skills. Maybe it's because I love design and the pursuit of perfection, I really enjoy working in web development and I want to turn that interest into my profession. As a junior developer, I want to enter this industry through website development to continuously enrich my experience and skills to participate in more development projects in the future.
                    </p>

                    <div className="cg_image">
                        <img src={images.graduation1} />
                        <img src={images.graduation2} />
                        {/* <img src={images.graduation3} />
                        <img src={images.graduation4} /> */}
                        <img src={images.cg1} />
                        <img src={images.cg2} />
                    </div>
                </div>





            </div >
        </>

    )
}


export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg',
);
