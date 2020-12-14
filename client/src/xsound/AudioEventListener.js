import {TECHNIQUE_IMAGERY, TECHNIQUE_METAPHOR, TECHNIQUE_PUNCH_LINE} from "../util/Constants";

const filterClips=(clips,tech)=>{
    return clips.filter((itm)=>{
        return itm.techniqueType===tech;
    });
}

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
    showTopNav;
    selectedSongId=-1;
    songLoader;
    reviewPage;
    songList=[];
    user;

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
        if (this.reviewPage){
            this.reviewPage.loaded(duration,this.getCurrentSongInfo());
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
    };

    resetTechniques=()=>{
        for (const [key, tech] of Object.entries(this.techniqueGroups)) {
            tech.clearClips()
        }
        this.timeOverviewRange=null;
    }

    loadCurrentSong=()=>{
        this.songLoader.loadSong(this.selectedSongId)
    }

    getCurrentSongInfo=()=>{
        return this.songList.find((itm)=>{
            return `${itm.id}`===`${this.selectedSongId}`;
        })
    }

    getClipList=()=>{
        const allClips=[];
        for (const [techName, tech] of Object.entries(this.techniqueGroups)) {
            const {clipList}=tech.state;
            const newList=clipList.map((itm)=>{
                return {...itm,techniqueType:techName,songId:this.selectedSongId,userId:"????"}
            });
            allClips.push(...newList);
        }
        return allClips;
    }

    loadClipList=(userClips)=>{

        [TECHNIQUE_METAPHOR,TECHNIQUE_IMAGERY,TECHNIQUE_PUNCH_LINE].forEach((tech)=>{
            const filtered=userClips.filter((itm)=>{
                return itm.techniqueType===tech;
            });
            this.techniqueGroups[tech].loadClips(filtered);
        })


    }



}

export default AudioEventListener;