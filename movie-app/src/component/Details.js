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
                <div><img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt={props.name+"_image"}/></div>
            </div>)
        }
        </div>
    );
}

export default withRouter(Details);