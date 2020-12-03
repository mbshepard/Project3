import React, { useContext, useEffect, useRef, useState } from 'react';

import { AddClipIcon, PlayListsIcon } from "../util/appIcons";
import { SoundXContext } from "./AudioProvider";
import { ClipList } from "./clips/ClipList";
import { TimeAnalyze } from "./analyzers/TimeAnalyze";
import { FFTAnalyze } from "./analyzers/FFTAnalyze";


const apiUrl = "";

const TECHNIQUE_METAPHOR = 'Metaphor';
const TECHNIQUE_PUNCH_LINE = 'Punch_line';
const TECHNIQUE_IMAGERY = 'Imagery';

export const containerBGs = {
    [TECHNIQUE_METAPHOR]: "#2e8b57",
    [TECHNIQUE_PUNCH_LINE]: "rgba(255,105,104,0.96)",
    [TECHNIQUE_IMAGERY]: "#237aff",
}
const PlayerX = () => {
    const canvasRef = useRef();

    let { audio, audioListener } = useContext(SoundXContext);


    const [playing, setPlaying] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [pos, setPos] = useState(0);
    const [max, setMax] = useState(0);
    const [playlist, setPlaylist] = useState([]);
    // const [metaPhorList, setMetaPhorList] = useState([]);

    const [timeOverViewAnalyzer, setTimeOverViewAnalyzer] = useState(<div />);

    useEffect(() => {
        const loadPlaylist = async () => {

            try {
                const resp = await fetch(`${apiUrl}/audio/playlist`);
                if (resp.ok) {
                    const playLst = await resp.json();
                    setPlaylist(playLst);
                    // load(0);
                }
            } catch (e) {
                alert(`problem loading songs: "${e.message}"`)
            }
        };
        loadPlaylist();

    }, []);

    const load = (track) => {
        // audio = new ServiceX(`${apiUrl}/audio/load/${track}`);
        const fileName = `${apiUrl}/audio/load/${track}`;
        audio.doLoad(fileName, {
            ready: (d) => {
                setPos(0);
                setLoaded(true);
                setMax(d)
            },
            ended: () => {
                setPlaying(false);
                setPos(0)
            },
            progress: (p) => {
                setPos(p)
            },
            createAnalyzers: () => {
                setTimeOverViewAnalyzer(audio.createAnalyzer(795, 50));
            }
        }, canvasRef.current)/**/

    };

    const toggle = () => {
        audio.toggle();
        setPlaying(!playing);

    };

    const changed = (v) => {
        setPos(v);
        audio.jumpTo(v);
    };

    const titleSelected = (e) => {
        if (audio) audio.stop();
        setPlaying(false);
        setLoaded(false);
        load(e.target.value);
    };

    const addClip = (technique) => {
        audioListener.addClipToTechnique(technique)
    };
    const AddClipButton = (props) => {
        const { key, technique } = props;
        return <li key={key}
            onClick={() => addClip(technique)}
            style={{ background: containerBGs[technique], cursor: "pointer" }}>
            <span><AddClipIcon /> Add to {technique}</span>
        </li>
    }
    return (

        <div>
            <div style={{ textAlign: "left", padding: 10 }}>
                <PlayListsIcon />
                <select onChange={titleSelected}>
                    {
                        playlist.map((itm, idx) => {
                            return <option key={idx} value={idx}>
                                {itm.title} {"  ----  "} [{itm.artists}]
                            </option>
                        })
                    }

                </select>
            </div>

            {/* {loaded && */}
                {/* <div> */}

                    {/* <hr /> */}


                    {/* <FFTAnalyze key={1} w={80} h={50} />
                    <TimeAnalyze key={2} w={80} h={50} /> */}

                    {/* <br /> */}


                    {/*<div disabled={!loaded} onClick={toggle}>{playing ? <AnimatePauseIcon/> : <AnimatePlayIcon/>}</div>*/}
                    {/*    <ProgressX max={max} pos={pos} changed={changed}/>*/}
                    {/*    <br/>*/}

                {/* </div> */}
            {/* } */}
            {loaded && <FFTAnalyze key={1} w={80} h={50} /> }

            {timeOverViewAnalyzer}
            {loaded && <TimeAnalyze key={2} w={80} h={50} /> }
            {loaded &&
                <div>
                    <ul className={"technique"}>
                        <AddClipButton key={1} technique={TECHNIQUE_METAPHOR} />
                        <AddClipButton key={2} technique={TECHNIQUE_PUNCH_LINE} />
                        <AddClipButton key={3} technique={TECHNIQUE_IMAGERY} />
                    </ul>
                    <ClipList technique={TECHNIQUE_METAPHOR} max={4} />
                    <ClipList technique={TECHNIQUE_PUNCH_LINE} max={2} />
                    <ClipList technique={TECHNIQUE_IMAGERY} max={3} />
                </div>
            }

        </div>
    );

};

export default PlayerX;