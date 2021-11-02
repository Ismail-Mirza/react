
const menuItem=({url,name,price,description})=>{
    return <>
        
        <div className="menuItem">
            <img className="menuImg" src={url} alt="" />
            <div className="itemName">
                <div className="name-price">
                    <div className="name">{name}</div>
                    <div className="price">${price}</div>
                </div>
                <hr />
                <p>{description}</p>
            </div>
        </div>
    </>
}


export default menuItem;