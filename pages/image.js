import { useRouter } from "next/router";
import React from "react";

const Image = () => {
    const route = useRouter();
  return (
    <>
      <div>
        <div class="techwave_fn_fixedsub">
          <ul></ul>
        </div>

        {/* <div class="techwave_fn_preloader">
        <svg>
          <circle class="first_circle" cx="50%" cy="50%" r="110"></circle>
          <circle class="second_circle" cx="50%" cy="50%" r="110"></circle>
        </svg>
      </div> */}

        <div class="techwave_fn_wrapper fn__has_sidebar">
          <div class="techwave_fn_wrap">
            <div class="techwave_fn_searchbar">
              <div class="search__bar">
                <input
                  class="search__input"
                  type="text"
                  placeholder="Search here..."
                />
                <img src="svg/search.svg" alt="" class="fn__svg search__icon" />
                <a class="search__closer" href="#">
                  <img src="svg/close.svg" alt="" class="fn__svg" />
                </a>
              </div>
              <div class="search__results">
                <div class="results__title">Results</div>
                <div class="results__list">
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

            <header class="techwave_fn_header">
              <div class="header__left">
                <div class="fn__token_info">
                  <span class="token_summary">
                    <span class="count">120</span>
                    <span class="text">
                      Tokens
                      <br />
                      Remain
                    </span>
                  </span>
                  <a
                    href="pricing.html"
                    class="token_upgrade techwave_fn_button"
                  >
                    <span>Upgrade</span>
                  </a>
                  <div class="token__popup">
                    Resets in <span>19 hours.</span>
                    <br />
                    Daily limit is <span>200 tokens</span>
                  </div>
                </div>
              </div>

              <div class="header__right">
                <div class="fn__nav_bar">
                  <div class="bar__item bar__item_search">
                    <a href="#" class="item_opener">
                      <img src="svg/search.svg" alt="" class="fn__svg" />
                    </a>
                    <div class="item_popup">
                      <input type="text" placeholder="Search" />
                    </div>
                  </div>

                  <div class="bar__item bar__item_notification has_notification">
                    <a href="#" class="item_opener">
                      <img src="svg/bell.svg" alt="" class="fn__svg" />
                    </a>
                    <div class="item_popup">
                      <div class="ntfc_header">
                        <h2 class="ntfc_title">Notifications</h2>
                        <a href="notifications.html">View All</a>
                      </div>
                      <div class="ntfc_list">
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

                  <div class="bar__item bar__item_fullscreen">
                    <a href="#" class="item_opener">
                      <img
                        src="svg/fullscreen.svg"
                        alt=""
                        class="fn__svg f_screen"
                      />
                      <img
                        src="svg/smallscreen.svg"
                        alt=""
                        class="fn__svg s_screen"
                      />
                    </a>
                  </div>

                  <div class="bar__item bar__item_language">
                    <a href="#" class="item_opener">
                      <img src="svg/language.svg" alt="" class="fn__svg" />
                    </a>
                    <div class="item_popup">
                      <ul>
                        <li>
                          <span class="active">English</span>
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

                  <div class="bar__item bar__item_skin">
                    <a href="#" class="item_opener">
                      <img
                        src="svg/sun.svg"
                        alt=""
                        class="fn__svg light_mode"
                      />
                      <img
                        src="svg/moon.svg"
                        alt=""
                        class="fn__svg dark_mode"
                      />
                    </a>
                  </div>

                  <div class="bar__item bar__item_user">
                    <a href="#" class="user_opener">
                      <img src="images/user/user.jpg" alt="" />
                    </a>
                    <div class="item_popup">
                      <div class="user_profile">
                        <div class="user_img">
                          <img src="images/user/user.jpg" alt="" />
                        </div>
                        <div class="user_info">
                          <h2 class="user_name">
                            Caden Smith<span>Free</span>
                          </h2>
                          <p>
                            <a
                              href="mailto:cadmail@gmail.com"
                              class="user_email"
                            >
                              cadmail@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div class="user_nav">
                        <ul>
                          <li>
                            <a href="user-profile.html">
                              <span class="icon">
                                <img
                                  src="svg/person.svg"
                                  alt=""
                                  class="fn__svg"
                                />
                              </span>
                              <span class="text">Profile</span>
                            </a>
                          </li>
                          <li>
                            <a href="user-settings.html">
                              <span class="icon">
                                <img
                                  src="svg/setting.svg"
                                  alt=""
                                  class="fn__svg"
                                />
                              </span>
                              <span class="text">Settings</span>
                            </a>
                          </li>
                          <li>
                            <a href="user-billing.html">
                              <span class="icon">
                                <img
                                  src="svg/billing.svg"
                                  alt=""
                                  class="fn__svg"
                                />
                              </span>
                              <span class="text">Billing</span>
                            </a>
                          </li>
                          <li>
                            <a href="sign-in.html">
                              <span class="icon">
                                <img
                                  src="svg/logout.svg"
                                  alt=""
                                  class="fn__svg"
                                />
                              </span>
                              <span class="text">Log Out</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div class="techwave_fn_leftpanel">
              <div class="mobile_extra_closer"></div>

              <div class="leftpanel_logo">
                <a
                  onClick={() => {
                    route.push("/");
                  }}
                  class="fn_logo"
                >
                  <span class="full_logo">
                    <img
                      src="images/CCPD_Text.png"
                      alt=""
                      class="desktop_logo"
                    />
                    <img
                      src="images/CCPD_Text.png"
                      alt=""
                      class="retina_logo"
                      onClick={() => {
                        route.push("/");
                      }}
                    />
                  </span>
                  <span class="short_logo">
                    <img
                      src="images/CCPD_Text.png"
                      alt=""
                      class="desktop_logo"
                    />
                    <img
                      src="images/CCPD_Text.png"
                      alt=""
                      class="retina_logo"
                    />
                  </span>
                </a>
                <a href="#" class="fn__closer fn__icon_button desktop_closer">
                  <img src="svg/arrow.svg" alt="" class="fn__svg" />
                </a>
                <a href="#" class="fn__closer fn__icon_button mobile_closer">
                  <img src="svg/arrow.svg" alt="" class="fn__svg" />
                </a>
              </div>

              <div class="leftpanel_content">
                <div class="nav_group">
                  <h2 class="group__title">Start Here</h2>
                  <ul class="group__list">
                    <li>
                      <a
                        onClick={() => {
                          route.push("/");
                        }}
                        class="fn__tooltip menu__item"
                        data-position="right"
                        title="Home"
                      >
                        <span class="icon">
                          <img src="svg/home.svg" alt="" class="fn__svg" />
                        </span>
                        <span class="text">Home</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="community-feed.html"
                        class="fn__tooltip menu__item"
                        data-position="right"
                        title="Community Feed"
                      >
                        <span class="icon">
                          <img src="svg/community.svg" alt="" class="fn__svg" />
                        </span>
                        <span class="text">Community Feed</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="personal-feed.html"
                        class="fn__tooltip menu__item"
                        data-position="right"
                        title="Personal Feed"
                      >
                        <span class="icon">
                          <img src="svg/person.svg" alt="" class="fn__svg" />
                        </span>
                        <span class="text">
                          Personal Feed<span class="count">48</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="models.html"
                        class="fn__tooltip menu__item"
                        data-position="right"
                        title="Finetuned Models"
                      >
                        <span class="icon">
                          <img src="svg/cube.svg" alt="" class="fn__svg" />
                        </span>
                        <span class="text">Finetuned Models</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="nav_group">
                  <h2 class="group__title">User Tools</h2>
                  <ul class="group__list">
                    <li>
                      <a
                        href="/image"
                        class="fn__tooltip active menu__item"
                        data-position="right"
                        title="Image Generation"
                      >
                        <span class="icon">
                          <img src="svg/image.svg" alt="" class="fn__svg" />
                        </span>
                        <span class="text">Image Generation</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/ai"
                        class="fn__tooltip menu__item"
                        data-position="right"
                        title="AI Chat Bot"
                      >
                        <span class="icon">
                          <img src="svg/chat.svg" alt="" class="fn__svg" />
                        </span>
                        <span class="text">AI Chat Bot</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="nav_group">
                  <h2 class="group__title">Support</h2>
                  <ul class="group__list">
                    <li>
                      <a
                        href="pricing.html"
                        class="fn__tooltip menu__item"
                        data-position="right"
                        title="Pricing"
                      >
                        <span class="icon">
                          <img src="svg/dollar.svg" alt="" class="fn__svg" />
                        </span>
                        <span class="text">Pricing</span>
                      </a>
                    </li>
                    <li class="menu-item-has-children">
                      <a
                        href="video-generation.html"
                        class="fn__tooltip menu__item"
                        title="FAQ &amp; Help"
                        data-position="right"
                      >
                        <span class="icon">
                          <img src="svg/question.svg" alt="" class="fn__svg" />
                        </span>
                        <span class="text">FAQ &amp; Help</span>
                        <span class="trigger">
                          <img src="svg/arrow.svg" alt="" class="fn__svg" />
                        </span>
                      </a>
                      <ul class="sub-menu">
                        <li>
                          <a href="documentation.html">
                            <span class="text">Documentation</span>
                          </a>
                        </li>
                        <li>
                          <a href="faq.html">
                            <span class="text">FAQ</span>
                          </a>
                        </li>
                        <li>
                          <a href="changelog.html">
                            <span class="text">
                              Changelog<span class="fn__sup">(4.1.2)</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="contact.html">
                            <span class="text">Contact Us</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="sign-in.html"
                        class="fn__tooltip menu__item"
                        data-position="right"
                        title="Log Out"
                      >
                        <span class="icon">
                          <img src="svg/logout.svg" alt="" class="fn__svg" />
                        </span>
                        <span class="text">Log Out</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="techwave_fn_content">
              <div class="techwave_fn_page">
                <div class="techwave_fn_image_generation_page">
                  <div class="generation__page">
                    <div class="generation_header">
                      <div class="header_top">
                        <h1 class="title">Image Generation</h1>
                        <div class="setup">
                          <p class="info">
                            This wil use <span class="count">4</span> tokens
                          </p>
                          <a href="#" class="sidebar__trigger">
                            <img src="svg/option.svg" alt="" class="fn__svg" />
                          </a>
                        </div>
                      </div>
                      <div class="header_bottom">
                        <div class="include_area">
                          <textarea
                            id="fn__include_textarea"
                            rows="1"
                          ></textarea>
                          <textarea
                            class="fn__hidden_textarea"
                            rows="1"
                            tabindex="-1"
                          ></textarea>
                        </div>
                        <div class="exclude_area">
                          <textarea
                            id="fn__exclude_textarea"
                            rows="1"
                          ></textarea>
                          <textarea
                            class="fn__hidden_textarea"
                            rows="1"
                            tabindex="-1"
                          ></textarea>
                        </div>
                        <div class="generate_section">
                          <label class="fn__toggle">
                            <span class="t_in">
                              <input
                                type="checkbox"
                                checked
                                id="negative_prompt"
                              />
                              <span class="t_slider"></span>
                              <span class="t_content"></span>
                            </span>
                            Negative Prompt
                          </label>
                          <a
                            id="generate_it"
                            href="#"
                            class="techwave_fn_button"
                          >
                            <span>Generate</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="generation_history">
                      <div class="fn__generation_item">
                        <div class="item_header">
                          <div class="title_holder">
                            <h2 class="prompt_title">
                              Frozen Glacial Mystical spiral Lighthouse, a
                              minimalist lighthouse landscape with a mystical ,
                              Watercolor Clipart, comic, strybk, full
                              Illustration, 4k, sharp focus, watercolor, smooth
                              soft skin, symmetrical, soft lighting, detailed
                              face, concept art, muted colors
                            </h2>
                            <p class="negative_prompt_title">
                              Negative prompt: Text, watermarks, off centre,
                              blur, low res, out of frame, cut off, ugly
                            </p>
                          </div>
                          <div class="item_options">
                            <div class="fn__icon_options medium_size align_right">
                              <a href="#" class="fn__icon_button">
                                <img
                                  src="svg/info.svg"
                                  alt=""
                                  class="fn__svg"
                                />
                              </a>
                              <div class="fn__icon_popup">
                                <ul>
                                  <li>
                                    <span class="text">ArtShaper v3</span>
                                  </li>
                                  <li>
                                    <span class="text">512 x 512px</span>
                                  </li>
                                  <li>
                                    <span class="text">March 15, 2023</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="fn__icon_options medium_size align_right">
                              <a href="#" class="fn__icon_button">
                                <span class="dots"></span>
                              </a>
                              <div class="fn__icon_popup">
                                <ul>
                                  <li>
                                    <a href="#">Copy Prompt</a>
                                  </li>
                                  <li>
                                    <a href="#">Reuse Prompt</a>
                                  </li>
                                  <li>
                                    <a href="#">Upscale All</a>
                                  </li>
                                  <li>
                                    <a href="#">Download All</a>
                                  </li>
                                  <li class="high_priorety">
                                    <a href="#">Delete All</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="item_list">
                          <ul class="fn__generation_list">
                            <li class="fn__gl_item">
                              <div class="fn__gl__item">
                                <div class="abs_item">
                                  <img src="images/gallery/1.jpg" alt="" />
                                  <div class="all_options">
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/download.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Original Image</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Creative Upscaled Image
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscaled Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/upscale.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Creative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">Alternative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscale</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <span class="dots"></span>
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Make Variations</a>
                                          </li>
                                          <li class="high_priorety">
                                            <a href="#">Delete Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="fn__gl_item">
                              <div class="fn__gl__item">
                                <div class="abs_item">
                                  <img src="images/gallery/2.jpg" alt="" />
                                  <div class="all_options">
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/download.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Original Image</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Creative Upscaled Image
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscaled Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/upscale.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Creative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">Alternative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscale</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <span class="dots"></span>
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Make Variations</a>
                                          </li>
                                          <li class="high_priorety">
                                            <a href="#">Delete Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="fn__gl_item">
                              <div class="fn__gl__item">
                                <div class="abs_item">
                                  <img src="images/gallery/3.jpg" alt="" />
                                  <div class="all_options">
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/download.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Original Image</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Creative Upscaled Image
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscaled Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/upscale.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Creative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">Alternative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscale</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <span class="dots"></span>
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Make Variations</a>
                                          </li>
                                          <li class="high_priorety">
                                            <a href="#">Delete Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="fn__gl_item">
                              <div class="fn__gl__item">
                                <div class="abs_item">
                                  <img src="images/gallery/4.jpg" alt="" />
                                  <div class="all_options">
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/download.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Original Image</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Creative Upscaled Image
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscaled Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/upscale.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Creative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">Alternative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscale</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <span class="dots"></span>
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Make Variations</a>
                                          </li>
                                          <li class="high_priorety">
                                            <a href="#">Delete Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="fn__generation_item">
                        <div class="item_header">
                          <div class="title_holder">
                            <h2 class="prompt_title">
                              Frozen Glacial Mystical spiral Lighthouse, a
                              minimalist lighthouse landscape with a mystical ,
                              Watercolor Clipart, comic, strybk, full
                              Illustration, 4k, sharp focus, watercolor, smooth
                              soft skin, symmetrical, soft lighting, detailed
                              face, concept art, muted colors
                            </h2>
                            <p class="negative_prompt_title">
                              Negative prompt: Text, watermarks, off centre,
                              blur, low res, out of frame, cut off, ugly
                            </p>
                          </div>
                          <div class="item_options">
                            <div class="fn__icon_options medium_size align_right">
                              <a href="#" class="fn__icon_button">
                                <img
                                  src="svg/info.svg"
                                  alt=""
                                  class="fn__svg"
                                />
                              </a>
                              <div class="fn__icon_popup">
                                <ul>
                                  <li>
                                    <span class="text">ArtShaper v3</span>
                                  </li>
                                  <li>
                                    <span class="text">512 x 512px</span>
                                  </li>
                                  <li>
                                    <span class="text">March 15, 2023</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="fn__icon_options medium_size align_right">
                              <a href="#" class="fn__icon_button">
                                <span class="dots"></span>
                              </a>
                              <div class="fn__icon_popup">
                                <ul>
                                  <li>
                                    <a href="#">Copy Prompt</a>
                                  </li>
                                  <li>
                                    <a href="#">Reuse Prompt</a>
                                  </li>
                                  <li>
                                    <a href="#">Upscale All</a>
                                  </li>
                                  <li>
                                    <a href="#">Download All</a>
                                  </li>
                                  <li class="high_priorety">
                                    <a href="#">Delete All</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="item_list">
                          <ul class="fn__generation_list">
                            <li class="fn__gl_item">
                              <div class="fn__gl__item">
                                <div class="abs_item">
                                  <img src="images/gallery/5.jpg" alt="" />
                                  <div class="all_options">
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/download.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Original Image</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Creative Upscaled Image
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscaled Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/upscale.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Creative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">Alternative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscale</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <span class="dots"></span>
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Make Variations</a>
                                          </li>
                                          <li class="high_priorety">
                                            <a href="#">Delete Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="fn__gl_item">
                              <div class="fn__gl__item">
                                <div class="abs_item">
                                  <img src="images/gallery/6.jpg" alt="" />
                                  <div class="all_options">
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/download.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Original Image</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Creative Upscaled Image
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscaled Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/upscale.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Creative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">Alternative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscale</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <span class="dots"></span>
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Make Variations</a>
                                          </li>
                                          <li class="high_priorety">
                                            <a href="#">Delete Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="fn__gl_item">
                              <div class="fn__gl__item">
                                <div class="abs_item">
                                  <img src="images/gallery/7.jpg" alt="" />
                                  <div class="all_options">
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/download.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Original Image</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Creative Upscaled Image
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscaled Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/upscale.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Creative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">Alternative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscale</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <span class="dots"></span>
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Make Variations</a>
                                          </li>
                                          <li class="high_priorety">
                                            <a href="#">Delete Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="fn__gl_item">
                              <div class="fn__gl__item">
                                <div class="abs_item">
                                  <img src="images/gallery/8.jpg" alt="" />
                                  <div class="all_options">
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/download.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Original Image</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Creative Upscaled Image
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscaled Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/upscale.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Creative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">Alternative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscale</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <span class="dots"></span>
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Make Variations</a>
                                          </li>
                                          <li class="high_priorety">
                                            <a href="#">Delete Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="fn__generation_item">
                        <div class="item_header">
                          <div class="title_holder">
                            <h2 class="prompt_title">
                              Frozen Glacial Mystical spiral Lighthouse, a
                              minimalist lighthouse landscape with a mystical ,
                              Watercolor Clipart, comic, strybk, full
                              Illustration, 4k, sharp focus, watercolor, smooth
                              soft skin, symmetrical, soft lighting, detailed
                              face, concept art, muted colors
                            </h2>
                            <p class="negative_prompt_title">
                              Negative prompt: Text, watermarks, off centre,
                              blur, low res, out of frame, cut off, ugly
                            </p>
                          </div>
                          <div class="item_options">
                            <div class="fn__icon_options medium_size align_right">
                              <a href="#" class="fn__icon_button">
                                <img
                                  src="svg/info.svg"
                                  alt=""
                                  class="fn__svg"
                                />
                              </a>
                              <div class="fn__icon_popup">
                                <ul>
                                  <li>
                                    <span class="text">ArtShaper v3</span>
                                  </li>
                                  <li>
                                    <span class="text">512 x 512px</span>
                                  </li>
                                  <li>
                                    <span class="text">March 15, 2023</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="fn__icon_options medium_size align_right">
                              <a href="#" class="fn__icon_button">
                                <span class="dots"></span>
                              </a>
                              <div class="fn__icon_popup">
                                <ul>
                                  <li>
                                    <a href="#">Copy Prompt</a>
                                  </li>
                                  <li>
                                    <a href="#">Reuse Prompt</a>
                                  </li>
                                  <li>
                                    <a href="#">Upscale All</a>
                                  </li>
                                  <li>
                                    <a href="#">Download All</a>
                                  </li>
                                  <li class="high_priorety">
                                    <a href="#">Delete All</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="item_list">
                          <ul class="fn__generation_list">
                            <li class="fn__gl_item">
                              <div class="fn__gl__item">
                                <div class="abs_item">
                                  <img src="images/gallery/1.jpg" alt="" />
                                  <div class="all_options">
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/download.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Original Image</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Creative Upscaled Image
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscaled Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/upscale.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Creative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">Alternative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscale</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <span class="dots"></span>
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Make Variations</a>
                                          </li>
                                          <li class="high_priorety">
                                            <a href="#">Delete Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="fn__gl_item">
                              <div class="fn__gl__item">
                                <div class="abs_item">
                                  <img src="images/gallery/2.jpg" alt="" />
                                  <div class="all_options">
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/download.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Original Image</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Creative Upscaled Image
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscaled Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/upscale.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Creative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">Alternative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscale</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <span class="dots"></span>
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Make Variations</a>
                                          </li>
                                          <li class="high_priorety">
                                            <a href="#">Delete Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="fn__gl_item">
                              <div class="fn__gl__item">
                                <div class="abs_item">
                                  <img src="images/gallery/3.jpg" alt="" />
                                  <div class="all_options">
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/download.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Original Image</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Creative Upscaled Image
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscaled Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/upscale.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Creative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">Alternative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscale</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <span class="dots"></span>
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Make Variations</a>
                                          </li>
                                          <li class="high_priorety">
                                            <a href="#">Delete Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="fn__gl_item">
                              <div class="fn__gl__item">
                                <div class="abs_item">
                                  <img src="images/gallery/4.jpg" alt="" />
                                  <div class="all_options">
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/download.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Original Image</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Creative Upscaled Image
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscaled Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <img
                                          src="svg/upscale.svg"
                                          alt=""
                                          class="fn__svg"
                                        />
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Creative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">Alternative Upscale</a>
                                          </li>
                                          <li>
                                            <a href="#">HD Upscale</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="fn__icon_options medium_size">
                                      <a href="#" class="fn__icon_button">
                                        <span class="dots"></span>
                                      </a>
                                      <div class="fn__icon_popup">
                                        <ul>
                                          <li>
                                            <a href="#">Make Variations</a>
                                          </li>
                                          <li class="high_priorety">
                                            <a href="#">Delete Image</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="generation_more">
                        <a
                          href="pricing.html"
                          class="techwave_fn_button medium"
                        >
                          <span>Previous Generations</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="generation__sidebar">
                    <div class="sidebar_model">
                      <div class="fn__select_model">
                        <a class="model_open">
                          <img
                            class="user_img"
                            src="images/user/user.jpg"
                            alt=""
                          />
                          <div class="author">
                            <h4 class="subtitle">Model</h4>
                            <h3 class="title">ArtShaper v3</h3>
                          </div>
                          <span class="fn__icon_button">
                            <img src="svg/arrow.svg" alt="" class="fn__svg" />
                          </span>
                        </a>
                        <div class="all_models">
                          <ul>
                            <li>
                              <a class="selected" href="#">
                                ArtShaper v3
                              </a>
                            </li>
                            <li>
                              <a href="#">ArtShaper v2</a>
                            </li>
                            <li>
                              <a href="#">GameVisuals</a>
                            </li>
                            <li>
                              <a href="#">VintageCar</a>
                            </li>
                            <li>
                              <a href="#">ArtDeco</a>
                            </li>
                            <li>
                              <a href="#">IceCold</a>
                            </li>
                            <li>
                              <a href="#">Water Effect</a>
                            </li>
                            <li>
                              <a href="#">Stable Diffusion v2</a>
                            </li>
                            <li>
                              <a href="#">Stable Diffusion v1</a>
                            </li>
                            <li>
                              <a href="#">Other</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="sidebar_details">
                      <div class="number_of_images">
                        <h4 class="title">Number of Images</h4>
                        <div class="fn__quantity">
                          <a href="#" class="decrease"></a>
                          <input type="number" value="4" max="20" min="1" />
                          <a href="#" class="increase"></a>
                        </div>
                      </div>
                      <div class="img_sizes">
                        <h4 class="title">Image Dimensions</h4>
                        <div class="img_size_select">
                          <select>
                            <option value="512_512" selected>
                              512 x 512px
                            </option>
                            <option value="768_768">768 x 768px</option>
                            <option value="512_1024">512 x 1024px</option>
                            <option value="768_1024">768 x 1024px</option>
                            <option value="1024_1024">1024 x 1024px</option>
                          </select>
                        </div>
                      </div>
                      <div class="guidance_scale">
                        <h4 class="title">
                          Image Dimensions
                          <span
                            class="fn__tooltip"
                            title="Select the resoultion of the images."
                          >
                            <img
                              src="svg/question.svg"
                              alt=""
                              class="fn__svg"
                            />
                          </span>
                        </h4>
                        <div class="fn__range">
                          <div class="range_in">
                            <input type="range" min="1" max="40" value="7" />
                            <div class="slider"></div>
                          </div>
                          <div class="value">7</div>
                        </div>
                      </div>
                      <div class="prompt_magic_switcher">
                        <h4 class="title">
                          <label for="prompt_switcher">Prompt Magic</label>
                          <span
                            class="fn__tooltip"
                            title="TechWave Prompt v3.0. Our custom render pipeline which has much faster compliance and can improve the result with any model selected. Applies a 2x multiplier to accepted costs due to higher GPU overhead."
                          >
                            <img
                              src="svg/question.svg"
                              alt=""
                              class="fn__svg"
                            />
                          </span>
                        </h4>
                        <label class="fn__toggle">
                          <span class="t_in">
                            <input
                              type="checkbox"
                              checked
                              id="prompt_switcher"
                            />
                            <span class="t_slider"></span>
                            <span class="t_content"></span>
                          </span>
                        </label>
                      </div>
                      <div class="contrast_switcher">
                        <h4 class="title">
                          <label for="contrast_switcher">High Contrast</label>
                          <span
                            class="fn__tooltip"
                            title="If your photo consists of extremely bright and dark areas, then it's considered high contrast. When it has a wide range of tones that go from pure white to pure black, it's medium contrast. No pure whites or blacks and a range of middle tones means it's low contrast."
                          >
                            <img
                              src="svg/question.svg"
                              alt=""
                              class="fn__svg"
                            />
                          </span>
                        </h4>
                        <label class="fn__toggle">
                          <span class="t_in">
                            <input type="checkbox" id="contrast_switcher" />
                            <span class="t_slider"></span>
                            <span class="t_content"></span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <footer class="techwave_fn_footer">
                <div class="techwave_fn_footer_content">
                  <div class="copyright">
                    <p>2023© ITB23</p>
                  </div>
                  <div class="menu_items">
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
};

export default Image;
