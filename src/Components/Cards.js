import React, { useState } from "react";
import Card from "./Card";
// Cards.js humne saare card ke liye bnayi hai , jisme hum saare cards rkhnege 

const  Cards = (props) =>
{
    let courses = props.courses;
    let category = props.category;

    const[likedCourses,setLikeCourses] = useState([]);
    let allCourses = []; // iss array humm eksath saaare json ki value dalnege , wo buisness ke andar 5 aise nhi , seedhe 5 uske phir 5 next wale ki 
    const get_all_courses = () =>
    {
      if(category === "All")
      {
         Object.values(courses).forEach( (courseCategory)=>

         {
            courseCategory.forEach((course)=>
            {
              allCourses.push(course);
            })
         }
          
      ) 
      
      return allCourses;
      }
        
      else
      {
         // specfic category wala array ya crds dekhaynge 
         return  courses[category]; // uss category wale dekhayga isse wo array 
      }
    }

    

   return(
       <div className="flex flex-wrap justify-center gap-4 mb-4">
   
        {
           
        get_all_courses().map( (course) => {

              return(<Card course = {course} likedCourses = {likedCourses} setLikeCourses = {setLikeCourses}  ></Card> ) // ek ek card return krrhe hai hum yha pr 

           })



        }
       </div>
   )
};

export default Cards;