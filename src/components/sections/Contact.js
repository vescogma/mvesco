import React from 'react';
import Card from '../ui/Card';

const Contact = () => {
  return (
    <Card
      title="Contact"
      colorClass="bg-green">
      <a
        className="contacts flex-auto green"
        href="mailto:vescogma@gmail.com"
        target="_blank">
        <div className="contact-icon"></div>
        <div className="contact-label">Email</div>
      </a>
      <a
        className="contacts flex-auto green"
        href="https://ca.linkedin.com/in/miguelvesco"
        target="_blank">
        <div className="contact-icon"></div>
        <div className="contact-label">LinkedIn</div>
      </a>
      <a
        className="contacts flex-auto green"
        href="https://github.com/vescogma"
        target="_blank">
        <div className="contact-icon"></div>
        <div className="contact-label">GitHub</div>
      </a>
      <a
        className="contacts flex-auto green"
        href="https://facebook.com/miguel.vesco"
        target="_blank">
        <div className="contact-icon"></div>
        <div className="contact-label">Facebook</div>
      </a>
      <a
        className="contacts flex-auto green"
        href="https://plus.google.com/+MiguelVesco"
        target="_blank">
        <div className="contact-icon"></div>
        <div className="contact-label">Google</div>
      </a>
      <a
        className="contacts flex-auto green"
        href="https://twitter.com/@WhyMiguelWhy"
        target="_blank">
        <div className="contact-icon"></div>
        <div className="contact-label">Twitter</div>
      </a>
    </Card>
  )
}

export default Contact;