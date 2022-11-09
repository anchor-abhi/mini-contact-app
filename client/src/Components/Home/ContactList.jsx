import React, { useEffect, useState } from "react";
import ContactListItem from "./ContactListItem";
import axios from "axios";

const ContactList = () => {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/contact")
      .then((res) => setContact(res.data))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="contactList">
      {loading && <h1>Loading...</h1>}
      {contact.map((contact) => (
        <ContactListItem key={contact._id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
