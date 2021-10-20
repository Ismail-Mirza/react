import Img from "./img.jsx";
import TextContent from "./textContent.jsx";

const tourContainer = ({url,description,title,price}) =>{
    return <div className="tour-container">
            <Img url={url}></Img>  
            <TextContent text={description} title={title} price={price} ></TextContent>
    </div>
}
export default tourContainer;
