import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
//import Certifications from "../../containers/certifications/Certifications";
//import EducationImg from "./EducationImg";
import hand from "./hand.png"
import "./EducationComponent.css";
import { Fade } from "react-reveal";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
          
              <img alt="hand" src={hand}/>
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Recent Activities
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
              Hobbies and Achievements
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                 Just a small sampling of what I've been up to lately
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
       
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Education;
