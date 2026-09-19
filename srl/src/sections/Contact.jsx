import React, { useRef, useEffect, useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [visible, setVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const section = document.getElementById("contact");
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: form.current.user_name.value,
          user_email: form.current.user_email.value,
          message: form.current.message.value,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email.");
      }

      setStatus("✅ Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send. Try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className={`contact-section ${visible ? "is-visible" : ""}`}
    >
      <h2>Contact Us</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        aria-busy={isSending}
      >
        <label htmlFor="user-name">Your Name</label>
        <input
          id="user-name"
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />
        <label htmlFor="user-email">Your Email</label>
        <input
          id="user-email"
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
        />
        <button type="submit" className="contact-btn" disabled={isSending}>
          {isSending ? "Sending..." : "Send"}
        </button>
        {status && (
          <p className="status" aria-live="polite">
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
