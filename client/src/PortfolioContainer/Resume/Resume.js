import React, {useState, useEffect} from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "./Resume.css";

function Resume(props) {

    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id) return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


const ResumeHeading = (props) => {
    return (
    <div className='resume-heading'>
        <div className='resume-main-heading'>
            <div className='heading-bullet'></div>
                <span>{props.heading ? props.heading : ''}</span>
                {props.fromDate && props.toDate ? (
                    <div className='heading-date'>
                        {props.fromDate + '-' + props.toDate}
                        </div>
                ) : (
                    <div></div>
                )}       
            </div>
            <div className='resume-sub-heading'>
                <span>{props.subHeading ? props.subHeading : ''}</span>
            </div>
            <div className='resume-heading-description'>
                <span>{props.description ? props.description : ''}</span>
            </div>
        </div>
    )
}

// The labels for the side bar loading in the svgs I placed in assets
const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Quick Project Descriptions", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

// Setting my skills percentage bars
  const programmingSkillsDetails = [
    { src: 'C++.png', idx: 0 },
    { src: 'CSS.png', idx: 1 },
    { src: "Git.png", idx: 2 },
    { src: "HTML.png", idx: 3 },
    { src: "Java.png", idx: 4 },
    { src: "JavaScript-logo.png", idx: 5 },
    { src: "node.js-logo.png", idx: 6 },
    { src: "PostgreSQL.png", idx: 7 },
    { src: "Python.png", idx: 8 },
    { src: "React.png", idx: 9 },
    { src: "Redux.png", idx: 10 },
    { src: "Sequelize.png", idx: 11 },
    { src: "Heroku.png", idx: 12 }
  ];

  //Listing my Projects
  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase details about me and my projects in one place.",
      subHeading: "Technologies Used: React.js, Bootstrap",
    },
    {
      title: "BooyaTravel ",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "A web-based application designed to help groups of individuals create itineraries for trips.",
      subHeading:
        "Technologies Used:  React.js, PostgreSQL, Express.js, Node.js, Redux, Socket.io, Heroku, Sequelize ORM, Google Maps API, Tailwind CSS, React Beautiful DnD",
    },
    {
      title: "Grace-Shopper",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "A mockup E-Commerce Website. A Fullstack CRUD application with user authentication and cart functionality.",
      subHeading:
        "Technologies Used: Express.js, React.js, Node.js, Redux, PostgresSQL",
    },
  ];

  // Listing all my Education
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"CUNY Queens College"}
        subHeading={"Bachelor of Science in Computer Science"}
        description={"Relevant Coursework: Object Oriented Programming in C++/Java, Discrete Structures, Data Structures, Design and Analysis of Algorithms, Databases, Software Engineering, Operating Systems, Internet and Web Technologies, Analysis of Algorithms in Big Data, and  Computational Finance."}
        fromDate={"2014"}
        toDate={"2021"}
      />

      <ResumeHeading
        heading={"Fullstack Academy"}
        subHeading={"Certificate of Completion"}
        description={"A 17-week immersive software engineering program based in New York City (taken Remotely), centered on fullstack HTML, CSS, JavaScript development, including Node.js, Express, Sequelize ORM via PostgreSQL databases, React, and Redux."}
        fromDate={"2021"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Benjamin N. Cardozo High School"}
        subHeading={"Advanced Regents Diploma."}
        description={"Select College Now, AP, and Da-Vinci Program Classes."}
        fromDate={"2010"}
        toDate={"2014"}
      />
    </div>,

// Listing my Work Experience
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Blue Bay Diner"}
          subHeading={"Server"}
          fromDate={"August 2017"}
          toDate={"February 2020"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Worked as a server providing customer service with a team of co-workers, and trained several employees to follow standard workflow practices.
          </span>
        </div>
        <ResumeHeading
          heading={"Bay Terrace Diner"}
          subHeading={"Busboy/Promotion to Server/Promotion to Assistant Manager"}
          fromDate={"June 2015"}
          toDate={"August 2017"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Provided customer service, trained new employees, opened and closed buisness select days, and took stock of inventory.
          </span>
        </div>
      </div>
    </div>,

// Listing my programming skills
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill) => (
        <div className="skill-parent" key={skill.idx}>
          <img className='skill-img'src={require(`../../assets/Resume/skills/${skill.src}`)} alt="Images" />
        </div>
      ))}
    </div>,

 // Listing my projects
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

// Listing my Interests
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Sports"
        description="I'm an avid sports fan where I follow and watch Basketball, Football, and the occasional Hockey Games."
      />
      <ResumeHeading
        heading="Politics"
        description="I often find myself reading news outlets and discussing the politics of several different nations with my friends for long periods of time."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in video games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 360;

    let newCarouselOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarouselOffSetStyle(newCarouselOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carouselOffSetStyle.style}
        className="resume-details-carousel"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

    return (
        <div className='resume-container screen-container fade-in' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'Short Version of My Resume'}/>  
            <div className="resume-card">
             <div className="resume-bullets">
                <div className="bullet-container">
                    <div className="bullet-icons"></div>
                    <div className="bullets">{getBullets()}</div>
                </div>
             </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
         </div> 
        </div>
    </div>
    );
}

export default Resume;