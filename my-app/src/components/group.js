import React from 'react'
import styled from 'styled-components'; 
import {AiOutlineDelete} from 'react-icons/ai';


const Cards = (props) =>
 {  

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