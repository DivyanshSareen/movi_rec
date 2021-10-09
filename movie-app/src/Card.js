const data = [{"_id":{"$oid":"614648eca6349848b5590dcd"},"name":"The Conjuring: The Devil Made Me Do It","date":"English  Telugu  Tamil +1 more Hindi","lang":[],"dur":"Horror Mystery Thriller","genre":[],"direc":"Michael Chaves","act":["Vera Farmiga","Patrick Wilson","Shannon Kook"],"c_rate":{"$numberDouble":"4.0"},"u_rate":{"$numberDouble":"3.7"},"desc":"​​There’s hardly a dull moment in ‘The Conjuring: The Devil Made Me Do It.’ This one takes the franchise to newer highs revealing a chilling story of terror, murders and the unknown evil.","poster":"https://static.toiimg.com/thumb/msid-82214755,width-219,height-317,imgsize-43876/82214755.jpg"},
{"_id":{"$oid":"614648eda6349848b5590dce"},"name":"Minari","date":"16 Apr, 2021","lang":["English"],"dur":"1 hr 55 mins","genre":["Drama"],"direc":"Lee Isaac Chung","act":["Steven Yeun","Yeri Han","Alan S. Kim"],"c_rate":{"$numberDouble":"4.0"},"u_rate":{"$numberDouble":"3.7"},"desc":"Lee Isaac Chung’s simple little film about a family finding its place in the world is rooted in reality and Korean culture. It smells of earth and rain and our sense of belonging to the land that feeds our stomachs.","poster":"https://static.toiimg.com/thumb/msid-81907103,width-219,height-317,imgsize-48471/81907103.jpg"},
{"_id":{"$oid":"614648eda6349848b5590dcf"},"name":"The Father","date":"23 Apr, 2021","lang":["English"],"dur":"1 hr 37 mins","genre":["Drama"],"direc":"Florian Zeller, Producer","act":["Olivia Colman","Anthony Hopkins","Mark Gatiss"],"c_rate":{"$numberDouble":"4.5"},"u_rate":{"$numberDouble":"4.2"},"desc":"Zellman’s ‘The Father’ is a lot more than a film that merely exists to tell you a story. This is an experience and a journey into an unstable world that is just as real, as it is make-believe.","poster":"https://static.toiimg.com/thumb/msid-80093151,width-219,height-317,imgsize-64410/80093151.jpg"},
{"_id":{"$oid":"614648eda6349848b5590dcf"},"name":"The Father","date":"23 Apr, 2021","lang":["English"],"dur":"1 hr 37 mins","genre":["Drama"],"direc":"Florian Zeller, Producer","act":["Olivia Colman","Anthony Hopkins","Mark Gatiss"],"c_rate":{"$numberDouble":"4.5"},"u_rate":{"$numberDouble":"4.2"},"desc":"Zellman’s ‘The Father’ is a lot more than a film that merely exists to tell you a story. This is an experience and a journey into an unstable world that is just as real, as it is make-believe.","poster":"https://static.toiimg.com/thumb/msid-80093151,width-219,height-317,imgsize-64410/80093151.jpg"},
{"_id":{"$oid":"614648eda6349848b5590dd0"},"name":"The Mauritanian","date":"19 Feb, 2021","lang":["English"],"dur":"2 hrs 9 mins","genre":["Thriller"],"direc":"Kevin Macdonald","act":["Benedict Cumberbatch, Producer","Zachary Levi","Shailene Woodley"],"c_rate":{"$numberDouble":"3.5"},"u_rate":{"$numberDouble":"3.5"},"desc":"‘The Mauritanian’ is a lot of things and in-depth representation of the primary subject and the simmering issues underneath is not one of them. And yet, with conviction, we say it relievers what it promises to do: give peace and forgiveness a chance. Both to Slahi and America. ","poster":"https://static.toiimg.com/thumb/msid-80012268,width-219,height-317,imgsize-86182/80012268.jpg"},
{"_id":{"$oid":"614648eda6349848b5590dd1"},"name":"Nomadland","date":"02 Apr, 2021","lang":["English"],"dur":"1 hr 47 mins","genre":["Drama"],"direc":"Chloe Zhao, Producer","act":["Frances McDormand, Producer","Linda May","David Strathairn"],"c_rate":{"$numberDouble":"4.0"},"u_rate":{"$numberDouble":"4.2"},"desc":{"$numberDouble":"NaN"},"poster":"https://static.toiimg.com/thumb/msid-81632596,width-219,height-317,imgsize-44934/81632596.jpg"},
{"_id":{"$oid":"614648eda6349848b5590dd2"},"name":"Godzilla Vs. Kong","date":"24 Mar, 2021","lang":["English","Tamil","Telugu","Hindi"],"dur":"1 hr 53 mins","genre":["Action","Sci-Fi","Thriller"],"direc":"Adam Wingard","act":["Alexander Skarsgard","Millie Bobby Brown","Rebecca Hall"],"c_rate":{"$numberDouble":"3.5"},"u_rate":{"$numberDouble":"3.8"},"desc":"Delivers on its promise as a massive monster clash and adrenaline-driven movie lovers will be visually rewarded for catching this spectacle in cinemas.","poster":"https://static.toiimg.com/thumb/msid-81508348,width-219,height-317,imgsize-23019/81508348.jpg"}
]

const Card = () => {
    return (
        data.map(e => <div key={e.name} style={{background:"#171717"}}>
        <div>
            <img src={e.poster} alt={e.name+"_image"}/>
        </div>
        <div>
            <div>
                <div>
                    <h2>{e.name}</h2>
                    <span>{e.c_rate.$numberDouble}</span>
                    <div>
                        <span>{e.date}</span>
                        <span>{e.dur}</span>
                    </div>
                </div>
            </div>
            <div>
                <span>{e.genre}</span>
                <span>{e.lang}</span>
            </div>
        </div>
    
        </div>)
    );
}

export default Card;