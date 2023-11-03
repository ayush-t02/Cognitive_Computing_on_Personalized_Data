import Link from "next/link";
import React from "react";

const Header = ({ user, handleLogout, setnavBar, navbar }) => {
  return (
    <>
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
            <Link href="/" className="token_upgrade techwave_fn_button">
              <span>Upgrade</span>
            </Link>
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
              <Link href="/" className="item_opener fn__tooltip" title="Search">
                <img src="svg/search.svg" alt="" className="fn__svg" />
              </Link>
              <div className="item_popup" data-position="right">
                <input type="text" placeholder="Search" />
              </div>
            </div>

            <div className="bar__item bar__item_notification has_notification">
              <Link
                href="/"
                className="item_opener fn__tooltip"
                title="Notifications"
              >
                <img src="svg/bell.svg" alt="" className="fn__svg" />
              </Link>
              <div className="item_popup" data-position="right">
                <div className="ntfc_header">
                  <h2 className="ntfc_title">Notifications</h2>
                  <Link href="/">View All</Link>
                </div>
                <div className="ntfc_list">
                  <ul>
                    <li>
                      <p>
                        <Link href="/">Version 4.1.2 has been launched</Link>
                      </p>
                      <span>34 Min Ago</span>
                    </li>
                    <li>
                      <p>
                        <Link href="/">Video Generation has been released</Link>
                      </p>
                      <span>12 Apr</span>
                    </li>
                    <li>
                      <p>
                        <Link href="/">Terms has been updated</Link>
                      </p>
                      <span>12 Apr</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bar__item bar__item_fullscreen">
              <Link
                href="/"
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
              </Link>
            </div>

            <div className="bar__item bar__item_language">
              <Link
                href="/"
                className="item_opener fn__tooltip"
                title="Language"
              >
                <img src="svg/language.svg" alt="" className="fn__svg" />
              </Link>
              <div className="item_popup" data-position="right">
                <ul>
                  <li>
                    <span className="active">English</span>
                  </li>
                  <li>
                    <Link href="/">Spanish</Link>
                  </li>
                  <li>
                    <Link href="/">French</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bar__item bar__item_skin">
              <Link
                href="/"
                className="item_opener fn__tooltip"
                title="Dark/Light"
              >
                <img src="svg/sun.svg" alt="" className="fn__svg light_mode" />
                <img src="svg/moon.svg" alt="" className="fn__svg dark_mode" />
              </Link>
            </div>

            <div className="bar__item bar__item_user">
              {user && user.email ? (
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    setnavBar((prev) => !prev);
                  }}
                  href="/"
                  className="user_opener fn__tooltip"
                  title="User Profile"
                >
                  <img referrerPolicy="no-referrer" src={user.url} alt="" />
                </Link>
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
                      <img referrerPolicy="no-referrer" src={user.url} alt="" />
                    </div>
                  )}
                  {user && user.email && (
                    <div className="user_info">
                      <h2 className="user_name">
                        {user.name}
                        {/* <span>Free</span> */}
                      </h2>
                      <p>
                        <Link
                          href="mailto:tripathiayush23@gmail.com"
                          className="user_email"
                        >
                          {user.email}
                        </Link>
                      </p>
                    </div>
                  )}
                </div>
                <div className="user_nav">
                  <ul>
                    {user && user.email && (
                      <li>
                        <Link href="user-profile.html">
                          <span className="icon">
                            <img
                              src="svg/person.svg"
                              alt=""
                              className="fn__svg"
                            />
                          </span>
                          <span className="text">Profile</span>
                        </Link>
                      </li>
                    )}
                    {user && user.email && (
                      <li>
                        <Link href="/">
                          <span className="icon">
                            <img
                              src="svg/setting.svg"
                              alt=""
                              className="fn__svg"
                            />
                          </span>
                          <span className="text">Settings</span>
                        </Link>
                      </li>
                    )}

                    {user && user.email && (
                      <li>
                        <Link href="" onClick={handleLogout}>
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
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
