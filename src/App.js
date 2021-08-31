import './App.scss';
import $ from 'jquery';
import { useEffect } from 'react';
import Heading from './components/Heading';
import Clients from './components/Clients';
import Services from './components/Services';
import Project from './components/Project';
import DilationAndEvaluation from './components/DilationAndEvaluation';
import LetStart from './components/LetStart';
import Footer from './components/Footer';

function App() {
  const isElementHasClass = (classList, className) => {
    for(let index = 0; index < classList.length; index++) {
      if (classList[index] === className) return true;
    }
    return false;
  }
  useEffect(() => {
    window.onscroll = function() {
      //Display background navigation and on-top button when scroll down
      if (document.documentElement.scrollTop > 100) {
          $(".navigation-bar").addClass("background-navigation-bar");
          $("#to-top").addClass("is-scrolled");
      } else {
          $(".navigation-bar").removeClass("background-navigation-bar");
          $("#to-top").removeClass("is-scrolled");
      }

      let windowScrollTop = document.documentElement.scrollTop;
      let screenHeight = window.screen.height;
      
      //Appearing effect of project element when it's scrolled first time 
      const projectList = document.getElementsByClassName("project");
      for(let index = 0; index < projectList.length; index++) {
        let coordinatesDisplay = projectList[index].offsetTop - Math.floor((screenHeight - projectList[index].offsetHeight) / 2);
        if (windowScrollTop > coordinatesDisplay) {
          if (isElementHasClass(projectList[index].classList, "is-displayed")) {continue;}
          projectList[index].classList.add("is-displayed");
        }
      }

      //Appearing effect of services element when it's scrolled first time 
      const serviceCoordinatesDisplay = document.getElementById("services").offsetTop - Math.floor((screenHeight - document.getElementById("services").offsetHeight) / 2);
      if (windowScrollTop > serviceCoordinatesDisplay) document.getElementById("services").classList.add("is-displayed");      
    
      //Appearing effect of dilation-evaluation element when it's scrolled first time 
      const evaluationCoordinatesDisplay = document.getElementById("dilation-evaluation").offsetTop - 100;
      if (windowScrollTop > evaluationCoordinatesDisplay) document.getElementById("dilation-evaluation").classList.add("is-displayed");      
      
    };
  }, []);
  return (
    <div id="app">
      <a href="#heading"><i class="fas fa-arrow-circle-up" id="to-top" ></i></a>
      <Heading />
      <Clients />
      <Services />
      <Project />
      <DilationAndEvaluation />
      <LetStart />
      <Footer />
    </div>
  );
}

export default App;
