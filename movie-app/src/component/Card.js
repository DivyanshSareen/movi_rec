import './Card.css';

const Card = (props) => {
    return ( 
    <div className="card">
            <img src={"https://image.tmdb.org/t/p/w500"+props.poster} alt={props.name+"_image"}  className="card-img"/>
        <div className="card-content">
            <h3 className="card-title">
                {props.name}
            </h3>
            <div className="card-det">
                <p className="card-date">{props.date}</p>
                <span>|</span>
                <p className="card-dur">{props.rate}</p>
            </div>
        </div>
    </div>);
}

export default Card;