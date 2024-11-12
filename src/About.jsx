import Navbar from "./Navbar";
import line from './assets/line.svg'
import home from './assets/home-icon.png'
import me from './assets/me.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function About() {
  useEffect(()=> {
    AOS.init({
      duration: 800,
      easing: 'ease',
    });
  },[]);
  return (
    <>
      <Navbar />
      <div className='about-container'>
        <div className="about-text">
          <h2>Hi I'm <span style={{color:'#FF59B7'}}>Eduardo</span> :)</h2>
          <h3>I'm a recent Electrical Engineering graduate from the University of Waterloo with a passion for solving challenges in hardware and software.</h3>
          <div className="about-me">
            <p>🎧 I'm always listening to music and I love exploring new sounds.</p>
            <p>🤔 I’m a Mexican-Canadian engineer, always curious and eager to tackle challenges.</p>
            <p>🐶 I love spending time with my dog, exploring trails or just enjoying the fresh air.</p>
          </div>
          <h4>As an engineer, I love solving problems. I believe in presenting my work clearly so it's easy for anyone to grasp. I thrive on continuous learning and collaboration to make a meaningful impact.</h4>
          <p>I'd love to get in touch! Say hi at <a style={{color:'#FF59B7'}} href="mailto:e5sanchez@uwaterloo.ca">e5sanchez@uwaterloo.ca</a></p>
        </div>
        <div className="me-img">
          <img src={me} alt="me!" />
        </div>
      </div>
      <div className="footer-container" id='contact'>
        <img src={line} className='line' alt='line' />
        <div className="footer">
          <a href='/#home'><img src={home} className='logo' alt='Home Icon' /></a>
          <div className="contact-container">
            <div className="contact">
              contact
            </div>
            <div className="contact-info">
              <div>e5sanchez@uwaterloo.ca</div>
              <div>905-966-4113</div>
              <div>linkedin.com/sanchez-ed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
