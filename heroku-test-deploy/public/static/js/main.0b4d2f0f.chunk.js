(this.webpackJsonpmusiapp=this.webpackJsonpmusiapp||[]).push([[0],{27:function(e,t,n){},47:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n(2),a=n.n(c),s=n(36),r=n.n(s),o=(n(47),n(8)),l=n(4),u=n(5),d=(n(48),n(27),n(53),n(54),n(55),n(3));var j=n(18),h=n(30),p=n(31),b=n(32),f=n(33),v=n(34),O=n(35),g=function(){return Object(i.jsx)(j.c,{className:"react-jinke-music-player-play-icon"})},x=function(){return Object(i.jsx)(j.b,{className:"react-jinke-music-player-pause-icon"})},m=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{class:"form-group",children:[Object(i.jsx)("label",{for:"exampleFormControlSelect1",children:"Example select"}),Object(i.jsxs)("select",{class:"form-control",id:"exampleFormControlSelect1",children:[Object(i.jsx)("option",{children:"1"}),Object(i.jsx)("option",{children:"2"}),Object(i.jsx)("option",{children:"3"}),Object(i.jsx)("option",{children:"4"}),Object(i.jsx)("option",{children:"5"})]})]})})},y=function(){return Object(i.jsx)("div",{style:{height:120},children:Object(i.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(i.jsx)("a",{class:"navbar-brand",children:"Navbar"}),Object(i.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{class:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:[Object(i.jsxs)("ul",{class:"navbar-nav",children:[Object(i.jsx)("li",{class:"nav-item active",children:Object(i.jsxs)(l.b,{to:"/",class:"nav-link",children:[" ",Object(i.jsx)(h.a,{}),"Home"]})}),Object(i.jsx)("li",{class:"nav-item",children:Object(i.jsxs)(l.b,{to:"analyze",class:"nav-link",children:[Object(i.jsx)(j.a,{}),"Analyze  "]})}),Object(i.jsx)("li",{class:"nav-item",children:Object(i.jsxs)(l.b,{to:"Listen",class:"nav-link",children:[" ",Object(i.jsx)(p.a,{})," Listen "]})}),Object(i.jsx)("li",{class:"nav-item",children:Object(i.jsxs)(l.b,{to:"review",class:"nav-link",children:[Object(i.jsx)(b.a,{}),"Review "]})}),Object(i.jsx)("li",{class:"nav-item",children:Object(i.jsx)(l.b,{to:"detailed",class:"nav-link",children:"Detailed Page"})})]}),Object(i.jsx)("form",{class:"form-inline my-2 my-lg-0",children:Object(i.jsx)(m,{})})]})]})})},w=function(){return Object(i.jsx)("div",{children:"Analyze"})},C=function(){return Object(i.jsx)("div",{children:"DetailedPage"})},A=n(26),k=n.n(A),S=n(38),z=n(16),T=n(7),L=n(9),R=n(13),X=n(12),E=function(e){Object(R.a)(n,e);var t=Object(X.a)(n);function n(){var e;Object(T.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={range:{start:0,end:50}},e.canvasRef=Object(c.createRef)(),e.setRange=function(t){e.setState({range:t})},e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.analyzer,t=this.canvasRef.current;e.init(t,this)}},{key:"render",value:function(){var e=this.props,t=e.analyzer,n=e.w,c=e.h,a=this.state.range;return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("div",{children:Object(i.jsx)("canvas",{ref:this.canvasRef,width:n,height:c})})}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("span",{children:[a.start," sec"]})," - ",Object(i.jsxs)("span",{children:[a.end," sec"]}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{onClick:function(){t.play(a.start,a.end)},children:"play"}),Object(i.jsx)("button",{onClick:function(){t.stop()},children:"stop"})]})]})}}]),n}(c.Component),D=function(){function e(t,n){var i=this;Object(T.a)(this,e),this.isDown=!1,this.mode=e.DRAG_MODE_SPRITE,this.offsetX=0,this.startTime=0,this.endTime=0,this.length=0,this.sampleRate=44100,this.onStart=function(e){i.draw(e,e.type,i.getOffsetX(e)),i.isDown=!0},this.onMove=function(e){i.isDown&&(e.preventDefault(),i.draw(e,e.type,i.getOffsetX(e)))},this.onEnd=function(e){i.isDown&&(i.draw(e,e.type,i.getOffsetX(e)),i.isDown=!1)},this.drag=function(t){var n=null,c="",a="",s="";switch(/iPhone|iPad|iPod|Android/.test(navigator.userAgent)?(c="touchstart",a="touchmove",s="touchend"):(c="mousedown",a="mousemove",s="mouseup"),i.graphics){case e.CANVAS:n=i.canvas;break;case e.SVG:n=i.svg;break;default:return i}return i.callback="[object Function]"===Object.prototype.toString.call(t)?t:function(){},n.removeEventListener(c,i.analyzer.onStart,!0),n.removeEventListener(a,i.analyzer.onMove,!0),window.removeEventListener(s,i.analyzer.onEnd,!0),n.addEventListener(c,i.onStart,!0),n.addEventListener(a,i.onMove,!0),window.addEventListener(s,i.onEnd,!0),i.analyzer},this.analyzer=t,this.canvas=n,n instanceof HTMLCanvasElement?(this.graphics=e.CANVAS,this.context=this.canvas.getContext("2d")):n instanceof SVGElement&&(this.graphics=e.SVG),t.drag=this.drag}return Object(L.a)(e,[{key:"getOffsetX",value:function(e){return e.pageX?e.pageX:e.touches[0]?e.touches[0].pageX:this.analyzer}}]),e}();D.DRAG_MODE_UPDATE="update",D.DRAG_MODE_SPRITE="sprite",D.CANVAS="canvas",D.SVG="svg";var q=D,M={interval:"auto",shape:"rect",width:1,grid:"none",top:0,left:0,bottom:0,right:0,wave:"rgb(25,48,255)"},P=function e(){var t=this;Object(T.a)(this,e),this.start=function(e){Object(d.X)("audio").start(e)},this.stop=function(){Object(d.X)("audio").stop()},this.toggle=function(){Object(d.X)("audio").toggle(Object(d.X)("audio").param("currentTime"))},this.jumpTo=function(e){Object(d.X)("audio").param("currentTime",e)},this.register=function(e){t.audioEventListener=e},this.playClip=function(e,t){Object(d.X)("audio").start(e,t)},this.canPlay=function(){return Object(d.X)("audio").isSource()},this.sourcePlay=function(e,t){var n=Object(d.X)("audio").sprite({selected:[e,t]}),i=d.X.get(),c=i.createBufferSource();c.buffer=n.selected,c.connect(i.destination),c.start(0)},this.getTimeAnalyzer=function(e){var t=Object(d.X)("audio").module("analyser").domain("time");return t.setup(e).state(!0),t.param(M),t},this.getFftAnalyzer=function(e){var t=Object(d.X)("audio").module("analyser").domain("fft");return t.setup(e).state(!0),t.param(M),t},this.createOverviewAnalyzer=function(){return{init:function(e,n){t.overViewAnalyzer=n;var i=Object(d.X)("audio").module("analyser").domain("timeoverview",0);Object(d.X)("audio").param("loop",!0),i.setup(e).state(!0),i.param("mode","sprite"),i.drag((function(e,i,c){var a={start:i,end:c};t.stop(),n.setRange(a),t.audioEventListener.setTimeOverviewRange(a)})),new q(i,e),i.param(M)},stop:function(){t.stop()},play:function(e,n){t.playClip(e,n)}}},this.createAnalyzer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,c=t.createOverviewAnalyzer(),a="timeOverview-".concat((new Date).getTime());return Object(i.jsx)(E,{analyzer:c,w:e,h:n},a)},this.doLoad=function(e,n){console.log("X('audio').start"),Object(d.X)("audio").resize(16384),Object(d.X)("audio").setup({decode:function(e){console.log("decode"),console.dir(e)},ready:function(e){console.log("ready"),t.jumpTo(0),n.ready(e.duration)},start:function(e,t){console.log("start"),console.dir(e),console.dir(t)},stop:function(e,t){console.log("stop"),console.dir(e),console.dir(t)},update:function(e,i){Math.floor(i*e.buffer.sampleRate)%(.1*e.buffer.sampleRate)===0&&(n.progress(i),t.ClipCb&&t.ClipCb(i),t.audioEventListener.progress(i))},ended:function(e,t){console.log("ended"),console.dir(e),console.dir(t),n.ended()},error:function(e){e instanceof Error?window.alert(e.message):window.alert("Error : decodeAudioData")}}),n.createAnalyzers&&n.createAnalyzers(),d.X.ajax({url:e,timeout:6e4,success:function(e,t){Object(d.X)("audio").ready.call(Object(d.X)("audio"),t)},error:function(e,t){console.log("error"),console.dir(e),console.dir(t)},progress:function(e){console.log("progress"),console.dir(e)}})}},N=function e(t){var n=this;Object(T.a)(this,e),this.registeredClips=[],this.techniqueGroups=[],this.registerClip=function(e){n.registeredClips.push(e),console.log("register: ".concat(e)),console.log("size: ".concat(n.registeredClips.length))},this.unregisterClip=function(e){n.registeredClips=n.registeredClips.filter((function(t){return t!==e})),n.registeredClips.length<=0&&(n.currentClip=void 0),console.log("unRegister: ".concat(e)),console.log("size: ".concat(n.registeredClips.length))},this.progress=function(e){n.currentClip&&n.currentClip.progress(e)},this.stopAll=function(){n.registeredClips.forEach((function(e){e.stop()}))},this.requestFocus=function(e){n.stopAll(),n.currentClip=n.registeredClips.find((function(t){return t.getId()===e}))},this.getTimeAnalyzer=function(e){return n.audio.getTimeAnalyzer(e)},this.getFftAnalyzer=function(e){return n.audio.getFftAnalyzer(e)},this.setTimeOverviewRange=function(e){n.stopAll(),n.timeOverviewRange=e},this.registerTechnique=function(e,t){n.techniqueGroups[e]=t},this.addClipToTechnique=function(e){var t=n.techniqueGroups[e];t&&t.addClip()},this.audio=t,t.register(this)},V=Object(c.createContext)(),F=(c.Component,n(39)),G=n(41),I=n(40),_=n.n(I),B=function(e){Object(R.a)(n,e);var t=Object(X.a)(n);function n(){var e;Object(T.a)(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={playing:!1,posValue:0,id:e.props.id,start:e.props.start,end:e.props.end,currentPos:e.props.start},e.deleteClip=function(){e.props.onDelete(e.props.id)},e.progress=function(t){var n=e.context.audio,i=e.state,c=i.start,a=i.end,s=(i.currentPos,t-Math.floor(c));e.setState({posValue:s,currentPos:t}),t>=a&&(e.setState({posValue:0}),n.jumpTo(c))},e.stop=function(){e.state.playing&&(e.setState({playing:!1}),e.context.audio.stop())},e.toggle=function(){var t=e.context.audio,n=e.state,i=n.id,c=n.playing,a=n.currentPos;c||(e.context.audioListener.requestFocus(i),t.jumpTo(a)),t.toggle(),e.setState({playing:!c})},e.getId=function(){return e.state.id},e.toString=function(){return e.getId()},e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){this.context.audioListener.registerClip(this)}},{key:"componentWillUnmount",value:function(){this.stop(),this.context.audioListener.unregisterClip(this)}},{key:"render",value:function(){var e=this.state,t=e.playing,n=e.posValue,c=e.start,a=e.end,s=_.a.range(Math.floor(c),Math.floor(a)+1).length;return Object(i.jsx)("div",{className:"audio-clip",style:{width:100},children:Object(i.jsxs)("span",{children:[Object(i.jsx)("span",{onClick:this.toggle,children:t?Object(i.jsx)(x,{}):Object(i.jsx)(g,{})}),Object(i.jsx)("input",{onChange:function(e){console.log(e.target.value)},type:"range",min:0,max:s,value:n,style:{width:"60%"}}),Object(i.jsx)(O.a,{onClick:this.deleteClip})]})})}}]),n}(c.Component);B.contextType=V;var H=function(e){Object(R.a)(n,e);var t=Object(X.a)(n);function n(){var e;Object(T.a)(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={clipList:[]},e.addClip=function(){if(e.state.clipList.length<e.props.max){var t=e.context.audioListener.timeOverviewRange;if(t){var n=Math.floor(t.end-t.start);if(n>10){var i=(new Date).getTime(),c=[].concat(Object(G.a)(e.state.clipList),[Object(F.a)({id:i},t)]);e.setState({clipList:c})}else alert("Selected clips of ".concat(n," is less than 10secs"))}}else alert("Cannot exceeded max clips of ".concat(e.props.max))},e.deleteClip=function(t){var n=e.state.clipList.filter((function(e){return e.id!==t}));e.setState({clipList:n})},e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.technique;this.context.audioListener.registerTechnique(e,this)}},{key:"render",value:function(){var e=this,t=this.state.clipList,n=this.props.technique;return Object(i.jsx)(i.Fragment,{children:t&&t.length>0&&Object(i.jsx)("div",{className:"clip-container",style:{background:$[n]},children:Object(i.jsx)("ul",{id:"navlist",children:t.map((function(t,n){return Object(i.jsx)("li",{children:Object(i.jsx)(B,{id:t.id,start:t.start,end:t.end,onDelete:function(){return e.deleteClip(t.id)}})},t.id)}))})})})}}]),n}(c.Component);H.contextType=V;var J=function(e){Object(R.a)(n,e);var t=Object(X.a)(n);function n(){var e;Object(T.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).canvasRef=Object(c.createRef)(),e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=this.canvasRef.current;this.context.audioListener.getTimeAnalyzer(e)}},{key:"render",value:function(){var e=this.props,t=e.w,n=e.h;return Object(i.jsx)("div",{children:Object(i.jsx)("svg",{ref:this.canvasRef,width:t,height:n})})}}]),n}(c.Component);J.contextType=V;var U,W=function(e){Object(R.a)(n,e);var t=Object(X.a)(n);function n(){var e;Object(T.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).canvasRef=Object(c.createRef)(),e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=this.canvasRef.current;this.context.audioListener.getFftAnalyzer(e)}},{key:"render",value:function(){var e=this.props,t=e.w,n=e.h;return Object(i.jsx)("div",{children:Object(i.jsx)("svg",{ref:this.canvasRef,width:t,height:n})})}}]),n}(c.Component);W.contextType=V;var K="http://localhost:3030",Q="Metaphor",Y="Punch_line",Z="Imagery",$=(U={},Object(z.a)(U,Q,"#2e8b57"),Object(z.a)(U,Y,"rgba(255,105,104,0.96)"),Object(z.a)(U,Z,"#237aff"),U),ee=function(){var e=Object(c.useRef)(),t=Object(c.useContext)(V),n=t.audio,a=t.audioListener,s=Object(c.useState)(!1),r=Object(o.a)(s,2),l=(r[0],r[1]),u=Object(c.useState)(!1),d=Object(o.a)(u,2),j=d[0],h=d[1],p=Object(c.useState)(0),b=Object(o.a)(p,2),O=(b[0],b[1]),g=Object(c.useState)(0),x=Object(o.a)(g,2),m=(x[0],x[1]),y=Object(c.useState)([]),w=Object(o.a)(y,2),C=w[0],A=w[1],z=Object(c.useState)(Object(i.jsx)("div",{})),T=Object(o.a)(z,2),L=T[0],R=T[1];Object(c.useEffect)((function(){(function(){var e=Object(S.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(K,"/audio/playlist"));case 3:if(!(t=e.sent).ok){e.next=9;break}return e.next=7,t.json();case 7:n=e.sent,A(n);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert('problem loading songs: "'.concat(e.t0.message,'"'));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var X=function(e){var t=e.key,n=e.technique;return Object(i.jsx)("li",{onClick:function(){return function(e){a.addClipToTechnique(e)}(n)},style:{background:$[n],cursor:"pointer"},children:Object(i.jsxs)("span",{children:[Object(i.jsx)(f.a,{})," Add to ",n]})},t)};return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{style:{textAlign:"left",padding:10},children:[Object(i.jsx)(v.a,{}),Object(i.jsx)("select",{onChange:function(t){n&&n.stop(),l(!1),h(!1),function(t){var i="".concat(K,"/audio/load/").concat(t);n.doLoad(i,{ready:function(e){O(0),h(!0),m(e)},ended:function(){l(!1),O(0)},progress:function(e){O(e)},createAnalyzers:function(){R(n.createAnalyzer(795,100))}},e.current)}(t.target.value)},children:C.map((function(e,t){return Object(i.jsxs)("option",{value:t,children:[e.title," ","  ----  "," [",e.artists,"]"]},t)}))})]}),j&&Object(i.jsxs)("div",{children:[Object(i.jsx)("hr",{}),Object(i.jsx)(W,{w:80,h:50},1),Object(i.jsx)(J,{w:150,h:50},2),Object(i.jsx)("br",{})]}),L,j&&Object(i.jsxs)("div",{children:[Object(i.jsxs)("ul",{className:"technique",children:[Object(i.jsx)(X,{technique:Q},1),Object(i.jsx)(X,{technique:Y},2),Object(i.jsx)(X,{technique:Z},3)]}),Object(i.jsx)(H,{technique:Q,max:4}),Object(i.jsx)(H,{technique:Y,max:2}),Object(i.jsx)(H,{technique:Z,max:3})]})]})},te=function(){return Object(i.jsxs)("div",{children:["Landing Page",Object(i.jsx)(ee,{})]})},ne=function(){return Object(i.jsxs)("div",{children:["Listen",Object(i.jsxs)("div",{class:"card text-center",children:[Object(i.jsx)("div",{class:"card-header",children:"Song Title"}),Object(i.jsx)("div",{class:"song-container",children:Object(i.jsx)("div",{class:"song-box",children:Object(i.jsx)("div",{class:"selector",children:Object(i.jsx)("div",{class:"selector-left"})})})}),Object(i.jsx)("div",{class:"card-footer text-muted"})]})]})},ie=function(){return Object(i.jsx)("div",{children:"Review"})},ce=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(u.a,{exact:!0,path:"/",component:te}),Object(i.jsx)(u.a,{exact:!0,path:"/analyze",component:w}),Object(i.jsx)(u.a,{exact:!0,path:"/listen",component:ne}),Object(i.jsx)(u.a,{exact:!0,path:"/review",component:ie}),Object(i.jsx)(u.a,{exact:!0,path:"/detailed",component:C})]})},ae=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(l.a,{children:[Object(i.jsx)(y,{}),Object(i.jsx)("div",{style:{height:"calc(100vh - 120px)"},children:Object(i.jsx)(ce,{})})]})})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(ae,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.0b4d2f0f.chunk.js.map