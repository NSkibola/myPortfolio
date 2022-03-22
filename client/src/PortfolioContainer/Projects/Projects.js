import React from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import { Card, Row, Col, Image } from 'react-bootstrap';
import portfolio from "../../assets/Projects/portfolioSite.PNG";
import booyaTravel from "../../assets/Projects/booyaTravel.PNG";
import graceShopper from "../../assets/Projects/graceShopper.PNG";

import './Projects.css';

export default function Projects(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return (
     <div className='projects-container fade-in' id={props.id || ""}>
         <div className='project-parent'>
            <ScreenHeading title={'Projects'} subHeading={'Recent Projects, with more to come!'} />
            <Row>
                <Col md={3}>
                  <Card className="mb-2">
                      <Image 
                         src={portfolio} 
                         className="card-img-top"
                         alt="My Portfolio Site" 
                         fluid 
                      />
                     <Card.Body>
                           <Card.Title>
                             <h2>My Portfolio Website</h2>
                          </Card.Title>
                        <Card.Text>
                          <p>My portfolio site that you are visiting right now! My first ever personal website, I'm not the greatest at styling but hopefully you do find it nice to look at and enjoy scrolling through it.
                          </p>
                          <a href='https://www.linkedin.com/in/nikola-skibola/'>
                            <i className='fa fa-globe'></i>
                        </a>
                        <a href='https://github.com/NSkibola/myPortfolio'>
                            <i className='fa fa-github'></i>
                        </a>
                        </Card.Text>
                     </Card.Body>
                 </Card>
                </Col>
            <Col md={3}>
            <Card className="mb-2">
                 <Image 
                    src={booyaTravel} 
                    className="card-img-top"
                    alt="BooyaTravel" 
                    fluid 
                  />
                <Card.Body>
                    <Card.Title>
                        <h2>BooyaTravel</h2>
                    </Card.Title>
                    <Card.Text>
                    <p>A web-based bootcamp group application designed to help groups of individuals create itineraries for trips much 
                    more easily by incorporating live access editing between each person along with a visually 
                    appealing UI for search functionality of places to visit in users selected area.</p>
                    <a href='https://booya-travel.herokuapp.com/'>
                            <i className='fa fa-globe'></i>
                        </a>
                        <a href='https://github.com/Yaya-2109/Capstone'>
                            <i className='fa fa-github'></i>
                        </a>
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col md={3}>
            <Card  className="mb-2">
                 <Image 
                    src={graceShopper} 
                    className="card-img-top"
                    alt="Grace-Shopper" 
                    fluid 
                  />
                <Card.Body>
                    <Card.Title>
                        <h2>GraceShopper</h2>
                    </Card.Title>
                    <Card.Text>
                    <p>A mockup E-commerce site developed as a bootcamp group project to sell sports memorabilia. 
                    Goal was to show skills in developing a Fullstack CRUD application with user authentication 
                    and cart functionality.</p>
                    <a href='https://scarlet-grace-shopper.herokuapp.com/login'>
                            <i className='fa fa-globe'></i>
                        </a>
                        <a href='https://github.com/Scarlet-Squirrels/GraceShopper'>
                            <i className='fa fa-github'></i>
                        </a>
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        </div>
    </div>
    );
}
