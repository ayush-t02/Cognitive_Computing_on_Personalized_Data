import React from "react";
import { useRouter } from "next/router";

const index = () => {
  const route = useRouter();

  return (
    <div>
      <div class='techwave_fn_fixedsub'>
        <ul></ul>
      </div>

      {/* <div class='techwave_fn_preloader enabled'>
        <svg>
          <circle class='first_circle' cx='50%' cy='50%' r='110'></circle>
          <circle class='second_circle' cx='50%' cy='50%' r='110'></circle>
        </svg>
      </div> */}

      <div class='techwave_fn_wrapper'>
        <div class='techwave_fn_wrap'>
          <div class='techwave_fn_searchbar'>
            <div class='search__bar'>
              <input
                class='search__input'
                type='text'
                placeholder='Search here...'
              />
              <img
                src='../svg/search.svg'
                alt=''
                class='fn__svg search__icon'
              />
              <a class='search__closer' href='#'>
                <img src='svg/close.svg' alt='' class='fn__svg' />
              </a>
            </div>
            <div class='search__results'>
              <div class='results__title'>Results</div>
              <div class='results__list'>
                <ul>
                  <li>
                    <a href='#'>Artificial Intelligence</a>
                  </li>
                  <li>
                    <a href='#'>
                      Learn about the impact of AI on the financial industry
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      Delve into the realm of AI-driven manufacturing
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      Understand the ethical implications surrounding AI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <header class='techwave_fn_header'>
            <div class='header__left'>
              <div class='fn__token_info'>
                <span class='token_summary'>
                  <span class='count'>120</span>
                  <span class='text'>
                    Tokens
                    <br />
                    Remain
                  </span>
                </span>
                <a href='pricing.html' class='token_upgrade techwave_fn_button'>
                  <span>Upgrade</span>
                </a>
                <div class='token__popup'>
                  Resets in <span>19 hours.</span>
                  <br />
                  Daily limit is <span>200 tokens</span>
                </div>
              </div>
            </div>

            <div class='header__right'>
              <div class='fn__nav_bar'>
                <div class='bar__item bar__item_search'>
                  <a href='#' class='item_opener fn__tooltip' title='Search'>
                    <img src='svg/search.svg' alt='' class='fn__svg' />
                  </a>
                  <div class='item_popup' data-position='right'>
                    <input type='text' placeholder='Search' />
                  </div>
                </div>

                <div class='bar__item bar__item_notification has_notification'>
                  <a
                    href='#'
                    class='item_opener fn__tooltip'
                    title='Notifications'>
                    <img src='svg/bell.svg' alt='' class='fn__svg' />
                  </a>
                  <div class='item_popup' data-position='right'>
                    <div class='ntfc_header'>
                      <h2 class='ntfc_title'>Notifications</h2>
                      <a href='notifications.html'>View All</a>
                    </div>
                    <div class='ntfc_list'>
                      <ul>
                        <li>
                          <p>
                            <a href='notification-single.html'>
                              Version 4.1.2 has been launched
                            </a>
                          </p>
                          <span>34 Min Ago</span>
                        </li>
                        <li>
                          <p>
                            <a href='notification-single.html'>
                              Video Generation has been released
                            </a>
                          </p>
                          <span>12 Apr</span>
                        </li>
                        <li>
                          <p>
                            <a href='notification-single.html'>
                              Terms has been updated
                            </a>
                          </p>
                          <span>12 Apr</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class='bar__item bar__item_fullscreen'>
                  <a
                    href='#'
                    class='item_opener fn__tooltip'
                    title='Full Screen'>
                    <img
                      src='svg/fullscreen.svg'
                      alt=''
                      class='fn__svg f_screen'
                    />
                    <img
                      src='svg/smallscreen.svg'
                      alt=''
                      class='fn__svg s_screen'
                    />
                  </a>
                </div>

                <div class='bar__item bar__item_language'>
                  <a href='#' class='item_opener fn__tooltip' title='Language'>
                    <img src='svg/language.svg' alt='' class='fn__svg' />
                  </a>
                  <div class='item_popup' data-position='right'>
                    <ul>
                      <li>
                        <span class='active'>English</span>
                      </li>
                      <li>
                        <a href='#'>Spanish</a>
                      </li>
                      <li>
                        <a href='#'>French</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class='bar__item bar__item_skin'>
                  <a
                    href='#'
                    class='item_opener fn__tooltip'
                    title='Dark/Light'>
                    <img src='svg/sun.svg' alt='' class='fn__svg light_mode' />
                    <img src='svg/moon.svg' alt='' class='fn__svg dark_mode' />
                  </a>
                </div>

                <div class='bar__item bar__item_user'>
                  <a
                    href='#'
                    class='user_opener fn__tooltip'
                    title='User Profile'>
                    <img src='images/user/user.jpg' alt='' />
                  </a>
                  <div class='item_popup' data-position='right'>
                    <div class='user_profile'>
                      <div class='user_img'>
                        <img src='images/user/user.jpg' alt='' />
                      </div>
                      <div class='user_info'>
                        <h2 class='user_name'>
                          Caden Smith<span>Free</span>
                        </h2>
                        <p>
                          <a
                            href='mailto:tripathiayush23@gmail.com'
                            class='user_email'>
                            tripathiayush23@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div class='user_nav'>
                      <ul>
                        <li>
                          <a href='user-profile.html'>
                            <span class='icon'>
                              <img
                                src='svg/person.svg'
                                alt=''
                                class='fn__svg'
                              />
                            </span>
                            <span class='text'>Profile</span>
                          </a>
                        </li>
                        <li>
                          <a href='user-settings.html'>
                            <span class='icon'>
                              <img
                                src='svg/setting.svg'
                                alt=''
                                class='fn__svg'
                              />
                            </span>
                            <span class='text'>Settings</span>
                          </a>
                        </li>
                        <li>
                          <a href='user-billing.html'>
                            <span class='icon'>
                              <img
                                src='svg/billing.svg'
                                alt=''
                                class='fn__svg'
                              />
                            </span>
                            <span class='text'>Billing</span>
                          </a>
                        </li>
                        <li>
                          <a href='sign-in.html'>
                            <span class='icon'>
                              <img
                                src='svg/logout.svg'
                                alt=''
                                class='fn__svg'
                              />
                            </span>
                            <span class='text'>Log Out</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div class='techwave_fn_leftpanel'>
            <div class='mobile_extra_closer'></div>

            <div class='leftpanel_logo'>
              <a
                onClick={() => {
                  route.push("/");
                }}
                class='fn_logo'>
                <span class='full_logo'>
                  <img
                    src='images/logo-desktop-full.png'
                    alt=''
                    class='desktop_logo'
                  />
                  <img
                    src='images/logo-retina-full.png'
                    alt=''
                    class='retina_logo'
                  />
                </span>
                <span class='short_logo'>
                  <img
                    src='images/logo-desktop-mini.png'
                    alt=''
                    class='desktop_logo'
                  />
                  <img
                    src='images/logo-retina-mini.png'
                    alt=''
                    class='retina_logo'
                  />
                </span>
              </a>
              <a href='#' class='fn__closer fn__icon_button desktop_closer'>
                <img src='svg/arrow.svg' alt='' class='fn__svg' />
              </a>
              <a href='#' class='fn__closer fn__icon_button mobile_closer'>
                <img src='svg/arrow.svg' alt='' class='fn__svg' />
              </a>
            </div>

            <div class='leftpanel_content'>
              <div class='nav_group'>
                <h2 class='group__title'>Start Here</h2>
                <ul class='group__list'>
                  <li>
                    <a
                      onClick={() => {
                        route.push("/");
                      }}
                      class='fn__tooltip active menu__item'
                      data-position='right'
                      title='Home'>
                      <span class='icon'>
                        <img src='svg/home.svg' alt='' class='fn__svg' />
                      </span>
                      <span class='text'>Home</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href='community-feed.html'
                      class='fn__tooltip menu__item'
                      data-position='right'
                      title='Community Feed'>
                      <span class='icon'>
                        <img src='svg/community.svg' alt='' class='fn__svg' />
                      </span>
                      <span class='text'>Community Feed</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href='personal-feed.html'
                      class='fn__tooltip menu__item'
                      data-position='right'
                      title='Personal Feed'>
                      <span class='icon'>
                        <img src='svg/person.svg' alt='' class='fn__svg' />
                      </span>
                      <span class='text'>
                        Personal Feed<span class='count'>48</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href='models.html'
                      class='fn__tooltip menu__item'
                      data-position='right'
                      title='Finetuned Models'>
                      <span class='icon'>
                        <img src='svg/cube.svg' alt='' class='fn__svg' />
                      </span>
                      <span class='text'>Finetuned Models</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class='nav_group'>
                <h2 class='group__title'>User Tools</h2>
                <ul class='group__list'>
                  <li>
                    <a
                      href='image-generation.html'
                      class='fn__tooltip menu__item'
                      data-position='right'
                      title='Image Generation'>
                      <span class='icon'>
                        <img src='svg/image.svg' alt='' class='fn__svg' />
                      </span>
                      <span class='text'>Image Generation</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href='ai-chat-bot.html'
                      class='fn__tooltip menu__item'
                      data-position='right'
                      title='AI Chat Bot'>
                      <span class='icon'>
                        <img src='svg/chat.svg' alt='' class='fn__svg' />
                      </span>
                      <span class='text'>AI Chat Bot</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class='nav_group'>
                <h2 class='group__title'>Support</h2>
                <ul class='group__list'>
                  <li>
                    <a
                      href='pricing.html'
                      class='fn__tooltip menu__item'
                      data-position='right'
                      title='Pricing'>
                      <span class='icon'>
                        <img src='svg/dollar.svg' alt='' class='fn__svg' />
                      </span>
                      <span class='text'>Pricing</span>
                    </a>
                  </li>
                  <li class='menu-item-has-children'>
                    <a
                      href='video-generation.html'
                      class='fn__tooltip menu__item'
                      title='FAQ &amp; Help'
                      data-position='right'>
                      <span class='icon'>
                        <img src='svg/question.svg' alt='' class='fn__svg' />
                      </span>
                      <span class='text'>FAQ &amp; Help</span>
                      <span class='trigger'>
                        <img src='svg/arrow.svg' alt='' class='fn__svg' />
                      </span>
                    </a>
                    <ul class='sub-menu'>
                      <li>
                        <a href='documentation.html'>
                          <span class='text'>Documentation</span>
                        </a>
                      </li>
                      <li>
                        <a href='faq.html'>
                          <span class='text'>FAQ</span>
                        </a>
                      </li>
                      <li>
                        <a href='changelog.html'>
                          <span class='text'>
                            Changelog<span class='fn__sup'>(4.1.2)</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href='contact.html'>
                          <span class='text'>Contact Us</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href='sign-in.html'
                      class='fn__tooltip menu__item'
                      data-position='right'
                      title='Log Out'>
                      <span class='icon'>
                        <img src='svg/logout.svg' alt='' class='fn__svg' />
                      </span>
                      <span class='text'>Log Out</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class='techwave_fn_content'>
            <div class='techwave_fn_page'>
              <div class='techwave_fn_home'>
                <div class='section_home'>
                  <div class='section_left'>
                    <div class='techwave_fn_title_holder'>
                      <h1 class='title'>Unleash Your Creativity with AI</h1>
                      <p class='desc'>
                        Generate your ideas into stunning visuals
                      </p>
                    </div>

                    <div class='techwave_fn_interactive_list'>
                      <ul>
                        <li>
                          <div class='item'>
                            <a
                              onClick={() => {
                                route.push("/image");
                              }}>
                              <span class='icon'>
                                <img
                                  src='svg/image.svg'
                                  alt=''
                                  class='fn__svg'
                                />
                              </span>
                              <h2 class='title'>Image Generation</h2>
                              <p class='desc'>
                                This field of AI combines deep learning
                                algorithms and generative models to create new
                                images that resemble real-world photographs or
                                exhibit creative and imaginative qualities.
                              </p>
                              <span class='arrow'>
                                <img
                                  src='svg/arrow.svg'
                                  alt=''
                                  class='fn__svg'
                                />
                              </span>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div class='item'>
                            <a
                              onClick={() => {
                                route.push("/ai");
                              }}>
                              <span class='icon'>
                                <img
                                  src='svg/chat.svg'
                                  alt=''
                                  class='fn__svg'
                                />
                              </span>
                              <h2 class='title'>AI Chat Bot</h2>
                              <p class='desc'>
                                An AI chatbot, short for artificial intelligence
                                chatbot, is a computer program designed to
                                simulate human-like conversations and provide
                                automated responses to user queries or prompts.{" "}
                              </p>
                              <span class='arrow'>
                                <img
                                  src='svg/arrow.svg'
                                  alt=''
                                  class='fn__svg'
                                />
                              </span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class='section_right'>
                    <div class='company_info'>
                      <img src='images/logo-desktop-full.png' alt='' />
                      <p class='fn__animated_text'>
                        The official server of TECH-AI, a text-to-image AI where
                        your imagination is the only limit. We’re building
                        market-leading features that will give you greater
                        control over your generations.
                      </p>
                      <hr />
                      <div class='fn__members'>
                        <div class='active item'>
                          <span class='circle'></span>
                          <span class='text'>1,154,694 Online</span>
                        </div>
                        <div class='item'>
                          <span class='circle'></span>
                          <span class='text'>77,345,912 Members</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer class='techwave_fn_footer'>
              <div class='techwave_fn_footer_content'>
                <div class='copyright'>
                  <p>2023© ITB23</p>
                </div>
                <div class='menu_items'>
                  <ul>
                    <li>
                      <a href='terms.html'>Terms of Service</a>
                    </li>
                    <li>
                      <a href='privacy.html'>Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;
