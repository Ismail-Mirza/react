import Slider from "./Slider.jsx";

import { useState } from "react";

const Reviews = [
    {
        name:"Susan Smith",
        occupation:"Web Developer",
        url:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        review:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        surpase:1
    },
    {
        name:"Anna Johnson",
        occupation:"Web Designer",
        url:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        review:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        surpase:2
    },
    {
        name:"Peter Jones",
        occupation:"Intern",
        url:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        review:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        surpase:3
    }
];
const Content = ()=>{
    const [idx,setIdx] = useState(0);
    const [people,setPeople] = useState(Reviews[idx]);

    const handleRightClick =()=>{
            if(idx<Reviews.length-1)
            {
                setIdx(idx+1);
            }
            else{
                setIdx(0);
            }
            setPeople(Reviews[idx])
    };
    const handleLeftClick =()=>{
            if(idx > 0)
            {
                setIdx(idx-1);
            }
            else{
                setIdx(Reviews.length-1);
            }
            setPeople(Reviews[idx])
    }
    const handleSupress=(people)=>{
        Reviews.shift();
        // add removed add the end of arry
        Reviews.push(people);
        setPeople(Reviews[0]);
    }
    return (
        <div className="content">
            <div className="img-div">
                <img src={people.url} className="rounded" alt="" />
                <span className="quote-icon">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg>
                </span>
            </div>
            <p className="name">{people.name}</p>
            <p className="occupation">{people.occupation}</p>
            <p className="intro">
                {people.review}
             </p>
            <Slider handleRightClick={handleRightClick} handleLeftClick={handleLeftClick}></Slider>
            <button className="btn btn-light" onClick={()=>handleSupress(people)}>Supress Me</button>
        </div>
    )
}


export default Content;