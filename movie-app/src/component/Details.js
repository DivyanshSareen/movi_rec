import { useState, useEffect } from "react";
import { withRouter } from "react-router";

const Details = (props) => {
    const [isBusy, setBusy] = useState(true);
    const [movie, setMovie] = useState({});

    useEffect(()=> requestMovie(), []);
    // console.log(props.match.params)
    async function requestMovie(){
        const data = await fetch(`http://localhost:3001/details/${props.match.params.id}`)
        const details = await data.json();
        setMovie(details);
        console.log(movie)
        setBusy(false);
    }
    return(
        <div>
        {isBusy ? (<h1>loading</h1>) :
            (<div>
                <div>
                    <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt={props.name+"_image"}/>
                </div>
                <div>
                    <h2>{movie.title}</h2>
                    <div>
                        <span>{movie.vote_average}</span>
                        <span>{movie.runtime}</span>
                    </div>
                    <p>{movie.overview}</p>
                    <div>
                        <span>Released: </span> <span>{movie.release_date}</span>
                        <span>Genre: </span> <span>{movie.genres.map(e => e.name)}</span>
                        <span>Language: </span> <span>{movie.spoken_languages.map(e => e.english_name)}</span>
                        <span>Production: </span> <span>{movie.production_companies.map(e => e.name)}</span>
                    </div>
                </div>
            </div>)
        }
        </div>
    );
}

export default withRouter(Details);