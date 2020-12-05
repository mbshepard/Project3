// import background from "../util/reviewBackground.jpg"
import "./style.css"
import { Link } from "react-router-dom";
const LandingPage = () => {
    return <div className="backgroundPic">

        <h1>The Review app</h1>
        <Link to="/newSongs">New Songs</Link>
<button>Listen</button> <button>Analyze</button> <button>Review</button>
    </div>
}
export default LandingPage;
