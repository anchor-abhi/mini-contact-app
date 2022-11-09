import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./ContactDetails.css";
import axios from "axios";

const ContactDetails = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/contact/${id}`)
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  }, []);
  const navigate = useNavigate();
  return (
    <div className="contactDetails">
      <h1 style={{ color: "rgb(105, 105, 145)" }}>Contact Details</h1>
      <div>
        {loading && <h1>Loading...</h1>}
        <div>
          <h2 style={{ textAlign: "right" }}>Name : </h2>
          <p style={{ fontSize: "1.5rem", textAlign: "start" }}>
            {data.firstName} {data.lastName}
          </p>
        </div>
        <div>
          <h2>Contact : </h2>
          <p style={{ fontSize: "1.5rem", textAlign: "end" }}>{data.phone}</p>
        </div>
        <div>
          <Button
            variant="contained"
            onClick={() => navigate(`/message-screen/${id}`)}
          >
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
