

const Title = ({title,price}) => {

    return <div className="title">
        <h3>{title}</h3>
        <div className="price">
             {`$ ${price}`}
        </div>
    </div>
}
export default Title;