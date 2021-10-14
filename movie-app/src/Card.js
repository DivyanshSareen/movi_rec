
import './Card.css'
const Card = (props) => {
    return ( 
    <div key={props.name} className="card">
            <img src={props.poster} alt={props.name+"_image"}  className="card-img"/>
        <div className="card-content">
            <h3 className="card-title">
                {props.name}
            </h3>
            <div className="card-det">
                <p className="card-date">2021</p>
                <span>|</span>
                <p className="card-dur">144m</p>
            </div>
        </div>
    </div>);
}

export default Card;