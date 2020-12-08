import React from 'react';
import {TechniqueManager} from "./TechniqueManager";
import {PlayProgress} from "./PlayProgress";
import {SongLoader} from "./SongLoader";
import {FFTAnalyze} from "./analyzers/FFTAnalyze";
import {TimeAnalyze} from "./analyzers/TimeAnalyze";
import {TimeOverviewAnalyzer} from "./analyzers/TimeOverviewAnalyzer";


const apiUrl = "http://localhost:3030";


const AudioPlayer = () => {

    return (

        <div>
            <SongLoader apiUrl={apiUrl} />
            <FFTAnalyze key={1} w={80} h={50}/>
            <TimeAnalyze key={2} w={150} h={50}/>
            <PlayProgress/>
            <TimeOverviewAnalyzer apiUrl={apiUrl} key={"analyzer"} w={800} h={100} />
            <TechniqueManager/>

        </div>
    );

};

export default AudioPlayer;