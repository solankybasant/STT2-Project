import React from "react";
import styled from "styled-components";
import logo from '../images/splitimage.jpeg';
const Container = styled.div`
  background-color: #96f8e6;
  color: #595656;
   float:left;
  height: 668px;
  width: 33%;
  .top__links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      margin: 1rem 0;
      img {
        max-inline-size: 80%;
        block-size: auto;
        height:155px;
        width:155px;
        border:2px solid #8a8e8e;
        border-radius:45px;
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      li {
        display: flex;
        margin-top:-39px;
        gap: 1rem;
        font-size:25px;
        margin-left:52px;
        color:black;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }
`;
export default function Sidebar() {
    return (
      <Container>
        <div className="top__links">
          <div className="logo">
            <img src={logo} alt="spotify"/>
          </div>
          <ul>
            <li>
              <span>Welcome to SplitWise</span>
            </li>
          </ul>
        </div>
      </Container>
    );
  }
  