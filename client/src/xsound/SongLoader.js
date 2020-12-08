
import React, {useContext, useEffect, useState} from 'react';
import {PlayListsIcon} from "../util/appIcons";
import {SoundXContext} from "./AudioProvider";

export function SongLoader(props) {
    const {audio,audioListener} = useContext(SoundXContext);

    const [playlist, setPlaylist] = useState([]);
    const {apiUrl,setTimeOverViewAnalyzer}=props;

    useEffect(() => {
        const loadPlaylist = async () => {

            try {
                const resp = await fetch(`${apiUrl}/audio/playlist`);
                if (resp.ok) {
                    const playLst = await resp.json();
                    setPlaylist(playLst);
                }
            } catch (e) {
                alert(`problem loading songs: "${e.message}"`)
            }
        };
        loadPlaylist();

    }, []);




    const songSelected = (e) => {
        if (audio){
            audio.stop()
        };

        audioListener.timeOverviewAnalyzer.loadSong(e.target.value);
    };


    return (
        <div style={{textAlign: "left", padding: 10}}>
            <PlayListsIcon/>
            <select onChange={songSelected}>
                {
                    playlist.map((itm, idx) => {
                        return <option key={idx} value={idx}>
                            {itm.title} {"  ----  "} [{itm.artists}]
                        </option>
                    })
                }

            </select>
        </div>
    );
};