

class EventOverrides  {
    static DRAG_MODE_UPDATE = 'update';
    static DRAG_MODE_SPRITE = 'sprite';

    static CANVAS = 'canvas';
    static SVG    = 'svg';


    analyzer;
    isDown = false;
    canvas;
    graphics;
    mode=EventOverrides.DRAG_MODE_SPRITE;
    // for Audio Sprite
    offsetX   = 0;
    startTime = 0;
    endTime   = 0;
    length=0;
    sampleRate=44100;



    constructor(analyzer,canvas){
        this.analyzer=analyzer;
        this.canvas=canvas;


        if (canvas instanceof HTMLCanvasElement) {
            this.graphics = EventOverrides.CANVAS;
            this.context  = this.canvas.getContext('2d');
        } else if (canvas instanceof SVGElement) {
            this.graphics = EventOverrides.SVG;
        }
        analyzer.drag=this.drag;

        // this.superDraw=analyzer.draw;
        // analyzer.draw=this.draw;

    }

    /**
     * This method is event audioEventlistener for drawing the rectangle.
     * @param {Event} event This argument is the instance of `Event`.
     */
    onStart=(event) =>{
        this.draw(event, event.type, this.getOffsetX(event));
        this.isDown = true;
    }

    /**
     * This method is event audioEventlistener for drawing the rectangle.
     * @param {Event} event This argument is the instance of `Event`.
     */
    onMove=(event) =>{
        if (this.isDown) {
            event.preventDefault();  // for Touch Panel
            this.draw(event, event.type, this.getOffsetX(event));
        }


    }

    /**
     * This method is event audioEventlistener for drawing the rectangle.
     * @param {Event} event This argument is the instance of `Event`.
     */
    onEnd=(event) =>{
        if (this.isDown) {

            this.draw(event, event.type, this.getOffsetX(event));
            this.isDown = false;
        }

    }

    /**
     * This method returns X coordinate from `Event` object.
     * @param {Event} event This argument is the instance of `Event`.
     * @return {number} This is returned as X coordinate.
     */
    getOffsetX(event) {
        if (event.pageX) {
            return event.pageX;
        }

        if (event.touches[0]) {
            return event.touches[0].pageX;
        }

        return this.analyzer;
    }

    /**
     * This method registers event audioEventlistener for setting current time by drag.
     * @param {function} callback This argument is invoked when current time is changed.
     * @return {TimeOverviewAnalyzer} This is returned for method chain.
     */
    drag=(callback) =>{
        let drawNode = null;

        let start = '';
        let move  = '';
        let end   = '';

        // Touch Panel ?
        if (/iPhone|iPad|iPod|Android/.test(navigator.userAgent)) {
            start = 'touchstart';
            move  = 'touchmove';
            end   = 'touchend';
        } else {
            start = 'mousedown';
            move  = 'mousemove';
            end   = 'mouseup';
        }

        switch (this.graphics) {
            case EventOverrides.CANVAS:
                drawNode = this.canvas;
                break;
            case EventOverrides.SVG:
                drawNode = this.svg;
                break;
            default:
                return this;
        }

        this.callback = Object.prototype.toString.call(callback) === '[object Function]' ? callback : () => {};


        drawNode.removeEventListener(start, this.analyzer.onStart, true);
        drawNode.removeEventListener(move, this.analyzer.onMove, true);
        window.removeEventListener(end, this.analyzer.onEnd, true);

        drawNode.addEventListener(start, this.onStart, true);
        drawNode.addEventListener(move, this.onMove, true);
        window.addEventListener(end, this.onEnd, true);

        return this.analyzer;
    }



}

export default EventOverrides;