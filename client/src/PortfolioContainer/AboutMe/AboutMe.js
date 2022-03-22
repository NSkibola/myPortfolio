import React from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './AboutMe.css';


function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id) return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
        description: "I'm a recent graduate of CUNY Queens College with my Bachelors of Science in Computer Science. I'm also a recent graduate of FullStack Academys Software Engineering Coding Immersive Bootcamp. I have exeperienced the rush of developing projects on a deadline and working as a team on an application. I'm familiar with many different algorithms and all of the most common Data Structures as well as a few uncommon ones.",
        highlights: {
            bullets: [
                "PERN stack Development",
                "Redux for State Mnanagement",
                "Deployment of Web Applications via Heroku",
                "REST API's",
                "Sorting Algorithms",
                "LinkedLists, Stacks/Queues, Hash Tables, Trees, and Graphs"
            ],
            heading: "Here are a few highlights of what I'm familiar with:",
        },
    };
    const renderHighlight = () => {
        return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
        ))
    }

    return (
        <div className='about-me-container screen-container fade-in' id={props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Who Am I?'} />
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                        <div className='about-me-highlights'>
                            <div className='highlight-heading'>
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className='about-me-options'>
                        <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToContactMe()}>
                        Contact Me
                    </button>
                    <a href='Resume.pdf' download='Resume.pdf'>
                    <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;