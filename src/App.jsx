import githubLogo from './assets/github.png'
import linkedIn from './assets/linkedin.png'
import mail from './assets/mail.png'
import resume from './assets/resume.png'
import home from './assets/home-icon.png'
import line from './assets/line.svg'
import resumeFile from './assets/EduardoSanchez.pdf'
import proj1 from './assets/proj1.png'
import proj2 from './assets/proj2.png'
import proj3 from './assets/proj3.png'
import proj4 from './assets/proj4.png'
import appleCard from './assets/apple-card.png'
import vennCard from './assets/venncard.png'
import imcCard from './assets/imc-card.png'
import rxCard from './assets/rxcard.png'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease',
    });
  }, []);

  return (
    <>
      <div className='navbar' data-aos="slide-down" data-aos-once='true'>
        <a href='/#projects'>
          <h1>projects</h1>
        </a>
        <a href='/#experience'>
          <h1>experience</h1>
        </a>
        <Link to={'/about'}>
          <h1>about</h1>
        </Link>
        <div className='scroll-container'>
          <img src={line} className='line' alt='line' />
          <img src={line} className='line' alt='line' />
          <img src={line} className='line' alt='line' />
        </div>
      </div>
      <div className='landing-container' id='home'>
        <div className='name' data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in">
          <div>EDUARDO</div>
          <div className='sanchez'>SANCHEZ</div>
        </div>
        <div className='icons-container'>
          <a href='https://github.com/EduardoSanchezzz' target="_blank"><img src={githubLogo} className='logo' alt='Github logo' /></a>
          <a href='https://www.linkedin.com/in/sanchez-ed/' target="_blank"><img src={linkedIn} className='logo' alt='LinkedIn Icon' /></a>
          <a href='mailto:e5sanchez@uwaterloo.ca' target="_blank"><img src={mail} className='logo' alt='Mail Icon' /></a>
          <a href={resumeFile} target="_blank"><img src={resume} className='logo' alt='Doc Icon' /></a>
        </div>
      </div>
      <div className='projects-container' id='projects'>
        <img src={line} className='line' alt='line' />
        <h1>projects</h1>
        <div className="project-container cpu" data-aos="fade-up">
          <div className="title">RISC-V Processor</div>
          <Link to={"/projects/riscv-processor"}>
            <img src={proj1} alt="" />
          </Link>
        </div>
        <div className="project-container claw" data-aos="fade-up">
          <div className="title">Claw Machine Controller</div>
          <a href="https://github.com/EduardoSanchezzz/ClawMachineController" target='blank'>
            <img src={proj3} alt="" />
          </a>
        </div>
        <div className="project-container lte" data-aos="fade-up">
          <div className="title">LTE Transceiver Uplink</div>
          <a href="https://github.com/EduardoSanchezzz/RFFEUplink" target='blank'>
            <img src={proj4} alt="" />
          </a>
        </div>
        <div className="project-container music" data-aos="fade-up">
          <div className="title">Music Showcase Website</div>
          <a href="https://eduardosanchez.dev/music-collection-app/" target='blank'>
            <img src={proj2} alt="" />
          </a>
        </div>
      </div>
      <div className="experience-container" id='experience'>
        <img src={line} className='line' alt='line' />
        <h1>experience</h1>
        <div className='exp-cont'>
          <a href="#experience" className='job-card' data-aos="fade-right">
            <img src={appleCard} alt="" />
            <div className='job-title'>RFHW Engineer Intern</div>
            <div className='job-date'>Fall 2023</div>
          </a>
          <a href="#experience" className='job-card' data-aos="fade-down">
            <img src={rxCard} alt="" />
            <div className='job-title'>SW Engineer Intern</div>
            <div className='job-date'>Winter 2023</div>
          </a>
        </div>
        <div className='exp-cont'>
          <a href="#experience" className='job-card' data-aos="fade-up">
            <img src={vennCard} alt="" />
            <div className='job-title'>SW Developer Intern</div>
            <div className='job-date'>Winter 2022</div>
          </a>
          <a href="#experience" className='job-card' data-aos="fade-left">
            <img src={imcCard} alt="" />
            <div className='job-title'>SW Developer Intern</div>
            <div className='job-date'>Fall 2020</div>
          </a>
        </div>
      </div>
      <div className="footer-container" id='contact'>
        <img src={line} className='line' alt='line' />
        <div className="footer">
          <a href='#home'><img src={home} className='logo' alt='Home Icon' /></a>
          {/* <a href={resumeFile} target="_blank">
            <h1>resume</h1>
          </a> */}
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

export default App
