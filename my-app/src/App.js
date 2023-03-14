
import './App.css';
import Sidebar from './components/sidebar';
import Input from './components/Input';
import Cards from './components/group';
import { useState } from "react";
function App() {
  const[additem , setaddstate]= useState([]);
  
  const addNote=(cards)=>{
    console.log("hello");
    console.log(cards);
  setaddstate([...additem,cards]);
  };
  return (
    <div>
    <Sidebar   passNote={addNote}/>
    {additem.map((val, index)=>{
        return (
        <Cards  key={val.id}
        id={index}>
        </Cards>
        );
})}
    </div>
  );
}

export default App;
