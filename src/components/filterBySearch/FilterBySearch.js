import React, {useState, useEffect} from 'react'
import data from '../stays.json'

export const FilterBySearch = () => {
    const [filterList, setFilterList] = new useState(data)
    useEffect(()=>{

        setFilterList(data)
    },[])
    console.log(filterList)
  return (
    <div>
        <ol>
            {filterList.map((item, index)=>{
                return(

                    <li key={index}>{item.country}</li>
                )
            })}
                 
        </ol>
        {/* <h1>{item.title}</h1> */}
    </div>
  )
}

