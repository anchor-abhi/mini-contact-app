import { useState } from "react";
import "./Home.css";
import HomeTab from "./HomeTab";
import ContactList from "./ContactList";
import MessageList from "./MessageList";

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="home">
      <HomeTab handleChange={handleChange} value={value} />
      {value === 0 ? <ContactList /> : <MessageList />}
    </div>
  );
};

export default Home;
