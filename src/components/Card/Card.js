import './Card.css'
const Card = ({name,description,onPress,img}) => {
    return (
        <div className="cardFrame">
            <img className="cardImg" src={img} alt=""/>
            {/* <div className="text-0">
                <p className="name">{name}</p>
                <p className="desc">{description}</p>
            </div> */}
        </div>
    )
}

export default Card
