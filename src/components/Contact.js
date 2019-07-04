import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { PropTypes } from 'prop-types';

const Contact = ({props, contacts, editContact}) => {
  const currentContact = _.find(contacts, { id: +props.match.params.id });

  if (!currentContact)
    return (
      <div>
        <p>Sorry, contact was not found.</p>
        <Link to='/roster'>Back</Link>
      </div>
    )

  return (
    <div>
      <img src={currentContact.image} />
      <h1>{currentContact.name}</h1>
      <p>Email: {currentContact.email}</p>
      <p>Phone number: {currentContact.phoneNumber}</p>
      <Link to='/contacts'>Back</Link>
    </div>
  );
};

Contact.propTypes = {
  contacts: PropTypes.array,
  editContact: PropTypes.func
};

export default Contact;