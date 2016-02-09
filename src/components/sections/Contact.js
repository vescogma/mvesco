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
      colorClass="bg-green">
      {
        contacts.map((contact, index) => {
          return (
            <a
              key={ index }
              className="contacts flex-auto green"
              href={ contact.href }
              target="_blank">
              <div className={ `contact-icon icon-${ contact.icon }` }></div>
              <div className="contact-label">{ contact.label }</div>
            </a>
          );
        })
      }
    </Card>
  )
}

export default Contact;