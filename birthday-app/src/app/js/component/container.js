import Heading from "./heading";
import Profile from "./profile";
import { useState } from "react";
import datas from "./../data/profileData";
const Container = ({className}) =>{

    const [profiles,setProfiles] = useState(datas);

    const handleClearAll = () =>{
        setProfiles([]);
    }
    return <div className={className}>
            <div className="modals">
                <Heading numOfBrithday={profiles.length} className={'lightBlack'} ></Heading>
                {
                    profiles.map((x,i)=>{
                     console.log(x);
                     return <Profile key={i} imgUrl={x.url} profileName={x.name} age={x.age}/> ;
                    })
                }
                <button className="mybtn" onClick={handleClearAll}>Clear All</button>
            </div>
        </div>;

};


export default Container;