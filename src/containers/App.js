import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import back from "../assets/images/pattern-hills.svg";
import star from "../assets/images/bg-stars.svg";
import Num from "../components/Num";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";

const Global = createGlobalStyle`

body{
    margin:0;
    padding:0;
    font-family: 'Red Hat Text', sans-serif;
}
`;
const Main = styled.div`

@media (max-width:450px){
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-between;
  background: rgb(131, 133, 169);
  background: linear-gradient(
    0deg,
    rgba(131, 133, 169, 1) 3%,
    rgba(52, 54, 80, 1) 12%,
    rgba(51, 53, 79, 1) 30%,
    rgba(29, 30, 41, 1) 50%,
    rgba(25, 26, 35, 1) 100%
  );

  align-items: center;
  .hero {
    margin: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4em;

    align-items: center;
  }
  h1 {
    font-family: "Red Hat Text", sans-serif;
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 5px;
  }
  .background {
    width: 100%;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    height: 8em;
  }
  .container {
    width: 80%;

    display: flex;
    justify-content: space-between;
  }
  .star {
    width: 100%;
    position: absolute;
    height: 100vh;
    object-fit: cover;
  }
  .icons {
    z-index: 11;
    margin-bottom: 15%;
    display: flex;
    gap: 3em;
    img {
      width: 3em;
    }
  }
}
@media (min-width:450.1px){
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-between;
  background: rgb(131, 133, 169);
  background: linear-gradient(
    0deg,
    rgba(131, 133, 169, 1) 3%,
    rgba(52, 54, 80, 1) 12%,
    rgba(51, 53, 79, 1) 30%,
    rgba(29, 30, 41, 1) 50%,
    rgba(25, 26, 35, 1) 100%
  );

  align-items: center;
  .hero {
   margin-top:10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4em;

    align-items: center;
  }
  h1 {
    font-family: "Red Hat Text", sans-serif;
    color: #fff;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 5px;
  }
  .background {
    width: 100%;
    object-fit: cover;
    position: absolute;
    bottom: 0;
  
  }
  .container {
    width: 50%;

    display: flex;
    justify-content: space-between;
  }
  .star {
    width: 100%;
    position: absolute;
    height: 100vh;
    object-fit: cover;
  }
  .icons {
    z-index: 11;
    margin-bottom: 10%;
    display: flex;
    gap: 3em;
    img {
      width: 4em;
    }
  }
}
`;
function App() {
  const Time = [
    { opt: "Days", cant: 1 },
    { opt: "Hours", cant: 0 },
    { opt: " Minutes", cant: 0 },
    { opt: "Seconds", cant: 12 },
  ];
  const [time, setTime] = useState(Time);
  useEffect(() => {
    setTimeout(() => {
      if (time[3].cant > 0) {
        setTime([
          time[0],
          time[1],
          time[2],

          { opt: "Seconds", cant: time[3].cant - 1 },
        ]);
      } else if (time[1].cant == 0) {
        setTime([
          { opt: "Days", cant: time[0].cant - 1 },
          { opt: "Hours", cant: 23 },
          { opt: " Minutes", cant: 59 },
          { opt: "Seconds", cant: 59 },
        ]);
      } else if (time[2].cant == 0) {
        setTime([
          time[0],
          { opt: "Hours", cant: time[1].cant - 1 },
          { opt: " Minutes", cant: 59 },
          { opt: "Seconds", cant: 59 },
        ]);
      } else if (time[3].cant == 0) {
        setTime([
          time[0],
          time[1],
          { opt: "Minutes", cant: time[2].cant - 1 },

          { opt: "Seconds", cant: 59 },
        ]);
      }
    }, 1000);
  });
  console.log(time);

  return (
    <>
      <Main>
        <div className="hero">
          <h1>We're launching soon</h1>
          <div className="container">
            {time.map((e) => (
              <Num data={e} />
            ))}
          </div>{" "}
        </div>
        <div className="icons">
          <a href="" target="_blanck">
            <img src={facebook} />
          </a>

          <a href="" target="_blanck">
            <img src={instagram} />
          </a>
        </div>
        <img className="star" src={star} />
        <img className="background" src={back} />
      </Main>
      <Global />
    </>
  );
}

export default App;
