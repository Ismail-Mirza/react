

const Slider= ({handleRightClick,handleLeftClick})=>{

    return <div className="slider-container">
        <button className="btn btn-text" onClick={()=>handleLeftClick()}><i className="fa fa-chevron-left"></i></button>
        <button className="btn btn-text" onClick={()=>handleRightClick()}><i className="fa fa-chevron-right"></i></button>
    </div>
}


export default Slider;