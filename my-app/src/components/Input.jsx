import React from 'react'
import {useState} from 'react'

const Input = () =>
 {  
    const [Payer,setpayer]=useState("text")
    const [amount,setamount]=useState(0)
    const [meth,setmethod]=useState("equal")
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
        <input  type="text" name="name" placeholder='Enter payer name' autoComplete='off'
            onChange={(e)=>{
                setpayer(e.target.value)           
            }}>
        </input>
        <input  type="text" name="name" placeholder='Enter amount' autoComplete='off'
            onChange={(e)=>{
                setamount(e.target.value)           
            }}>
        </input>

        <select onChange={(e)=>{
                setmethod(e.target.value)           
            }}>
            
     <option value="Exact">Exact</option>
     <option value="Equal">Equal</option>
     
   </select>
   <button onClick={addtransaction} >Click to create to add the transaction</button>
   </>
    )
}
export default Input;