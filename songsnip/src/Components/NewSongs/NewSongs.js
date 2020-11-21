
import { Link} from "react-router-dom";

const NewSongs = (props)=>{
    return (
    <div>
<h1>New Songs</h1>

<div className="card" style={{width: "18rem"}}>
  <div className="card-body">
      <img alt={props.name} src={props.image}/>
    <h5 className="card-title">Artist{props.name}</h5>
<p className="card-text">Song{props.song}</p>
    <Link to="/" className="btn btn-primary">Home</Link>
  </div>
</div>


    </div>
    )
}
export default NewSongs;