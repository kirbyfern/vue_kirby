(function(){var t={3201:function(t){t.exports={name:"Kirby Fernandez",university:"California State University, Long Beach",major:"Computer Science (B.S)",resumeLink:"",repoId:"verify-k",profileFileName:"kirbyf.jpg",gitHubLink:"https://github.com/kirbyfern",linkedInLink:"https://www.linkedin.com/in/kirbyjfernandez/"}},8118:function(t,e,n){"use strict";var r=n(144),a=n(1096),i=n(3551),o=function(){var t=this,e=t._self._c;return e(a.Z,[e("NavBar"),e(i.Z,[e("transition",{attrs:{name:"disolve",mode:"out-in",appear:""}},[e("router-view")],1)],1),e("FooterBar")],1)},s=[],l=n(5223),c=n(4437),u=n(3584),d=n(5294),f=function(){var t=this,e=t._self._c;return e(u.Z,{staticStyle:{width:"100%"},attrs:{app:"",bottom:"",fixed:"",padless:"",color:"secondary","hide-on-scroll":""}},[e(d.Z,{attrs:{justify:"center","no-gutters":""}},[e(c.Z,{staticClass:"#003c6c lighten-2 py-2 text-right white--text",attrs:{cols:"12"}},[e(l.ZB,{staticClass:"py-2 pa-2 white--text text-center"},[t._v(" Copyright © "+t._s((new Date).getFullYear())+" — "),e("strong",[t._v("Kirby Fernandez, All Rights Reserved")])])],1)],1)],1)},m=[],p={name:"FooterBar"},h=p,g=n(1001),b=(0,g.Z)(h,f,m,!1,null,null,null),v=b.exports,y=n(677),_=n(1828),w=n(5057),Z=n(5234),k=function(){var t=this,e=t._self._c;return e(y.Z,{attrs:{app:"",color:"secondary",dark:""}},[e(Z.Z),e(_.Z,t._g(t._b({directives:[{name:"show",rawName:"v-show",value:"/"!=t.$route.path,expression:"$route.path != '/'"}],attrs:{to:"/",color:"#006aad",dark:"",width:"150"}},"v-btn",t.attrs,!1),t.on),[e(w.Z,[t._v("mdi-home")]),e("span",{staticClass:"ml-2"},[t._v("Home")])],1),e(_.Z,{attrs:{color:"primary",text:""}}),e(Z.Z)],1)},x=[],C={name:"NavBar"},S=C,j=(0,g.Z)(S,k,x,!1,null,null,null),O=j.exports,B={name:"App",icons:{iconfont:"md"},components:{FooterBar:v,NavBar:O}},I=B,L=(0,g.Z)(I,o,s,!1,null,null,null),N=L.exports,F=n(2250);r.ZP.use(F.Z);var P=new F.Z({theme:{dark:!1,themes:{light:{primary:"#006aad",secondary:"#006aad",accent:"#13a5dc",background:"#EEEEE",tableBg:"#f5f5f5",info:"#007988",warning:"#f29813",error:"#da216d",success:"#93c02d"}}}}),E=n(8345),A=n(6035),D=n(3422),H=function(){var t=this,e=t._self._c;return e(A.Z,{attrs:{fluid:"","fill-height":""}},[e(d.Z,[e(c.Z,{staticClass:"my-4",attrs:{cols:"12",align:"center"}},t._l(t.icons,(function(t){return e("SecondaryIcon",{key:t.name,attrs:{icon:t}})})),1),e(c.Z,{staticClass:"pt-2",attrs:{cols:"12",align:"center"}},[e(D.Qn,[e("NameCard",{staticClass:"mb-10"})],1)],1)],1)],1)},M=[],V=n(3201),$=n.n(V),T=n(3058),U=n(780),z=n(4402),R=function(){var t=this,e=t._self._c;return e(T.Z,{staticClass:"d-inline-flex",attrs:{flat:"",outlined:"",elevation:"7"}},[e(d.Z,{attrs:{"no-gutters":""}},[e(c.Z,{staticClass:"mr-5 ml-5 bg-primary d-flex align-center",attrs:{cols:"12",sm:"auto"}},[e("div",{staticClass:"center"},[e("h2",{staticClass:"text-h4 font-weight-bold mb-2",class:{"mt-4":t.$vuetify.breakpoint.smAndDown}},[t._v(" "+t._s(t.details.name)+" ")]),e("p",{staticClass:"text-subtitle-1 mb-1"},[t._v(" "+t._s(t.details.university)+" ")]),e("p",{staticClass:"text-subtitle-2 mb-3"},[t._v(t._s(t.details.major))]),e(z.Z,{staticClass:"d-flex d-sm-none",attrs:{"aspect-ratio":2}}),e(_.Z,{staticClass:"mt-5 font-weight-black text-uppercase",class:{"mb-4":t.$vuetify.breakpoint.smAndDown},attrs:{rounded:"",color:"#93c02d",href:t.details.resumeLink,download:""}},[t._v("Download Resume")])],1)]),e(c.Z,{attrs:{cols:"12",sm:"auto"}},[e(U.Z,{staticClass:"rounded-img d-none d-sm-block",attrs:{height:"300",width:"250",src:t.profileImg}})],1)],1)],1)},K=[],G={name:"NameCard",computed:{profileImg(){return n(7173)("./"+$().profileFileName)}},data(){return{loaded:!1,originalWidth:171,originalHeight:178,details:$()}},mounted(){setTimeout((()=>{this.loaded=!0}),100)}},Y=G,q=(0,g.Z)(Y,R,K,!1,null,null,null),Q=q.exports,W=n(3432),J=function(){var t=this,e=t._self._c;return e(W.Z,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function({on:n,attrs:r}){return[e(_.Z,t._g(t._b({staticClass:"icon-btn",class:{"mx-6":t.$vuetify.breakpoint.xs,"mx-12":!t.$vuetify.breakpoint.xs},attrs:{icon:"",to:t.icon.to,href:t.icon.href,target:t.icon.target}},"v-btn",r,!1),n),[e("font-awesome-icon",t._g(t._b({style:{color:"#006aad"},attrs:{icon:t.icon.icon,size:t.$vuetify.breakpoint.xs?"3x":"4x"}},"font-awesome-icon",r,!1),n))],1)]}}])},[e("span",[t._v(t._s(t.icon.name))])])},X=[],tt={name:"SecondaryIcon",props:{icon:{type:Object,required:!0}}},et=tt,nt=(0,g.Z)(et,J,X,!1,null,null,null),rt=nt.exports,at={name:"HomeView",components:{NameCard:Q,SecondaryIcon:rt},data(){return{icons:[{name:"Github",href:$().gitHubLink,target:"_blank",icon:["fab","github"]},{name:"LinkedIn",href:$().linkedInLink,target:"_blank",icon:["fab","linkedin"]},{name:"About Me",to:"/AboutView",icon:["fas","circle-user"]},{name:"Documents",to:"/DocumentView",icon:["fas","file-alt"]}]}}},it=at,ot=(0,g.Z)(it,H,M,!1,null,null,null),st=ot.exports,lt=n(4192),ct=function(){var t=this,e=t._self._c;return e(A.Z,[e(d.Z,[e(c.Z,[e(T.Z,{staticClass:"grey lighten-5 my-5",attrs:{width:"600",elevation:"5",shaped:""}},[e(l.EB,{staticClass:"pa-4 text-h4 font-weight-bold"},[t._v("About me?")]),e(l.ZB,{staticClass:"px-4",staticStyle:{"line-height":"1.6"}},[t._v(" I am an aspiring "),e("strong",{staticStyle:{color:"#006aad"}},[t._v("software engineer")]),t._v(" with a solid technology background and leadership experience. "),e("br"),e("br"),t._v(" My professional journey began after immigrating to the United States from the Philippines. I served in the "),e("strong",{staticStyle:{color:"#006aad"}},[t._v("United States Navy")]),t._v(" as an Airman (E-3) and utilized this opportunity to enhance my technical skills. I started by learning Ruby as my first programming language and actively engaged with coding meetups, attended the SCALE convention, and participated in a Coding Bootcamp through the TechHire and Youth Policy Institute scholarship program. "),e("br"),e("br"),t._v(" Following my time in the Navy, I made the decision to further my education and was accepted into "),e("strong",{staticStyle:{color:"#006aad"}},[t._v("California State University, Long Beach")]),t._v(" where I pursued a degree in computer science and engineering. My studies focused on software algorithms, software architecture, computer security principles, software development methodologies, and communication protocols. "),e("br"),e("br"),t._v(" As someone who is committed to continuous learning, I am eager to join a company where I can grow and continuously develop my skills on a daily basis. ")]),e(lt.Z),e(l.h7,{staticClass:"pa-3 justify-center"},[e(_.Z,{attrs:{text:"",color:"primary",href:t.gitHubLink,target:"_blank"}},[t._v("My Projects")])],1)],1)],1),e(Z.Z),e(c.Z)],1)],1)},ut=[],dt={name:"AboutView",computed:{gitHubLink(){return $().gitHubLink}}},ft=dt,mt=(0,g.Z)(ft,ct,ut,!1,null,null,null),pt=mt.exports,ht=n(5959),gt=n(5251),bt=function(){var t=this,e=t._self._c;return e(A.Z,{staticClass:"fill-height",attrs:{fluid:""}},[e(d.Z,{attrs:{align:"center",justify:"center"}},[e(c.Z,{attrs:{cols:"12",md:"8",lg:"6"}},[e(T.Z,{staticClass:"rounded-lg",attrs:{color:"#006aad",elevation:"12"}},[e(l.EB,{staticClass:"white--text"},[t._v(" CSULB Keysights")]),e(lt.Z),e(ht.Z,{staticClass:"table-bg",attrs:{headers:t.headers,items:t.filteredDocuments,"hide-default-footer":"","disable-pagination":"","hide-default-header":"","items-per-page":10,height:350},scopedSlots:t._u([{key:"body",fn:function({items:n}){return[e("tbody",t._l(n,(function(n){return e("tr",{key:n.filename,staticClass:"table-row-bg"},[e("td",{staticClass:"text-start"},[e("a",{attrs:{href:n.url,target:"_blank"}},[t._v(t._s(n.filename))])])])})),0)]}}])}),e(l.h7,[e(gt.Z,{attrs:{label:"Search","single-line":"","hide-details":"",clearable:"",dark:"",color:"grey lighten-1"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)],1)],1)},vt=[],yt={data(){return{search:"",headers:[{text:"Filename",value:"filename",sortable:!1}],documents:[{filename:"Buffer Overflow!",url:"https://github.com/kirbyfern/378"}]}},computed:{filteredDocuments(){return this.documents.filter((t=>!this.search||t.filename&&t.filename.toLowerCase().includes(this.search.toLowerCase())))}}},_t=yt,wt=(0,g.Z)(_t,bt,vt,!1,null,null,null),Zt=wt.exports,kt=function(){var t=this,e=t._self._c;return e(A.Z,{attrs:{fluid:"","fill-height":""}},[e(d.Z,{attrs:{align:"center",justify:"center"}},[e("h1",[t._v("Error 404: Page Not Found")])])],1)},xt=[],Ct={name:"NotFoundView"},St=Ct,jt=(0,g.Z)(St,kt,xt,!1,null,null,null),Ot=jt.exports,Bt=[{path:"/",component:st},{path:"/AboutView",component:pt},{path:"/DocumentView",component:Zt},{path:"/:pathMatch(.*)*",name:"NotFound",component:Ot}],It=n(3636),Lt=n(9417),Nt=n(7810),Ft=n(3024),Pt=n(5709),Et=n.n(Pt);It.vI.add(Lt.mRB,Lt.cwv,Ft.zhw,Ft.D9H,Lt.FU$),r.ZP.component("font-awesome-icon",Nt.GN),r.ZP.config.productionTip=!1,r.ZP.component("video-background",Et()),r.ZP.use(E.ZP);const At=new E.ZP({routes:Bt});new r.ZP({vuetify:P,render:t=>t(N),router:At}).$mount("#app")},7173:function(t,e,n){var r={"./aboutVideo.mp4":3162,"./default_user.png":507,"./details":3201,"./details.js":3201,"./fonts/CondensedSansSerif.ttf":2288,"./kirbyf.jpg":6663};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id=7173},3162:function(t,e,n){"use strict";t.exports=n.p+"media/aboutVideo.2cd9dfc4.mp4"},507:function(t,e,n){"use strict";t.exports=n.p+"img/default_user.a1a779bd.png"},2288:function(t,e,n){"use strict";t.exports=n.p+"fonts/CondensedSansSerif.d24ae025.ttf"},6663:function(t,e,n){"use strict";t.exports=n.p+"img/kirbyf.86108cd6.jpg"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,i){if(!r){var o=1/0;for(u=0;u<t.length;u++){r=t[u][0],a=t[u][1],i=t[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&i||o>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(s=!1,i<o&&(o=i));if(s){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,i,o=r[0],s=r[1],l=r[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var u=l(n)}for(e&&e(r);c<o.length;c++)i=o[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},r=self["webpackChunkClient"]=self["webpackChunkClient"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8118)}));r=n.O(r)})();
//# sourceMappingURL=app.afadf54c.js.map