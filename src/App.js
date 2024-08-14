import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import CodeLink from './components/CodeLink';
import Contact from './components/Contact';
import Footer from './components/Footer';
import resumeData from './resumeData';
import AnimationComponent from './components/animation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AnimationComponent />
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <CodeLink resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;