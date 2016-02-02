import React from 'react';
import Card from './Card';

const Contact = ({ offset }) => {
  return (
    <Card
      title="Contact"
      colorClass="bg-green"
      offset={ offset }>
      <div className="flex-auto green">Email</div>
      <div className="flex-auto green">LinkedIn</div>
      <div className="flex-auto green">GitHub</div>
      <div className="flex-auto green">Facebook</div>
      <div className="flex-auto green">Google</div>
      <div className="flex-auto green">Twitter</div>
    </Card>
  )
}

export default Contact;