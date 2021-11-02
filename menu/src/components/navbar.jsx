

const navBar=({handleNavClick,catagorys})=>{

    return <>
        <div className="nav">
            <ul>
              {
                  catagorys.map((catagory, index)=>{
                      return <li key={index} onClick={()=>handleNavClick(catagory)}>{catagory}</li>;
                  })
              }
            </ul>
        </div>

    </>
}


export default navBar;