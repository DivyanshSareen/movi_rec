import { useState, useEffect } from "react";
import Card from "./Card";
import "./Grid.css";

const RecGrid = (props) => {
    const [data, setData] = useState([]);
    const [busy, setBusy] = useState(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => requestData(), []);

    async function requestData(){
        try{
            const resp = await fetch("http://localhost:3001/rec/"+props.id);
            const rec_ids = await resp.json();
            const temp = []
            for(let i of rec_ids["rec_ids"]){
                // console.log(i+" ")
                // const movie = await fetch("http://localhost:3001/detials/"+i);
                // const json = await movie.json();
                // temp.push(json);
                const data = await fetch(`http://localhost:3001/details/${i}`)
                const details = await data.json();
                temp.push(details)
            }
            setData(temp);
            setBusy(false);
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
                key={e.title} 
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

export default RecGrid;