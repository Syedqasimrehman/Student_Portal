import React from "react";
// import "./Styles/lightDark.css";
const DarkMode = () => {
  const SetDarkMode = () => {
    document.querySelector("body").setAttribute("data-them", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const SetLightMode = () => {
    document.querySelector("body").setAttribute("data-them", "light");
    localStorage.setItem("selectedTheme", "light");
  };
  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "dark") {
    SetDarkMode();
  } 
  const ToggleThem = (e) => {
    if (e.target.checked) {
      SetDarkMode();
    } else {
      SetLightMode();
    }
  };
  return (
    <>
      <div className="dark_mode">
        <input
          className="dark-mode-input"
          type="checkbox"
          id="darkmode-toggle"
          onClick={ToggleThem}
          defaultChecked={selectedTheme === "dark"}
        ></input>
        <label className="dark_mode_label" for="darkmode-toggle"></label>
      </div>{" "}
    </>
  );
};

export default DarkMode;
