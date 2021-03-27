import React, { useState, useEffect ,useRef} from "react";
import styled, { createGlobalStyle } from "styled-components";
import {useHistory} from "react-router-dom"
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
    margin-top: 50%;
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
    margin-bottom: 10%;
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
    justify-content: center;
    form{
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
    }
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
.container {
   

    display: flex;
    justify-content: center;
    form{
      display:flex;
      justify-content:center;
      align-items:center;
      gap:2em;
      z-index:111;
      flex-direction:column;
      input{
        width:100%;
        height:3em;
        border-radius:10px;
       text-align:center;
       outline:none;

        font-family: "Red Hat Text", sans-serif;
      }
    }
  }
`;
function App() {
  const history =useHistory(null)
  const Time = [
    { opt: "Days", cant: 1 },
    { opt: "Hours", cant: 0 },
    { opt: " Minutes", cant: 0 },
    { opt: "Seconds", cant: 12 },
  ];
  const [time, setTime] = useState(Time);
  const [day,setDay]=useState(null)
  const [hours,setHours]=useState(null)
  const [minutes,setMinutes]=useState(null)
  const [seconds,setSeconds]=useState(null)
  const [user,setUser]=useState(null)
const userRef = useRef(null)
const dayRef=useRef(null)
const hoursRef=useRef(null)
const minutesRef =useRef(null)
const secondsRef=useRef(null)

  console.log(time);
const handleSubmit=(e)=>{
  e.preventDefault()

  history.push(`/timer/${day}/${hours}/${minutes}/${seconds}/${user}`)
}
  return (
    <>
      <Main>
        <div className="hero">
          <h1>generate timer link</h1>
          <div className="container">
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="user"   required ref={userRef}  onChange={()=>setUser(userRef.current.value)}/>
              <input type="number" placeholder="Days"   required ref={dayRef}  onChange={()=>setDay(dayRef.current.value)}/>
              <input type="number"  placeholder="Hours " required ref={hoursRef} onChange={()=>setHours(hoursRef.current.value)}/>
              <input type="number"  placeholder="Minutes " required ref={minutesRef} onChange={()=>setMinutes(minutesRef.current.value)}/>
              <input type="number"  placeholder="Seconds " required ref={secondsRef} onChange={()=>setSeconds(secondsRef.current.value)}/>
              <input type="submit"/>
            </form>
          </div>{" "}
        </div>
        <div className="icons">
          <a href="https://www.facebook.com/pamshojs/" target="_blanck">
            <img src={facebook} />
          </a>

          <a href="https://www.facebook.com/pamshojs/" target="_blanck">
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
