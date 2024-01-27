import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";
// Card.js jo hai ye sirf individual card ke liye hai , card ke andar ka data hum yhi se dalenge 

const  Card = (props) => 
{
    let course = props.course
    let likedCourses = props.likedCourses;
    let setLikeCourses =  props.setLikeCourses;
    function clickHandler ()
    {
        //logic for liked or not 
        if(likedCourses.includes(course.id))
        {
            setLikeCourses((prev) => prev.filter((cid) => (cid !== course.id) ) ); // jo abhi tk hai usme se jiske bhi id isse nhi milte un sbko daal do or jiske match hojaye usko nhi daal rhe 
            toast.warning("liked removed "); 
        }

        else
        {
            if(likedCourses.length === 0)
            {
                setLikeCourses((course.id)); // agr kuch nhi hai array mai to isko daldo direct 
            }
            else
            {
                setLikeCourses((prev) => [...prev,course.id]) // previous bhi daaalo poore or ye new bhi daal do 
            }
            toast.success(' Liked the course ');
        }

    }
    return (
        <div className="w-[300px] bg-bgDark   rounded-md bg-opacity-80 overflow-hidden">
           <div className="relative">
              <img src={course.image.url} alt={course.image.alt} loading="lazy"></img>

              <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-1 grid place-items-center" >
                 <button onClick={clickHandler}> {/* yha wo love wala button */}
                     {
                        likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"></FcLike>): (<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>)
                     }
                 </button>
              </div>
              
           </div>

           <div className="p-4">
               <p className="text-lg leading-6  font-semibold text-white">{course.title}</p>  
             <p className="mt-2 text-white">
                 {
                   course.description.length > 100 ? (course.description.substr(0,100)) + "..." : (course.description)

                 }
            </p>    {/* yha pr hum desc and title dal rhe hai  */}
           </div>

        </div>
    )
};

export default Card;