!function(t,s){"object"==typeof exports&&"object"==typeof module?module.exports=s():"function"==typeof define&&define.amd?define([],s):"object"==typeof exports?exports.Simulation=s():t.Simulation=s()}(self,(function(){return(()=>{var t={877:(t,s,i)=>{var o=i(570),e=i(171),r=e;r.v1=o,r.v4=e,t.exports=r},327:t=>{for(var s=[],i=0;i<256;++i)s[i]=(i+256).toString(16).substr(1);t.exports=function(t,i){var o=i||0,e=s;return[e[t[o++]],e[t[o++]],e[t[o++]],e[t[o++]],"-",e[t[o++]],e[t[o++]],"-",e[t[o++]],e[t[o++]],"-",e[t[o++]],e[t[o++]],"-",e[t[o++]],e[t[o++]],e[t[o++]],e[t[o++]],e[t[o++]],e[t[o++]]].join("")}},217:t=>{var s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(s){var i=new Uint8Array(16);t.exports=function(){return s(i),i}}else{var o=new Array(16);t.exports=function(){for(var t,s=0;s<16;s++)0==(3&s)&&(t=4294967296*Math.random()),o[s]=t>>>((3&s)<<3)&255;return o}}},570:(t,s,i)=>{var o,e,r=i(217),h=i(327),a=0,n=0;t.exports=function(t,s,i){var c=s&&i||0,d=s||[],l=(t=t||{}).node||o,y=void 0!==t.clockseq?t.clockseq:e;if(null==l||null==y){var u=r();null==l&&(l=o=[1|u[0],u[1],u[2],u[3],u[4],u[5]]),null==y&&(y=e=16383&(u[6]<<8|u[7]))}var x=void 0!==t.msecs?t.msecs:(new Date).getTime(),p=void 0!==t.nsecs?t.nsecs:n+1,v=x-a+(p-n)/1e4;if(v<0&&void 0===t.clockseq&&(y=y+1&16383),(v<0||x>a)&&void 0===t.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=x,n=p,e=y;var m=(1e4*(268435455&(x+=122192928e5))+p)%4294967296;d[c++]=m>>>24&255,d[c++]=m>>>16&255,d[c++]=m>>>8&255,d[c++]=255&m;var f=x/4294967296*1e4&268435455;d[c++]=f>>>8&255,d[c++]=255&f,d[c++]=f>>>24&15|16,d[c++]=f>>>16&255,d[c++]=y>>>8|128,d[c++]=255&y;for(var w=0;w<6;++w)d[c+w]=l[w];return s||h(d)}},171:(t,s,i)=>{var o=i(217),e=i(327);t.exports=function(t,s,i){var r=s&&i||0;"string"==typeof t&&(s="binary"===t?new Array(16):null,t=null);var h=(t=t||{}).random||(t.rng||o)();if(h[6]=15&h[6]|64,h[8]=63&h[8]|128,s)for(var a=0;a<16;++a)s[r+a]=h[a];return s||e(h)}},138:(t,s,i)=>{t.exports=i(446).default},417:t=>{t.exports=class{constructor(t={}){this._defaultParams={x:0,y:0,vx:0,vy:0,ax:0,ay:0},this._types={position:"",speed:"v",acceleration:"a"},Object.entries(this._defaultParams).forEach((([s,i])=>{this[s]=t[s]??i})),Object.entries(this._types).forEach((([t,s])=>{this[t]=function(t={}){return void 0!==t.x&&(this[s+"x"]=t.x),void 0!==t.y&&(this[s+"y"]=t.y),{x:this[s+"x"],y:this[s+"y"]}}}))}update(){this.x+=this.vx,this.y+=this.vy}get getSpeed(){return{x:this.vx,y:this.vy}}get nextPosition(){return{x:this.x+this.vx,y:this.y+this.vy}}get nextSpeed(){return{x:this.vx+this.ax,y:this.vy+this.ay}}}},827:(t,s,i)=>{const o=i(417),e=i(555),{v4:r}=i(877);t.exports=class{constructor(t,s={}){this.simulation=t,this.ctx=this.simulation.context,this.uuid=r(),this.mass=s.mass??10,this.density=s.density??1,this.color=s.color??"black",this.style=s.style??"fill",this.h=this.w=this.mass*this.density,this.coords=new o(s.coords??{vx:1,vy:1})}get v(){return Math.sqrt(this.vx**2+this.vy**2)}get a(){return Math.sqrt(this.ax**2+this.ay**2)}get Ec(){return.5*this.mass*this.v**2}update(){this.draw(),this.checkWallCollision(),this.checkParticleCollision(),this.coords.update()}draw(){this.ctx[this.style+"Style"]=this.color,this.ctx.beginPath(),this.ctx.arc(this.coords.x,this.coords.y,this.h,0,2*Math.PI),this.ctx[this.style](),this.ctx.closePath()}checkParticleCollision(){for(let t=0;t<this.simulation.particlesUUIDs.length;t++){let{mass:s,uuid:i,h:o,w:r,coords:h}=this.simulation.particles[this.simulation.particlesUUIDs[t]];if(this.uuid===i)continue;this.simulation.showLines&&e.drawVect(this.ctx,this.coords,h,{color:"gray"}),this.simulation.showDirections&&e.drawVect(this.ctx,this.coords,{x:this.coords.x+30*this.coords.vx,y:this.coords.y+30*this.coords.vy},{color:"black",width:2});let a=this.coords.x-h.x,n=this.coords.y-h.y,c=Math.abs(Math.sqrt(a**2+n**2));const d=this.coords.vx-h.vx,l=this.coords.vy-h.vy,y=h.x-this.coords.x,u=h.y-this.coords.y;if(c<=this.w+r&&d*y+l*u>=0){const t=-Math.atan2(h.y-this.coords.y,h.x-this.coords.x),i=this.mass,o=s,r=e.rotate(this.coords.getSpeed,t),a=e.rotate(h.getSpeed,t),n={x:r.x*(i-o)/(i+o)+2*a.x*o/(i+o),y:r.y},c={x:a.x*(i-o)/(i+o)+2*r.x*o/(i+o),y:a.y},d=e.rotate(n,-t),l=e.rotate(c,-t);this.coords.speed({x:d.x,y:d.y}),h.speed({x:l.x,y:l.y})}}}checkWallCollision(){Math.ceil(this.coords.y+this.h)>this.simulation.h&&this.coords.speed({x:this.coords.vx,y:-Math.abs(this.coords.vy)}),Math.floor(this.coords.y-this.h)<0&&this.coords.speed({x:this.coords.vx,y:Math.abs(this.coords.vy)}),Math.ceil(this.coords.x+this.w)>this.simulation.w&&this.coords.speed({x:-Math.abs(this.coords.vx),y:this.coords.vy}),Math.floor(this.coords.x-this.w)<0&&this.coords.speed({x:Math.abs(this.coords.vx),y:this.coords.vy})}}},446:(t,s,i)=>{"use strict";i.d(s,{default:()=>h});const o=i(827),e=i(555),{v4:r}=i(877);class h{constructor(t={}){this.showDirections=t.showDirections??!1,this.showLines=t.showLines??!1,this.h=t.height??300,this.w=t.width??400,this.toSummon=t.toSummon??10,this.fps=t.fps??20,this.particles={},this.particleOpts=t.particleOpts??{mass:5},this.parent=t.parent??document.body,this.bg=t.background??"#fefefe",this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.classList.add("simulation"),this.canvas.dataset.uuid=r(),this.canvas.style.background=this.bg,this.parent.appendChild(this.canvas),this.playing=t.autoPlay??!0,this.t=0}get particlesUUIDs(){return Object.keys(this.particles)}setFPS(t){this.fps=t}size(t=this.h,s=this.w){this.h=t,this.w=s,this.init()}anim(){this.context.clearRect(0,0,this.w,this.h);for(let t=0;t<this.particlesUUIDs.length;t++)this.particles[this.particlesUUIDs[t]].update(this.t);this.playing&&(this.animFrame=requestAnimationFrame((()=>this.anim())))}init(){cancelAnimationFrame(this.animFrame),this.canvas.height=this.h,this.canvas.width=this.w,this.particles={};for(let t=0;t<this.toSummon;t++)this.addParticle();this.anim()}addParticles(t){for(let s=0;s<t.length;s++)this.addParticle(t[s])}addParticle(t={}){let s=new o(this,{...this.particleOpts,...t});t.coords||(s.coords.position({x:e.randomInt(s.h,this.w-s.h),y:e.randomInt(s.h,this.h-s.h)}),s.coords.speed({x:e.randomInt(-2,2),y:e.randomInt(-2,2)})),this.particles[s.uuid]=s}removeParticle(t){this.particles[t]&&delete this.particles[t]}pause(){this.playing=!1}play(){this.playing||(this.playing=!0,this.anim())}}},555:t=>{t.exports={randomInt:function(t,s){return t=Math.ceil(t),s=Math.floor(s),Math.floor(Math.random()*(s-t+1))+t},randomFloat:function(t,s){return Math.random()*(s-t)+t},drawVect:function(t,s,i,o={}){t.strokeStyle=o.color??"yellow",t.lineWidth=o.width??.1,t.beginPath(),t.moveTo(s.x,s.y),t.lineTo(i.x,i.y),t.stroke(),t.closePath()},drawText:function(t,s,i,o={}){t.fillStyle="black",t.font=`${o.size??"48px"} ${o.font??"serif"}`,t.fillText(i,s.x,s.y)},rotate:function(t,s){return{x:t.x*Math.cos(s)-t.y*Math.sin(s),y:t.x*Math.sin(s)+t.y*Math.cos(s)}}}}},s={};function i(o){var e=s[o];if(void 0!==e)return e.exports;var r=s[o]={exports:{}};return t[o](r,r.exports,i),r.exports}return i.d=(t,s)=>{for(var o in s)i.o(s,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:s[o]})},i.o=(t,s)=>Object.prototype.hasOwnProperty.call(t,s),i(138)})()}));