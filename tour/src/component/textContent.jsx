import Title from "./title.jsx";
import Text from "./text.jsx";


const textContent =({text,title,price})=>
{
    const handleDelete = (e)=> {
        const parent=e.target.parentElement.parentElement;
        parent.remove();
    }
    return <>
         <div className="text-container">
               <Title title={title} price={price}></Title>
               <Text text={text}></Text>
               <button className="btn-danger" onClick={handleDelete} >Not Interested</button>
         </div>
    
    </>;
}
export default textContent;