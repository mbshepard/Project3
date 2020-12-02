
class AudioEventListener {

    registeredClips = [];
    audio;
    currentClip;
    timeOverviewRange;
    techniqueGroups=[];

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
    }
    stopAll=()=>{
        this.registeredClips.forEach((clip)=>{
            clip.stop()
        });
    }
    requestFocus=(id)=>{
        this.stopAll()
        this.currentClip=this.registeredClips.find((itm)=>itm.getId()===id);

    }

    getTimeAnalyzer=(canvas)=>{
        return this.audio.getTimeAnalyzer(canvas)
    }

    getFftAnalyzer=(canvas)=>{
        return this.audio.getFftAnalyzer(canvas)
    };

    setTimeOverviewRange=(range)=>{
        this.stopAll();
        this.timeOverviewRange=range
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