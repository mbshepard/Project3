import {useContext, useEffect,useState} from "react";
import {SoundXContext} from "../xsound/AudioProvider";

const Review = () => {
    const {audioListener} = useContext(SoundXContext);
    const [currentSong, setCurrentSong] = useState(null);

    useEffect(() => {
        audioListener.reviewPage={loaded};
        audioListener.showTopNav(true,false,false);
        audioListener.loadCurrentSong();
        audioListener.stopAll();
        return ()=>{
            audioListener.reviewPage=null
        }

    }, []);

    const loaded = (duration, song) => {
        console.log(`From Review ${duration}`,song);
        setCurrentSong(song)
    };

    return <div>

        <h3>Review Page</h3>
        {currentSong &&
            <>
                {currentSong.title}<br/>
                {currentSong.artists}
            </>
        }
    </div>;
}
 
export default Review;