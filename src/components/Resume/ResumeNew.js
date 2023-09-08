import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// import RohitImage from '../Assets/Rohit.png';
import { AiOutlineDownload } from "react-icons/ai";
import { Document } from "react-pdf";
import RohitImage from "../../Assets/Projects/Rohit.png";

// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// function ResumeNew() {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);
const ResumeNew = () => {
  return (
    <div>
      <Container fluid className="resume-section">
        {/* <Particle /> */}
        {/* <Row style={{ justifyContent: "center", position: "relative" }}> */}
        {/* <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button> */}
        {/* </Row> */}

        <Row className="resume">
  <img
    src={RohitImage}
    alt="Rohit's resume"
    className="w-75%"
    style={{
      flexShrink: 0,
      width: '75%',
      maxWidth: '100%',
      paddingRight: 'calc(var(--bs-gutter-x) * .5)',
      paddingLeft: 'calc(var(--bs-gutter-x) * .5)',
      marginTop: 'var(--bs-gutter-y)',
    }}
  />
</Row>


        {/* <Row style={{ justifyContent: "center", position: "relative" }}> */}
        {/* <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button> */}
        {/* </Row> */}
      </Container>
    </div>
  );
};

export default ResumeNew;
