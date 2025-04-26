import React from 'react';
import App from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
  return (
    <body style={{ backgroundColor:'#0f172a', minHeight: '100vh' }}>
    <div>
      <div>
     
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
            <a className="navbar-brand" href="#">
              Portfolio
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">
                    Skill
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="container-fluid hero-section">
            <div className="hero-text">
              <h5 className='text-white'>Hello, It's Me</h5>
              <h1 className='text-white' >Saket Waghade</h1>
              <h3 >
                And I'm a <span className="text-info">Frontend Developer</span>
              </h3>
              <p className='text-white' >
                I'm a web Designer with extensive experience for over 3 years.
                Expertise is to create and website design, frontend design, and
                many more...
              </p>

              <div className="social-icons my-3">
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>

              <button className="btn btn-custom text-white "> More About Me</button>
            </div>

            <div className="profile-pic-container">
              <img src="image.jpg" alt="Profile" className="profile-pic" />
            </div>
          </div>

          {/* Skills Section */}
          <div className="container skills-section" id="skills">
            <h2 className='text-white'>
              My <span>Skills</span>
            </h2>
            <div className="row">
              {/* Technical Skills */}
              <div className="col-md-6">
                <h5 className="mb-4 text-white">Technical Skills</h5>

                <div className="tech-skill">
                  <p className='text-white'>
                    <img
                      src="https://img.icons8.com/color/48/html-5--v1.png"
                      alt="html-icon"
                    />{' '}
                    HTML
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>

                <div className="tech-skill">
                  <p className='text-white'>
                    <img
                      src="https://img.icons8.com/color/48/css3.png"
                      alt="css-icon"
                    />{' '}
                    CSS
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>

                <div className="tech-skill">
                  <p className='text-white'>
                    <img
                      src="https://img.icons8.com/color/48/javascript--v1.png"
                      alt="js-icon"
                    />{' '}
                    JavaScript
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
                
                <div className="tech-skill">
                  <p className='text-white'>
                    <img
                      src="https://img.icons8.com/color/48/python--v1.png"
                      alt="python-icon"
                    />{' '}
                    React JS
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>

                <div className="tech-skill">
                  <p className='text-white'>
                    <img
                      src="https://img.icons8.com/color/48/python--v1.png"
                      alt="python-icon"
                    />{' '}
                    Python
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: '50%' }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Professional Skills */}
              <div className="col-md-6">
                <h5 className="mb-4 text-white">Professional Skills</h5>
                <div className="row text-center">
                  <div className="col-6">
                    <div
                      className="circular-skill"
                      style={{ '--value': '324deg' }}
                    >
                      90%
                    </div>
                    <div className="skill-label text-white">Creativity</div>
                  </div>
                  <div className="col-6">
                    <div
                      className="circular-skill"
                      style={{ '--value': '234deg' }}
                    >
                      65%
                    </div>
                    <div className="skill-label text-white">Communication</div>
                  </div>
                  <div className="col-6">
                    <div
                      className="circular-skill"
                      style={{ '--value': '270deg' }}
                    >
                      75%
                    </div>
                    <div className="skill-label text-white">Problem Solving</div>
                  </div>
                  <div className="col-6">
                    <div
                      className="circular-skill"
                      style={{ '--value': '306deg' }}
                    >
                      85%
                    </div>
                    <div className="skill-label text-white">Teamwork</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="container about-section py-5" id="about">
            <div className="row">
              <div className="col-6">
                <img src="image.jpg" className="profile-pic2" alt="About Me" />
              </div>
              <div className="col-6">
                <h2 className='text-white'>About Me</h2>
                <p className='text-white'>
                  I'm a web designer with extensive experience for over 3 years.
                  My expertise lies in creating and designing websites, frontend
                  development, and much more...
                </p>
                <p className='text-white'>
                  I have a passion for web design and development, and I love to
                  create beautiful and functional websites that provide a great
                  user experience.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="container text-center" id="contact">
            <div className="row">
              <div className="col-6">
                <h2 className='text-white'>Contact Me</h2>
                <p className='text-white'>
                  If you have any questions or would like to get in touch, feel
                  free to reach out!
                </p>
              </div>
              <div className="col-6">
                <div className="py-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="py-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
                <div className="py-1">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Email"
                  />
                </div>
                <div className="py-1">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    aria-label="Message"
                  ></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3">
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Bootstrap Icons */}
          <script src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.js"></script>
    
      </div>
    </div>
    </body>
  );
}

export default Portfolio;