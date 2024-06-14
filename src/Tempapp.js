import React, { useEffect, useState } from 'react'
import './css/style.css'
function Tempapp() {
    //HERE WE ARE USING ONCHANGE ITS WORK IS THAT WHENEVER WE WRITE ANTHING THEN IT GETS
    //ITS VALUE..MEAN IT CHECK WHICH VALUE IS CHANGE OR NOT..

    // USESTATE IS A HOOK (FUNCTION) THAT ALLOWS YOU TO AVE STATE VARIABLES IN FUNCTIONAL COMPONENTS.
    // IN WHICH YOU PASS THE INTIAL STATE TO THIS FUNCTION AND IT RETURNS A VARIABLE WITH 
    // THE CURRENT STATE VALUE (NOT NECCESARILY THE INITIAL STATE) AND ANOTHERFUNCTION TO UPDATE 
    // THISVALUE.

    const [city, setCity] = useState(null);
    const[search, setSearch] = useState("Mumbai");

    useEffect(()=>{
        const fetchApi =async()=>{
            const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=Metric&appid=19993a55c3ca09c58db4ac4ef7ae3eff`;
            const response = await fetch(url)
            
            const resJson = await response.json();
              console.log(resJson);
            setCity(resJson.main);
        };
        fetchApi();
    },[search])

  return (
    <>
    <div className='box'>
        <div className='inputData'>
            <input
             type='search'
             value={search}
              className='inputFeild'
               onChange={ (event) =>{setSearch(event.target.value) }}/>
        </div>
    {!city ?(
        <p>No Data Found</p>
    ) : (
        <div>
        <div className='info'>
        <h2 className='location'>
        <i className="fa-solid fa-street-view"></i>{search}
        </h2>

        <h1 className='temp'>
        {city.temp}°Cel
        </h1>
     
        <h3 className='tempmin_max'>Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
     </div>

    <div className='wave -one'></div>
    <div className='wave -two'></div>
    <div className='wave -three'></div>
    </div>
    )}

    
    </div>
    </>
  )
}

export default Tempapp