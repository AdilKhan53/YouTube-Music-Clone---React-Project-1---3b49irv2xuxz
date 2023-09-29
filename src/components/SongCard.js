import React from "react";
import SongDetails from "./SongDetails";
import SongContainer from "./SongContainer";

let SongCard = (props) => {
  return (
    <>
      
      <div className="p-2 m-2">
        <img
          className="w-44  rounded-lg "
          src={props?.list?.thumbnail}
          alt="Image"
        />

        <div className="py-2 text-center w-44">
          <h1 className="text-gray-100 text-s text-center truncate hover:text-clip h-[32px]">
            {props?.list?.title}
          </h1>
          <h1 className="text-gray-400 text-xs text-center truncate hover:text-clip h-[32px]">
            {props?.list?.artist[0]?.name}
          </h1>
        </div>
      </div>
    </>
  );
};

export default SongCard;