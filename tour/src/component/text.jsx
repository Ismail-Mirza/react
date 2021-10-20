import {useState} from "react";
import halfText from "./../lib/function.js";
const Text = ({text})=>{
    const shortText=halfText(text)+"...";
    const [fullOrLess,setFullOrLess] = useState(shortText);
    const handleClick=(e)=>{
        let readShort = e.target.textContent;
        if (readShort === "Read More")
        {
             setFullOrLess(text);
             e.target.textContent = "Read Less";
        }
        else
        {
            setFullOrLess(shortText);
            e.target.textContent = "Read More";
        }
       
    }
    return <p className="content">
         {fullOrLess}
        <button onClick={handleClick} className="read--less">Read More</button>
        </p>
}
export default Text;