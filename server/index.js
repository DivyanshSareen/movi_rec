import dotenv from 'dotenv';
import fetch from 'node-fetch';
import express, { json } from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';




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
async function getdata(req, res, next){
  const d = await fetch(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.API_KEY}`);
  const m = await d.json();
  req.m = m;
  next();
}

async function requestMovies(req, res, next){
  const r = await fetch("https://api.themoviedb.org/3/movie/"+req.params.type+"?api_key="+process.env.API_KEY+"&page=1");
  const json = await r.json();
  req.movies = json;
  console.log(req.movies);
  next();
}

async function getRecommendations(req, res, next){
  let id = req.params.id;
  const raw_data = readFileSync('./movie_rec.json');
  const data = JSON.parse(raw_data);
  // req.dat = data["1891"];
  if(id in data)
  {
    req.dat = data[id]
  }
  else
  {
    let temp = [];
    const r = await fetch("https://api.themoviedb.org/3/movie/"+id+"/recommendations?api_key="+process.env.API_KEY);
    const data = await r.json();
    for(let x of data["results"])
    {
      temp.push(x.id)
    }
    req.dat = {"rec_ids": temp};
  }
  next();
}
app.use("/rec/:id", getRecommendations);
app.get("/rec/:id", (req, res) =>{
   res.send(req.dat);
});

app.use("/movie/:type",requestMovies);
app.get("/movie/:type", (req, res) =>{
    // console.log(req.movies)
    res.send(req.movies);
});

app.use("/details/:id",getdata);
app.get("/details/:id", (req, res) => {
  console.log(req.m)
   res.send(req.m)
});
app.listen(3001, ()=>{
    console.log("running on prot 3001");
})