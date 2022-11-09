import React from "react";
import { Route, Routes } from "react-router";
import ContactDetails from "../Components/ContactDetails/ContactDetails";
import Home from "../Components/Home/Home";
import MessageScreen from "../Components/MessageScreen/MessageScreen";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-details/:id" element={<ContactDetails />} />
      <Route path="/message-screen/:id" element={<MessageScreen />} />
    </Routes>
  );
};

export default MyRoutes;
