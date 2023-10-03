import React, { useEffect, useState } from "react";
import Dropdown from "../../components/dropdown";
import { BiChevronDown } from "react-icons/bi";

import { languageSelector } from "../../utils/helper";
import { welcome } from "../../data/homeContent";
import { districtDataForAllStates } from "../../data/stateData";
import { Link } from "react-router-dom";

const Home = () => {
  const [lang, setLang] = useState("English");
  const [text, setText] = useState(welcome[0]);

  useEffect(() => {
    setText(languageSelector(lang.toLowerCase(), welcome));
  }, [lang, setLang]);

  return (
    <div>
      <Dropdown
        button={
          <div className=" my-4 w-[140px] px-4 py-2 rounded-lg leading-snug cursor-pointer bg-orange-100 text-orange-300 hover:text-orange-400 flex gap-2 items-center justify-between ">
            {" "}
            {lang} <BiChevronDown className="w-6 h-6" />{" "}
          </div>
        }
        children={
          <div
            className=" w-[140px] flex flex-col gap-4 px-4 py-2 rounded-md bg-white shadow-xl "
            classNames=" top-16 "
          >
            <div className="cursor-pointer" onClick={() => setLang("English")}>
              English
            </div>
            <div className="cursor-pointer" onClick={() => setLang("Hindi")}>
              Hindi
            </div>
            <div className="cursor-pointer" onClick={() => setLang("Gujarati")}>
              Gujarati
            </div>
          </div>
        }
      />

      <Link
        to={"/dashboard/"}
        className="text-center block w-[160px] mx-auto  text-cyan-600 underline underline-offset-2"
      >
        Go to Dashboard
      </Link>
      <Link
        to={"/auth/"}
        className=" mt-4 text-center block w-[160px] mx-auto  text-cyan-600 underline underline-offset-2"
      >
       SignIn
      </Link>
      <p className="mx-auto text-[100px] text-center mt-24"> {text} </p>
    </div>
  );
};

export default Home;
