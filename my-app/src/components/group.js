import React from 'react'
import styled from 'styled-components'; 
// import {AiOutlineDelete} from 'react-icons/ai';
import {FiPlusCircle } from "react-icons/fi";
import '../index.css';
import { useState } from "react";
const Container=styled.div`
    width:63%; 
    box-shadow: 0 4px 8px 0 rgba(46, 46, 46, 0.2);
    /* height:668px; */
    margin-left:32px;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    float:right;
    background-color:#fefefe;
`
const Note=styled.div`
 border:2px solid #f4f1f1;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    height:155px;
    margin-top:12px;
    width:235px;
    margin-left:32px;
    color:#1e2020;
    background-color:#daefee;
`
const Para=styled.p`
    color:green;
`
const Input=styled.input`
  border:none;
  font-size:17px;
  font-weight:514;
  outline:none;
  margin-top:12px;
`
const Cards = (props) =>
 {  
    const [input, setinput] =useState({
        name:'',
       });;
       const InputEvent=(event)=>{
        const {name , value}=event.target;
        // setNote({title:name,content:value});
        setinput((prevData)=>{
          return {...prevData,
          [name]:value,}
        });
      };
    const addmember=()=>{
        console.log('love u');
        setinput({
          name:'',
        })
 }
  return (
    <Container> 
        <Note>
        <form action="">
       <Input type="text" name="name" value={input.name} onChange={InputEvent} placeholder='Member Name' autoComplete='off'/>
        </form>
        <button className='btn2' onClick={addmember}><FiPlusCircle className='delete'/></button>
        </Note>
</Container>
    )
}
export default Cards;