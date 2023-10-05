import React from "react";
import { render } from "@testing-library/react";
import Team from ".";

const teamMembers = [
  {
    id: "Aniso",
    name: "Aniso Mohamed Kilas",
    role: "Frontend Developer",
    imageSrc: '/images/aniso.jpg',
  },
  {
    id: "Eunice",
    name: "Eunice Musenyia",
    role: "Full Stack Developer",
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
    role: "Full Stack Developer",
    imageSrc: '/images/clever.jpg',
  },
  {
    id: "Joy",
    name: "Joy Mitingi",
    role: "Mobile Developer",
    imageSrc: '/images/joy.jpg',
  },
];

describe("Team Component", () => {
  it("renders team members correctly", () => {
    const {getByAltText } = render(<Team />);    
      
    teamMembers.forEach((member) => {
      const memberImage = getByAltText(member.id);
      
      expect(memberImage).toBeInTheDocument();
      expect(memberImage).toHaveAttribute("src", member.imageSrc);
    });
  });
});
