import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import back from "../assets/images/pattern-hills.svg";
import star from "../assets/images/bg-stars.svg";
import Num from "../components/Num";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import { useParams } from "react-router-dom";
const Global = createGlobalStyle`

body{
    margin:0;
    padding:0;
    font-family: 'Red Hat Text', sans-serif;
}
`;
const Main = styled.div`
  @media (max-width: 450px) {
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-between;

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
  }
  @media (min-width: 450.1px) {
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-between;

    align-items: center;
    .hero {
      margin-top: 10%;
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
  }
`;
function App() {
  const { day, hours, minutes, seconds } = useParams();

  const Time = {
    Days: day ? day : 0,
    Hours: hours ? hours : 0,
    Minutes: minutes ? minutes : 0,
    Seconds: seconds ? seconds : 0,
  };
  const [time, setTime] = useState([Time]);
  const updateTime = () => {
    if (time[0].Seconds > 0) {
      setTime([
        {
          ...time[0],
          Seconds: time[0].Seconds - 1,
        },
      ]);
    }
    else if (time[0].Hours == 0  && time[0].Days > 0)  {
      setTime([
        {
          Days:time[0].Days-1,
          Hours:23,
          Minutes:59,
          Seconds:59,
        },
      ]);
    } 
    else if (time[0].Minutes == 0  && time[0].Hours > 0)  {
      setTime([
        {
          ...time[0],
          Hours:time[0].Hours-1,
          Minutes:59,
          Seconds:59,
        },
      ]);
    } else if (time[0].Seconds == 0 && time[0].Minutes >0) {
      setTime([
        {
          ...time[0],
          Minutes:time[0].Minutes-1,
          Seconds:59,
        },
      ]);
    }
  };
  console.log(time);

  useEffect(() => {
    setTimeout(() => {
      updateTime();
    }, 1);
  });

  return (
    <>
      <Main>
        <div className="hero">
          <h1>@pamsho_js</h1>
          <div className="container">
            {time.map((e) => {
              console.log(e);
              let compo = [];
              for (let data in e) {
                console.log(data);
                compo.push(
                  <Num
                    data={{
                      opt: data,
                      cant: e[data],
                    }}
                  />
                );
              }
              return compo;
            })}
          </div>{" "}
        </div>
      </Main>
      <Global />
    </>
  );
}

export default App;
