import React from "react";

// Filter wo component hai jo litrally as filter hai , ye category sub-navbar hai jisse hum diffrent diffrent
// streams ke courses dekh paynge 

const Filter = (props) =>
{
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterCategory (title)
    {
       setCategory(title);
    }

    return(
        <div className="w-11/12 text-center flex flex-wrap justify-center space-x-4 gap-y-4 mx-auto py-4 ">
             
                {filterData.map((data) => 
                {
                   return( 
                    <button className="px-2 py-1 rounded-sm font-medium text-white bg-black hover:opacity-50 "
                 
                    onClick={() => filterCategory(data.title)} >
                        {data.title}    
                    </button>
                   )
                })
             }
             
        </div>
    )
};

export default Filter;