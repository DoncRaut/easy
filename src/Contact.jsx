import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Email</h3>
          <p>support@shoppingapp.com</p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="contact-item">
          <h3>Address</h3>
          <p>123 Shopping Street<br />Commerce City, CC 12345</p>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send us a message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;