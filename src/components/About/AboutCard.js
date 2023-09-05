import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="home-about-body">
            Hi Everyone, I am
            <i>
              <b className="purple"> Rohit Ingole </b>
            </i>{" "}
            from 🏡 Nanded, Maharashtra.
            <br />
            <br />I have completed my{" "}
            <i>
              <b className="purple">
                {" "}
                B.Tech in Electronics and Telecommunication Engineering{" "}
              </b>
            </i>
            from DBATU Lonere.
            <br />
            <br />
            😍 I like watching movies, listening to music, and traveling. &nbsp;
            <br />
            <br />
            ❤️ I love designing websites and I am looking for more opportunities
            to work in coding. 🤗 Apart from being a good technocrat, I wish to
            contribute to the betterment of society with the knowledge I have
            gained so far and will be, in the coming years.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rohit Ingole</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
