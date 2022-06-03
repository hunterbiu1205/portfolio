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
                <h1 className="head-text2">
                    " I Know That <span>Good Development</span> <br />means <span>Good Business</span> "
                </h1>

                <div className="app__profiles">
                    {abouts.map((about, index) => (
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, type: 'tween' }}
                            className="app__profile-item"
                            key={about.title + index}
                        >
                            <div>
                                <img src={urlFor(about.imgUrl)} alt={about.title} />
                                <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title} </h2>
                                {/* <p className="p-text" style={{ marginTop: 10 }}>{about.description} </p> */}
                            </div>

                        </motion.div>
                    ))}
                </div>

                <div className="about_me">
                    <h1 className="head-text2">About Me</h1>
                    <p>
                        Back to 4 years ago, I quit my job at the China Coast Guard and ended my five-year career as a corporal sailor. During these five years, my colleagues and I have successfully completed over 100 search and rescue, smuggler interception, and fisheries law enforcement operations. These five years of experience have left a valuable and rich experience in my life.
                    </p>

                    <div className="cg_image">
                        <img src={images.cg1} />
                        <img src={images.cg2} />
                        <img src={images.cg3} />
                        <img src={images.cg4} />
                    </div>
                    <p>
                        In 2018, I made the most important choice of my life and came to Australia to become a student at the University of Adelaide. Computer science is a very young discipline, and as the main technology of the third industrial revolution, it is still one of the core disciplines, and that is why I decided to study computer science. Through my university studies, I am particularly interested in a course called Web & Database Computing and determined that I want to become a front-end developer or full stack developer which I am continuing to learn and working towards this direction. Maybe it's because I love design and the pursuit of perfection, I really enjoy working in software development and I want to turn that interest into my profession. I completed my studies at the University of Adelaide this year and I am ready to enter the next phase of my life.
                    </p>

                    <div className="cg_image">
                        <img src={images.graduation1} />
                        <img src={images.graduation2} />
                        <img src={images.graduation3} />
                        <img src={images.graduation4} />
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
