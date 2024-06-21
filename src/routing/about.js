// import React from "react";
// import PropTypes from "prop-types";

// // default parameter values

// export default function About({ age = "100" }) {
//   // const addData = (val) => {
//   //   alert("Data added.." + val);
//   // };

//   return (
//     <div>
//       I am {age} years old
//       {/* This is About Component
//       <button onClick={() => addData("user 1")}>Add Data</button> */}
//     </div>
//   );
// }

// About.propTypes = {
//   age: PropTypes.string,
// };

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import 'animate.css';

export default function About({ age = "100" }) {
  const [text, setText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["a Developer", "an Engineer", "a Designer", "a Creator"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = `Welcome to the world of ${toRotate[i]}`;
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
    <section className="about" style={styles.about}>
      <Container style={styles.container}>
        <div className="text-center">
          <h1 className="animate__animated animate__fadeIn">
            {text}
          </h1>
          <p style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec justo eu felis tincidunt porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. In hac habitasse platea dictumst. Sed vel condimentum elit. Sed malesuada consequat odio, id iaculis orci gravida sed.
          </p>
        </div>
      </Container>
    </section>
  );
}

About.propTypes = {
  age: PropTypes.string,
};

const styles = {
  about: {
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
  paragraph: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    color: "#ccc", // Lighter text color
  },
};
