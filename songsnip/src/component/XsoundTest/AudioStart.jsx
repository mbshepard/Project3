import   React, {useEffect} from 'react';
import {X} from 'xsound'

//from: https://xsound.dev/#/audio/start
export function AudioStart(props) {
    useEffect(() => {
        start()
    }, []);
// used useEffect to start the audio, thats all was needed
    const start=()=>{
        console.log("X('audio').start");

        X('audio').resize(16384);

        X('audio').setup({
            ready : buffer => {
                document.querySelector('button').addEventListener('click', event => {
                    if (X('audio').isPaused()) {
                        X('audio').start(X('audio').param('currentTime'));
                        event.currentTarget.textContent = 'PAUSE';
                    } else {
                        X('audio').stop();
                        event.currentTarget.textContent = 'START';
                    }
                }, false);
            },
            start : (source, currentTime) => {
                console.log('start');
                console.dir(source);
                console.dir(currentTime);
            },
            stop : (source, currentTime) => {
                console.log('stop');
                console.dir(source);
                console.dir(currentTime);
            },
            update : (source, currentTime) => {
                const index = Math.floor(currentTime * source.buffer.sampleRate)
                const n100msec = 0.100 * source.buffer.sampleRate;

                if ((index % n100msec) !== 0) {
                    return;
                }

                console.log('update');
                console.dir(source);
                console.dir(currentTime);
            },
            ended : (source, currentTime) => {
                console.log('ended');
                console.dir(source);
                console.dir(currentTime);

                document.querySelector('button').textContent = 'START';
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
            }
        });
    };

    return (
        // then rendered the html as reac
        <div>
            <button type="button">START</button>
            <hr/>
            As it is from : <a href={'https://xsound.dev/#/audio/start'}>
            XSound > Audio > Start
        </a>
        </div>
    );
};