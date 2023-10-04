import React from "react";
import { loginSuccess } from "../reducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import firebase from "firebase/compat/app";
import { auth, db } from "../utils/Firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
const Signin = () => {
  const { user } = useSelector((state) => state.user);
  React.useEffect(() => {
    if (user && user?.email) {
      window.location.href = "/";
    } else {
      return;
    }
  }, [user]);
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      const res = await auth.signInWithPopup(googleProvider);
      const user = res.user;
      const idTokenResult = await user.getIdTokenResult();
      const date = new Date();
      await db
        .collection("users")
        .doc(user.email)
        .get()
        .then(async (doc) => {
          if (doc.exists) {
            var separatedString = doc.data();
            reduxDispatch(
              loginSuccess({
                name: separatedString.name,
                email: separatedString.email,
                role: separatedString.role,
                date: separatedString.date,
              })
            );

            router.push("/");
          } else {
            await db
              .collection("users")
              .doc(user.email)
              .set({
                name: user.email.split("@")[0],
                role: "user",
                date: date.toDateString(),
                url:
                  user.photoURL ??
                  "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
                email: user.email,
              })
              .then(() => {
                reduxDispatch(
                  loginSuccess({
                    name: user.email.split("@")[0],
                    email: user.email,
                    date: date.toDateString(),
                    role: "user",
                    url:
                      user.photoURL ??
                      "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
                  })
                );

                router.push("/");
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .then(() => {
          toast.success("successfully login");
        });
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };
  return (
    <>
      <div class="techwave_fn_sign">
        <div class="sign__content">
          <h1 class="logo">Designed by Frenify</h1>
          <form class="login">
            <div class="form__content">
              <div class="form__title">Sign In</div>
              <div class="form__username">
                <label for="user_login">Username or Email</label>
                <input
                  type="text"
                  class="input"
                  id="user_login"
                  autocapitalize="off"
                  autocomplete="username"
                  aria-describedby="login-message"
                />
              </div>
              <div class="form__pass">
                <div class="pass_lab">
                  <label for="user_password">Password</label>
                  <a href="#">Forget Password?</a>
                </div>
                <input
                  type="password"
                  id="user_password"
                  autocomplete="current-password"
                  spellcheck="false"
                />
              </div>
              <div class="form__submit">
                <label class="fn__submit">
                  <input type="submit" name="submit" value="Sign In" />
                </label>
              </div>
              <div class="form__alternative">
                <div class="fn__lined_text">
                  <div class="line"></div>
                  <div class="text">Or</div>
                  <div class="line"></div>
                </div>
                <a onClick={signInWithGoogle} class="techwave_fn_button">
                  <span>Sign in with Google</span>
                </a>
              </div>
            </div>
          </form>
          <div class="sign__desc">
            <p>
              Not a member? <a href="sign-up.html">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signin;
