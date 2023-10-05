import React from "react";
import './style.css';

const teamMembers = [
  {
    id: "Aniso",
    name: "Aniso Mohamed Kilas",
    role: "Software Developer",
    imageSrc: '/images/aniso.jpg',
  },
  {
    id: "Eunice",
    name: "Eunice Musenyia",
    role: "Software Developer",
    imageSrc: '/images/eunice .jpg',
  },
  {
    id: "Susan",
    name: "Susan Maina",
    role: "Software Developer",
    imageSrc: '/images/susan.jpg',
  },
  {
    id: "Clever",
    name: "Clever Kayitaramirwa",
    role: "Software Developer",
    imageSrc: '/images/clever.jpg',
  },
  {
    id: "Joy",
    name: "Joy Mitingi",
    role: "Software Developer",
    imageSrc: '/images/joy.jpg',
  },
];

const Team = () => {
  return (
    <>
      <h1 className="ourteam-heading" id="our-team-heading">Our Team</h1><br></br>
      <div className="team-container">
        {teamMembers.map((member) => (
          <div className="team-member" key={member.id} data-testid={member.id}>
            <img src={member.imageSrc} alt={member.id} />
            <p>{member.name}<br></br>{member.role}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;