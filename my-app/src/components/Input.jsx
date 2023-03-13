import React from 'react'
import {useState} from 'react'
import styled from 'styled-components';
const Btn=styled.button`
   border:2px solid #4debd0; 
   border-radius:45px; 
   background-color: #3fefc6;
   height: 45px; 
   width: 290px;
   margin-top: 45px;
   box-shadow: 5px 5px #c7c7c7;
`
const Container1=styled.div`
    background-color: #ccfdf9;
    height: 667px; 
    width:1267px;
`
const Container2=styled.div`
    background-color: #ccfdf9;
`
const Inputstyling=styled.input`
   border:2px solid #ddf9f5;
   box-shadow: 2px; 
   border-radius:45px; 
   background-color: #ecefef;
   height: 45px; 
   width: 190px;
   margin-top: 45px; 
   padding: 2px 2px;
   margin-left:4px;
   color:black;
   box-shadow: 10px 10px lightblue;
`
// const Option=styled.option`
//   border:2px solid #ddf9f5;
//    box-shadow: 2px; 
//    border-radius:45px; 
//    background-color: #ecefef;
//    height: 45px; 
//    width: 190px;
//    margin-top: 45px; 
//    padding: 2px 2px;
//    margin-left:4px;
//    color:black;
//    box-shadow: 10px 10px lightblue;   
// `
const Input = () =>
 {  
    const [Payer,setpayer]=useState("text")
    const [amount,setamount]=useState(0)
    const [meth,setmethod]=useState("equal")
    let arr=[]
    const addtransaction=() =>
    {
        const obj={
            given_by: Payer,
            amount_paid:amount,
            method:meth,
            user:["u1","u2","u3"]
        }
        arr.unshift(obj)

        console.log(arr);
    }
  return (
    <>
       <Container1> 
        <Container2>
        <Inputstyling  type="text" name="name" placeholder='Enter payer name' autoComplete='off'
            onChange={(e)=>{
                setpayer(e.target.value)           
            }}>
        </Inputstyling>
        <Inputstyling  type="text" name="name" placeholder='Enter amount' autoComplete='off'
            onChange={(e)=>{
                setamount(e.target.value)           
            }}>
        </Inputstyling>

        <select onChange={(e)=>{
                setmethod(e.target.value)           
            }}>    
     <option value="Exact">Exact</option>
     <option value="Equal">Equal</option> 
   </select>
   </Container2>
   <Btn onClick={addtransaction} >Click to create to add the transaction</Btn>
   </Container1>
   </>
    )
}
export default Input;