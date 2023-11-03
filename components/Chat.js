import React from "react";
import ReactMarkdown from "react-markdown";
const Chat = ({
  initialMessageState,
  setInput,
  message,
  idx,
  handleSubmit,
}) => {
  var messageArr = message.split("```");

  return (
    <>
      {/* {console.log(messageArr, "messageArr")} */}
      <div>
        <div className="container">
          <div className="chat__list">
            <div id="chat0" className="chat__item"></div>

            <div className="chat__item active" id="chat1">
              {initialMessageState && (
                <div className="chat__box your__chat">
                  <div className="author">
                    <span>You</span>
                  </div>
                  <div className="chat">
                    <p>What is a chat bot?</p>
                  </div>
                </div>
              )}
              {initialMessageState && (
                <div className="chat__box bot__chat">
                  <div className="author">
                    <span>Bot</span>
                  </div>
                  <div className="chat">
                    <p>
                      At the most basic level, a chatbot is a computer program
                      that simulates and processes human conversation (either
                      written or spoken), allowing humans to interact with
                      digital devices as if they were communicating with a real
                      person. Chatbots can be as simple as rudimentary programs
                      that answer a simple query with a single-line response, or
                      as sophisticated as digital assistants that learn and
                      evolve to deliver increasing levels of personalization as
                      they gather and process information.
                    </p>
                  </div>
                </div>
              )}
              {initialMessageState && (
                <div className="chat__box your__chat">
                  <div className="author">
                    <span>You</span>
                  </div>
                  <div className="chat">
                    <p>How do chatbots work?</p>
                  </div>
                </div>
              )}
              {initialMessageState && (
                <div className="chat__box bot__chat">
                  <div className="author">
                    <span>Bot</span>
                  </div>
                  <div className="chat">
                    <p>
                      Chatbots boost operational efficiency and bring cost
                      savings to businesses while offering convenience and added
                      services to internal employees and external customers.
                      They allow companies to easily resolve many types of
                      customer queries and issues while reducing the need for
                      human interaction.
                    </p>
                  </div>
                </div>
              )}
              {idx % 2 === 0 ? (
                <div className="chat__box your__chat">
                  <div className="author">
                    <span>You</span>
                  </div>
                  <div className="chat">
                    <ReactMarkdown>{message}</ReactMarkdown>
                  </div>
                </div>
              ) : (
                <div className="chat__box bot__chat">
                  <div className="author">
                    <span>Bot</span>
                  </div>
                  {messageArr.map((item, index) => {
                    return (
                      <div key={index} className="chat">
                        <ReactMarkdown>{item}</ReactMarkdown>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="chat__item" id="chat2"></div>

            <div className="chat__item" id="chat3"></div>

            <div className="chat__item" id="chat4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
