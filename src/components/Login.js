import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sendToLogin } from "../utils/loginSlice";
import SignUp from "./SignUp";
import signupImg from "../images/signupImg.png";


const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [userDetails, setUserDetails] = useState({});
  let [doesLoginBtn, setDoesLoginBtn] = useState(true);

  //for dispatching an action
  let dispatch = useDispatch();

  let navigate = useNavigate();

  let headersList = {
    projectId: "f104bi07c490",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    email: email,
    password: password,
    appType: "music",
  });

  

  const login = async () => {
    try {
      // setLoading(true);
      let response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      );

      let data = await response.json();
      
      dispatch(sendToLogin(data));

      
    } catch (error) {
      
      console.error(error);
      
    }
  };

  const handleSignIn = () => {
    login();
  };

  return !doesLoginBtn ? (
    <SignUp />
  ) : (
    <>
    

      <div className="flex flex-col sm:flex-row bg-gradient-to-r from-stone-900 from-5% via-gray-800 via-20% to-emerald-900 to-40% text-gray-100">
        {/* for first half */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center items-center">
          <img className="bg-orange-900 rounded-lg shadow-xl shadow-gray-600" src={signupImg} alt="Signup" />
          <p className="text-gray-100 mt-5 text-center font-bold text-3xl sm:text-5xl">
          YouTube Music.
          </p>
          <p className="text-gray-100 mt-2 text-center font-semibold text-xl sm:text-4xl">
            Anytime, anywhere.
          </p>
        </div>

        {/* for second half */}
        <div className="w-full sm:w-1/2">
          <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-stone-900 from-5% via-gray-800 via-20% to-emerald-900 to-40% text-gray-100 md:bg-gradient-to-l sm:bg-gradient-to-l">
            <div className="mb-6 flex justify-center items-center">
              <h1 className="pr-2 text-center sm:text-left">
                Don't have a YouTube Music yet?
              </h1>
              <button
                onClick={() => setDoesLoginBtn(false)}
                className="w-20 bg-gray-900 text-gray-100 py-2 border border-gray-200 rounded hover:bg-emerald-900 transition"
              >
                SignUp
              </button>
            </div>

            <p className="p-5 text-gray-100 font-semibold text-2xl sm:text-5xl">
              Welcome to YouTube Music
            </p>
            <p className="pb-10 text-gray-100 font-semibold text-lg sm:text-3xl">
              Login with your email address.
            </p>

            <div className="bg-gray-200 p-8 rounded shadow-md w-80 ">
              <h1 className="text-xl text-gray-900 sm:text-2xl font-semibold mb-4">Login</h1>
              <form onClick={(e) => e.preventDefault()} className="space-y-4">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-emerald-900 text-gray-900"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-emerald-900 text-gray-900"
                />
                <button
                  onClick={handleSignIn}
                  type="submit"
                  className="w-full bg-gray-900 text-gray-100 py-2 rounded hover:bg-emerald-900 transition"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;