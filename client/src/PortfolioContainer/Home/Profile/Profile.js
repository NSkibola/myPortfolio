import React from 'react';
import Typical from 'react-typical';
import ScrollService from "../../../utilities/ScrollService";
import './Profile.css';

function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='https://www.linkedin.com/in/nikola-skibola/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://github.com/NSkibola'>
                            <i className='fa fa-github'></i>
                        </a>
                        </div>
                    </div>
                <div className="profile-details-name">
                    <span className='primary-text'>
                        {" "}
                        Hello, I'm <span className="highlighted-text">Nikola Skibola</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            <Typical 
                            loop={Infinity}
                            steps={[
                                "College Graduate",
                                3000,
                                "Coding Bootcamp Graduate",
                                3000,
                                "FullStack Software Engineer",
                                3000,
                                "PERN Stack Engineer",
                                3000,
                            ]}
                            />
                        </h1>
                    </span>
                    <span className="profile-role-tagline">
                        A budding young Fullstack Software Engineer
                    </span>
                </div>
                
                <div className="profile-options">
                    <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToContactMe()}> Contact Me </button>
                    <a href='Resume.pdf' download='Resume.pdf'>
                    <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
            </div>
        </div>
    </div>
  );
}

export default Profile;