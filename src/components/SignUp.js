import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupImg from "../images/signupImg.png";
import Login from "./Login";

let SignUp = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [userDetails, setUserDetails] = useState("");
  let [doesLoginBtn, setDoesLoginBtn] = useState(false);

  const navigate = useNavigate();

  let headersList = {
    projectId: "f104bi07c490",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    name: name,
    email: email,
    password: password,
    appType: "music",
  });

  async function apiCall() {
    let response = await fetch(
      "https://academics.newtonschool.co/api/v1/user/signup",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    );

    let data = await response.text();
    //console.log(data);
  }

  function singUp() {
    apiCall();
  }

  // bg-gradient-to-r from-emerald-900 from-15% via-gray-800 via-50% to-stone-900 to-90% 

  return doesLoginBtn ? (
    <Login />
  ) : (
    <>

      <div className="flex flex-col sm:flex-row bg-gradient-to-r from-stone-900 from-5% via-gray-800 via-20% to-emerald-900 to-40% text-gray-100">
        {/* for first half */}
        <div className="w-full sm:w-1/2  flex flex-col justify-center items-center">
          <img className="bg-orange-400 rounded-lg shadow-xl shadow-gray-600" src={signupImg} alt="Signup" />
          <p className="text-gray-100 mt-5 text-center font-bold text-3xl sm:text-5xl">
            All Your Music.
          </p>
          <p className="text-gray-100 mt-2 text-center font-semibold text-xl sm:text-4xl">
            Anytime, anywhere.
          </p>
        </div>

        {/* for second half */}
        <div className="w-full sm:w-1/2" >
          <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-stone-900 from-5% via-gray-800 via-20% to-emerald-900 to-40% text-gray-100 md:bg-gradient-to-l sm:bg-gradient-to-l">
            <div className="mb-6 flex justify-center items-center">
              <h1 className="pr-2 text-center sm:text-left">
                Already Have an Account?
              </h1>
              <button
                onClick={() => setDoesLoginBtn(true)}
                className="w-20 bg-gray-900 text-gray-100 py-2 border border-gray-200 rounded hover:bg-emerald-900 transition"
              >
                Login
              </button>
            </div>

            <p className="p-5 text-gray-100 font-semibold text-2xl sm:text-5xl">
              Welcome to YouTube Music
            </p>
            <p className="pb-10 text-gray-100 font-semibold text-lg sm:text-3xl">
              Signup with your email address.
            </p>

            <div className="bg-gray-200 p-8 rounded shadow-md w-80 ">
              <h1 className="text-xl text-gray-900 sm:text-2xl font-semibold mb-4">
                Sign up
              </h1>
              <form onClick={(e) => e.preventDefault()} className="space-y-4">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-emerald-900  text-gray-900"
                />
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
                  onClick={() => {
                    singUp();
                    alert("User created, go to login page");
                  }}
                  type="submit"
                  className="w-full bg-gray-900 text-gray-100 py-2 rounded hover:bg-emerald-900 transition"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;