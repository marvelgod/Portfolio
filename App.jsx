import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCodepen } from '@fortawesome/free-brands-svg-icons'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <ul className="nav">
          <li><a href='#' className="link">Home</a></li>
          <li><a href='#' className="link">Work</a></li>
          <li><a href='#' className="link">About</a></li>
          <li><a href='#' className="link">Project</a></li>
          <li><a href='#' className="link">Service</a></li>
        </ul>
        <div className="left">
          <div className="icons">
            <a href="www.facebook.com"><FontAwesomeIcon icon={faFacebookF} className="ic-f" /> </a>
            <a href="https://www.linkedin.com/in/ankush-singh-ba2557330/"><FontAwesomeIcon icon={faLinkedinIn} className="ic-l" /></a>
            <a href="https://www.instagram.com/_ankushsingh_v/"> <FontAwesomeIcon icon={faInstagram} className="ic-i" /></a>
            <FontAwesomeIcon icon={faCodepen} className="ic-c" />
          </div>

          <div className="content">
            <p className="intro">Hi Myself <span>Ankush Singh</span></p>
            <h1>Web Developer</h1>
            <p className="Details">I am skilled in creating ,efficient ,scalable, an visually appealing website.I specialize in bringing innovative ideas to the web using cutting-edge technologies and best practies in front-end development.</p>
            <div className="btn">
              <button>Hire Me</button>
              <button>View Project</button>
            </div>
          </div>

        </div>
        <div className="right">
          <div className="design">
            <div className="Outer"></div>
            <div className="Inner">
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
export default App
