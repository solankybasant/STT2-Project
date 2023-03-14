import React from 'react'
import {useState} from 'react'
import styled from 'styled-components';
const Btn=styled.button`
   border:2px solid #4debd0; 
   border-radius:45px; 
   background-color: #3fefc6;
   height: 45px; 
   width: 330px;
   margin-top: 65px;
   margin-left:245px;
   box-shadow: 5px 5px #c7c7c7;
`
const Container1=styled.div`
    background-color: #ccfdf9;
    margin:50px 250px;
`
const Container2=styled.div`
    background-color: #ccfdf9;
    display: flex;
    flex-direction: row;
`
const Inputstyling=styled.input`
   border:2px solid #ddf9f5;
   box-shadow: 1px; 
   border-radius:45px; 
   background-color: #ecefef;
   height: 45px; 
   width: 290px;
   margin-top: 45px; 
   padding: 4px 25px;
   margin-left:234px;
   color:black;
   box-shadow: 5px 5px lightblue;
`
const Inputstyling2=styled.input`
   border:2px solid #ddf9f5;
   box-shadow: 2px; 
   border-radius:45px; 
   background-color: #ecefef;
   height: 45px; 
   width: 290px;
   margin-top:155px; 
   padding: 4px 25px;
   margin-left:-344px;
   color:black;
   box-shadow: 5px 5px lightblue;
`
const Input = () =>
 {  
    const [Payer,setpayer]=useState("text")
    const [amount,setamount]=useState(0)
    const[trans,setTrans]=useState([])
    const [ans,setans]=useState([])
    const[flag, setflag]=useState("true")
    const addtransaction=() =>
    {
        const obj={
                given_by: Payer,
                amount_paid:parseInt(amount)
            }
        // user.push(obj) //adding object
        console.log([...trans,obj]);
        setTrans([...trans,obj]);
        // const obj={
        //     given_by: Payer,
        //     amount_paid:amount,
        //     method:meth,
        //     user:["sakshi","basant","priya"]
        // }
        // arr.unshift(obj)
        // let pay=[]
        
    //     for(let i=0;i<arr.length;i++)
    //     {
    //         let average = (amount/ arr[i].user.length).toFixed(2);
    //         for(let j=0;j<arr[i].user.length;j++)
    //         {
    //             if(arr[i].user[j]!=arr[i].given_by)
    //             {
    //                 pay.push(` ${arr[i].user[j]} will pay ${average} to ${arr[i].given_by}`)
    //             }
    //         }
    //     }

    //    console.log(pay);


    }
    const cal=()=>{
        const sum = trans.map(element => element.amount_paid).reduce((a, b) => a + b, 0);
        console.log(sum);
        const average = (sum / trans.length).toFixed(2);
        console.log(average);
        var to_give=[]
        var to_get=[]
        trans.map(item => {
        // console.log(item, index);
        // console.log(average-item.amount)
        if(average-item.amount_paid>0) 
        {
            to_give.push( {name: item.given_by, pay: (average-item.amount_paid).toFixed(2)});
        }
        else if( average-item.amount_paid<0)
        {
            to_get.push( {name: item.given_by, pay: (item.amount_paid-average).toFixed(2)});
        }
        });
        console.log(to_get);
        console.log(to_give);
        function compareName(a, b) {
            return a.pay>=b.pay    
        }
        to_give.sort(compareName);
        to_get.sort(compareName);
        console.log(to_get);
        console.log(to_give)
        // let ans=[]
        while(to_give.length>0)
        {
            let give=to_give[0].pay;
            let from=to_give[0].name;
            let get=to_get[0].pay;
            let to=to_get[0].name;
            // console.log(get);
    // console.log(give);
    
    if(give<get)
    {
        console.log("paying")
        to_give.shift();
        to_get[0].pay=to_get[0].pay-give;
            ans.push(` ${from} will pay ${give} to ${to}` )
    }
    else if(give==get)
    {
        console.log(give)
        to_give.shift();
        to_get.shift();
       ans.push(` ${from} will pay ${give} to ${to}` )
    }
    else
    {
        to_get.shift();
        to_give[0].pay=to_give[0].pay-get;
         ans.push(` ${from} will pay ${get} to ${to}` )
    }
    
}
// setTrans([...trans,obj]);
setans(ans);
setflag("false")
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
        <Inputstyling2  type="text" name="name" placeholder='Enter amount' autoComplete='off'
            onChange={(e)=>{
                setamount(e.target.value)           
            }}>
        </Inputstyling2>

   </Container2>
   <Btn onClick={addtransaction} >Click to add the transaction</Btn>
   <Btn onClick={cal} >Calculate sum </Btn>

   {/* printing the statement */}

   {(flag=="true")?

    <>{trans.map((element)=>{
        return (
            <div>
            
            <h3> {element.given_by} paid {element.amount_paid}</h3>
            <h1></h1>
        </div>
        )
    })}</>
    :
    <>{ans.map((element)=>{
        return (
            <div>
            
            <h3> {element}</h3>
            <h1></h1>
        </div>
        )
    })}</>
   }
   
   
   </Container1>
   </>
    )
}
export default Input;