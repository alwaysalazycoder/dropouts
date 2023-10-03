import React, { useEffect, useRef, useState } from "react";

function useOutsideAlerter(ref, setX) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setX(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setX]);
}

const Dropdown = (props) => {
  const { button, children, classNames, animation,disable } = props;

  const wrapperRef = useRef(null);

  const [openWrapper, setOpenWrapper] = useState(false);

  useOutsideAlerter(wrapperRef, setOpenWrapper);

  return (
    <div ref={wrapperRef} className="relative flex w-fit m-auto">
      <div className="flex" onMouseDown={() => {!disable ? setOpenWrapper(!openWrapper) : alert("Please first select the state")}}>
        {button}
      </div>

      <div
        className={`${classNames} top-16 absolute z-10  ${
          animation
            ? animation
            : "origin-top-left transition-all duration-300 ease-in-out"
        } ${openWrapper ? "scale-100" : "scale-0"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
