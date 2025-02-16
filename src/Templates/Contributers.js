import React from "react";
import "../Css Files/Contributers.css";
import Contributer from "./Components/Contributer";

function Contributers() {
  return (
    <div className="contributers-page">
      <h1>Thank You</h1>
      <p>
        This project is the result of a community formed by people with diverse
        skills and knowledge coming together. Each contributor shared their
        valuable time, knowledge, and creative energy to help improve our
        project. Without the support of this community in every aspect, from
        code development to design, from content creation to bug reporting, we
        wouldn’t be where we are today. Our goal is to highlight the efforts of
        our contributors and thank them for the value they’ve added to the
        project. If you would like to join this community and share your
        knowledge and skills, you can check out the details on how to
        contribute. Together, we continue to build a better and stronger
        project.
        <br></br>
        We sincerely thank everyone who contributed!
      </p>
      <h1>Contributors</h1>

      <section className="contributers-container">
        <Contributer name="Aynur Elif Kekeç"></Contributer>
        <Contributer name="Arda Doruk Kaytancı"></Contributer>
      </section>
    </div>
  );
}

export default Contributers;
