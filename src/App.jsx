// App.jsx
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const getClassName = "nav-item";
  function changeNonActive(event) {
    const ids = ["Home", "Profile", "Schedule", "Activities", "Settings"];
    // Declaring inside onclick function so that every time this array will be created while clicked
    // We get te id of that clicked element made to active and remove the id element from the array
    // Putting remaining element classNames as non-active
    event.preventDefault();
    const getId = event.target.id;

    ids.forEach((item, index) => {
      if (item == getId) {
        document.getElementById(getId).className = "nav-item active";
        console.log(index);
      }
    });
    const index = ids.indexOf(getId);
    ids.splice(index, 1);

    ids.forEach((item) => {
      document.getElementById(item).className = "nav-item";
    });
  }

  return (
    <div className="App">
      <main>
        {/* Nav Section */}
        <nav className="main-menu">
          <h1>Health Monitor</h1>
          <img
            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/4cfdcb5a-0137-4457-8be1-6e7bd1f29ebb"
            alt=""
            className="img-logo"
          />
          <ul>
            <li
              onClick={(event) => changeNonActive(event)}
              className={getClassName}
              id="Home"
            >
              <b></b>
              <b></b>
              <a href="" id="Home">
                <i className="fas fa-solid fa-house nav-icon" id="Home"></i>
                <span className="nav-text" id="Home">
                  Home
                </span>
              </a>
            </li>
            <li
              onClick={(event) => changeNonActive(event)}
              className={getClassName}
              id="Profile"
            >
              <b></b>
              <b></b>
              <a href="" id="Profile">
                <i className="fas fa-solid fa-user nav-icon" id="Profile"></i>
                <span className="nav-text" id="Profile">
                  Profile
                </span>
              </a>
            </li>
            <li
              onClick={(event) => changeNonActive(event)}
              className={getClassName}
              id="Schedule"
            >
              <b></b>
              <b></b>
              <a href="" id="Schedule">
                <i
                  className="fas fa-solid fa-calendar nav-icon"
                  id="Schedule"
                ></i>
                <span className="nav-text" id="Schedule">
                  Schedule
                </span>
              </a>
            </li>
            <li
              onClick={(event) => changeNonActive(event)}
              className={getClassName}
              id="Activities"
            >
              <b></b>
              <b></b>
              <a href="" id="Activities">
                <i
                  className="fas fa-solid fa-person-running nav-icon"
                  id="Activities"
                ></i>
                <span className="nav-text" id="Activities">
                  Activities
                </span>
              </a>
            </li>
            <li
              onClick={(event) => changeNonActive(event)}
              className={getClassName}
              id="Settings"
            >
              <b></b>
              <b></b>
              <a href="" id="Settings">
                <i
                  className="fas fa-solid fa-sliders nav-icon"
                  id="Settings"
                ></i>
                <span className="nav-text" id="Settings">
                  Settings
                </span>
              </a>
            </li>
          </ul>
        </nav>
        {/* Content */}
        <section className="content">
          {/* Left content */}
          <div className="left-content">
            {/* Activities */}
            <div className="activities">
              <h1>Popular Activities</h1>
              <div className="activity-container">
                <div className="image-container img-one">
                  <img
                    src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/467cf682-03fb-4fae-b129-5d4f5db304dd"
                    alt="Tennis"
                  />
                  <div className="overlay">
                    <h3>Tennis</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right content */}
          <div className="right-content"></div>
        </section>
      </main>
    </div>
  );
}

export default App;
