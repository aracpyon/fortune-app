import React from 'react';
import { NavLink } from 'react-router-dom';
import './creators.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Creators extends React.Component {
    render() {
        return (
          <div className="creator-container">
            <h2>Meet Our Team</h2>
            <div className="info">
              <div className="pair-div">
                <div className="creator-div">
                  <img src="/Ara_Cho.jpeg" alt="ara" className="creators" />
                  <h3>Ara Cho</h3>
                  <p>Team Lead</p>
                  <div className="icons">
                    <span>
                      <a
                        title="GitHub"
                        href="https://github.com/aracpyon"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          size="2x"
                          color="white"
                        />
                      </a>
                    </span>
                    <span>
                      <a
                        title="LinkedIn"
                        href="https://www.linkedin.com/in/aracho91/"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          size="2x"
                          color="white"
                        />
                      </a>
                    </span>
                  </div>
                </div>
                <div className="creator-div">
                  <img src="/Phong_Ngo.jpeg" alt="phong" className="creators" />
                  <h3>Phong Ngo</h3>
                  <p>Backend Engineer</p>
                  <div className="icons">
                    <span>
                      <a
                        title="GitHub"
                        href="https://github.com/phongngo91"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          size="2x"
                          color="white"
                        />
                      </a>
                    </span>
                    <span>
                      <a
                        title="LinkedIn"
                        href="https://www.linkedin.com/in/phongngo91/"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          size="2x"
                          color="white"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-link">
                <NavLink to="/">
                  <img 
                    src="crack_fortune.PNG" 
                    alt="crack-fortune" 
                  />
                </NavLink>
              </div>
              <div className="pair-div">
                <div className="creator-div">
                  <img
                    src="/Melody_Luo.jpeg"
                    alt="melody"
                    className="creators"
                  />
                  <h3>Melody Luo</h3>
                  <p>Flex Engineer</p>
                  <div className="icons">
                    <span>
                      <a
                        title="GitHub"
                        href="https://github.com/luomel"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          size="2x"
                          color="white"
                        />
                      </a>
                    </span>
                    <span>
                      <a
                        title="LinkedIn"
                        href="https://www.linkedin.com/in/melodyluo/"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          size="2x"
                          color="white"
                        />
                      </a>
                    </span>
                  </div>
                </div>
                <div className="creator-div">
                  <img
                    src="/Ja'Lisha_Higgs.jpeg"
                    alt="jay"
                    className="creators"
                  />
                  <h3>Ja'Lisha Higgs</h3>
                  <p>Flex Engineer</p>
                  <div className="icons">
                    <span>
                      <a
                        title="GitHub"
                        href="https://github.com/higgsj82"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          size="2x"
                          color="white"
                        />
                      </a>
                    </span>
                    <span>
                      <a
                        title="LinkedIn"
                        href="https://www.linkedin.com/in/ja-lisha-higgs-b8331a42/"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          size="2x"
                          color="white"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Creators;