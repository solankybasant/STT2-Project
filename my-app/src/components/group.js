import React from 'react'
import styled from 'styled-components'; 
import {AiOutlineDelete} from 'react-icons/ai';
import './index.css';
const Container=styled.div`
    width:63%; 
    box-shadow: 0 4px 8px 0 rgba(46, 46, 46, 0.2);
    height:668px;
    margin-left:32px;
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
const Cards = (props) =>
 {  
    const deleteNote=()=>{
props.deleteItem(props.id);
    }
  return (
    <Container> 
        <Note>
        <h2> {props.title}</h2>
        <Para> {props.content}</Para>
        <button className='btn2'><AiOutlineDelete className='delete'/></button>
        </Note>
</Container>
    )
}
export default Cards;