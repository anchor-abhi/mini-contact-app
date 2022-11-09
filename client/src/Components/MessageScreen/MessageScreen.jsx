import { Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import "./MessageScreen.css";
import axios from "axios";
import { useParams } from "react-router";

const MessageScreen = () => {
  const otp = useRef(Math.floor(Math.random() * (999999 - 100000) + 100000));
  const { id } = useParams();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();

    //Validation check for empty message
    if (!text) {
      alert("Message can't be empty");
      return;
    }

    //Validation check for message length
    if (text.length < 4) {
      alert("Message must be greater than 4 characters");
      return;
    }

    //Validation check for Title Case
    if (text.split("")[0].toUpperCase() != text.split("")[0]) {
      alert("The first letter must be a capital letter");
      return;
    }

    //post validation, api call to send the message
    setLoading(true);
    axios
      .post("/message", {
        userId: id,
        text: `Hi, Your OTP is ${otp.current}. ${text}`,
        otp: otp.current,
      })
      .then((res) => alert("Message sent successfully"))
      .catch((e) => alert("Error occured"))
      .finally(() => setLoading(false));
  };

  return (
    <div className="messageScreen">
      <h1 style={{ color: "rgb(105, 105, 145)" }}>Send Message</h1>
      <div>
        <TextField
          sx={{ textAlign: "center" }}
          value={`Hi, Your OTP is ${otp.current}. ${text}`}
        />
        <TextField
          placeholder="Enter your message"
          onChange={handleChange}
          sx={{ textAlign: "center" }}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ margin: "1rem auto" }}
          onClick={handleSend}
        >
          {loading ? "Sending..." : "Send"}
        </Button>
      </div>
    </div>
  );
};

export default MessageScreen;
