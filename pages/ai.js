import { Select, Space } from "antd";
import { useRouter } from "next/router";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { toast, ToastContainer } from "react-toastify";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import Link from "next/link";
import { useSelector } from "react-redux";
import { logoutSuccess } from "../reducer";
import { auth } from "../utils/Firebase";
import Chat from "../components/Chat";
import InitialMessage from "../components/InitialMessage";
import axios from "axios";
const Ai = () => {
  const route = useRouter();
  const { user } = useSelector((state) => state.user);
  const [initialMessageState, setInitialMessage] = React.useState(true);
  const dispatch = useDispatch();
  const [open, setopen] = React.useState(false);
  const [image, setimage] = React.useState({
    data: "",
    display: false,
  });
  const [_select, setSelect] = React.useState("none");
  const [load, setload] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [message, setMessages] = React.useState([]);
  const [navbar, setnavBar] = React.useState(false);
  const reduxDispatch = useDispatch();
  const inputFile = React.useRef(null);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setSelect(value);
  };
  const handlefile = async (e) => {
    const files = inputFile.current.files;
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });
    console.log(files[0]);
    if (files[0].type == "audio/mpeg") {
      const formData = new FormData();
      formData.append("audio", files[0]);
      setInitialMessage(false);
      setMessages((state) => [
        ...state,
        "Elaborate the following file " + files[0].name,
      ]);
      // setMessages((state) => [...state, "Loading..."]);
      console.log(formData, "formData");
      await fetch(`http://127.0.0.1:5001/api/audioToText`, {
        method: "POST",

        body: formData,
      })
        .then(async (response) => {
          var data = await response.json();
          console.log(data.transcription);

          setMessages((state) => [...state, data.transcription]);

          toast.success("File uploaded successfully");
        })
        .catch((err) => {
          return console.log("error", err);
        });
    } else if (
      files[0].type == "image/png" ||
      files[0].type == "image/jpeg" ||
      files[0].type == "image/jpg"
    ) {
      console.log(files);
      const formData = new FormData();
      formData.append("image", files[0]);
      console.log(formData, "formData");
      await fetch(`http://127.0.0.1:5001/api/imageToText`, {
        method: "POST",
        headers: {
          Accept: "*/*",
        },
        body: formData,
      })
        .then(async (response) => {
          let data = await response.text();
          console.log(data);
          setMessages((state) => [
            ...state,
            "Elaborate the following file " + files[0].name,
          ]);
          setMessages((state) => [...state, "Loading..."]);
          toast.success("File uploaded successfully");
          const res = await fetch("http://localhost:3005/image-text-chat", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ data: data, type: "image" }),
          });
          let decoder = new TextDecoderStream();
          const reader = res.body.pipeThrough(decoder).getReader();
          var lastMessage = "";
          setInitialMessage(false);
          while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            setMessages((prevMessages) => {
              const updatedMessages = [...prevMessages];
              lastMessage = lastMessage + value;
              updatedMessages[updatedMessages.length - 1] = lastMessage;
              return updatedMessages;
            });
          }
        })
        .catch((err) => {
          return console.log("error", err);
        });
    } else {
      function readFileAsText(files) {
        return new Promise((resolve, reject) => {
          var setcontent = [];
          for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = async (event) => {
              try {
                const content = event.target.result;
                const output = await splitter.createDocuments([content]);
                setcontent = setcontent.concat(output);

                if (i == files.length - 1) {
                  resolve(setcontent);
                }
              } catch (error) {
                console.error(
                  `Error loading content from ${file.name}:`,
                  error
                );
              }
            };
            reader.onerror = () => {
              reject(reader.error); // Reject with the error
            };
            // Read the file as text
            reader.readAsText(file);
          }
        });
      }
      readFileAsText(files).then(async (content) => {
        console.log(content);
        fetch("http://localhost:3005/set_file_to_pinecone", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            combinedContent: content,
          }),
        });
        toast.success("File uploaded successfully");
      });
    }
  };
  const handleLogout = async (e) => {
    e.preventDefault();
    await auth
      .signOut()
      .then(async () => {
        window.localStorage.removeItem("cart");
        reduxDispatch(logoutSuccess({}));
        toast.success("Logout Success");
        window.location.href = "/";
        dispatch({
          type: "REMOVE_FROM_CART",
          payload: [],
        });

        // setInterval(() => {
        //   window.location.reload();
        // }, 1000);
      })
      .catch((error) => {
        console.log(error.message);
      });
    window.location.reload();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user && user.email) {
      console.log(_select);
      setimage({ data: "", display: false });
      if (_select == "textToImage") {
        setload(true);
        setMessages((state) => [...state, input]);
        setMessages((state) => [...state, "Loading..."]);
        setInitialMessage(false);
        await fetch(`http://127.0.0.1:5001/api/textToImage`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(input),
        }).then(async (data) => {
          console.log(data);

          setload(false);
          const blob = await data.blob();
          console.log(blob);
          const link = URL.createObjectURL(blob);
          setimage({
            display: true,
            data: link,
          });
          // setMessages((state) => [...state, resdata]);
        });
        return;
      }
      if (_select == "video2text" && input.includes("youtube")) {
        setload(true);
        setMessages((state) => [
          ...state,
          "Explain and summarize this video " + input,
        ]);
        // setMessages((state) => [...state, "Loading..."]);
        setInitialMessage(false);
        await fetch(`http://127.0.0.1:5001/api/videoToText`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ youtube_url: input }),
        }).then(async (data) => {
          let resdata = await data.text();
          console.log(resdata);
          setload(false);
          setMessages((state) => [...state, JSON.parse(resdata)]);
        });
        return;
      }
      setMessages((state) => [...state, input]);
      setMessages((state) => [...state, "Loading..."]);
      const response = await fetch("http://localhost:3005/chat_with_ai", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          message: input,
        }),
      });
      let decoder = new TextDecoderStream();
      const reader = response.body.pipeThrough(decoder).getReader();
      var lastMessage = "";
      setInitialMessage(false);
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          lastMessage = lastMessage + value;
          updatedMessages[updatedMessages.length - 1] = lastMessage;
          return updatedMessages;
        });
      }
    } else {
      toast.error("Please login");
    }
  };
  const containerStyle = {
    position: "relative",
    // minHeight: "100vh",
    position: "absolute",
    left: "50%",
    top: "50%",
    zIndex: "100",
    transform: "translate(-50%, -50%)",
    // Make background unselectable
  };
  return (
    <>
      <div style={{ userSelect: load ? "none" : "auto" }}>
        <div className="techwave_fn_fixedsub">
          <ul></ul>
        </div>
        {load && (
          <div style={containerStyle}>
            <Spin
              indicator={
                <LoadingOutlined
                  style={{
                    fontSize: 34,
                  }}
                  spin
                />
              }
            />
          </div>
        )}
        <div className="techwave_fn_font">
          <Link className="font__closer_link fn__icon_button" href="/">
            <img src="svg/close.svg" alt="" className="fn__svg" />
          </Link>
          <div className="font__closer"></div>
          <div className="font__dialog">
            <h3 className="title">Font Options</h3>
            <label for="font_size">Font Size</label>
            <select id="font_size">
              <option value="10">10 px</option>
              <option value="12">12 px</option>
              <option value="14">14 px</option>
              <option value="16" selected>
                16 px
              </option>
              <option value="18">18 px</option>
              <option value="20">20 px</option>
              <option value="22">22 px</option>
              <option value="24">24 px</option>
              <option value="26">26 px</option>
              <option value="28">28 px</option>
            </select>
            <Link href="/" className="apply techwave_fn_button">
              <span>Apply</span>
            </Link>
          </div>
        </div>
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 24,
              }}
              spin
            />
          }
        />

        <div className="techwave_fn_wrapper fn__has_sidebar">
          <div className="techwave_fn_wrap">
            <div className="techwave_fn_searchbar">
              <div className="search__bar">
                <input
                  className="search__input"
                  type="text"
                  placeholder="Search here..."
                />
                <img
                  src="svg/search.svg"
                  alt=""
                  className="fn__svg search__icon"
                />
                <Link className="search__closer" href="/">
                  <img src="svg/close.svg" alt="" className="fn__svg" />
                </Link>
              </div>
              <div className="search__results">
                <div className="results__title">Results</div>
                <div className="results__list">
                  <ul>
                    <li>
                      <Link href="/">Artificial Intelligence</Link>
                    </li>
                    <li>
                      <Link href="/">
                        Learn about the impact of AI on the financial industry
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        Delve into the realm of AI-driven manufacturing
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        Understand the ethical implications surrounding AI
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Header
              user={user}
              handleLogout={handleLogout}
              setnavBar={setnavBar}
              navbar={navbar}
            />

            <div className="techwave_fn_leftpanel">
              <div className="mobile_extra_closer"></div>

              <div className="leftpanel_logo">
                <Link
                  href=""
                  onClick={() => {
                    route.push("/");
                  }}
                  className="fn_logo"
                >
                  <span className="full_logo">
                    <img
                      src="images/CCPD_Text.png"
                      alt=""
                      className="desktop_logo"
                    />
                    <img
                      src="images/CCPD_Text.png"
                      alt=""
                      className="retina_logo"
                    />
                  </span>
                  <span className="short_logo">
                    <img
                      src="images/CCPD_Text.png"
                      alt=""
                      className="desktop_logo"
                    />
                    <img
                      src="images/CCPD_Text.png"
                      alt=""
                      className="retina_logo"
                    />
                  </span>
                </Link>
                <Link
                  href="/"
                  className="fn__closer fn__icon_button desktop_closer"
                >
                  <img src="svg/arrow.svg" alt="" className="fn__svg" />
                </Link>
                <Link
                  href="/"
                  className="fn__closer fn__icon_button mobile_closer"
                >
                  <img src="svg/arrow.svg" alt="" className="fn__svg" />
                </Link>
              </div>

              <div className="leftpanel_content">
                <div className="nav_group">
                  <h2 className="group__title">Start Here</h2>
                  <ul className="group__list">
                    <li>
                      <Link
                        href="index-2.html"
                        className="fn__tooltip menu__item"
                        data-position="right"
                        title="Home"
                      >
                        <span className="icon">
                          <img src="svg/home.svg" alt="" className="fn__svg" />
                        </span>
                        <span className="text">Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="community-feed.html"
                        className="fn__tooltip menu__item"
                        data-position="right"
                        title="Community Feed"
                      >
                        <span className="icon">
                          <img
                            src="svg/community.svg"
                            alt=""
                            className="fn__svg"
                          />
                        </span>
                        <span className="text">Community Feed</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="personal-feed.html"
                        className="fn__tooltip menu__item"
                        data-position="right"
                        title="Personal Feed"
                      >
                        <span className="icon">
                          <img
                            src="svg/person.svg"
                            alt=""
                            className="fn__svg"
                          />
                        </span>
                        <span className="text">
                          Personal Feed<span className="count">48</span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="fn__tooltip menu__item"
                        data-position="right"
                        title="Finetuned Models"
                      >
                        <span className="icon">
                          <img src="svg/cube.svg" alt="" className="fn__svg" />
                        </span>
                        <span className="text">Finetuned Models</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="nav_group">
                  <h2 className="group__title">User Tools</h2>
                  <ul className="group__list">
                    <li>
                      <Link
                        href="/image"
                        className="fn__tooltip menu__item"
                        data-position="right"
                        title="Image Generation"
                      >
                        <span className="icon">
                          <img src="svg/image.svg" alt="" className="fn__svg" />
                        </span>
                        <span className="text">Image Generation</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ai"
                        className="fn__tooltip active menu__item"
                        data-position="right"
                        title="AI Chat Bot"
                      >
                        <span className="icon">
                          <img src="svg/chat.svg" alt="" className="fn__svg" />
                        </span>
                        <span className="text">AI Chat Bot</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="nav_group">
                  <h2 className="group__title">Support</h2>
                  <ul className="group__list">
                    <li>
                      <Link
                        href="/"
                        className="fn__tooltip menu__item"
                        data-position="right"
                        title="Pricing"
                      >
                        <span className="icon">
                          <img
                            src="svg/dollar.svg"
                            alt=""
                            className="fn__svg"
                          />
                        </span>
                        <span className="text">Pricing</span>
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link
                        href="video-generation.html"
                        className="fn__tooltip menu__item"
                        title="FAQ &amp; Help"
                        data-position="right"
                      >
                        <span className="icon">
                          <img
                            src="svg/question.svg"
                            alt=""
                            className="fn__svg"
                          />
                        </span>
                        <span className="text">FAQ &amp; Help</span>
                        <span className="trigger">
                          <img src="svg/arrow.svg" alt="" className="fn__svg" />
                        </span>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/">
                            <span className="text">Documentation</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <span className="text">FAQ</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="changelog.html">
                            <span className="text">
                              Changelog<span className="fn__sup">(4.1.2)</span>
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="contact.html">
                            <span className="text">Contact Us</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="index-3.html">
                            <span className="text">Home #2</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        href="sign-in.html"
                        className="fn__tooltip menu__item"
                        data-position="right"
                        title="Log Out"
                      >
                        <span className="icon">
                          <img
                            src="svg/logout.svg"
                            alt=""
                            className="fn__svg"
                          />
                        </span>
                        <span className="text">Log Out</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="techwave_fn_content">
              <div className="techwave_fn_page">
                <div className="techwave_fn_aichatbot_page fn__chatbot">
                  {initialMessageState ? (
                    <InitialMessage
                      initialMessageState={initialMessageState}
                      handleSubmit={handleSubmit}
                      setInput={setInput}
                      setInitialMessage={setInitialMessage}
                      setMessages={setMessages}
                      setopen={setopen}
                      open={open}
                      _select={_select}
                      setSelect={setSelect}
                      handleChange={handleChange}
                    />
                  ) : (
                    <div className="chat__page">
                      <div className="font__trigger">
                        <span></span>
                      </div>

                      <div className="fn__title_holder">
                        <div className="container">
                          <h1 className="title">Chat Bot Definition</h1>
                        </div>
                      </div>
                      {message.map((item, idx) => {
                        return (
                          <Chat
                            key={idx}
                            // chat={message}
                            initialMessageState={initialMessageState}
                            idx={idx}
                            handleSubmit={handleSubmit}
                            setInput={setInput}
                            message={item}
                            image={image}
                          />
                        );
                      })}
                      <div className="chat__comment">
                        <div className="container">
                          <div className="fn__chat_comment">
                            <div className="new__chat">
                              <p>
                                Ask it questions, engage in discussions, or
                                simply enjoy a friendly chat.
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
                            <button onClick={handleSubmit}>
                              <img
                                src="svg/enter.svg"
                                alt=""
                                className="fn__svg"
                              />
                            </button>
                            <button
                              className="btn2"
                              onClick={() => inputFile.current.click()}
                            >
                              <input
                                type="file"
                                id="file"
                                multiple
                                ref={inputFile}
                                onChange={handlefile}
                                style={{ display: "none" }}
                              />

                              <svg
                                className="fn__svg"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M14 13.5V8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8V13.5C6 17.0899 8.91015 20 12.5 20C16.0899 20 19 17.0899 19 13.5V4H21V13.5C21 18.1944 17.1944 22 12.5 22C7.80558 22 4 18.1944 4 13.5V8C4 4.68629 6.68629 2 10 2C13.3137 2 16 4.68629 16 8V13.5C16 15.433 14.433 17 12.5 17C10.567 17 9 15.433 9 13.5V8H11V13.5C11 14.3284 11.6716 15 12.5 15C13.3284 15 14 14.3284 14 13.5Z"></path>
                              </svg>
                            </button>
                            <button
                              className="btn3"
                              onClick={() => {
                                setopen((prev) => {
                                  if (!prev == false) {
                                    setSelect("none");
                                  } else {
                                    setSelect("video2text");
                                  }
                                  return !prev;
                                });
                              }}
                            >
                              <svg
                                className="fn__svg"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <Select
                          defaultValue="video2text"
                          style={{
                            width: "auto",
                            margin: "10px 40px",
                            display: open ? "block" : "none",
                          }}
                          onChange={handleChange}
                          options={[
                            {
                              value: "video2text",
                              label: "Video -> Text",
                            },
                            {
                              value: "textToImage",
                              label: "Text -> Image",
                            },
                          ]}
                        />
                      </div>
                    </div>
                  )}

                  <div className="chat__sidebar">
                    <div className="sidebar_header">
                      <Link href="/chat0" className="fn__new_chat_link">
                        <span className="icon"></span>
                        <span className="text">New Chat</span>
                      </Link>
                    </div>
                    <div className="sidebar_content">
                      <div className="chat__group new">
                        <h2 className="group__title">Today</h2>
                        <ul className="group__list">
                          <li className="group__item">
                            <div className="fn__chat_link active" href="/chat1">
                              <span className="text">Chat Bot Definition</span>
                              <input
                                type="text"
                                defaultvalue="Chat Bot Definition"
                                value="Chat Bot Definition"
                              />
                              <span className="options">
                                <button className="trigger">
                                  <span></span>
                                </button>
                                <span className="options__popup">
                                  <span className="options__list">
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
                                  </span>
                                </span>
                              </span>
                              <span className="save_options">
                                <button className="save">
                                  <img
                                    src="svg/check.svg"
                                    alt=""
                                    className="fn__svg"
                                  />
                                </button>
                                <button className="cancel">
                                  <img
                                    src="svg/close.svg"
                                    alt=""
                                    className="fn__svg"
                                  />
                                </button>
                              </span>
                            </div>
                          </li>
                          <li className="group__item">
                            <div className="fn__chat_link" href="/chat2">
                              <span className="text">Essay: Marketing</span>
                              <input
                                type="text"
                                defaultvalue="Essay: Marketing"
                                value="Essay: Marketing"
                              />
                              <span className="options">
                                <button className="trigger">
                                  <span></span>
                                </button>
                                <span className="options__popup">
                                  <span className="options__list">
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
                                  </span>
                                </span>
                              </span>
                              <span className="save_options">
                                <button className="save">
                                  <img
                                    src="svg/check.svg"
                                    alt=""
                                    className="fn__svg"
                                  />
                                </button>
                                <button className="cancel">
                                  <img
                                    src="svg/close.svg"
                                    alt=""
                                    className="fn__svg"
                                  />
                                </button>
                              </span>
                            </div>
                          </li>
                          <li className="group__item">
                            <div className="fn__chat_link" href="/chat3">
                              <span className="text">
                                Future of Social Media
                              </span>
                              <input
                                type="text"
                                deafaultvalue="Future of Social Media"
                                value="Future of Social Media"
                              />
                              <span className="options">
                                <button className="trigger">
                                  <span></span>
                                </button>
                                <span className="options__popup">
                                  <span className="options__list">
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
                                  </span>
                                </span>
                              </span>
                              <span className="save_options">
                                <button className="save">
                                  <img
                                    src="svg/check.svg"
                                    alt=""
                                    className="fn__svg"
                                  />
                                </button>
                                <button className="cancel">
                                  <img
                                    src="svg/close.svg"
                                    alt=""
                                    className="fn__svg"
                                  />
                                </button>
                              </span>
                            </div>
                          </li>
                          <li className="group__item">
                            <div className="fn__chat_link" href="/chat4">
                              <span className="text">Business Ideas</span>
                              <input
                                type="text"
                                defaultvalue="Business Ideas"
                                value="Business Ideas"
                              />
                              <span className="options">
                                <button className="trigger">
                                  <span></span>
                                </button>
                                <span className="options__popup">
                                  <span className="options__list">
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
                                  </span>
                                </span>
                              </span>
                              <span className="save_options">
                                <button className="save">
                                  <img
                                    src="svg/check.svg"
                                    alt=""
                                    className="fn__svg"
                                  />
                                </button>
                                <button className="cancel">
                                  <img
                                    src="svg/close.svg"
                                    alt=""
                                    className="fn__svg"
                                  />
                                </button>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <footer className="techwave_fn_footer">
                <div className="techwave_fn_footer_content">
                  <div className="copyright">
                    <p>2023© ITB23</p>
                  </div>
                  <div className="menu_items">
                    <ul>
                      <li>
                        <Link href="terms.html">Terms of Service</Link>
                      </li>
                      <li>
                        <Link href="privacy.html">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Ai;
