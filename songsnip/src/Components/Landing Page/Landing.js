import { Link} from "react-router-dom";

import React from "react"

const Landing = ()=>{
    return <div>
       <h1>SnipBud</h1> 
       <h2> THE WORLDS BEST SONG SNIPPING APP!</h2>
           <Link to="/NewSongs">New Songs</Link>
    </div>
}
export default Landing;