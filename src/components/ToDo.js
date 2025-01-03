import React, { useState } from "react";

const ToDo=()=>{
    const [value, setValue]=useState([])
    const [data,setData]=useState("")

    const handleAddToDo=()=>{
        setValue([...value,data])
        setData("")
    }
    return(
        <div>
            {/* <input value={value} onChange={setData(e.target.value)}></input> */}
            <input value={data} onChange={(e) => setData(e.target.value)} />

            <button onClick={handleAddToDo}>Add ToDo</button>
            <ul>
                {
                    value.map((item,index)=>(
                        <li>
                            {item}
                            <button onClick={()=>{
                                const updatedList=value.filter((_,i)=>i!==index)
                                setValue(updatedList);
                            }}>
                                
                                Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ToDo;