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
        // console.log(index);
      }
    });
    const index = ids.indexOf(getId);
    ids.splice(index, 1);

    ids.forEach((item) => {
      document.getElementById(item).className = "nav-item";
    });
  }

  const date = new Date();
  const todayDate = date.getDate();
  const todayDay = date.getDay();
  const calendarActivities = ["Running", "Jogging", "Cycling", "Swimming", "Jumping rope", "Planks", "Pull-ups", "Yoga", "Rowing"]
  const count = calendarActivities.length;
  let randomNumber = () => {
    return Math.floor(Math.random() * count) + 1; }
  let randomArray = [];
  for (let index = 0; index < count; index++) {
    randomArray.push(randomNumber());
    
  }
 
  const uniqueRandomArray = [...new Set(randomArray)];
  // console.log(uniqueRandomArray);

  const activityObject = {
    activity1: calendarActivities[uniqueRandomArray[0]],
    activity2: calendarActivities[uniqueRandomArray[1]],
    activity3: calendarActivities[uniqueRandomArray[2]],
    activity4: calendarActivities[uniqueRandomArray[3]],
}

// console.log(activityObject.activity1); // To get desired element from the object
const key = "activity1";
// console.log(activityObject[key]); //Another way based on the key.
// Below for loop using this concept dynamically assign key balues
// to print the values in the object one by one keyvariable and iterates its property one by one
for(let keyvariable in activityObject) {
  console.log(activityObject[keyvariable]);
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
          {/* Left Content */}
          <div class="left-content">
            <div class="activities">
              <h1>Popular Activities</h1>
              <div class="activity-container">
                <div class="image-container img-one">
                  <img
                    src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/467cf682-03fb-4fae-b129-5d4f5db304dd"
                    alt="tennis"
                  />
                  <div class="overlay">
                    <h3>Tennis</h3>
                  </div>
                </div>

                <div class="image-container img-two">
                  <img
                    src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/3bab6a71-c842-4a50-9fed-b4ce650cb478"
                    alt="hiking"
                  />
                  <div class="overlay">
                    <h3>Hiking</h3>
                  </div>
                </div>

                <div class="image-container img-three">
                  <img
                    src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c8e88356-8df5-4ac5-9e1f-5b9e99685021"
                    alt="running"
                  />
                  <div class="overlay">
                    <h3>Running</h3>
                  </div>
                </div>

                <div class="image-container img-four">
                  <img
                    src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/69437d08-f203-4905-8cf5-05411cc28c19"
                    alt="cycling"
                  />
                  <div class="overlay">
                    <h3>Cycling</h3>
                  </div>
                </div>

                <div class="image-container img-five">
                  <img
                    src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e1a66078-1927-4828-b793-15c403d06411"
                    alt="yoga"
                  />
                  <div class="overlay">
                    <h3>Yoga</h3>
                  </div>
                </div>

                <div class="image-container img-six">
                  <img
                    src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7568e0ff-edb5-43dd-bff5-aed405fc32d9"
                    alt="swimming"
                  />
                  <div class="overlay">
                    <h3>Swimming</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* Left Bottom */}
            <div className="left-bottom">

              {/* Weekly schedule */}
              <div className="weekly-schedule">
                <h1>Weekly Schedule</h1>
                <div className="calendar">
                  <div className="day-and-activity activity-one">
                    <div className="day">
                      <h1>{todayDate}</h1>
                      <p>{todayDay}</p>
                    </div>
                    <div className="activity">
                      <h2>activityObject.activity1</h2>
                      <div className="participants">

                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* Right content */}
          <div className="right-content">

          </div>
        </section>
      </main>
    </div>
  );
}
// https://youtu.be/OUbdN2ER1xM?list=PLdLUE-L26MMaVGbDgF5_hxcOsJgYaKC-C&t=4084
export default App;
