import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fade in when scrolled into view
    const onScroll = () => {
      const section = document.getElementById("contact");
      if (
        section &&
        section.getBoundingClientRect().top < window.innerHeight - 100
      ) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tk9zeu5",
        "template_ang9heb",
        form.current,
        "xNmn0OU3An3Whz3np"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("❌ Failed to send. Try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className={`contact-section ${visible ? "fade-in" : ""}`}
    >
      <h2 className="contact-title">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit" className="contact-btn">
          Send
        </button>
        {status && <p className="status">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
