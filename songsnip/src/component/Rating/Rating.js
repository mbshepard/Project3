
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SongInfoContext from "../../util/songInfo";
import "../Rating/style.css"
import sList from "../sList.json"
const Rating = () => {
    const [artistInfo, setArtistInfo]= useState()
    const { artistId } = useParams()
    useEffect(() => {

        const artistInfo = sList.find((item, index) => {
            
            return `${item.id}`=== artistId
        })
    setArtistInfo(artistInfo)

    }, []);
    if(!artistInfo){
        return null
    }
    // const {name, song, image}= useContext(SongInfoContext)
    return <div>
        <h1 className="pageHeader">REVIEW PAGE</h1>
        <div className="cards" style={{ width: "18rem" }}>
            <img src={artistInfo.image} className="card-img-top" alt={""} />
            <div className="card-body">
                <h5 className="card-title">Artist:</h5>{artistInfo.name}
                <h5 className="card-text">Song:</h5>{artistInfo.song}
            </div>
            <div className="card-body">
                <Link to="/listen" className="card-link">Analysis Page</Link>
                <Link to="/newSongs" className="card-link">Songs page</Link>
            </div>
        </div>

         <div className="userInfo" >
             <h4>User 1</h4>
             <h5>Average Rating:</h5>
             <p>Technique clips: Metephor, Punchlines, Imagery</p>
             <h4>User 2</h4>
             <h5>Average Rating:</h5>
             <p>Technique clips: Metephor, Punchlines, Imagery</p>
             <h4>User 3</h4>
             <h5>Average Rating:</h5>
             <p>Technique clips: Metephor, Punchlines, Imagery</p>
                </div>
    </div>
}
export default Rating;