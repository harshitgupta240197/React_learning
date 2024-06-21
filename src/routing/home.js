// import React from "react";

// export default function Home() {
//   return <div>This is Home Component</div>;
// }



// home.js
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';

export default function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [ "Tableau Developer", "Python Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" style={styles.banner}>
      <Container style={styles.container}>
        <div className="text-center">
          <h1 style={styles.heading}>
            {`Hi! I'm Harshit`} <br></br>
            <span className="txt-rotate" data-period="1000" data-rotate='[ "Tableau Developer", "Python Developer", "Web Designer", "UI/UX Designer" ]'>
              <span className="wrap">{text}</span>
            </span>
          </h1>
          <p style={styles.paragraph}>
            I am a Software Engineer at Healthicity with expertise in Tableau, Python, SQL, JavaScript, and React. My strong suit lies in UI/UX design, specializing particularly in creating insightful Tableau dashboards that drive data-driven decisions and enhance user experiences.
          </p>
        </div>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#1a1a1a", // Dark background color
    color: "#fff", // White text color
  },
  container: {
    textAlign: "center",
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    borderRadius: "8px",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#fff", // White text color
  },
  paragraph: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    color: "#ccc", // Lighter text color for paragraphs
  },
};
