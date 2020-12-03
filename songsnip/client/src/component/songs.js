import { Link } from "react-router-dom";
import  "./songStyle.css"
// import Listen from "./listen/Listen"

const Songs = (props)=>{
    return <div>
        <div class="card w-75">
<div class="card-body">
    <h3 className="card-title">Artist:</h3>{props.name}
    <img alt={props.name} src={props.image} />
    <p className="card-text">Song:</p>{props.song}<br/>
    <Link to="/listen" class="btn btn-primary">Listen</Link>

    <Link to={`/rating/${props.id}`} class="btn btn-info">Rating</Link>
  </div>
</div>

    </div>
}
export default Songs
