import React from "react";

const InitialMessage = ({ setInput, handleSubmit }) => {
  return (
    <>
      <div className="chat__page">
        <div className="font__trigger">
          <span></span>
        </div>

        <div className="fn__title_holder">
          <div className="container">
            <h1 className="title">Chat Bot Definition</h1>
          </div>
        </div>

        <div className="container">
          <div className="chat__list">
            <div id="chat0" className="chat__item"></div>

            <div className="chat__item active" id="chat1">
              <div className="chat__box your__chat">
                <div className="author">
                  <span>You</span>
                </div>
                <div className="chat">
                  <p>What is a chat bot?</p>
                </div>
              </div>

              <div className="chat__box bot__chat">
                <div className="author">
                  <span>Bot</span>
                </div>
                <div className="chat">
                  <p>
                    At the most basic level, a chatbot is a computer program
                    that simulates and processes human conversation (either
                    written or spoken), allowing humans to interact with digital
                    devices as if they were communicating with a real person.
                    Chatbots can be as simple as rudimentary programs that
                    answer a simple query with a single-line response, or as
                    sophisticated as digital assistants that learn and evolve to
                    deliver increasing levels of personalization as they gather
                    and process information.
                  </p>
                </div>
              </div>

              <div className="chat__box your__chat">
                <div className="author">
                  <span>You</span>
                </div>
                <div className="chat">
                  <p>How do chatbots work?</p>
                </div>
              </div>

              <div className="chat__box bot__chat">
                <div className="author">
                  <span>Bot</span>
                </div>
                <div className="chat">
                  <p>
                    Chatbots boost operational efficiency and bring cost savings
                    to businesses while offering convenience and added services
                    to internal employees and external customers. They allow
                    companies to easily resolve many types of customer queries
                    and issues while reducing the need for human interaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="chat__item" id="chat2"></div>

            <div className="chat__item" id="chat3"></div>

            <div className="chat__item" id="chat4"></div>
          </div>
        </div>

        <div className="chat__comment">
          <div className="container">
            <div className="fn__chat_comment">
              <div className="new__chat">
                <p>
                  Ask it questions, engage in discussions, or simply enjoy a
                  friendly chat.
                </p>
              </div>
              <textarea
                rows="1"
                className="fn__hidden_textarea"
                tabindex="-1"
              ></textarea>
              <textarea
                rows="1"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                placeholder="Send a message..."
                id="fn__chat_textarea"
              ></textarea>
              <button
                onClick={handleSubmit}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    handleSubmit(e);
                  }
                }}
              >
                <img src="svg/enter.svg" alt="" className="fn__svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InitialMessage;
