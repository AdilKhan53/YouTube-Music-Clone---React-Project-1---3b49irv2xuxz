import React from "react";
import { useSelector } from "react-redux";
import SideBar from "./SideBar";
import UserAvatar from "../images/UserAvatar.png";

let UserProfile = (props) => {
  //for userName display on Logout Button
  let isUserLogin = useSelector((store) => store.login.islogin);
  let userName = isUserLogin.data.name;
  let email = isUserLogin.data.email;
  return (
    <div className="flex w-full h-full">
      <div className="h-screen sticky top-16 ">
        <SideBar />
      </div>
      <div  className="flex justify-center content-center">
        <div >
          <h1 className="text-2xl sm:text-5xl md:text-5xl text-center font-bold text-gray-400 p-4">User Profile</h1>
          <div >
            <div className="p-4">
              <img
                src={UserAvatar}
                alt="User Avatar"
              />
            </div>
            <div >
              <p className="text-lg sm:text-xl md:text-xl p-2 font-semibold text-gray-400 text-center">Name : {userName}</p>
              <p className="text-lg sm:text-xl md:text-xl p-2 font-semibold text-gray-400 text-center">Email : {email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;