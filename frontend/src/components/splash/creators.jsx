import React from 'react';
import './creators.scss';

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
                  </div>
                </div>
                <div className="creator-div">
                  <img src="/Phong_Ngo.jpeg" alt="phong" className="creators" />
                  <h3>Phong Ngo</h3>
                  <p>Backend Engineer</p>
                </div>
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
                </div>
                <div className="creator-div">
                  <img
                    src="/Ja'Lisha_Higgs.jpeg"
                    alt="jay"
                    className="creators"
                  />
                  <h3>Ja'Lisha Higgs</h3>
                  <p>Flex Engineer</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Creators;