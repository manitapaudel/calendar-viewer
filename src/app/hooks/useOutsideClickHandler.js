import React from "react";

const useOutsideClickHandler = (ref, handler) => {
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current != null && !ref.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export default useOutsideClickHandler;
