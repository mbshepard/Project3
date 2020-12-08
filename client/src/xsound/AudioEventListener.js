
class AudioEventListener {

    registeredClips = [];
    audio;
    currentClip;
    timeOverviewRange;
    techniqueGroups=[];
    duration=0;

    timeOverviewAnalyzer;
    timeAnalyze;
    fftAnalyze;
    techniqueManager;
    progressX;

    constructor(audio) {
        this.audio = audio;
        audio.register(this);
    }

    registerClip = (clip) => {
        this.registeredClips.push(clip);
        console.log(`register: ${clip}`);
        console.log(`size: ${this.registeredClips.length}`);
    };

    unregisterClip = (clip) => {
        this.registeredClips =
            this.registeredClips.filter((item) => item !== clip);
        if (this.registeredClips.length<=0){
            this.currentClip=undefined;
        }
        console.log(`unRegister: ${clip}`);
        console.log(`size: ${this.registeredClips.length}`);

    };

    progress=(pos)=>{
        if(this.currentClip){
            this.currentClip.progress(pos)
        }
        if (this.progressX){
            this.progressX.progress(pos)
        }
    }
    stopAll=()=>{
        this.registeredClips.forEach((clip)=>{
            clip.stop()
        });
        if (this.progressX){
            this.progressX.stop()
        }
    }
    requestFocus=(id)=>{
        this.stopAll()
        this.currentClip=this.registeredClips.find((itm)=>itm.getId()===id);
    }

    loaded=(duration)=>{
        if (this.timeAnalyze){
            this.timeAnalyze.loaded(duration);
        }
        if (this.fftAnalyze){
            this.fftAnalyze.loaded(duration);
        }
        if (this.progressX){
            this.progressX.loaded(duration);
        }
        if (this.techniqueManager){
            this.techniqueManager.loaded(duration)
        }
        if (this.timeOverviewAnalyzer){
            this.timeOverviewAnalyzer.loaded(duration)
        }
    }


    setTimeOverviewRange=(range)=>{
        this.stopAll();
        this.timeOverviewRange=range;
        if (this.timeOverviewAnalyzer){
            this.timeOverviewAnalyzer.setRange(range)
        }

    };

    registerTechnique=(techniqueName,tech)=> {
        this.techniqueGroups[techniqueName] = tech;
    };

    addClipToTechnique=(techniqueName)=>{
        const tech=this.techniqueGroups[techniqueName];
        if (tech){
            tech.addClip();
        }
    }

}

export default AudioEventListener;