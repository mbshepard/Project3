(this.webpackJsonpmusiapp=this.webpackJsonpmusiapp||[]).push([[0],{17:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),i=c.n(s),r=c(19),a=c.n(r),o=c(9),l=c(7),j=c(2),d=(c(26),c(17),function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{class:"card w-75",children:Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsx)("h3",{className:"card-title",children:"Artist:"}),e.name,Object(n.jsx)("img",{alt:e.name,src:e.image}),Object(n.jsx)("p",{className:"card-text",children:"Song:"}),e.song,Object(n.jsx)("br",{}),Object(n.jsx)(l.b,{to:"/listen",class:"btn btn-primary",children:"Listen"}),Object(n.jsx)(l.b,{to:"/rating/".concat(e.id),class:"btn btn-info",children:"Rating"})]})})})}),b=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1];return Object(s.useEffect)((function(){fetch("/api/songs").then((function(e){if(e.ok)return e.json()})).then((function(e){i(e)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"New Songs"}),c.map((function(e,t){return Object(n.jsx)(d,{id:e.id,name:e.name,image:e.image,song:e.song},t)}))]})},u=(c(32),function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(l.b,{to:"/",children:" Home "}),Object(n.jsx)("h1",{children:"Analysis Page"}),Object(n.jsxs)("div",{class:"card text-center",children:[Object(n.jsx)("div",{class:"card-header",children:"Song Title"}),Object(n.jsx)("div",{class:"song-container",children:Object(n.jsx)("div",{class:"song-box",children:Object(n.jsxs)("div",{class:"selector",children:[Object(n.jsx)("div",{class:"selector-left"}),Object(n.jsx)("div",{class:"selector-right",onMouseEnter:function(e){var t=e.clientX;console.log(t)},onMouseDrag:function(e){}})]})})}),Object(n.jsx)("div",{class:"card-footer text-muted"})]}),Object(n.jsxs)("ul",{class:"list-group",children:[Object(n.jsxs)("li",{class:"list-group-item d-flex justify-content-between align-items-center",children:[Object(n.jsx)("input",{placeholder:"Drag here"}),Object(n.jsx)("span",{class:"badge badge-primary badge-pill",children:"metephore"})]}),Object(n.jsxs)("li",{class:"list-group-item d-flex justify-content-between align-items-center",children:[Object(n.jsx)("input",{placeholder:"Drag here"}),Object(n.jsx)("span",{class:"badge badge-primary badge-pill",children:"punchline"})]}),Object(n.jsxs)("li",{class:"list-group-item d-flex justify-content-between align-items-center",children:[Object(n.jsx)("input",{placeholder:"Drag here"}),Object(n.jsx)("span",{class:"badge badge-primary badge-pill",children:"Feel"})]})]})]})}),h=(c(33),function(){return Object(n.jsxs)("div",{className:"backgroundPic",children:[Object(n.jsx)("h1",{children:"The Review app"}),Object(n.jsx)(l.b,{to:"/newSongs",children:"New Songs"}),Object(n.jsx)("button",{children:"Listen"})," ",Object(n.jsx)("button",{children:"Analyze"})," ",Object(n.jsx)("button",{children:"Review"})]})}),O=(c(34),function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],i=(t[1],Object(s.useState)()),r=Object(o.a)(i,2),a=r[0],d=r[1],b=Object(j.e)().artistId;return Object(s.useEffect)((function(){var e=c.find((function(e,t){return"".concat(e.id)===b}));d(e)}),[]),a?Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"pageHeader",children:"REVIEW PAGE"}),Object(n.jsxs)("div",{className:"cards",style:{width:"18rem"},children:[Object(n.jsx)("img",{src:a.image,className:"card-img-top",alt:""}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:"Artist:"}),a.name,Object(n.jsx)("h5",{className:"card-text",children:"Song:"}),a.song]}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)(l.b,{to:"/listen",className:"card-link",children:"Analysis Page"}),Object(n.jsx)(l.b,{to:"/newSongs",className:"card-link",children:"Songs page"})]})]}),Object(n.jsxs)("div",{className:"userInfo",children:[Object(n.jsx)("h4",{children:"User 1"}),Object(n.jsx)("h5",{children:"Average Rating:"}),Object(n.jsx)("p",{children:"Technique clips: Metephor, Punchlines, Imagery"}),Object(n.jsx)("h4",{children:"User 2"}),Object(n.jsx)("h5",{children:"Average Rating:"}),Object(n.jsx)("p",{children:"Technique clips: Metephor, Punchlines, Imagery"}),Object(n.jsx)("h4",{children:"User 3"}),Object(n.jsx)("h5",{children:"Average Rating:"}),Object(n.jsx)("p",{children:"Technique clips: Metephor, Punchlines, Imagery"})]})]}):null}),x=c(4);function p(e){var t=Object(s.useState)(!1),c=Object(o.a)(t,2),i=c[0],r=c[1],a=Object(s.useState)(""),l=Object(o.a)(a,2),j=l[0],d=l[1];Object(s.useEffect)((function(){b()}),[]);var b=function(){console.log("X('audio').start"),Object(x.X)("audio").resize(16384),Object(x.X)("audio").setup({update:function(e,t){Math.floor(t*e.buffer.sampleRate)%(.1*e.buffer.sampleRate)===0&&d("Current Time: ".concat(t))},ended:function(e,t){r(!1)},error:function(e){e instanceof Error?window.alert(e.message):window.alert("Error : decodeAudioData")}}),x.X.ajax({url:"https://weblike-curtaincall.ssl-lolipop.jp/assets/wav/forever-love-piano-instruments.wav",timeout:6e4,success:function(e,t){Object(x.X)("audio").ready.call(Object(x.X)("audio"),t),d("Loading: Done")},progress:function(e){d("Loading: ".concat(e.loaded))},error:function(e){console.log(e)}})};return Object(n.jsxs)("div",{children:["Converted to pure React",Object(n.jsx)("br",{}),Object(n.jsx)("button",{onClick:function(){Object(x.X)("audio").toggle(Object(x.X)("audio").param("currentTime")),r(!i)},type:"button",children:i?"PAUSE":"START"}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{children:j})]})}function g(e){Object(s.useEffect)((function(){t()}),[]);var t=function(){console.log("X('audio').start"),Object(x.X)("audio").resize(16384),Object(x.X)("audio").setup({ready:function(e){document.querySelector("button").addEventListener("click",(function(e){Object(x.X)("audio").isPaused()?(Object(x.X)("audio").start(Object(x.X)("audio").param("currentTime")),e.currentTarget.textContent="PAUSE"):(Object(x.X)("audio").stop(),e.currentTarget.textContent="START")}),!1)},start:function(e,t){console.log("start"),console.dir(e),console.dir(t)},stop:function(e,t){console.log("stop"),console.dir(e),console.dir(t)},update:function(e,t){Math.floor(t*e.buffer.sampleRate)%(.1*e.buffer.sampleRate)===0&&(console.log("update"),console.dir(e),console.dir(t))},ended:function(e,t){console.log("ended"),console.dir(e),console.dir(t),document.querySelector("button").textContent="START"},error:function(e){e instanceof Error?window.alert(e.message):window.alert("Error : decodeAudioData")}}),x.X.ajax({url:"https://weblike-curtaincall.ssl-lolipop.jp/assets/wav/forever-love-piano-instruments.wav",timeout:6e4,success:function(e,t){Object(x.X)("audio").ready.call(Object(x.X)("audio"),t)}})};return Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{type:"button",children:"START"}),Object(n.jsx)("hr",{}),"As it is from : ",Object(n.jsx)("a",{href:"https://xsound.dev/#/audio/start",children:"XSound > Audio > Start"})]})}var f=function(){var e=Object(s.useState)({name:"",song:"",image:""}),t=Object(o.a)(e,2);t[0],t[1];return Object(n.jsx)("div",{children:Object(n.jsx)(l.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",component:h}),Object(n.jsx)(j.a,{exact:!0,path:"/newSongs",component:b}),Object(n.jsx)(j.a,{exact:!0,path:"/listen",component:u}),Object(n.jsx)(j.a,{exact:!0,path:"/rating/:artistId",component:O}),Object(n.jsx)(j.a,{exact:!0,path:"/XsoundReact",component:p}),Object(n.jsx)(j.a,{exact:!0,path:"/Xsound",component:g})]})})})},m=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{style:{height:120,background:"blue"},children:"Top"}),Object(n.jsx)("div",{style:{height:"calc(100vh - 120px)"},children:Object(n.jsx)(f,{})})]})};a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.7cfcebb0.chunk.js.map