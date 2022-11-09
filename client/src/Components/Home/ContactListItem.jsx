import React from "react";
import { useNavigate } from "react-router";

const ContactListItem = ({ contact }) => {
  const { firstName, lastName, _id, phone } = contact;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/contact-details/${_id}`)}
      className="contactListItem"
    >
      <h3>
        {firstName} {lastName}
      </h3>
    </div>
  );
};

export default ContactListItem;
