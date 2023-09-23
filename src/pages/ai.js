import React from "react";
import { useRouter } from "next/router";

const ai = () => {
  const route = useRouter();

  return (
    <div>
      <div class='techwave_fn_fixedsub'>
        <ul></ul>
      </div>

      {/* <div class='techwave_fn_preloader'>
        <svg>
          <circle class='first_circle' cx='50%' cy='50%' r='110'></circle>
          <circle class='second_circle' cx='50%' cy='50%' r='110'></circle>
        </svg>
      </div> */}

      <div class='techwave_fn_font'>
        <a class='font__closer_link fn__icon_button' href='#'>
          <img src='svg/close.svg' alt='' class='fn__svg' />
        </a>
        <div class='font__closer'></div>
        <div class='font__dialog'>
          <h3 class='title'>Font Options</h3>
          <label for='font_size'>Font Size</label>
          <select id='font_size'>
            <option value='10'>10 px</option>
            <option value='12'>12 px</option>
            <option value='14'>14 px</option>
            <option value='16' selected>
              16 px
            </option>
            <option value='18'>18 px</option>
            <option value='20'>20 px</option>
            <option value='22'>22 px</option>
            <option value='24'>24 px</option>
            <option value='26'>26 px</option>
            <option value='28'>28 px</option>
          </select>
          <a href='#' class='apply techwave_fn_button'>
            <span>Apply</span>
          </a>
        </div>
      </div>

      <div class='techwave_fn_wrapper fn__has_sidebar'>
        <div class='techwave_fn_wrap'>
          <div class='techwave_fn_searchbar'>
            <div class='search__bar'>
              <input
                class='search__input'
                type='text'
                placeholder='Search here...'
              />
              <img src='svg/search.svg' alt='' class='fn__svg search__icon' />
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
                  <a href='#' class='item_opener'>
                    <img src='svg/search.svg' alt='' class='fn__svg' />
                  </a>
                  <div class='item_popup'>
                    <input type='text' placeholder='Search' />
                  </div>
                </div>

                <div class='bar__item bar__item_notification has_notification'>
                  <a href='#' class='item_opener'>
                    <img src='svg/bell.svg' alt='' class='fn__svg' />
                  </a>
                  <div class='item_popup'>
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
                  <a href='#' class='item_opener'>
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
                  <a href='#' class='item_opener'>
                    <img src='svg/language.svg' alt='' class='fn__svg' />
                  </a>
                  <div class='item_popup'>
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
                  <a href='#' class='item_opener'>
                    <img src='svg/sun.svg' alt='' class='fn__svg light_mode' />
                    <img src='svg/moon.svg' alt='' class='fn__svg dark_mode' />
                  </a>
                </div>

                <div class='bar__item bar__item_user'>
                  <a href='#' class='user_opener'>
                    <img src='images/user/user.jpg' alt='' />
                  </a>
                  <div class='item_popup'>
                    <div class='user_profile'>
                      <div class='user_img'>
                        <img src='images/user/user.jpg' alt='' />
                      </div>
                      <div class='user_info'>
                        <h2 class='user_name'>
                          Caden Smith<span>Free</span>
                        </h2>
                        <p>
                          <a href='mailto:cadmail@gmail.com' class='user_email'>
                            cadmail@gmail.com
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
                      href='index-2.html'
                      class='fn__tooltip menu__item'
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
                      class='fn__tooltip active menu__item'
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
                      <li>
                        <a href='index-3.html'>
                          <span class='text'>Home #2</span>
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
              <div class='techwave_fn_aichatbot_page fn__chatbot'>
                <div class='chat__page'>
                  <div class='font__trigger'>
                    <span></span>
                  </div>

                  <div class='fn__title_holder'>
                    <div class='container'>
                      <h1 class='title'>Chat Bot Definition</h1>
                    </div>
                  </div>

                  <div class='container'>
                    <div class='chat__list'>
                      <div id='chat0' class='chat__item'></div>

                      <div class='chat__item active' id='chat1'>
                        <div class='chat__box your__chat'>
                          <div class='author'>
                            <span>You</span>
                          </div>
                          <div class='chat'>
                            <p>What is a chat bot?</p>
                          </div>
                        </div>
                        <div class='chat__box bot__chat'>
                          <div class='author'>
                            <span>Bot</span>
                          </div>
                          <div class='chat'>
                            <p>
                              At the most basic level, a chatbot is a computer
                              program that simulates and processes human
                              conversation (either written or spoken), allowing
                              humans to interact with digital devices as if they
                              were communicating with a real person. Chatbots
                              can be as simple as rudimentary programs that
                              answer a simple query with a single-line response,
                              or as sophisticated as digital assistants that
                              learn and evolve to deliver increasing levels of
                              personalization as they gather and process
                              information.
                            </p>
                          </div>
                        </div>
                        <div class='chat__box your__chat'>
                          <div class='author'>
                            <span>You</span>
                          </div>
                          <div class='chat'>
                            <p>How do chatbots work?</p>
                          </div>
                        </div>
                        <div class='chat__box bot__chat'>
                          <div class='author'>
                            <span>Bot</span>
                          </div>
                          <div class='chat'>
                            <p>
                              Chatbots boost operational efficiency and bring
                              cost savings to businesses while offering
                              convenience and added services to internal
                              employees and external customers. They allow
                              companies to easily resolve many types of customer
                              queries and issues while reducing the need for
                              human interaction.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class='chat__item' id='chat2'></div>

                      <div class='chat__item' id='chat3'></div>

                      <div class='chat__item' id='chat4'></div>
                    </div>
                  </div>

                  <div class='chat__comment'>
                    <div class='container'>
                      <div class='fn__chat_comment'>
                        <div class='new__chat'>
                          <p>
                            Ask it questions, engage in discussions, or simply
                            enjoy a friendly chat.
                          </p>
                        </div>
                        <textarea
                          rows='1'
                          class='fn__hidden_textarea'
                          tabindex='-1'></textarea>
                        <textarea
                          rows='1'
                          placeholder='Send a message...'
                          id='fn__chat_textarea'></textarea>
                        <button>
                          <img src='svg/enter.svg' alt='' class='fn__svg' />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class='chat__sidebar'>
                  <div class='sidebar_header'>
                    <a href='#chat0' class='fn__new_chat_link'>
                      <span class='icon'></span>
                      <span class='text'>New Chat</span>
                    </a>
                  </div>
                  <div class='sidebar_content'>
                    <div class='chat__group new'>
                      <h2 class='group__title'>Today</h2>
                      <ul class='group__list'>
                        <li class='group__item'>
                          <div class='fn__chat_link active' href='#chat1'>
                            <span class='text'>Chat Bot Definition</span>
                            <input type='text' value='Chat Bot Definition' />
                            <span class='options'>
                              <button class='trigger'>
                                <span></span>
                              </button>
                              <span class='options__popup'>
                                <span class='options__list'>
                                  <button class='edit'>Edit</button>
                                  <button class='delete'>Delete</button>
                                </span>
                              </span>
                            </span>
                            <span class='save_options'>
                              <button class='save'>
                                <img
                                  src='svg/check.svg'
                                  alt=''
                                  class='fn__svg'
                                />
                              </button>
                              <button class='cancel'>
                                <img
                                  src='svg/close.svg'
                                  alt=''
                                  class='fn__svg'
                                />
                              </button>
                            </span>
                          </div>
                        </li>
                        <li class='group__item'>
                          <div class='fn__chat_link' href='#chat2'>
                            <span class='text'>Essay: Marketing</span>
                            <input type='text' value='Essay: Marketing' />
                            <span class='options'>
                              <button class='trigger'>
                                <span></span>
                              </button>
                              <span class='options__popup'>
                                <span class='options__list'>
                                  <button class='edit'>Edit</button>
                                  <button class='delete'>Delete</button>
                                </span>
                              </span>
                            </span>
                            <span class='save_options'>
                              <button class='save'>
                                <img
                                  src='svg/check.svg'
                                  alt=''
                                  class='fn__svg'
                                />
                              </button>
                              <button class='cancel'>
                                <img
                                  src='svg/close.svg'
                                  alt=''
                                  class='fn__svg'
                                />
                              </button>
                            </span>
                          </div>
                        </li>
                        <li class='group__item'>
                          <div class='fn__chat_link' href='#chat3'>
                            <span class='text'>Future of Social Media</span>
                            <input type='text' value='Future of Social Media' />
                            <span class='options'>
                              <button class='trigger'>
                                <span></span>
                              </button>
                              <span class='options__popup'>
                                <span class='options__list'>
                                  <button class='edit'>Edit</button>
                                  <button class='delete'>Delete</button>
                                </span>
                              </span>
                            </span>
                            <span class='save_options'>
                              <button class='save'>
                                <img
                                  src='svg/check.svg'
                                  alt=''
                                  class='fn__svg'
                                />
                              </button>
                              <button class='cancel'>
                                <img
                                  src='svg/close.svg'
                                  alt=''
                                  class='fn__svg'
                                />
                              </button>
                            </span>
                          </div>
                        </li>
                        <li class='group__item'>
                          <div class='fn__chat_link' href='#chat4'>
                            <span class='text'>Business Ideas</span>
                            <input type='text' value='Business Ideas' />
                            <span class='options'>
                              <button class='trigger'>
                                <span></span>
                              </button>
                              <span class='options__popup'>
                                <span class='options__list'>
                                  <button class='edit'>Edit</button>
                                  <button class='delete'>Delete</button>
                                </span>
                              </span>
                            </span>
                            <span class='save_options'>
                              <button class='save'>
                                <img
                                  src='svg/check.svg'
                                  alt=''
                                  class='fn__svg'
                                />
                              </button>
                              <button class='cancel'>
                                <img
                                  src='svg/close.svg'
                                  alt=''
                                  class='fn__svg'
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

export default ai;
