import React from 'react'
import {useState} from 'react'

 
const Cards = () =>
 {  
    const [Payer,setpayer]=useState("text")
    const [amount,setamount]=useState(0)
    const [meth,setmethod]=useState("equal")
    // const [addt, update_addt]=useState([])
    let arr=[]
    let list=[[0,0,0,0,0,0],
    [0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]] //u1 u2 u3 u4 u5 u6
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
    const cal_amount=()=>{
        for(let i=0;i<arr.length;i++)
        {
            given_by=arr[i].given_by;
            amount_paid=arr[i].amount_paid;
            const average = (amount_paid / arr[i].user.length).toFixed(2);
            for(let j=0;j<arr[i].user.length;j++)
            {
                if(arr[i].user[j]!=given_by)
                {
                    
                }
            }
        }
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
   <button onClick={addtransaction}>Click to create to add the transaction</button>
   <button onClick={cal_amount}>Calculate the amount to be paid</button>

   </>
    )
}
export default Cards;