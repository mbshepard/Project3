
import React, {useContext, useEffect, useState} from 'react';
import {PlayListsIcon} from "../util/appIcons";
import {SoundXContext} from "./AudioProvider";

export function SongLoader(props) {
    const {audio,audioListener} = useContext(SoundXContext);

    const [songlist, setSonglist] = useState([]);
    const [selectedSong, setSelectedSong] = useState(-1);
    const {apiUrl,show}=props;

    useEffect(() => {
        audioListener.songLoader={loadSong};

        const loadPlaylist = async () => {

            try {
                const resp = await fetch(`${apiUrl}/audio/playlist`);
                if (resp.ok) {
                    const songlist = await resp.json();
                    setSonglist(songlist);
                    if (songlist.length>0) {
                        loadSong(songlist[0].id);
                        audioListener.songList=songlist
                    }
                }
            } catch (e) {
                alert(`problem loading songs: "${e.message}"`)
            }
        };
        loadPlaylist();

    }, []);


    const songSelected = (e) => {
        loadSong(e.target.value)
    };

    const loadSong = (songId) => {
        console.log(`songId ${songId}`);
        if (audio){
            audio.stop()
        };
        setSelectedSong(songId)
        audioListener.selectedSongId=songId;
        if (audioListener.timeOverviewAnalyzer.loadSong) {
            audioListener.timeOverviewAnalyzer.loadSong(songId);
        }
    };

    return (
        <>
            { show &&
                <div style={{textAlign: "left", padding: 10}}>
                    <PlayListsIcon/>
                    <select onChange={songSelected} value={selectedSong}>
                        {
                            songlist.map((itm, idx) => {
                                return <option key={idx} value={itm.id}>
                                    {itm.title} {"  ----  "} [{itm.artists}]
                                </option>
                            })
                        }

                    </select>
                </div>
            }
            </>
    );
};