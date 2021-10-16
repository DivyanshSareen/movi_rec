import Card from "./Card";
import { useState, useEffect } from 'react';
function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => requestPets(), []);

  async function requestPets(){

    const res = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=");
    const json = await res.json();
    console.log(json.results);
    setData(json.results)
  }

  return (
    <div className="movie-grid">
    {
      data.map(e => <Card key={e.id} name = {e.title} rate = {e.vote_average} date = {e.release_date} poster = {e.poster_path}/>)
    } 
    </div>
  );
}

export default App;
