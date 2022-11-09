import React from "react";

const MessageListItem = ({ msg }) => {
  let date = Date.parse(msg.sentAt);
  date = new Date(date);
  const dateArr = date.toString().split(" ");
  return (
    <div className="messageListItem">
      <div>
        <h4>Name :</h4>
        <p>
          {msg.userId.firstName} {msg.userId.lastName}
        </p>
      </div>
      <div>
        <h4>Otp Sent : </h4>
        <p>{msg.otp}</p>
      </div>
      <div>
        <h4>Time : </h4>
        <p>{dateArr[4]}</p>
      </div>
      <div>
        <h4>Date : </h4>
        <p>{` ${dateArr[1]} ${dateArr[2]} ${dateArr[3]}`}</p>
      </div>
    </div>
  );
};

export default MessageListItem;
