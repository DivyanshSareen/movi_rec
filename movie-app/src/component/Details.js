import { useEffect } from "react";
import { withRouter } from "react-router";

const Details = (props) => {
    
    useEffect(()=> requestMovie(), []);
    // console.log(props.match.params)
    async function requestMovie(){
        let data = await fetch(`http://localhost:3001/details/${props.match.params.id}`)
        let movie = await data.json();
        console.log(movie);
    }
    return(
        <div>
            <h1>{}</h1>
        </div>
    );
}

export default withRouter(Details);