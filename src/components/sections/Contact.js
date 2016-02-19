import React from 'react';
import Card from '../ui/Card';
import { contactProps } from '../../utils/constants';

const Contact = () => {
  return (
    <Card
      title="Contact"
      colorClass="contact-title">
      {
        contactProps.map((c, i) => {
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