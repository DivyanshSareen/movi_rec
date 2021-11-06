import './Details.css';
import RecGrid from './RecGrid';
import { useState, useEffect } from "react";
import { withRouter } from "react-router";

const Details = (props) => {
    const [busy, setBusy] = useState(true);
    const [movie, setMovie] = useState({});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=> requestMovie(), []);
    // console.log(props.match.params)
    async function requestMovie(){
        const data = await fetch(`http://localhost:3001/details/${props.match.params.id}`)
        const details = await data.json();
        setMovie(details);
        setBusy(false);
    }
    return(
        <div>
        {busy ? (<h1>Loading...</h1>) :
            (<div className="details">
                <div>
                    <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt={props.name+"_image"} className="m-img"/>
                </div>
                <div>
                    <h2 className="m-name">{movie.title}</h2>
                    <div className="m-stat">
                        <span>{movie.vote_average} / 10</span>
                        <span>{movie.runtime} min</span>
                    </div>
                    <p className="m-desc">{movie.overview}</p>
                    <div className="elements">
                        <span>Released: </span> <span>{movie.release_date}</span>

                        <span>Genre: </span> <span className="elements-value">{movie.genres.map(e => <span key ={e.name}>{e.name}</span>)}</span>

                        <span>Language: </span> <span className="elements-value">{movie.spoken_languages.map(e => <span key={e.english_name}>{e.english_name}</span>)}</span>

                        <span>Production: </span> <span className="elements-value">{movie.production_companies.map(e => <div key={e.name}>{e.name}</div>)}</span>
                    </div>
                </div>
            </div>
            )
        }
        
            
                
        <RecGrid id={movie.id}/>
        </div>
    );
}

export default withRouter(Details);