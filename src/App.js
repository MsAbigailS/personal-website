import logo from './logo.svg';
import './App.css';
import Card from './playerCard/Card';
import RecipeDeck from './recipeDeck/RecipeDeck';
import Navbar from './mainPage/NavBar/Navbar';
import HomePage from './mainPage/HomePage/HomePage';
import EducationTimeline from './education/EducationTimeline';
import Button from './button/Button';
import ProjectCard from './project/ProjectCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="top-of-page">
            
            <h2 className="title">
              Welcome
            </h2>
            
            <Button/>
          </div>
          
          <h2>Education</h2>
          <EducationTimeline/>
          <h2>Projects</h2>
          <ProjectCard/>
      </header>
    </div>
  );
}

export default App;
