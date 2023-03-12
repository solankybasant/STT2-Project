import React from 'react'
import {useState} from 'react'

const Input = () =>
 {  
    const [Payer,setpayer]=useState("text")
    const [amount,setamount]=useState(0)
    const [meth,setmethod]=useState("equal")
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
   <button >Click to create to add the transaction</button>
   </>
    )
}
export default Cards;