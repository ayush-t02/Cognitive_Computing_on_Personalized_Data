import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import Link from "next/link";
import { useSelector } from "react-redux";
import { loginSuccess } from "../reducer";
import { auth } from "../utils/Firebase";
import Chat from "../components/Chat";
import InitialMessage from "../components/InitialMessage";
import axios from "axios";
const Ai = () => {
  const route = useRouter();
  const { user } = useSelector((state) => state.user);
  const [initialMessageState, setInitialMessage] = React.useState(true);
  const dispatch = useDispatch();
  const [input, setInput] = React.useState("");
  const [message, setMessages] = React.useState([]);
  const [navbar, setnavBar] = React.useState(false);
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
  return (
    <>
      <div>
        <div className="techwave_fn_fixedsub">
          <ul></ul>
        </div>

        {/* <div className='techwave_fn_preloader'>
        <svg>
          <circle className='first_circle' cx='50%' cy='50%' r='110'></circle>
          <circle className='second_circle' cx='50%' cy='50%' r='110'></circle>
        </svg>
      </div> */}

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
                            <button
                              onClick={handleSubmit}
                              onKeyDown={(e) => {
                                if (e.key == "Enter") {
                                  handleSubmit(e);
                                }
                              }}
                            >
                              <img
                                src="svg/enter.svg"
                                alt=""
                                className="fn__svg"
                              />
                            </button>
                          </div>
                        </div>
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
