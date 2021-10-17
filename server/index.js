import dotenv from 'dotenv';
import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
  async function requestMovies(req, res, next){

    const r = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key="+process.env.API_KEY);
    const json = await r.json();
    console.log(json)
    req.movies = json;
    next();
  }
app.use(requestMovies);
app.get("/get", (req, res) =>{
    console.log(req.movies)
    res.send(req.movies);
});

app.listen(3001, ()=>{
    console.log("running on prot 3001");
})