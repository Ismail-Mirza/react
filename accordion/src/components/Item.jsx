import { useState } from "react";

const Item = ({q,ans})=>{
    const [add,setAdd] = useState("+");
    const [className,setClassName] = useState("hide");
    const handleClick=()=>{
        if(add === "+")
        {
            setAdd("-");
            setClassName(" ")
        }
        else
        {
            setAdd("+");
            setClassName("hide");
        }
    }
    return <div className="content-item">
        <div>
            <h3>
                {q}
            </h3>
            <button onClick={()=>handleClick()} className="btn round btn-grey">{add}</button>
        </div>
        <p className={`text ${className}`}>
            {ans}
        </p>    
    </div>
}

export default Item;