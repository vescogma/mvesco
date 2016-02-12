import React from 'react';
import Card from '../ui/Card';

const Contact = () => {
  const contacts = [
    {
      label: 'Email',
      icon: 'email',
      href: 'mailto:vescogma@gmail.com',
    },
    {
      label: 'LinkedIn',
      icon: 'linkedin',
      href: 'https://ca.linkedin.com/in/miguelvesco',
    },
    {
      label: 'GitHub',
      icon: 'github',
      href: 'https://github.com/vescogma',
    },
    {
      label: 'Facebook',
      icon: 'facebook',
      href: 'https://facebook.com/miguel.vesco',
    },
    {
      label: 'Google',
      icon: 'google',
      href: 'https://plus.google.com/+MiguelVesco',
    },
    {
      label: 'Twitter',
      icon: 'twitter',
      href: 'https://twitter.com/@WhyMiguelWhy',
    },
  ];
  return (
    <Card
      title="Contact"
      colorClass="contact-title">
      {
        contacts.map((c, i) => {
          return (
            <a
              key={ i }
              className="contact flex-auto"
              href={ c.href }
              target="_blank">
              <div className={ `contact-icon icon-${ c.icon }` }></div>
              <div className="contact-label">{ c.label }</div>
            </a>
          );
        })
      }
    </Card>
  )
}

export default Contact;