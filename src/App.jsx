import { useState } from 'react'
import './App.css'

function App() {
  const[height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [bmi,setBmi]=useState(null); 
  const [val,setVal]=useState("");
  const [error,setError]=useState(null);
 const handler=(e)=>{
    setHeight(e.target.value)
 }
 const handler1=(e)=>{
  setWeight(e.target.value)
}
const calculate=()=>{
  const itheight= /^\d+$/.test(height);
  const itweight=/^\d+$/.test(weight);
  if(itheight&&itweight){
    var Height=height/100;
    var BMIvalue=weight/(Height*Height);
     setBmi(BMIvalue.toFixed(2));
    if(BMIvalue >=10 && BMIvalue <= 18.4){
      setVal("UNDER WEIGHT");
    }
    if(BMIvalue >=18.5 && BMIvalue <=24.9){
      setVal("NORMAL WEIGHT");
     }
   else if(BMIvalue >=25 && BMIvalue <=29.9){
     setVal("OVER WEIGHT");
   }
   else{
    setVal("OBSE");
   }
   setError("");
  }
  else{
    setBmi(null);
    setVal("");
    setError("enter the proper value")
  }
}
  return (
    <>
       <div className="container">
  <h1>weight calculater</h1>
   <div className="input1">
   {error !==null &&(<p>{error}</p>)}
    <label htmlFor="input1">HEIGHT :</label>
    <input type="text" id="input1" value={height} onChange={handler}/>
   </div>
   <div className="input2">
    <label htmlFor="input1">WEIGHT :</label>
    <input type="text" id="input1" value={weight} onChange={handler1} />
   </div>
   <button onClick={calculate}>CALCULATE</button>
  {bmi !== null && (
     <div className="result">
     <p> average is :{bmi}</p>
      <p>apperance calculation :{val}</p>
    </div>
  )}
 </div>
    </>
  )
}

export default App
// git config --global user.name "Your Name"
// git config --global user.email "your.email@example.com"
