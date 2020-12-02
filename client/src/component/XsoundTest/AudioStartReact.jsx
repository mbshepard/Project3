import   React, {useEffect,useState} from 'react';
import {X} from 'xsound'

//from: https://xsound.dev/#/audio/start
export function AudioStartReact(props) {
    const [playing, setPlaying] = useState(false);
    const [status, setStatus] = useState("");
    useEffect(() => {
        start()
    }, []);


    const start=()=>{
        console.log("X('audio').start");

        X('audio').resize(16384);

        X('audio').setup({

            update : (source, currentTime) => {
                const index = Math.floor(currentTime * source.buffer.sampleRate)
                const n100msec = 0.100 * source.buffer.sampleRate;

                if ((index % n100msec) !== 0) {
                    return;
                }
                setStatus(`Current Time: ${currentTime}`)
            },
            ended : (source, currentTime) => {
                setPlaying(false)
            },
            error : error => {
                if (error instanceof Error) {
                    window.alert(error.message);
                } else {
                    window.alert('Error : decodeAudioData');
                }
            }
        });

        X.ajax({
            url     : 'https://weblike-curtaincall.ssl-lolipop.jp/assets/wav/forever-love-piano-instruments.wav',
            timeout : 60000,
            success : (event, arrayBuffer) => {
                // ArrayBuffer -> AudioBuffer
                X('audio').ready.call(X('audio'), arrayBuffer);
                setStatus(`Loading: Done`)
            },
            progress:(event)=>{
                setStatus(`Loading: ${event.loaded}`)
            },
            error: (error)=>{
               console.log(error); 
            }
        });
    };
// if playing state is currently false then set playing to true, then vice versa
    const toggle=()=>{
        X('audio').toggle(X('audio').param('currentTime'));
        setPlaying(!playing)
    }
    return (
        <div>
            Converted to pure React<br/>
            {/* using tinary to change the button from pause to start  */}
            <button onClick={toggle} type="button">{playing?"PAUSE":"START"}</button>       
            <hr/>
            {/* All information will go into status, by setStatus */}
            <div>{status}</div>

        </div>
    );
};