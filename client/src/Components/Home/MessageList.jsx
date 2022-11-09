import React, { useEffect, useState } from "react";
import axios from "axios";
import MessageListItem from "./MessageListItem";

const MessageList = () => {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/message")
      .then((res) => {
        setMessage(res.data);
        console.log(res);
      })
      .finally(() => setLoading(false));
  }, []);
  console.log(message);
  return (
    <div className="contactList">
      {loading && <h1>Loading...</h1>}
      {message.map((msg) => (
        <MessageListItem key={msg._id} msg={msg} />
      ))}
    </div>
  );
};

export default MessageList;
