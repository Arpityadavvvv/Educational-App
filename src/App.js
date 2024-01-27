
import React from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { useEffect } from "react";
import { useState } from "react";
import { apiUrl,filterData } from "./data";import { toast } from "react-toastify";
import Slider from "./Components/Slider";

const App = () => {

  const [courses,saveCourse] = useState(null);
  const [loader,setLoader] = useState(true); 
  const [category,setCategory] = useState(filterData[0].title); // isme all wali category send krdi na 
 
  
      async function fetchData () // yha se function for api start hua hai as async function 
      {
          setLoader(true); //  abhi loading dikhayga 
       try{
            const repsonse = await fetch(apiUrl);
            const data = await repsonse.json();
            saveCourse(data.data);  // data.data = iska mtlb wgera nhi hai , just json ke first key ka name bhi data hi hai so data.data or output.data
                                    // after this we have to save this data or phir props se card me send krdena
            console.log(data);
          }

      catch(error){
          toast.error(" Something went wrong ");
          }
          setLoader(false);  // yha pr loading end krdenge 
      }
    

      // by this hook we are rendering the Api function one time 
      useEffect(()=>
      {
         fetchData();
      },[])  
  

  
  return (
    <div className="bg-bgDark2 min-h-screen flex flex-col">  {/* ye to parent div must bnana hi hota hai */}
        
       <div>
        <Navbar></Navbar>     {/* sbse upr hmara Navbar rehta hai */}
        </div>

      <div className='bg-bgDark2'>
        <div>
          <Filter filterData = {filterData} category = {category}  setCategory = {setCategory} ></Filter>     {/* after navbar we'll have filter bar  */}
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center min-h-[50vh] ">
         { loader ? (<Slider></Slider>) : (<Cards courses = {courses} category = {category}></Cards>) }    {/* after Filter we'll have cards gallery  or isme ab jo data uper courses me save hokr aara hai use as a prop bhej denge  */}
        </div>

      </div>

    </div>
  )

};

export default App;

/* Hum Api se data fetch krenge or usme useEffect hook ka use krenge or fetched data ko store krnege  */
/* Hum app.js me Api call isliye krenge kyoki yha hi hum api ko import kra rhe hai , or har jgh sbko thodi import kra loge */
 