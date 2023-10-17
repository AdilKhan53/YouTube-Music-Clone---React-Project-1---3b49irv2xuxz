import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchText } from "../utils/searchSlice";

let Header = () => {
  let [text, setText] = useState("");
  let [searchQuery, setSearchQuery] = useState("");
  let dispatch = useDispatch();

  function searchClickHandler(text) {
    dispatch(searchText(text));
  }

  //for userName display on Logout Button
  let isUserLogin = useSelector((store) => store.login.islogin);
  let userName = isUserLogin.data.name;

  return (
    <div
      className="flex justify-between p-2 m-0 bg-gray-900 border border-gray-500 text-gray-200"
    >
      <div className="flex items-center">
        <div>
          <a href="/">
            <img
              className="w-32 md:w-40"
              src="https://music.youtube.com/img/on_platform_logo_dark.svg"
              alt="Logo"
            />
          </a>
        </div>

      </div>

      <div className="flex items-center space-x-2">
        <input
          className="px-4 md:px-7 border border-gray-500 p-2 rounded-l-full focus:outline-none focus:border-black text-black"
          type="text"
          placeholder=" Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={() => {
            searchClickHandler(text);
            setText("");
          }}
          className="border border-gray-500 p-2 rounded-r-full  focus:outline-none focus:border-blue-500"
        >
          Search
        </button>
      </div>

      <div className="flex items-center space-x-2">
        
        <a href="/">
          {" "}
          <div className="pr-2 font-semibold  hover:underline ">
            <span className="font-bold">{userName} : </span>Log out
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
