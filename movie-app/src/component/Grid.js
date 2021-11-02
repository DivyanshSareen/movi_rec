import { useState, useEffect } from "react";
import Card from "./Card";
import "./Grid.css";

const Grid = (props) => {
    const [data, setData] = useState([]);
    const [busy, setBusy] = useState(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => requestData(), []);

    async function requestData(){
        try{
            const movies = await fetch("http://localhost:3001/movie/"+props.grid_type);
            const json = await movies.json();
            setData(json.results);
            setBusy(false);
            console.log(json)
        }
        catch(e)
        {
            console.log(e);
        }
    }

    return(<div>
        {busy ? (<h1>loading...</h1>) : (
            <div className="movie-grid">
                {
                data.map(e => 
                <Card 
                key={e.id} 
                id = {e.id}
                name = {e.title} 
                rate = {e.vote_average} 
                date = {e.release_date} 
                poster = {e.poster_path}
                />)
                } 
            </div>    
        )}
    </div>)
}

export default Grid;