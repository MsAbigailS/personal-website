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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="page">
        <Navbar/>
        <div className="top-of-page">
            <div className="welcome-and-picture">
              <h1 className="heading">
                Welcome
              </h1>
              {/* <img src={MyPicture} alt="MyPictureHere" className="my-picture"/> */}
            </div>
            <div className="bio-and-resume">
              <p>
              {/* THIS IS WHERE MY SUPER AWESOME BIO WILL GO. */}
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean magna eros, venenatis volutpat nibh at, imperdiet sollicitudin erat. Nulla facilisi. Etiam finibus velit lacus, vitae faucibus elit tristique at. Nulla ante libero, venenatis sit amet elementum at, maximus sed libero. Donec luctus non metus vel feugiat. Integer ullamcorper, quam id ultrices condimentum, nibh quam tempor massa, vitae auctor erat quam vel purus. Vivamus gravida pharetra dui eget cursus. Vivamus elementum urna et consectetur eleifend. Morbi malesuada lorem nec luctus viverra. Vestibulum commodo ipsum eu felis cursus, sit amet tempor turpis gravida. Integer ut convallis ex. Curabitur at diam at magna varius viverra. */}
                {/* Option 1 */}
              {/* Abigail Smith is a student attending The University of Texas at Dallas as a Terry Scholar.
              One of ten freshmen to receive the Terry academic scholarship, she's eagerly working to pursue her 
              degrees in Computer Science and Software Engineering. After spending her high school years enrolled in 
              each computer science course available, commencing and leading various programming clubs and societies, 
              competiting in state-wide programming competitions, and becoming a lead programming teacher for children 
              ages 6-17, she has full dedication to pursuing her passions. Her goals include exploring the expansive 
              field of computer science to find which career works best for her while continuing to contribute to 
              those around her through community service. */}
              {/* Option 2 */}
              Abigail Smith is finishing her first year at The University of Texas at Dallas as a Terry Scholar. 
              As one of ten freshmen to recieve the academic, full-ride scholarship award, Smith is continuing to foster 
              her passions towards Computer Science by pursuing degrees in both Computer Science and Software Engineering. 
              A first generation students, Abigail's determined to continue her education and to continue exploring the 
              expansive field of computer science. In high school, Abigail Smith actively pursued her interests by becoming 
              a lead programming teacher for children ages 6-17, starting and leading various programming clubs and societies, 
              competitng in various state-wide programming competitions, and enrolling in nearly every computer science course she could. 
              By pursuing higher education, Smith hopes to discover which area of computer science and software engineering work best for her!
              {/* Option 3 */}
              Abigail Smith is currently enrolled at The University of Texas at Dallas double majoring in Computer Science and Software Engineering. 
              </p>
              <Button name="Resume"/>
            </div>
          </div>
          <div className="second-segment">
            <h2>Education</h2>
            <EducationTimeline/>
          </div>
          {/* <div className="third-segment">
            <h2>Projects</h2>
            <ProjectCard/>
          </div> */}
          <div className="fourth-segment">
            <h2>Work Experience</h2>
            <WorkCard/>
          </div>
        </div>
          
          <footer>
            Contact information:
            <br/>
            Abigail Smith
            <br/>
            Email: msabigailrsmith@gmail.com
            <br/>
            Github: MsAbigailS
            <br/>
            Instgram: AbigailSmith.function
          </footer>
      </header>
    </div>
  );
}

export default App;
