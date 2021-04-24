import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import SockJsClient from "react-stomp";
import Input from "./Input";
import Messages from "./Messages";
import chatAPI from "../services/chatapi";

const SOCKET_URL = "http://localhost:8090/websocket";

const ChatPage = ({ user }) => {
  const [messages, setMessages] = useState([]);

  //let user = prop.location.user;
  useEffect(() => {
    chatAPI.getMessages().then((res) => {
      setMessages(res.data);
    });
  }, []);

  let onConnected = () => {
    console.log("Connected!!");
  };
  let onMessageReceived = (msg) => {
    console.log("New Message Received!!", msg);
    setMessages(messages.concat(msg));
  };
  let onSendMessage = (msg) => {
    chatAPI.sendMessage(user.username, msg).catch((err) => console.log(err));
  };

  return (
    <>
      {!user && <Redirect to="/" />}
      {
        <SockJsClient
          url={SOCKET_URL}
          topics={["/topic/public"]}
          onConnect={onConnected}
          onDisconnect={console.log("Disconnected!")}
          onMessage={(msg) => onMessageReceived(msg)}
          debug={false}
        />
      }
      <Messages messages={messages} currentUser={user} />
      <Input onSendMessage={onSendMessage} />
    </>
  );
};

export default ChatPage;
