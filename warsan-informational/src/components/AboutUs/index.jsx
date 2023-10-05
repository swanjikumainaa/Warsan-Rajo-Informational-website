import React from "react";
import './style.css'
const About = () =>{
    return (
        <div>
            <h1 className="about-heading" id="about">About Us</h1>
        <div className="about"  >
            <div className="aboutcards" data-testid="about-card1"> 
            <h1 className="h1text">Vision</h1>
            <p>
                Our vision is to enable NGOs to increase 
                immunization coverage in Somalia for 
                children under the age of 5 years.
            </p>
            </div>
            <div className="aboutcards" data-testid="about-card2">
                <h1 className="h1text">Mission</h1>
                <p>
                To shape a resilient generation that's  
                safeguarded against preventable diseases 
                and equipped for a brighter future.
                </p>
            </div>
            </div>
        </div>
    )
}
export default About;