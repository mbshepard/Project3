(this.webpackJsonpmusiapp=this.webpackJsonpmusiapp||[]).push([[0],{50:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(1),c=n.n(i),r=n(39),s=n.n(r),o=(n(50),n(10)),l=n(20),u=n(30),d=n(31),j=n(32),h=n(33),p=n(34),b=n(35),O=function(){return Object(a.jsx)(l.c,{className:"react-jinke-music-player-play-icon"})},f=function(){return Object(a.jsx)(l.b,{className:"react-jinke-music-player-pause-icon"})},v=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{class:"form-group",children:[Object(a.jsx)("label",{for:"exampleFormControlSelect1",children:"Example select"}),Object(a.jsxs)("select",{class:"form-control",id:"exampleFormControlSelect1",children:[Object(a.jsx)("option",{children:"1"}),Object(a.jsx)("option",{children:"2"}),Object(a.jsx)("option",{children:"3"}),Object(a.jsx)("option",{children:"4"}),Object(a.jsx)("option",{children:"5"})]})]})})},x=function(){return Object(a.jsx)("div",{style:{height:120},children:Object(a.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(a.jsx)("a",{class:"navbar-brand",children:"Navbar"}),Object(a.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{class:"navbar-toggler-icon"})}),Object(a.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:[Object(a.jsxs)("ul",{class:"navbar-nav",children:[Object(a.jsx)("li",{class:"nav-item active",children:Object(a.jsxs)(o.b,{to:"/",class:"nav-link",children:[" ",Object(a.jsx)(u.a,{}),"Home"]})}),Object(a.jsx)("li",{class:"nav-item",children:Object(a.jsxs)(o.b,{to:"analyze",class:"nav-link",children:[Object(a.jsx)(l.a,{}),"Analyze  "]})}),Object(a.jsx)("li",{class:"nav-item",children:Object(a.jsxs)(o.b,{to:"Listen",class:"nav-link",children:[" ",Object(a.jsx)(d.a,{})," Listen "]})}),Object(a.jsx)("li",{class:"nav-item",children:Object(a.jsxs)(o.b,{to:"review",class:"nav-link",children:[Object(a.jsx)(j.a,{}),"Review "]})}),Object(a.jsx)("li",{class:"nav-item",children:Object(a.jsx)(o.b,{to:"detailed",class:"nav-link",children:"Detailed Page"})})]}),Object(a.jsx)("form",{class:"form-inline my-2 my-lg-0",children:Object(a.jsx)(v,{})})]})]})})},g=n(7),m=n(29),y=n.n(m),w=n(41),C=n(18),A=n(19),k=n(9),L=n(11),S=n(15),z=n(14),T=n(8),E=function(e){Object(S.a)(n,e);var t=Object(z.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={range:{start:0,end:50}},e.canvasRef=Object(i.createRef)(),e.setRange=function(t){e.setState({range:t})},e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.analyzer,t=this.canvasRef.current;e.init(t,this)}},{key:"render",value:function(){var e=this.props,t=e.analyzer,n=e.w,i=e.h,c=this.state.range;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{children:[c.start," sec"]})," - ",Object(a.jsxs)("span",{children:[c.end," sec"]}),Object(a.jsx)("br",{}),Object(a.jsx)("canvas",{ref:this.canvasRef,width:n,height:i})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){t.play(c.start,c.end)},children:"play"}),Object(a.jsx)("button",{onClick:function(){t.stop()},children:"stop"})]})]})}}]),n}(i.Component),R=function(){function e(t,n){var a=this;Object(k.a)(this,e),this.isDown=!1,this.mode=e.DRAG_MODE_SPRITE,this.offsetX=0,this.startTime=0,this.endTime=0,this.length=0,this.sampleRate=44100,this.onStart=function(e){a.draw(e,e.type,a.getOffsetX(e)),a.isDown=!0},this.onMove=function(e){a.isDown&&(e.preventDefault(),a.draw(e,e.type,a.getOffsetX(e)))},this.onEnd=function(e){a.isDown&&(a.draw(e,e.type,a.getOffsetX(e)),a.isDown=!1)},this.drag=function(t){var n=null,i="",c="",r="";switch(/iPhone|iPad|iPod|Android/.test(navigator.userAgent)?(i="touchstart",c="touchmove",r="touchend"):(i="mousedown",c="mousemove",r="mouseup"),a.graphics){case e.CANVAS:n=a.canvas;break;case e.SVG:n=a.svg;break;default:return a}return a.callback="[object Function]"===Object.prototype.toString.call(t)?t:function(){},n.removeEventListener(i,a.analyzer.onStart,!0),n.removeEventListener(c,a.analyzer.onMove,!0),window.removeEventListener(r,a.analyzer.onEnd,!0),n.addEventListener(i,a.onStart,!0),n.addEventListener(c,a.onMove,!0),window.addEventListener(r,a.onEnd,!0),a.analyzer},this.analyzer=t,this.canvas=n,n instanceof HTMLCanvasElement?(this.graphics=e.CANVAS,this.context=this.canvas.getContext("2d")):n instanceof SVGElement&&(this.graphics=e.SVG),t.drag=this.drag}return Object(L.a)(e,[{key:"getOffsetX",value:function(e){return e.pageX?e.pageX:e.touches[0]?e.touches[0].pageX:this.analyzer}}]),e}();R.DRAG_MODE_UPDATE="update",R.DRAG_MODE_SPRITE="sprite",R.CANVAS="canvas",R.SVG="svg";var X=R,D={interval:"auto",shape:"rect",width:1,grid:"none",top:0,left:0,bottom:0,right:0,wave:"rgb(25,48,255)"},q=function e(){var t=this;Object(k.a)(this,e),this.start=function(e){Object(T.X)("audio").start(e)},this.stop=function(){Object(T.X)("audio").stop()},this.toggle=function(){Object(T.X)("audio").toggle(Object(T.X)("audio").param("currentTime"))},this.jumpTo=function(e){Object(T.X)("audio").param("currentTime",e)},this.register=function(e){t.audioEventListener=e},this.playClip=function(e,t){Object(T.X)("audio").start(e,t)},this.canPlay=function(){return Object(T.X)("audio").isSource()},this.sourcePlay=function(e,t){var n=Object(T.X)("audio").sprite({selected:[e,t]}),a=T.X.get(),i=a.createBufferSource();i.buffer=n.selected,i.connect(a.destination),i.start(0)},this.getTimeAnalyzer=function(e){var t=Object(T.X)("audio").module("analyser").domain("time");return t.setup(e).state(!0),t.param(D),t},this.getFftAnalyzer=function(e){var t=Object(T.X)("audio").module("analyser").domain("fft");return t.setup(e).state(!0),t.param(D),t},this.createOverviewAnalyzer=function(){return{init:function(e,n){t.overViewAnalyzer=n;var a=Object(T.X)("audio").module("analyser").domain("timeoverview",0);Object(T.X)("audio").param("loop",!0),a.setup(e).state(!0),a.param("mode","sprite"),a.drag((function(e,a,i){var c={start:a,end:i};t.stop(),n.setRange(c),t.audioEventListener.setTimeOverviewRange(c)})),new X(a,e),a.param(D)},stop:function(){t.stop()},play:function(e,n){t.playClip(e,n)}}},this.createAnalyzer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,i=t.createOverviewAnalyzer(),c="timeOverview-".concat((new Date).getTime());return Object(a.jsx)(E,{analyzer:i,w:e,h:n},c)},this.doLoad=function(e,n){console.log("X('audio').start"),Object(T.X)("audio").resize(16384),Object(T.X)("audio").setup({decode:function(e){console.log("decode"),console.dir(e)},ready:function(e){console.log("ready"),t.jumpTo(0),n.ready(e.duration)},start:function(e,t){console.log("start"),console.dir(e),console.dir(t)},stop:function(e,t){console.log("stop"),console.dir(e),console.dir(t)},update:function(e,a){Math.floor(a*e.buffer.sampleRate)%(.1*e.buffer.sampleRate)===0&&(n.progress(a),t.ClipCb&&t.ClipCb(a),t.audioEventListener.progress(a))},ended:function(e,t){console.log("ended"),console.dir(e),console.dir(t),n.ended()},error:function(e){e instanceof Error?window.alert(e.message):window.alert("Error : decodeAudioData")}}),n.createAnalyzers&&n.createAnalyzers(),T.X.ajax({url:e,timeout:6e4,success:function(e,t){Object(T.X)("audio").ready.call(Object(T.X)("audio"),t)},error:function(e,t){console.log("error"),console.dir(e),console.dir(t)},progress:function(e){console.log("progress"),console.dir(e)}})}},M=function e(t){var n=this;Object(k.a)(this,e),this.registeredClips=[],this.techniqueGroups=[],this.registerClip=function(e){n.registeredClips.push(e),console.log("register: ".concat(e)),console.log("size: ".concat(n.registeredClips.length))},this.unregisterClip=function(e){n.registeredClips=n.registeredClips.filter((function(t){return t!==e})),n.registeredClips.length<=0&&(n.currentClip=void 0),console.log("unRegister: ".concat(e)),console.log("size: ".concat(n.registeredClips.length))},this.progress=function(e){n.currentClip&&n.currentClip.progress(e)},this.stopAll=function(){n.registeredClips.forEach((function(e){e.stop()}))},this.requestFocus=function(e){n.stopAll(),n.currentClip=n.registeredClips.find((function(t){return t.getId()===e}))},this.getTimeAnalyzer=function(e){return n.audio.getTimeAnalyzer(e)},this.getFftAnalyzer=function(e){return n.audio.getFftAnalyzer(e)},this.setTimeOverviewRange=function(e){n.stopAll(),n.timeOverviewRange=e},this.registerTechnique=function(e,t){n.techniqueGroups[e]=t},this.addClipToTechnique=function(e){var t=n.techniqueGroups[e];t&&t.addClip()},this.audio=t,t.register(this)},N=Object(i.createContext)(),P=function(e){Object(S.a)(n,e);var t=Object(z.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){var e=new q,t=new M(e);return Object(a.jsx)(N.Provider,{value:{audio:e,audioListener:t},children:this.props.children})}}]),n}(i.Component),G=n(42),F=n(44),V=n(43),I=n.n(V),_=function(e){Object(S.a)(n,e);var t=Object(z.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={playing:!1,posValue:0,id:e.props.id,start:e.props.start,end:e.props.end,currentPos:e.props.start},e.deleteClip=function(){e.props.onDelete(e.props.id)},e.progress=function(t){var n=e.context.audio,a=e.state,i=a.start,c=a.end,r=(a.currentPos,t-Math.floor(i));e.setState({posValue:r,currentPos:t}),t>=c&&(e.setState({posValue:0}),n.jumpTo(i))},e.stop=function(){e.state.playing&&(e.setState({playing:!1}),e.context.audio.stop())},e.toggle=function(){var t=e.context.audio,n=e.state,a=n.id,i=n.playing,c=n.currentPos;i||(e.context.audioListener.requestFocus(a),t.jumpTo(c)),t.toggle(),e.setState({playing:!i})},e.getId=function(){return e.state.id},e.toString=function(){return e.getId()},e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){this.context.audioListener.registerClip(this)}},{key:"componentWillUnmount",value:function(){this.stop(),this.context.audioListener.unregisterClip(this)}},{key:"render",value:function(){var e=this.state,t=e.playing,n=e.posValue,i=e.start,c=e.end,r=I.a.range(Math.floor(i),Math.floor(c)+1).length;return Object(a.jsx)("div",{className:"audio-clip",style:{width:100},children:Object(a.jsxs)("span",{children:[Object(a.jsx)("span",{onClick:this.toggle,children:t?Object(a.jsx)(f,{}):Object(a.jsx)(O,{})}),Object(a.jsx)("input",{onChange:function(e){console.log(e.target.value)},type:"range",min:0,max:r,value:n,style:{width:"60%"}}),Object(a.jsx)(b.a,{onClick:this.deleteClip})]})})}}]),n}(i.Component);_.contextType=N;var B=function(e){Object(S.a)(n,e);var t=Object(z.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={clipList:[]},e.addClip=function(){if(e.state.clipList.length<e.props.max){var t=e.context.audioListener.timeOverviewRange;if(t){var n=Math.floor(t.end-t.start);if(n>10){var a=(new Date).getTime(),i=[].concat(Object(F.a)(e.state.clipList),[Object(G.a)({id:a},t)]);e.setState({clipList:i})}else alert("Selected clips of ".concat(n," is less than 10secs"))}}else alert("Cannot exceeded max clips of ".concat(e.props.max))},e.deleteClip=function(t){var n=e.state.clipList.filter((function(e){return e.id!==t}));e.setState({clipList:n})},e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.technique;this.context.audioListener.registerTechnique(e,this)}},{key:"render",value:function(){var e=this,t=this.state.clipList,n=this.props.technique;return Object(a.jsx)(a.Fragment,{children:t&&t.length>0&&Object(a.jsx)("div",{className:"clip-container",style:{background:Y[n]},children:Object(a.jsx)("ul",{id:"navlist",children:t.map((function(t,n){return Object(a.jsx)("li",{children:Object(a.jsx)(_,{id:t.id,start:t.start,end:t.end,onDelete:function(){return e.deleteClip(t.id)}})},t.id)}))})})})}}]),n}(i.Component);B.contextType=N;var H=function(e){Object(S.a)(n,e);var t=Object(z.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).canvasRef=Object(i.createRef)(),e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=this.canvasRef.current;this.context.audioListener.getTimeAnalyzer(e)}},{key:"render",value:function(){var e=this.props,t=e.w,n=e.h;return Object(a.jsx)("div",{children:Object(a.jsx)("svg",{ref:this.canvasRef,width:t,height:n})})}}]),n}(i.Component);H.contextType=N;var J,U=function(e){Object(S.a)(n,e);var t=Object(z.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).canvasRef=Object(i.createRef)(),e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=this.canvasRef.current;this.context.audioListener.getFftAnalyzer(e)}},{key:"render",value:function(){var e=this.props,t=e.w,n=e.h;return Object(a.jsx)("div",{children:Object(a.jsx)("svg",{ref:this.canvasRef,width:t,height:n})})}}]),n}(i.Component);U.contextType=N;var W="Metaphor",K="Punch_line",Q="Imagery",Y=(J={},Object(A.a)(J,W,"#2e8b57"),Object(A.a)(J,K,"rgba(255,105,104,0.96)"),Object(A.a)(J,Q,"#237aff"),J),Z=function(){var e=Object(i.useRef)(),t=Object(i.useContext)(N),n=t.audio,c=t.audioListener,r=Object(i.useState)(!1),s=Object(C.a)(r,2),o=(s[0],s[1]),l=Object(i.useState)(!1),u=Object(C.a)(l,2),d=u[0],j=u[1],b=Object(i.useState)(0),O=Object(C.a)(b,2),f=(O[0],O[1]),v=Object(i.useState)(0),x=Object(C.a)(v,2),g=(x[0],x[1]),m=Object(i.useState)([]),A=Object(C.a)(m,2),k=A[0],L=A[1],S=Object(i.useState)(Object(a.jsx)("div",{})),z=Object(C.a)(S,2),T=z[0],E=z[1];Object(i.useEffect)((function(){(function(){var e=Object(w.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("","/audio/playlist"));case 3:if(!(t=e.sent).ok){e.next=9;break}return e.next=7,t.json();case 7:n=e.sent,L(n);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert('problem loading songs: "'.concat(e.t0.message,'"'));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var R=function(e){var t=e.key,n=e.technique;return Object(a.jsx)("li",{onClick:function(){return function(e){c.addClipToTechnique(e)}(n)},style:{background:Y[n],cursor:"pointer"},children:Object(a.jsxs)("span",{children:[Object(a.jsx)(h.a,{})," Add to ",n]})},t)};return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{style:{textAlign:"left",padding:10},children:[Object(a.jsx)(p.a,{}),Object(a.jsx)("select",{onChange:function(t){n&&n.stop(),o(!1),j(!1),function(t){var a="".concat("","/audio/load/").concat(t);n.doLoad(a,{ready:function(e){f(0),j(!0),g(e)},ended:function(){o(!1),f(0)},progress:function(e){f(e)},createAnalyzers:function(){E(n.createAnalyzer(795,50))}},e.current)}(t.target.value)},children:k.map((function(e,t){return Object(a.jsxs)("option",{value:t,children:[e.title," ","  ----  "," [",e.artists,"]"]},t)}))})]}),d&&Object(a.jsx)(U,{w:80,h:50},1),T,d&&Object(a.jsx)(H,{w:80,h:50},2),d&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("ul",{className:"technique",children:[Object(a.jsx)(R,{technique:W},1),Object(a.jsx)(R,{technique:K},2),Object(a.jsx)(R,{technique:Q},3)]}),Object(a.jsx)(B,{technique:W,max:4}),Object(a.jsx)(B,{technique:K,max:2}),Object(a.jsx)(B,{technique:Q,max:3})]})]})},$=function(){return Object(a.jsxs)("div",{children:["Analyze",Object(a.jsx)(Z,{})]})},ee=(n(74),n(37),n(79)),te=n(78),ne=function(){return Object(a.jsxs)("div",{className:"backgroundPic",children:[Object(a.jsx)("div",{id:"title",children:" "}),Object(a.jsx)("body",{children:Object(a.jsxs)("div",{className:"pForm",children:[Object(a.jsx)("div",{id:"form-background"}),Object(a.jsx)("div",{id:"form",children:Object(a.jsxs)(ee.a,{children:[Object(a.jsx)(te.a,{children:Object(a.jsxs)(ee.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(ee.a.Label,{children:"Full Name"}),Object(a.jsx)(ee.a.Control,{type:"email",placeholder:"First Name"})]})}),Object(a.jsx)(te.a,{children:Object(a.jsx)(ee.a.Group,{controlId:"formBasicEmail",children:Object(a.jsx)(ee.a.Control,{type:"email",placeholder:"Last Name"})})}),Object(a.jsx)(te.a,{children:Object(a.jsxs)(ee.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(ee.a.Label,{children:"Authentication"}),Object(a.jsx)(ee.a.Control,{type:"email",placeholder:"login@email.com"}),Object(a.jsx)(ee.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]})}),Object(a.jsx)(te.a,{children:Object(a.jsx)(ee.a.Group,{controlId:"formBasicEmail",children:Object(a.jsx)(ee.a.Control,{type:"email",placeholder:"Password"})})})]})})]})})]})},ae=function(){return Object(a.jsx)("div",{children:"DetailedPage"})},ie=function(){return Object(a.jsx)("div",{children:"Landing Page"})},ce=function(){return Object(a.jsx)("div",{children:"Listen"})},re=function(){return Object(a.jsx)("div",{children:"Review"})},se=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(g.a,{exact:!0,path:"/",component:ne}),Object(a.jsx)(g.a,{exact:!0,path:"/landingpage",component:ie}),Object(a.jsx)(g.a,{exact:!0,path:"/analyze",component:$}),Object(a.jsx)(g.a,{exact:!0,path:"/listen",component:ce}),Object(a.jsx)(g.a,{exact:!0,path:"/review",component:re}),Object(a.jsx)(g.a,{exact:!0,path:"/detailed",component:ae})]})},oe=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(o.a,{children:[Object(a.jsx)(x,{}),Object(a.jsx)("div",{style:{height:"calc(100vh - 120px)"},children:Object(a.jsx)(se,{})})]})})};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(P,{children:Object(a.jsx)(oe,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.89a70934.chunk.js.map