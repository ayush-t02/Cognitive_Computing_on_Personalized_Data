import Head from "next/head";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../utils/Firebase";
export default function Home() {
  const route = useRouter();
  const { user } = useSelector((state) => state.user);
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
  return (
    <>
      <div>
        <div className="techwave_fn_fixedsub">
          <ul></ul>
        </div>

        {/* <div className='techwave_fn_preloader enabled'>
        <svg>
          <circle className='first_circle' cx='50%' cy='50%' r='110'></circle>
          <circle className='second_circle' cx='50%' cy='50%' r='110'></circle>
        </svg>
      </div> */}

        <div className="techwave_fn_wrapper">
          <div className="techwave_fn_wrap">
            <div className="techwave_fn_searchbar">
              <div className="search__bar">
                <input
                  className="search__input"
                  type="text"
                  placeholder="Search here..."
                />
                <img
                  src="../svg/search.svg"
                  alt=""
                  className="fn__svg search__icon"
                />
                <a className="search__closer" href="#">
                  <img src="svg/close.svg" alt="" className="fn__svg" />
                </a>
              </div>
              <div className="search__results">
                <div className="results__title">Results</div>
                <div className="results__list">
                  <ul>
                    <li>
                      <a href="#">Artificial Intelligence</a>
                    </li>
                    <li>
                      <a href="#">
                        Learn about the impact of AI on the financial industry
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Delve into the realm of AI-driven manufacturing
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Understand the ethical implications surrounding AI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <header className="techwave_fn_header">
              <div className="header__left">
                <div className="fn__token_info">
                  <span className="token_summary">
                    <span className="count">120</span>
                    <span className="text">
                      Tokens
                      <br />
                      Remain
                    </span>
                  </span>
                  <a
                    href="pricing.html"
                    className="token_upgrade techwave_fn_button"
                  >
                    <span>Upgrade</span>
                  </a>
                  <div className="token__popup">
                    Resets in <span>19 hours.</span>
                    <br />
                    Daily limit is <span>200 tokens</span>
                  </div>
                </div>
              </div>

              <div className="header__right">
                <div className="fn__nav_bar">
                  <div className="bar__item bar__item_search">
                    <a
                      href="#"
                      className="item_opener fn__tooltip"
                      title="Search"
                    >
                      <img src="svg/search.svg" alt="" className="fn__svg" />
                    </a>
                    <div className="item_popup" data-position="right">
                      <input type="text" placeholder="Search" />
                    </div>
                  </div>

                  <div className="bar__item bar__item_notification has_notification">
                    <a
                      href="#"
                      className="item_opener fn__tooltip"
                      title="Notifications"
                    >
                      <img src="svg/bell.svg" alt="" className="fn__svg" />
                    </a>
                    <div className="item_popup" data-position="right">
                      <div className="ntfc_header">
                        <h2 className="ntfc_title">Notifications</h2>
                        <a href="notifications.html">View All</a>
                      </div>
                      <div className="ntfc_list">
                        <ul>
                          <li>
                            <p>
                              <a href="notification-single.html">
                                Version 4.1.2 has been launched
                              </a>
                            </p>
                            <span>34 Min Ago</span>
                          </li>
                          <li>
                            <p>
                              <a href="notification-single.html">
                                Video Generation has been released
                              </a>
                            </p>
                            <span>12 Apr</span>
                          </li>
                          <li>
                            <p>
                              <a href="notification-single.html">
                                Terms has been updated
                              </a>
                            </p>
                            <span>12 Apr</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bar__item bar__item_fullscreen">
                    <a
                      href="#"
                      className="item_opener fn__tooltip"
                      title="Full Screen"
                    >
                      <img
                        src="svg/fullscreen.svg"
                        alt=""
                        className="fn__svg f_screen"
                      />
                      <img
                        src="svg/smallscreen.svg"
                        alt=""
                        className="fn__svg s_screen"
                      />
                    </a>
                  </div>

                  <div className="bar__item bar__item_language">
                    <a
                      href="#"
                      className="item_opener fn__tooltip"
                      title="Language"
                    >
                      <img src="svg/language.svg" alt="" className="fn__svg" />
                    </a>
                    <div className="item_popup" data-position="right">
                      <ul>
                        <li>
                          <span className="active">English</span>
                        </li>
                        <li>
                          <a href="#">Spanish</a>
                        </li>
                        <li>
                          <a href="#">French</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bar__item bar__item_skin">
                    <a
                      href="#"
                      className="item_opener fn__tooltip"
                      title="Dark/Light"
                    >
                      <img
                        src="svg/sun.svg"
                        alt=""
                        className="fn__svg light_mode"
                      />
                      <img
                        src="svg/moon.svg"
                        alt=""
                        className="fn__svg dark_mode"
                      />
                    </a>
                  </div>

                  <div className="bar__item bar__item_user">
                    {user && user.email ? (
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          setnavBar((prev) => !prev);
                        }}
                        href="#"
                        className="user_opener fn__tooltip"
                        title="User Profile"
                      >
                        <img
                          referrerPolicy="no-referrer"
                          src={user.url}
                          alt=""
                        />
                      </a>
                    ) : (
                      <Link
                        href="/signin"
                        className="token_upgrade techwave_fn_button"
                      >
                        <span>Login</span>
                      </Link>
                    )}
                    <div
                      style={{
                        opacity: !navbar ? "0" : "1",
                        visibility: !navbar ? "hidden" : "visible",
                      }}
                      className="item_popup"
                      data-position="right"
                    >
                      <div className="user_profile">
                        {user && user.email && (
                          <div className="user_img">
                            <img
                              referrerPolicy="no-referrer"
                              src={user.url}
                              alt=""
                            />
                          </div>
                        )}
                        {user && user.email && (
                          <div className="user_info">
                            <h2 className="user_name">
                              {user.name}
                              {/* <span>Free</span> */}
                            </h2>
                            <p>
                              <a
                                href="mailto:tripathiayush23@gmail.com"
                                className="user_email"
                              >
                                {user.email}
                              </a>
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="user_nav">
                        <ul>
                          {user && user.email && (
                            <li>
                              <a href="user-profile.html">
                                <span className="icon">
                                  <img
                                    src="svg/person.svg"
                                    alt=""
                                    className="fn__svg"
                                  />
                                </span>
                                <span className="text">Profile</span>
                              </a>
                            </li>
                          )}
                          {user && user.email && (
                            <li>
                              <a href="user-settings.html">
                                <span className="icon">
                                  <img
                                    src="svg/setting.svg"
                                    alt=""
                                    className="fn__svg"
                                  />
                                </span>
                                <span className="text">Settings</span>
                              </a>
                            </li>
                          )}

                          {user && user.email && (
                            <li>
                              <a onClick={handleLogout}>
                                <span className="icon">
                                  <img
                                    src="svg/logout.svg"
                                    alt=""
                                    className="fn__svg"
                                  />
                                </span>
                                <span className="text">Log Out</span>
                              </a>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="techwave_fn_leftpanel">
              <div className="mobile_extra_closer"></div>

              <div className="leftpanel_logo">
                <a
                  onClick={() => {
                    route.push("/");
                  }}
                  className="fn_logo"
                >
                  <span className="full_logo">
                    <img
                      src="images/logo-desktop-full.png"
                      alt=""
                      className="desktop_logo"
                    />
                    <img
                      src="images/logo-retina-full.png"
                      alt=""
                      className="retina_logo"
                    />
                  </span>
                  <span className="short_logo">
                    <img
                      src="images/logo-desktop-mini.png"
                      alt=""
                      className="desktop_logo"
                    />
                    <img
                      src="images/logo-retina-mini.png"
                      alt=""
                      className="retina_logo"
                    />
                  </span>
                </a>
                <a
                  href="#"
                  className="fn__closer fn__icon_button desktop_closer"
                >
                  <img src="svg/arrow.svg" alt="" className="fn__svg" />
                </a>
                <a
                  href="#"
                  className="fn__closer fn__icon_button mobile_closer"
                >
                  <img src="svg/arrow.svg" alt="" className="fn__svg" />
                </a>
              </div>

              <div className="leftpanel_content">
                <div className="nav_group">
                  <h2 className="group__title">Start Here</h2>
                  <ul className="group__list">
                    <li>
                      <a
                        onClick={() => {
                          route.push("/");
                        }}
                        className="fn__tooltip active menu__item"
                        data-position="right"
                        title="Home"
                      >
                        <span className="icon">
                          <img src="svg/home.svg" alt="" className="fn__svg" />
                        </span>
                        <span className="text">Home</span>
                      </a>
                    </li>
                    <li>
                      <a
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
                      </a>
                    </li>
                    <li>
                      <a
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
                      </a>
                    </li>
                    <li>
                      <a
                        href="models.html"
                        className="fn__tooltip menu__item"
                        data-position="right"
                        title="Finetuned Models"
                      >
                        <span className="icon">
                          <img src="svg/cube.svg" alt="" className="fn__svg" />
                        </span>
                        <span className="text">Finetuned Models</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="nav_group">
                  <h2 className="group__title">User Tools</h2>
                  <ul className="group__list">
                    <li>
                      <a
                        href="image-generation.html"
                        className="fn__tooltip menu__item"
                        data-position="right"
                        title="Image Generation"
                      >
                        <span className="icon">
                          <img src="svg/image.svg" alt="" className="fn__svg" />
                        </span>
                        <span className="text">Image Generation</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="ai-chat-bot.html"
                        className="fn__tooltip menu__item"
                        data-position="right"
                        title="AI Chat Bot"
                      >
                        <span className="icon">
                          <img src="svg/chat.svg" alt="" className="fn__svg" />
                        </span>
                        <span className="text">AI Chat Bot</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="nav_group">
                  <h2 className="group__title">Support</h2>
                  <ul className="group__list">
                    <li>
                      <a
                        href="pricing.html"
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
                      </a>
                    </li>
                    <li className="menu-item-has-children">
                      <a
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
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="documentation.html">
                            <span className="text">Documentation</span>
                          </a>
                        </li>
                        <li>
                          <a href="faq.html">
                            <span className="text">FAQ</span>
                          </a>
                        </li>
                        <li>
                          <a href="changelog.html">
                            <span className="text">
                              Changelog<span className="fn__sup">(4.1.2)</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="contact.html">
                            <span className="text">Contact Us</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        onClick={handleLogout}
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
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="techwave_fn_content">
              <div className="techwave_fn_page">
                <div className="techwave_fn_home">
                  <div className="section_home">
                    <div className="section_left">
                      <div className="techwave_fn_title_holder">
                        <h1 className="title">
                          Unleash Your Creativity with AI
                        </h1>
                        <p className="desc">
                          Generate your ideas into stunning visuals
                        </p>
                      </div>

                      <div className="techwave_fn_interactive_list">
                        <ul>
                          <li>
                            <div className="item">
                              <a
                                onClick={() => {
                                  route.push("/image");
                                }}
                              >
                                <span className="icon">
                                  <img
                                    src="svg/image.svg"
                                    alt=""
                                    className="fn__svg"
                                  />
                                </span>
                                <h2 className="title">Image Generation</h2>
                                <p className="desc">
                                  This field of AI combines deep learning
                                  algorithms and generative models to create new
                                  images that resemble real-world photographs or
                                  exhibit creative and imaginative qualities.
                                </p>
                                <span className="arrow">
                                  <img
                                    src="svg/arrow.svg"
                                    alt=""
                                    className="fn__svg"
                                  />
                                </span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="item">
                              <a
                                onClick={() => {
                                  route.push("/ai");
                                }}
                              >
                                <span className="icon">
                                  <img
                                    src="svg/chat.svg"
                                    alt=""
                                    className="fn__svg"
                                  />
                                </span>
                                <h2 className="title">AI Chat Bot</h2>
                                <p className="desc">
                                  An AI chatbot, short for artificial
                                  intelligence chatbot, is a computer program
                                  designed to simulate human-like conversations
                                  and provide automated responses to user
                                  queries or prompts.{" "}
                                </p>
                                <span className="arrow">
                                  <img
                                    src="svg/arrow.svg"
                                    alt=""
                                    className="fn__svg"
                                  />
                                </span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="section_right">
                      <div className="company_info">
                        <img src="images/logo-desktop-full.png" alt="" />
                        <p className="fn__animated_text">
                          The official server of TECH-AI, a text-to-image AI
                          where your imagination is the only limit. We’re
                          building market-leading features that will give you
                          greater control over your generations.
                        </p>
                        <hr />
                        <div className="fn__members">
                          <div className="active item">
                            <span className="circle"></span>
                            <span className="text">1,154,694 Online</span>
                          </div>
                          <div className="item">
                            <span className="circle"></span>
                            <span className="text">77,345,912 Members</span>
                          </div>
                        </div>
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
                        <a href="terms.html">Terms of Service</a>
                      </li>
                      <li>
                        <a href="privacy.html">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
