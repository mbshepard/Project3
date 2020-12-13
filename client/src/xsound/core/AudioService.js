import {X} from "xsound";

const param={
    interval: 'auto',
    shape        : 'rect',
    width: 1,
    grid: 'none',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // wave: 'rgb(255,31,46)',
    wave: 'rgb(25,48,255)',
    // textinterval : 10
};

class AudioService {

    audioEventListener;

    start = (pos) => {
        X('audio').start(pos);
    };

    stop = () => {
        X('audio').stop();
    };

    toggle = () => {
        X('audio').toggle(X('audio').param('currentTime'));
    };

    jumpTo = (pos) => {
        X('audio').param('currentTime', pos);    // The range of value is between 0 and audio duration
    };

    register=(listener)=>{
      this.audioEventListener=listener;
    }

    playRange=(start,end)=>{

        X('audio').start(start, end);
    };

    canPlay=()=>{
        return X('audio').isSource();
    };

    sourcePlay=(start,end)=>{
        const buffer = X('audio').sprite({ selected : [start, end] });
        const context = X.get();
        const source  = context.createBufferSource();

        source.buffer = buffer.selected;

        source.connect(context.destination);

        source.start(0);

    };
    createTimeAnalyzer=(canvas)=>{
        const analyzer = X('audio').module('analyser').domain('time');
        analyzer.setup(canvas).state(true);
        analyzer.param(param);
        return analyzer;

    }
    createFftAnalyzer=(canvas)=>{
        const analyzer = X('audio').module('analyser').domain('fft');
        analyzer.setup(canvas).state(true);
        analyzer.param(param);
        return analyzer;
    }

    createOverviewAnalyzer=()=>{
        return {
            init: (canvas) => {

                const analyzer = X('audio').module('analyser').domain("timeoverview", 0);
                // X('audio').param('loop', true);
                analyzer.setup(canvas).state(true);

                analyzer.param('mode', 'sprite');

                analyzer.drag((event, startTime, endTime) => {
                    const range={start: startTime, end: endTime};
                    this.stop();
                    // overView.setRange(range);
                    this.audioEventListener.setTimeOverviewRange(range);

                });
                // new EventOverrides(analyzer, canvas);

                analyzer.param(param);
            }

        };
    };


    createAnalyzer = () => {

           const analyzer=this.createOverviewAnalyzer();
            const key=`timeOverview-${new Date().getTime()}`;
            return analyzer;

    };

    doLoad = (fileName, cb) => {

        console.log("X('audio').start");

        X('audio').resize(16384);

        X('audio').setup({
            decode: (arrayBuffer) => {
                // The 1st argument is the instance of `ArrayBuffer`
                console.log('decode');
                console.dir(arrayBuffer);
            },
            ready: (audioBuffer) => {
                // The 1st argument is the instance of `AudioBuffer`
                console.log('ready');
                this.jumpTo(0);
                this.audioEventListener.loaded(audioBuffer.duration)
            },
            start: (source, currentTime) => {
                // The 1st argument is the instance of `AudioBufferSourceNode`
                // The 2nd argument is current time (position) in the played audio
                console.log('start');
                console.dir(source);
                console.dir(currentTime);
            },
            stop: (source, currentTime) => {
                // The 1st argument is the instance of `AudioBufferSourceNode`
                // The 2nd argument is current time (position) in the played audio
                console.log('stop');
                console.dir(source);
                console.dir(currentTime);
            },
            update: (source, currentTime) => {
                const index = Math.floor(currentTime * source.buffer.sampleRate)
                const n100msec = 0.100 * source.buffer.sampleRate;

                if ((index % n100msec) !== 0) {
                    return;
                }

                // console.log('update');
                // console.dir(source);
                // console.dir(currentTime);
                // cb.progress(currentTime);
                if (this.ClipCb){
                    this.ClipCb(currentTime)
                }

                this.audioEventListener.progress(currentTime);

            },
            ended: (source, currentTime) => {
                // The 1st argument is the instance of `AudioBufferSourceNode`
                // The 2nd argument is current time (position) in audio
                console.log('ended');
                console.dir(source);
                console.dir(currentTime);

                // cb.ended();
            },
            error: error => {
                // The 1st argument is either `Error` or `null`
                if (error instanceof Error) {
                    window.alert(error.message);
                } else {
                    window.alert('Error : decodeAudioData');
                }
            }
        });

        // this.initAnalyser(canvas);
        if (cb.createAnalyzers) {
            cb.createAnalyzers();
        }

        X.ajax({
            url: fileName,
            timeout: 60000,
            success: (event, arrayBuffer) => {
                // The 1st argument is `XMLHttpRequestProgressEvent`
                // The 2nd argument is `ArrayBuffer`[ArrayBuffer -> AudioBuffer]


                    X('audio').ready.call(X('audio'), arrayBuffer);


            },
            error: (event, textStatus) => {
                // The 1st argument is `XMLHttpRequestProgressEvent`
                // The 2nd argument is either 'error' or 'timeout'

                console.log('error');
                console.dir(event);
                console.dir(textStatus);
            },
            progress: (event) => {
                // The 1st argument is `XMLHttpRequestProgressEvent`

                console.log('progress');
                console.dir(event);
            }
        });
    }

}

export default AudioService;