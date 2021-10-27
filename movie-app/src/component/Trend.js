import Card from "./Card";

const Trend = (props) => {
    return(
<div className="movie-grid">
    {
      props.data.map(e => 
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
    );
}

export default Trend;