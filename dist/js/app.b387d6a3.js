(function(e){function t(t){for(var c,o,i=t[0],s=t[1],u=t[2],b=0,f=[];b<i.length;b++)o=i[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},a=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a98":function(e,t,n){},"19ac":function(e,t,n){"use strict";n("4aa0")},"24b3":function(e,t,n){"use strict";n("c3c5")},"25a5":function(e,t,n){"use strict";n("c57b")},"2a12":function(e,t,n){},"36bc":function(e,t,n){"use strict";n("73a3")},"48f0":function(e,t,n){"use strict";n("7dad")},"4aa0":function(e,t,n){},5333:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,a,o){var i=Object(c["y"])("Navbar"),s=Object(c["y"])("router-view"),u=Object(c["y"])("footerbar");return Object(c["r"])(),Object(c["d"])(c["a"],null,[Object(c["g"])(i),Object(c["g"])(s),Object(c["g"])(u)],64)}var a=n("9b19"),o=n.n(a),i=function(e){return Object(c["u"])("data-v-6a2c193f"),e=e(),Object(c["s"])(),e},s=i((function(){return Object(c["e"])("img",{src:o.a,alt:"logo"},null,-1)})),u=Object(c["f"])("CHARACTERS"),l=Object(c["f"])("LOCATIONS"),b=Object(c["f"])("EPISODES");function f(e,t,n,r,a,o){var i=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["d"])("nav",null,[Object(c["g"])(i,{to:"/"},{default:Object(c["E"])((function(){return[s]})),_:1}),Object(c["e"])("div",null,[Object(c["g"])(i,{to:"/characters",class:"route"},{default:Object(c["E"])((function(){return[u]})),_:1}),Object(c["g"])(i,{to:"/locations",class:"route"},{default:Object(c["E"])((function(){return[l]})),_:1}),Object(c["g"])(i,{to:"/episodes",class:"route"},{default:Object(c["E"])((function(){return[b]})),_:1})])])}var d={name:"Navbar"},j=(n("71e6"),n("6b0d")),O=n.n(j);const p=O()(d,[["render",f],["__scopeId","data-v-6a2c193f"]]);var v=p,h=function(e){return Object(c["u"])("data-v-b375f13c"),e=e(),Object(c["s"])(),e},m=h((function(){return Object(c["e"])("a",{href:"https://github.com/benjaminPla",target:"_blank"},[Object(c["e"])("i",{class:"fab fa-github"})],-1)})),g=h((function(){return Object(c["e"])("a",{href:"https://www.linkedin.com/in/benjamin-pla/",target:"_blank"},[Object(c["e"])("i",{class:"fab fa-linkedin"})],-1)})),y=[m,g];function _(e,t,n,r,a,o){return Object(c["r"])(),Object(c["d"])("footer",null,y)}var C={name:"FooterBar"};n("fb06");const w=O()(C,[["render",_],["__scopeId","data-v-b375f13c"]]);var k=w,A={name:"App",components:{Navbar:v,Footerbar:k}};n("6f98");const F=O()(A,[["render",r]]);var P=F,x=n("1da1"),S=(n("96cf"),n("d3b7"),n("4de4"),n("caad"),n("2532"),n("b0c0"),n("5502")),E=Object(S["a"])({state:{characters:[],charactersFilter:[],characterPage:1,locations:[],locationsFilter:[],episodes:[],episodesFilter:[]},mutations:{setCharacters:function(e,t){return e.characters=t},setCharactersFilter:function(e,t){return e.charactersFilter=t},setCharacterPage:function(e,t){return e.characterPage+=t},setLocations:function(e,t){return e.locations=t},setLocationsFilter:function(e,t){return e.locationsFilter=t},setEpisodes:function(e,t){return e.episodes=t},setEpisodesFilter:function(e,t){return e.episodesFilter=t}},actions:{getCharacters:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function t(){var n,c,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,c=e.state,r="https://rickandmortyapi.com/api/character?page=",t.next=4,fetch(r+c.characterPage).then((function(e){return e.json()})).catch((function(e){return e}));case 4:a=t.sent,n("setCharacters",a.results),n("setCharactersFilter",a.results);case 7:case"end":return t.stop()}}),t)})))()},getLocations:function(e){return Object(x["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,fetch("https://rickandmortyapi.com/api/location").then((function(e){return e.json()})).catch((function(e){return e}));case 3:c=t.sent,n("setLocations",c.results),n("setLocationsFilter",c.results);case 6:case"end":return t.stop()}}),t)})))()},getEpisodes:function(e){return Object(x["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,fetch("https://rickandmortyapi.com/api/episode").then((function(e){return e.json()})).catch((function(e){return e}));case 3:c=t.sent,n("setEpisodes",c.results),n("setEpisodesFilter",c.results);case 6:case"end":return t.stop()}}),t)})))()},setPage:function(e,t){var n=e.commit,c=e.state,r=e.dispatch;"previous"===t&&1===c.characterPage||(n("setCharacterPage","next"===t?1:-1),r("getCharacters",c.characterPage))},filterByName:function(e,t){var n=e.commit,c=e.state,r=c.characters.filter((function(e){return e.name.includes(t)}));n("setCharactersFilter",r)},filterByStatus:function(e,t){var n=e.commit,c=e.state,r=c.characters.filter((function(e){return e.status.includes(t)}));n("setCharactersFilter",r)}}}),L=n("6c02"),I=function(e){return Object(c["u"])("data-v-420ed5c4"),e=e(),Object(c["s"])(),e},R={class:"view"},G=I((function(){return Object(c["e"])("h1",null,"Home",-1)})),M=I((function(){return Object(c["e"])("p",null,"Hi! My name is Benjamin Pla",-1)})),N=I((function(){return Object(c["e"])("p",null,[Object(c["f"])("I am a "),Object(c["e"])("b",null,"Full Stack Deveoper")],-1)})),D=I((function(){return Object(c["e"])("p",null,[Object(c["f"])("This project was created using Vue and Vuex technologies, consuming "),Object(c["e"])("a",{href:"https://rickandmortyapi.com/",target:"_blank"},"Rick and Morty API")],-1)}));function V(e,t,n,r,a,o){var i=Object(c["y"])("contact-form");return Object(c["r"])(),Object(c["d"])("div",R,[G,M,N,D,Object(c["g"])(i)])}var B=function(e){return Object(c["u"])("data-v-77435d1e"),e=e(),Object(c["s"])(),e},T={class:"container"},H=B((function(){return Object(c["e"])("h3",null,"Contact Me",-1)})),U=B((function(){return Object(c["e"])("input",{type:"email",placeholder:"Email..."},null,-1)})),J=B((function(){return Object(c["e"])("input",{type:"text",placeholder:"Subject..."},null,-1)})),q=B((function(){return Object(c["e"])("textarea",{placeholder:"Message..."},null,-1)}));function z(e,t,n,r,a,o){return Object(c["r"])(),Object(c["d"])("div",T,[H,Object(c["e"])("form",null,[U,J,q,Object(c["e"])("input",{type:"submit",value:"Send",onClick:t[0]||(t[0]=Object(c["G"])((function(){}),["prevent"]))})])])}var K={name:"ContactForm"};n("732a");const Q=O()(K,[["render",z],["__scopeId","data-v-77435d1e"]]);var W=Q,X={name:"ViewHome",components:{ContactForm:W}};n("bc99");const Y=O()(X,[["render",V],["__scopeId","data-v-420ed5c4"]]);var Z=Y,$=function(e){return Object(c["u"])("data-v-46ffa7f5"),e=e(),Object(c["s"])(),e},ee={class:"view"},te=$((function(){return Object(c["e"])("h1",null,"Characters",-1)}));function ne(e,t,n,r,a,o){var i=Object(c["y"])("list-characters");return Object(c["r"])(),Object(c["d"])("div",ee,[te,Object(c["g"])(i)])}var ce={class:"flex"},re={class:"characters"};function ae(e,t,n,r,a,o){var i=Object(c["y"])("characters-filter"),s=Object(c["y"])("character-card");return Object(c["r"])(),Object(c["d"])("div",ce,[Object(c["g"])(i),Object(c["e"])("p",null,"Results: "+Object(c["A"])(r.characters.length),1),Object(c["e"])("ul",re,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])(r.characters,(function(e){return Object(c["r"])(),Object(c["d"])("li",{key:e.id},[Object(c["g"])(s,{character:e},null,8,["character"])])})),128))])])}var oe={class:"card"},ie=["src","alt"],se={class:"info"};function ue(e,t,n,r,a,o){return Object(c["r"])(),Object(c["d"])("div",oe,[Object(c["e"])("img",{src:n.character.image,alt:n.character.name},null,8,ie),Object(c["e"])("div",se,[Object(c["e"])("h3",null,Object(c["A"])(n.character.name),1),Object(c["e"])("ul",null,[Object(c["e"])("li",{class:Object(c["m"])("Alive"===n.character.status?"alive":"Dead"===n.character.status?"dead":"unknown")},"Status: "+Object(c["A"])(n.character.status),3),Object(c["e"])("li",null,"Species: "+Object(c["A"])(n.character.species),1),Object(c["e"])("li",null,"Gender: "+Object(c["A"])(n.character.gender),1),Object(c["e"])("li",null,"Location: "+Object(c["A"])(n.character.location.name),1)])])])}var le={name:"CharacterCard",props:["character"]};n("19ac");const be=O()(le,[["render",ue],["__scopeId","data-v-9a198fa2"]]);var fe=be,de={class:"container"},je={class:"pages"},Oe={class:"containerOptions"};function pe(e,t,n,r,a,o){return Object(c["r"])(),Object(c["d"])("div",de,[Object(c["e"])("div",je,[Object(c["e"])("i",{class:Object(c["m"])(["fas fa-angle-double-left",1===r.page&&"disable"]),onClick:t[0]||(t[0]=Object(c["G"])((function(e){return r.setPage("previous")}),["prevent"]))},null,2),Object(c["e"])("span",null,"Page: "+Object(c["A"])(r.page),1),Object(c["e"])("i",{class:"fas fa-angle-double-right",onClick:t[1]||(t[1]=Object(c["G"])((function(e){return r.setPage("next")}),["prevent"]))})]),Object(c["e"])("div",Oe,[Object(c["e"])("button",{onClick:t[2]||(t[2]=Object(c["G"])((function(e){return r.filterStatus("")}),["prevent"]))},"All"),Object(c["e"])("button",{onClick:t[3]||(t[3]=Object(c["G"])((function(e){return r.filterStatus("Alive")}),["prevent"]))},"Alive"),Object(c["e"])("button",{onClick:t[4]||(t[4]=Object(c["G"])((function(e){return r.filterStatus("Dead")}),["prevent"]))},"Dead"),Object(c["e"])("button",{onClick:t[5]||(t[5]=Object(c["G"])((function(e){return r.filterStatus("unknown")}),["prevent"]))},"Unknown")]),Object(c["F"])(Object(c["e"])("input",{type:"search",placeholder:"Search by name...","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.name=e}),onInput:t[7]||(t[7]=Object(c["G"])((function(e){return r.filterName()}),["prevent"]))},null,544),[[c["C"],r.name]])])}n("a15b"),n("d81d"),n("ac1f"),n("1276"),n("fb6a");var ve=function(e){return e.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},he={name:"CharactersFilter",setup:function(){var e=Object(S["b"])(),t=Object(c["w"])(""),n=Object(c["b"])((function(){return e.state.characterPage})),r=function(t){return e.dispatch("setPage",t)},a=function(){return e.dispatch("filterByName",ve(t.value))},o=function(t){return e.dispatch("filterByStatus",t)};return{page:n,name:t,setPage:r,filterName:a,filterStatus:o}}};n("97d3");const me=O()(he,[["render",pe],["__scopeId","data-v-1efa5229"]]);var ge=me,ye={name:"ListCharacters",components:{CharacterCard:fe,CharactersFilter:ge},setup:function(){var e=Object(S["b"])(),t=Object(c["b"])((function(){return e.state.charactersFilter}));return Object(c["p"])((function(){e.dispatch("getCharacters")})),{characters:t}}};n("36bc");const _e=O()(ye,[["render",ae],["__scopeId","data-v-084fc065"]]);var Ce=_e,we={name:"ViewCharacters",components:{ListCharacters:Ce}};n("d36e");const ke=O()(we,[["render",ne],["__scopeId","data-v-46ffa7f5"]]);var Ae=ke,Fe=function(e){return Object(c["u"])("data-v-91dbeb76"),e=e(),Object(c["s"])(),e},Pe={class:"view"},xe=Fe((function(){return Object(c["e"])("h1",null,"Locations",-1)}));function Se(e,t,n,r,a,o){var i=Object(c["y"])("list-locations");return Object(c["r"])(),Object(c["d"])("div",Pe,[xe,Object(c["g"])(i)])}var Ee={class:"flex"},Le={class:"characters"};function Ie(e,t,n,r,a,o){var i=Object(c["y"])("location-card");return Object(c["r"])(),Object(c["d"])("div",Ee,[Object(c["e"])("p",null,"Results: "+Object(c["A"])(r.locations.length),1),Object(c["e"])("ul",Le,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])(r.locations,(function(e){return Object(c["r"])(),Object(c["d"])("li",{key:e.id},[Object(c["g"])(i,{location:e},null,8,["location"])])})),128))])])}var Re={class:"card"};function Ge(e,t,n,r,a,o){return Object(c["r"])(),Object(c["d"])("div",Re,[Object(c["e"])("h3",null,Object(c["A"])(n.location.name),1),Object(c["e"])("ul",null,[Object(c["e"])("li",null,"Type: "+Object(c["A"])(n.location.type),1),Object(c["e"])("li",null,"Dimension: "+Object(c["A"])(n.location.dimension),1)])])}var Me={name:"LocationCard",props:["location"]};n("b3f0");const Ne=O()(Me,[["render",Ge],["__scopeId","data-v-75897319"]]);var De=Ne,Ve={name:"ListLocations",components:{LocationCard:De},setup:function(){var e=Object(S["b"])(),t=Object(c["b"])((function(){return e.state.locationsFilter}));return Object(c["p"])((function(){e.dispatch("getLocations")})),{locations:t}}};n("25a5");const Be=O()(Ve,[["render",Ie],["__scopeId","data-v-4a3882a8"]]);var Te=Be,He={name:"ViewLocations",components:{ListLocations:Te}};n("d4ce");const Ue=O()(He,[["render",Se],["__scopeId","data-v-91dbeb76"]]);var Je=Ue,qe=function(e){return Object(c["u"])("data-v-f0347582"),e=e(),Object(c["s"])(),e},ze={class:"view"},Ke=qe((function(){return Object(c["e"])("h1",null,"Episodes",-1)}));function Qe(e,t,n,r,a,o){var i=Object(c["y"])("list-episodes");return Object(c["r"])(),Object(c["d"])("div",ze,[Ke,Object(c["g"])(i)])}var We={class:"flex"},Xe={class:"episodes"};function Ye(e,t,n,r,a,o){var i=Object(c["y"])("episode-card");return Object(c["r"])(),Object(c["d"])("div",We,[Object(c["e"])("p",null,"Results: "+Object(c["A"])(r.episodes.length),1),Object(c["e"])("ul",Xe,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])(r.episodes,(function(e){return Object(c["r"])(),Object(c["d"])("li",{key:e.id},[Object(c["g"])(i,{episode:e},null,8,["episode"])])})),128))])])}var Ze={class:"card"};function $e(e,t,n,r,a,o){return Object(c["r"])(),Object(c["d"])("div",Ze,[Object(c["e"])("h3",null,Object(c["A"])(n.episode.name),1),Object(c["e"])("ul",null,[Object(c["e"])("li",null,"Season: "+Object(c["A"])(n.episode.episode.slice(1,3)),1),Object(c["e"])("li",null,"Episode: "+Object(c["A"])(n.episode.episode.slice(4)),1),Object(c["e"])("li",null,"Air Date: "+Object(c["A"])(n.episode.air_date),1)])])}var et={name:"EpisodeCard",props:["episode"]};n("24b3");const tt=O()(et,[["render",$e],["__scopeId","data-v-40709d1c"]]);var nt=tt,ct={name:"ListEpisodes",components:{EpisodeCard:nt},setup:function(){var e=Object(S["b"])(),t=Object(c["b"])((function(){return e.state.episodesFilter}));return Object(c["p"])((function(){e.dispatch("getEpisodes")})),{episodes:t}}};n("a6f8");const rt=O()(ct,[["render",Ye],["__scopeId","data-v-2c2597ee"]]);var at=rt,ot={name:"ViewEpisodes",components:{ListEpisodes:at}};n("48f0");const it=O()(ot,[["render",Qe],["__scopeId","data-v-f0347582"]]);var st=it,ut=[{path:"/",name:"Home",component:Z},{path:"/characters",name:"Characters",component:Ae},{path:"/locations",name:"Locations",component:Je},{path:"/episodes",name:"Episodes",component:st}],lt=Object(L["a"])({history:Object(L["b"])("/"),routes:ut}),bt=lt;Object(c["c"])(P).use(E).use(bt).mount("#app")},5776:function(e,t,n){},"6f98":function(e,t,n){"use strict";n("787d")},"71e6":function(e,t,n){"use strict";n("5776")},"732a":function(e,t,n){"use strict";n("b124")},"73a3":function(e,t,n){},"787d":function(e,t,n){},"7dad":function(e,t,n){},9156:function(e,t,n){},"97d3":function(e,t,n){"use strict";n("b2ff")},"9b19":function(e,t,n){e.exports=n.p+"img/logo.cf353921.svg"},a6f8:function(e,t,n){"use strict";n("eec1")},b124:function(e,t,n){},b2ff:function(e,t,n){},b3f0:function(e,t,n){"use strict";n("2a12")},bc99:function(e,t,n){"use strict";n("0a98")},c3c5:function(e,t,n){},c57b:function(e,t,n){},d36e:function(e,t,n){"use strict";n("5333")},d4ce:function(e,t,n){"use strict";n("9156")},daf5:function(e,t,n){},eec1:function(e,t,n){},fb06:function(e,t,n){"use strict";n("daf5")}});
//# sourceMappingURL=app.b387d6a3.js.map