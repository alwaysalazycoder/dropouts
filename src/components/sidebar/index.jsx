import React from "react";
import routes from "../../routes";
import { Link, useLocation } from "react-router-dom";

import GOILogo from "../../assets/img/GovernmentOfIndiaPng.png";
const SideBar = () => {
  const location = useLocation();

  const getActiveRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };
  const getSideBarLinks = (flag) => {
    var arr = [];

    if (flag) {
      routes.forEach((item, index) => {
        if (
          item.layout === "dashboard" &&
          item.path !== "profile" &&
          item.path !== "signout"
        ) {
          arr.push(
            <Link key={index} to={`${item.path} `} className="ml-8">
              <div
                className={`my-2 hover:text-orange-400 flex gap-2  cursor-pointer mx-auto text-black ${
                  getActiveRoute(item.path) === true
                    ? "font-semibold text-orange-400"
                    : "text-black"
                }`}
              >
               {item.icon}

                {item.name}
              </div>
            </Link>
          );
        }
      });
    } else {
      routes.forEach((item, index) => {
        if (
          item.layout === "dashboard" &&
          (item.path === "profile" || item.path === "signout")
        ) {
          arr.push(
            <Link key={index} to={`${item.path} `} className="ml-8">
              <div
                className={`my-2 hover:text-orange-400 flex gap-2  cursor-pointer mx-auto text-black ${
                  getActiveRoute(item.path) === true
                    ? "font-semibold text-orange-400"
                    : "text-black"
                }`}
              >
               {item.icon}

                {item.name}
              </div>
            </Link>
          );
        }
      });
    }
    return arr;
  };
  return (
    <div className="min-w-[250px] max-w-[250px] sticky h-screen border-r-2 border-r-gray-300">
      <div className="w-full h-[20%]  flex items-center border-b-2 border-b-gray-300">
        <img
          src={GOILogo}
          alt="GOI Logo"
          className="w-[80%] object-contain mx-auto"
        />
      </div>

      <div className="w-full flex flex-col justify-between  h-[80%] py-4">
        <div className="flex flex-col ">{getSideBarLinks(1)}</div>
        <div className="flex flex-col border-t-2 border-t-gray-200">
          {getSideBarLinks(0)}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
