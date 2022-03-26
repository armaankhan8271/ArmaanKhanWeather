import React from "react";
import { useState } from "react";
import "./Weather.css";
import { BsFillCloudFill } from "react-icons/bs";

const Weathar = () => {
  const [city, setcity] = useState("Mumbai")
  const [data, setdata] = useState({

    weather:"",
    temp:0,
    temp_min:0,
    temp_max:0,
    city:"",
    name:"",



  });
const fetchapi = async()=>{
  const apikey="653ff8da59fad982f84d5c74cfac9240";
  const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  const api = await fetch(url);
  const data = await api.json();
  console.log(data);
  setdata(data);
  console.log(data);

}
  // const apikey="653ff8da59fad982f84d5c74cfac9240";
  // const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  // const res =  fetch(url);
  // const data=res.json();
  // console.log(data);
  return (
    <div className="box armaan" id="best">
     <div className="fs-3 " id="demoObject ">
       <input value={city} onChange={(e)=>setcity(e.target.value)} className="my-5" type="text" id="demoInput" placeholder="Enter City Name" />
       <button onClick={fetchapi} onChange={(e)=>e.target.value} type="button" className="btn btn-dark fs-4" id="demoButton">search</button>
       <div className=" location fs-1 my-5">
         <h1 className="loc">
         {data.name}
         </h1>
       <h1>
      { Math.round(data.main.temp-273.15)}°C

       </h1>
       <p> <BsFillCloudFill style={{fontSize: '75px', margin:"auto"}} /> {data.weather[0].main}</p>
       <h1>{data.sys.country}</h1>
       </div>
       
       </div>
      
      </div>

     
    
   
  );
};

export default Weathar;
