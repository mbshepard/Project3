import {useContext, useEffect} from "react";
import {SoundXContext} from "../xsound/AudioProvider";
import ListenAnimations from "./listenAnimations";

const Listen = () => {
    const {audioListener} = useContext(SoundXContext);

    useEffect(() => {
        audioListener.showTopNav(true, true,false);
        audioListener.stopAll();
        audioListener.loadCurrentSong();

    }, []);
    return <div>
        Listen
        <ListenAnimations/>

    </div>;
}

export default Listen;


