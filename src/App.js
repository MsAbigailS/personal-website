import logo from './logo.svg';
import './App.css';
import Card from './playerCard/Card';
import RecipeDeck from './recipeDeck/RecipeDeck';
import HomePage from './mainPage/HomePage/HomePage';
import EducationTimeline from './education/EducationTimeline';
import Button from './button/Button';
import ProjectCard from './project/ProjectCard';
import WorkCard from './workExperience/WorkCard';
import MyPicture from './images/avatarOption1.png';
import Navbar from './navBar/Navbar';
import ImageCarousel from './mainPage/HomePage/ImageCarousel';
import {ImageCarouselData} from './mainPage/HomePage/ImageCarouselData';
import abby1 from './images/Abby1.png';
import aboutme from './images/aboutme.png';
import business from './images/business3.png';
import gaming from './images/gaming2.png';
import volunteer from './images/volunteer2.png';
import learning from './images/learning.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="page">
          {/* <Navbar/> */}
          <div className="image-carousel-container">
            
            <div className="personal-information-container">
              <div className="profile-image-container">
                <img src={abby1} alt="AbbyImage" className="profile-picture"/>
              </div>
              <div className="introduction">
                Hello, my name is Abigail Smith and
                <div className="introduction-emphasis">I AM AN ASPIRING FRONT-END DEVELOPER</div>
                executing flexible, responsive design for Web and mobile.
              </div>
            </div>
          </div>

          {/* About Me */}
          <div className="about-me-container">
            <div className="about-me-display">
              {/* Image */}
              <div className="about-me-image-container">
                {/* Title */}
                <div className="section-title-container">
                    <div className="section-title-back">
                      ABOUT
                    </div>
                    <div className="section-title-front">
                      about me
                    </div>
                </div>
                <img src={aboutme} alt="AboutMeImage" className="about-me-picture"/>
              </div>
              {/* Content */}
              <div className="about-me-facts-container">
                {/* First generation */}
                <span>
                  <span className="about-me-title">
                    <h4>
                      <img src="https://img.icons8.com/color/48/000000/student-female.png"/>
                      First generation
                    </h4>
                  </span>
                  <div className="about-me-description">I'm a first generation college student. I hope to one day give back to my community and support future first generation students.</div>
                </span>
                {/* Business */}
                <span>
                  <span className="about-me-title">
                    <h4>
                      <img src={business} className="about-me-icon"/>
                      Sticker business
                    </h4>
                  </span>
                  <div className="about-me-description">My love for art only grows with the years, and now I design and sell my own stickers!</div>
                </span>
                {/* Gaming */}
                <span>
                  <span className="about-me-title">
                    <h4>
                      <img src={gaming} className="about-me-icon"/>
                      Gaming
                    </h4>
                  </span>
                  <div className="about-me-description">My favorite hobby is competitive gaming. I usually play the same games, but I thrive discussing strategies with my team.</div>
                </span>
                {/* Volunteer */}
                <span>
                  <span className="about-me-title">
                    <img src={volunteer} className="about-me-icon"/>
                    <h4>Volunteer Work</h4>
                  </span>
                  <div className="about-me-description">The greatest service: giving back. Currently I do most of my community service through my school organizations.</div>
                </span>

              </div>
            </div>
          </div>
          
          {/* <div className="top-of-page" id="top-page"> */}
            

            {/* <div className="welcome-and-picture">
              <h1 className="heading">
                Abigail Smith
              </h1>
              <img src={MyPicture} alt="MyPictureHere" className="my-picture"/>
            </div> */}
            {/* <div className="bio-and-resume">
              Abigail Smith is finishing her first year at The University of Texas at Dallas.

              <ul className="facts">
                <li>Personal interest in JS React.</li>
                <li>Coursework in C++, MIPS, and the UNIX OS.</li>
                <li>Experience in Visual Studio Code, MARS, and CLion.</li>
                <li>Experience as a programming teacher.</li>
                <li>Small business owner.</li>
              </ul>

              <ul className="facts">
                <li>First generation college student.</li>
                <li>One of ten freshmen to receive full-ride academic scholarship.</li>
                <li>Pursuing a BS in Computer Science and MS in Software Enginnering</li>
              </ul>
            </div> */}
          {/* </div> */}
          <div className="education-container" id="second">
            {/* Title */}
            <div className="section-title-container" id="education-title-container">
                    <div className="section-title-back" id="education-title-back">
                      EDUCATION
                    </div>
                    <div className="section-title-front" id="education-title-front">
                      education
                    </div>
            </div>
            <EducationTimeline/>
          </div>
          <div className="projects-container" id="third">
            {/* Title */}
            <div className="section-title-container" id="projects-title-container">
                    <div className="section-title-back" id="projects-title-back">
                      PORTFOLIO
                    </div>
                    <div className="section-title-front" id="projects-title-front">
                      projects
                    </div>
            </div>
            <ProjectCard/>
          </div>

        </div>
      </header>
      <foot>
        <a href="https://www.linkedin.com/in/abigail-smith-computer-science/" target="_blank">
          <img src="https://img.icons8.com/wired/64/000000/linkedin.png"/>
        </a> 
        <a href="https://github.com/MsAbigailS"target="_blank">
          <img src="https://img.icons8.com/wired/64/000000/github.png"/>
        </a>
        <a href="https://www.instagram.com/abigailsmith.function/"target="_blank">  
          <img src="https://img.icons8.com/wired/64/000000/instagram-new.png"/>
        </a> 
      </foot>
    </div>
  );
}

export default App;
