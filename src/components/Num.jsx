import React from "react";
import styled from "styled-components";
const Block = styled.div`
  @media (max-width: 450px) {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::before {
      content: " ";
      width: 70px;
      position: absolute;
      height: 35px;
      top: 0;
   
      z-index: 1;
      right: 0;
      background-color: #2d2c45;
      border-radius: 5px 5px 0 0;
    }
    &::after {
      content: " ";
      width: 70px;
      position: absolute;
      height: 35px;
      bottom: 0;
      opacity: 0.9;
      right: 0;
      border-radius: 0 0 5px 5px;
      box-shadow: 0px 5px 2px #201e2a;
      background-color: #35354f;
    }
    .circle {
      position: absolute;
      width: 5px;
      height: 5px;
      background-color: #201e2a;
      z-index: 11;
      border-radius: 50%;
    }
    .left {
      left: -2.5px;
      bottom: 32.5px;
    }
    .right {
      right: -2.5px;
      bottom: 32.5px;
    }
    .textS {
      position: absolute;
      left: center;
      bottom: -20px;
      color: #fff;
      font-size: 10px;
      letter-spacing: 3px;
    }
    .Num {
      font-size: 2.5em;
      z-index: 2;
      color: hsl(345, 95%, 68%);
    }
  }
  @media (min-width: 450.1px) {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::before {
      content: " ";
      width: 150px;
      position: absolute;
      height: 75px;
      top: 0;
  
      z-index: 1;
      right: 0;
      background-color: #2d2c45;
      border-radius: 5px 5px 0 0;
    }
    &::after {
      content: " ";
      width: 150px;
      position: absolute;
      height: 75px;
      bottom: 0;
    
      right: 0;
      border-radius: 0 0 5px 5px;
      box-shadow: 0px 5px 2px #201e2a;
      background-color: #35354f;
    }
    .circle {
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: #201e2a;
      z-index: 11;
      border-radius: 50%;
    }
    .left {
      left: -5px;
      bottom: 72.5px;
    }
    .right {
      right: -5px;
      bottom: 72.5px;
    }
    .textS {
      position: absolute;
      left: center;
      bottom: -20px;
      color: #fff;
      font-size: 10px;
      letter-spacing: 3px;
    }
    .Num {
      font-size: 2.5em;
      z-index: 2;
      color: hsl(345, 95%, 68%);
    }
  }
`;
function Num({ data }) {
  return (
    <Block>
      <h1 className="Num"> {data.cant}</h1>
      <span className="circle left "></span>
      <span className="circle right "></span>
      <span className="textS">{data.opt}</span>
    </Block>
  );
}

export default Num;
