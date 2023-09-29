import React, { useEffect } from 'react';
import SideBar from "./SideBar";
import SongContainer from "./SongContainer";
import {Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import SignUp from "./SignUp";
import { useSelector } from "react-redux";
import Login from "./Login";


let Body = () => {
    let isUserLogin = useSelector((store) => store.login.islogin);
    console.log(isUserLogin);
  return !isUserLogin?.token ? (
    <Login/>
  ) : (
    <>
      <div className='sticky top-0 z-10'>
        <Header />
      </div>

      <div className="bg-gradient-to-r from-stone-900 from-15% via-gray-900 via-30% to-emerald-800 to-90% text-gray-100">
        <Outlet />
      </div>
    </>
  )
}

export default Body;
