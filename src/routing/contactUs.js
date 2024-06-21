// import React from "react";

// export default function ContactUs() {
//   return <div>This is ContactUs Component</div>;
// }


import React, { useState } from "react";
import styles from "./contacting.module.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log(formData);
    // Optionally, you can reset the form state after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Contact Us</h2>
        <form className={styles["contact-form"]} onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className={styles.input}
            ></textarea>
          </div>
          <button type="submit" className={styles["submit-button"]}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

