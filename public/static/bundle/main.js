(()=>{"use strict";var e={964:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(803);t.default=function(e){const{score:t,highScore:n,playAgain:o}=e;return i.html`
		<section class="game-over">
			<article class="game-over__container">
				<h1>Game Over</h1>
				<p>Your score was ${t}</p>
				<p>highest achieved score was ${n}</p>
				<button @click="${o}">play again</button>
			</article>
		</section>
	`}},175:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(803);t.default=function(e){const{onPlay:t,onHighScore:n}=e;return i.html`
		<section class="main-menu">
			<article class="main-menu__container">
				<h1>Asteroids</h1>
				<ul>
					<li>
						<button @click="${t}">Play</button>
					</li>

					<li>
						<button @click="${n}">High scores</button>
					</li>
				</ul>
			</article>
		</section>
	`}},913:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.gameConfig=void 0;const i=n(322),o=n(762),r=innerWidth,s=innerHeight,a=new o.StateStack,c=new i.Frame(r,s);c.setRenderingContext("2d");const h=c.getRenderingContext;t.gameConfig={stateStack:a,frame:c,ctx:h,width:r,height:s,id:0,entities:[]}},950:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Asteroid=void 0;const i=n(599),o=n(913),r=n(262);t.Asteroid=class{constructor(e=(0,i.rand)(0,o.gameConfig.width),t=(0,i.rand)(0,o.gameConfig.height),n=128,r=80){this.id="ASTEROID",this.x=e,this.y=t,this.w=n,this.h=n,this.speed=r,this.angle=(0,i.degreeToRadian)((0,i.rand)(0,360)),this.active=!0}resetLocation(){this.angle=(0,i.degreeToRadian)((0,i.rand)(0,360))}move(){const{width:e,height:t}=o.gameConfig;this.x<0?(this.x=e-this.w,this.resetLocation()):this.x>e&&(this.x=0,this.resetLocation()),this.y<0?(this.y=t-this.w,this.resetLocation()):this.y>t&&(this.y=0,this.resetLocation()),this.x+=this.speed*Math.cos(this.angle)*r.delta,this.y+=this.speed*Math.sin(this.angle)*r.delta}update(){this.move()}render(){const e=o.gameConfig.ctx;e.save(),e.translate(this.x+this.w/2,this.y+this.h/2),e.rotate(this.angle),e.strokeStyle="#ffffff";let t=-this.w/2,n=-this.h/2;e.beginPath(),e.moveTo(t,n),e.lineTo(t+this.w/2,n),e.lineTo(t+this.w/1.2,n+this.h/4),e.lineTo(t+this.w,n),e.lineTo(t+this.w,n+this.h/1.2),e.lineTo(t+this.w/1.2,n+this.h),e.lineTo(t+this.w/5,n+this.h),e.lineTo(t,n+this.h/2),e.lineTo(t,n),e.lineTo(t,n),e.stroke(),e.restore()}}},226:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Bullet=void 0;const i=n(913),o=n(262);t.Bullet=class{constructor(e,t,n,i){this.owner="PLAYER",this.x=0,this.y=0,this.w=8,this.h=4,this.id="BULLET",this.speed=500,this.angle=0,this.active=!0,this.owner=e,this.x=t,this.y=n,this.angle=i}killAfterSecond(){setTimeout((()=>{this.active=!1}),1e3)}handleScreenBorders(){const{width:e,height:t}=i.gameConfig;this.x<0?(this.x=e,this.killAfterSecond()):this.x>e&&(this.x=0,this.killAfterSecond()),this.y<0?(this.y=t,this.killAfterSecond()):this.y>t&&(this.y=0,this.killAfterSecond())}update(){this.handleScreenBorders(),this.x+=this.speed*Math.cos(this.angle)*o.delta,this.y+=this.speed*Math.sin(this.angle)*o.delta}render(){const e=i.gameConfig.ctx;e.save(),e.translate(this.x+this.w/2,this.y+this.h/2),e.rotate(this.angle),e.fillStyle="#ffffff",e.fillRect(-this.w/2,-this.h/2,this.w,this.h),e.restore()}}},730:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Particle=void 0;const i=n(913),o=n(599),r=n(262);t.Particle=class{constructor(e){this.id="PARTICLE";const{width:t,height:n}=i.gameConfig,{angle:r,x:s,y:a,speed:c}=e;this.x=s,this.y=a,this.w=3,this.h=this.w,this.speed=null!=c?c:50,this.angle=null!=r?r:(0,o.degreeToRadian)((0,o.rand)(0,360)),this.active=!0,setTimeout((()=>{this.active=!1}),5e3)}render(){const e=i.gameConfig.ctx;e.save(),e.translate(this.x+this.w/2,this.y+this.h/2),e.rotate(this.angle),e.fillStyle="#ffffff",e.fillRect(-this.w/2,-this.h/2,this.w,this.h),e.restore()}update(){this.x+=this.speed*Math.cos(this.angle)*r.delta,this.y+=this.speed*Math.sin(this.angle)*r.delta}}},661:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.hero=void 0;const i=n(913),o=n(29),r=n(599),s=n(262),a=n(226);t.hero=new class{constructor(){this.x=0,this.y=0,this.w=32,this.h=32,this.speed=600,this.angle=0,this.active=!0,this.id="PLAYER",this.velocity=new r.Vec2(0,0),this.acceleration=new r.Vec2(0,0),this.friction=.99,this.score=0,this.highScore=0,this.lives=3,this.cooldown=0,this.cooldownDecrement=6,this.hitPrepared=!0}renderUi(){const e=i.gameConfig.ctx;e.font="20px monospace",e.fillStyle="#fff",e.fillText(`score: ${this.score}`,30,30),e.fillText(`lives: ${this.lives}`,30,60)}renderPlayer(){const e=i.gameConfig.ctx;e.save(),e.translate(this.x+this.w/2,this.y+this.h/2),e.rotate(this.angle);let t=-this.w/2,n=-this.h/2;e.strokeStyle="white",e.beginPath(),e.moveTo(t,n),e.lineTo(t+this.w,n+this.h/2),e.lineTo(t,n+this.h),e.moveTo(t+this.w/2,n+this.h/2),e.lineTo(t,n),e.moveTo(t+this.w/2,n+this.h/2),e.lineTo(t,n+this.h),e.stroke(),e.restore()}shoot(){if(this.cooldown<=0){let e=this.x+this.w/2,t=this.y+this.h/2;i.gameConfig.entities.push(new a.Bullet("PLAYER",e,t,this.angle)),this.cooldown=100}}handleMovement(){this.velocity.x+=this.acceleration.x,this.velocity.y+=this.acceleration.y,this.velocity.x*=this.friction,this.velocity.y*=this.friction,this.x+=this.velocity.x*s.delta,this.y+=this.velocity.y*s.delta}handleInput(){(0,o.isDown)("W")?(this.acceleration.x=this.speed*Math.cos(this.angle)*s.delta,this.acceleration.y=this.speed*Math.sin(this.angle)*s.delta):this.acceleration.x=this.acceleration.y=0,(0,o.isDown)("A")?this.angle-=3*s.delta:(0,o.isDown)("D")&&(this.angle+=3*s.delta),(0,o.isDown)("SPACE")&&this.shoot()}handleScreenBorders(){const{width:e,height:t}=i.gameConfig;switch(!0){case this.x<0:this.x=e-this.w;break;case this.x>e:this.x=0;break;case this.y<0:this.y=t-this.h;break;case this.y+this.h>t:this.y=this.h}}handleCooldown(){this.cooldown>0&&(this.cooldown-=this.cooldownDecrement)}handleSave(){const e="asteroids/player";if(!localStorage.getItem(e)){const t={highScore:this.score};localStorage.setItem(e,JSON.stringify(t))}const t=JSON.parse(localStorage.getItem(e));t.highScore=this.score>t.highScore?this.score:t.highScore,localStorage.setItem(e,JSON.stringify(t))}handleLoad(){if(!localStorage.getItem("asteroids/player"))return void console.warn("No user save");const e=JSON.parse(localStorage.getItem("asteroids/player"));this.highScore=e.highScore}update(){this.handleScreenBorders(),this.handleInput(),this.handleMovement(),this.handleCooldown()}render(){this.renderPlayer(),this.renderUi()}hit(){this.hitPrepared&&(this.lives<=1&&(this.handleSave(),this.active=!1),this.lives-=1,this.hitPrepared=!1),setTimeout((()=>this.hitPrepared=!0),2e3)}isAlive(){return this.active}addScore(){this.score+=10}get getScore(){return this.score}get getHighScore(){return this.highScore}reset(){this.handleLoad(),this.x=0,this.y=0,this.angle=0,this.active=!0,this.lives=3,this.velocity=new r.Vec2(0,0),this.acceleration=new r.Vec2(0,0),this.cooldown=0,this.cooldownDecrement=2.5,this.hitPrepared=!0}}},769:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.asteroids=void 0;const i=n(913),o=n(262);t.asteroids=new class{constructor(){this.loop=this.loop.bind(this)}render(){var e;null===(e=i.gameConfig.stateStack.peek())||void 0===e||e.render()}update(){var e;null===(e=i.gameConfig.stateStack.peek())||void 0===e||e.update()}loop(){o.Perf.beforeCycle(),this.update(),this.render(),i.gameConfig.id=window.requestAnimationFrame(this.loop),o.Perf.afterCycle()}onStart(){i.gameConfig.frame.create(document.body),this.loop()}init(e){if(e&&i.gameConfig.stateStack.push(e),0===i.gameConfig.stateStack.size())throw new Error("Cannot initialize game without any state");this.onStart()}}},778:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.end=void 0;const o=i(n(964)),r=n(913),s=n(599),a=n(661),c=n(848);t.end=new class{onEnter(){this.renderHtml()}onExit(){}render(){const{width:e,height:t}=r.gameConfig,n=r.gameConfig.ctx;n.clearRect(0,0,e,t),n.fillStyle="white",n.fillRect(0,(0,s.rand)(0,t),e,10)}handleNewGame(){var e;null===(e=document.querySelector(".game-over"))||void 0===e||e.remove(),r.gameConfig.stateStack.pop(),r.gameConfig.stateStack.push(c.play),a.hero.reset()}renderHtml(){(0,o.default)({score:a.hero.getScore,highScore:a.hero.getHighScore,playAgain:this.handleNewGame})(document.body)}update(){}}},305:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.menu=void 0;const o=n(913),r=n(730),s=n(599),a=i(n(175)),c=n(848);t.menu=new class{onEnter(){const{entities:e,width:t,height:n}=o.gameConfig;for(let i=0;i<75;i++)e.push(new r.Particle({x:(0,s.rand)(0,t),y:(0,s.rand)(0,n)}));this.renderHtml()}render(){const{entities:e}=o.gameConfig;e.forEach((e=>{e.render()}))}handlePlay(){o.gameConfig.stateStack.pop(),o.gameConfig.stateStack.push(c.play)}handleHighScore(){}renderHtml(){(0,a.default)({onPlay:this.handlePlay,onHighScore:this.handleHighScore})(document.body)}update(){}onExit(){var e;o.gameConfig.entities.length=0,null===(e=document.querySelector(".main-menu"))||void 0===e||e.remove()}}},848:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.play=void 0;const i=n(913),o=n(661),r=n(29),s=n(778),a=n(490);t.play=new class{onEnter(){(0,r.initInput)(),a.playManager.init()}onExit(){i.gameConfig.entities.length=0}render(){const{entities:e,width:t,height:n}=i.gameConfig;i.gameConfig.ctx.clearRect(0,0,t,n),e.forEach((e=>e.render()))}update(){a.playManager.update(),o.hero.isAlive()||(i.gameConfig.stateStack.pop(),i.gameConfig.stateStack.push(s.end))}}},490:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.playManager=void 0;const i=n(913),o=n(950),r=n(730),s=n(661),a=n(429);t.playManager=new class{collision(){const{entities:e}=i.gameConfig,t=e.filter((e=>"ASTEROID"===e.id)),n=e.filter((e=>"BULLET"===e.id)),c=e.filter((e=>"ALIEN"===e.id));t.forEach((t=>{(0,a.rects)(t,s.hero)&&(s.hero.hit(),s.hero.addScore(),t.active=!1,e.push(new r.Particle({x:s.hero.x,y:s.hero.y}),new r.Particle({x:s.hero.x,y:s.hero.y}),new r.Particle({x:s.hero.x,y:s.hero.y})),64===t.w&&e.push(new o.Asteroid(32,300),new o.Asteroid(32,300),new o.Asteroid(32,300),new o.Asteroid(32,300))),n.forEach((n=>{(0,a.rects)(t,n)&&(t.active=!1,n.active=!1,s.hero.addScore(),e.push(new r.Particle({x:t.x,y:t.y}),new r.Particle({x:t.x,y:t.y}),new r.Particle({x:t.x,y:t.y})),128===t.w?e.push(new o.Asteroid(t.x,t.y,64,100),new o.Asteroid(t.x,t.y,64,100),new o.Asteroid(t.x,t.y,64,100),new o.Asteroid(t.x,t.y,64,100)):64===t.w&&e.push(new o.Asteroid(t.x,t.y,32,150),new o.Asteroid(t.x,t.y,32,150))),c.forEach((e=>{let t=n;(0,a.rects)(e,n)&&"PLAYER"===t.owner?(e.active=!1,n.active=!1,s.hero.addScore()):(0,a.rects)(s.hero,n)&&"ALIEN"===t.owner&&(s.hero.hit(),n.active=!1)}))}))}))}update(){if(i.gameConfig.entities=i.gameConfig.entities.filter((e=>!0===e.active)),this.collision(),0===i.gameConfig.entities.filter((e=>"ASTEROID"===e.id)).length&&s.hero.isAlive())for(let e=0;e<4;e++)i.gameConfig.entities.push(new o.Asteroid);i.gameConfig.entities.length>0&&i.gameConfig.entities.forEach((e=>e.update()))}init(){for(let e=0;e<4;e++)i.gameConfig.entities.push(new o.Asteroid);i.gameConfig.entities.push(s.hero)}}},429:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Collision=t.vectors=t.points=t.rects=t.circles=void 0;const s=n(599);t.circles=function(e,t){const n=e.radius+t.radius,i=s.Maths.substrVectors(e.position,t.position);return s.Maths.getVectorLength(i)<=n},t.rects=function(e,t){return e.x<t.x+t.w&&e.x+e.w>t.x&&e.y<t.y+t.h&&e.y+e.h>t.y},t.points=function(e,t){return s.Maths.deepFloatCmp(e.x,t.x)&&s.Maths.deepFloatCmp(e.y,t.y)},t.vectors=function(e,t){const n=e.x===t.x,i=e.y===t.y;return n&&i},t.Collision=r(n(429))},322:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Frame=void 0;class n{constructor(e,t,n){this.width=null!=e?e:innerWidth,this.height=null!=t?t:innerHeight,this.backgroundColor=null!=n?n:"#000000",this.id=Date.now(),this.canvas=document.createElement("canvas"),this.destination=document.body,this.context=null,this.canvas.id=String(this.id),this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.backgroundColor=this.backgroundColor,this.canvas.innerHTML='\n            <h2>Unsuported browser</h2>\n            <p>\n                Sorry, but your current browser won\'t do anymore. \n                Either you upgrade your browser or just leave.\n            </p>\n            <a href="https://www.mozilla.org/en-US/firefox/new/">Browser upgrade</a>\n        '}create(e){e?(this.destination=e,this.destination.appendChild(this.canvas)):this.destination.appendChild(this.canvas)}remove(){this.destination.removeChild(this.canvas)}resize(e,t){this.width=e,this.height=t,this.canvas.width=e,this.canvas.height=t}static createInstance(e){let t=new n(e.width,e.height,e.style.backgroundColor);return t.setDestination=e.parentElement,t}get getWidth(){return this.width}get getHeight(){return this.height}get getBackgroundColor(){return this.backgroundColor}get getId(){return this.id}get getCanvas(){return this.canvas}get getDestination(){return this.destination}get getRenderingContext(){return this.context}set setWidth(e){this.width=e,this.canvas.width=e}set setHeight(e){this.height=e,this.canvas.height=e}set setBackgroundColor(e){this.backgroundColor=e,this.canvas.style.backgroundColor=e}set setId(e){this.id=e,this.canvas.id=String(e)}set setCanvas(e){this.canvas=e}set setDestination(e){this.destination=e}setRenderingContext(e,t){this.context=this.canvas.getContext(e,t)}}t.Frame=n},29:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initInput=t.isDown=void 0;const n={};function i(e,t){const i=e.keyCode;let o;switch(i){case 27:o="ESC";break;case 32:o="SPACE";break;case 13:o="ENTER";break;default:o=String.fromCharCode(i)}n[o]=t}t.isDown=function(e){return n[e]},t.initInput=function(){window.addEventListener("keydown",(e=>i(e,!0))),window.addEventListener("keyup",(e=>i(e,!1)))}},599:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Maths=t.getUnitVector=t.deepFloatCmp=t.getVectorLength=t.getDividedVector=t.getScaledVector=t.getNegateVector=t.substrVectorArray=t.substrVectors=t.sumVectorArray=t.sumVectors=t.limitValue=t.degreeToRadian=t.isNumberBetween=t.randBool=t.randElement=t.randInt=t.randEven=t.rand=t.Circle=t.LineSegment=t.Line=t.OrientedRect=t.Rect=t.Vec2=void 0;class s{constructor(e,t){this.x=null!=e?e:0,this.y=null!=t?t:0}}t.Vec2=s;class a{constructor(e,t,n,i){this.x=null!=e?e:0,this.y=null!=t?t:0,this.w=null!=n?n:10,this.h=null!=i?i:10}}function c(e,t){return e+Math.random()*(t-e)}function h(e,t){return Math.floor(c(e,t))}function l(e){return e[h(0,e.length)]}function d(e,t){return new s(e.x/t,e.y/t)}function u(e){return Math.sqrt(e.x*e.x+e.y*e.y)}t.Rect=a,t.OrientedRect=class extends a{constructor(e=0,t=0,n=4,i=4,o=0){super(e,t,n,i),this.angle=o}},t.Line=class{constructor(e,t){this.base=null!=e?e:new s,this.direction=null!=t?t:new s}},t.LineSegment=class{constructor(e,t){this.a=null!=e?e:new s,this.b=null!=t?t:new s}},t.Circle=class{constructor(e,t){this.position=null!=e?e:new s,this.radius=null!=t?t:0}},t.rand=c,t.randEven=function(e,t){let n=[];for(let i=e;i<t;i++)i%2==0&&n.push(i);return l(n)},t.randInt=h,t.randElement=l,t.randBool=function(){return l([!0,!1])},t.isNumberBetween=function(e,t,n){return e>=t&&e<=n},t.degreeToRadian=function(e){return e*Math.PI/180},t.limitValue=function(e,t,n){return Math.max(t,Math.min(n,e))},t.sumVectors=function(e,t){return new s(e.x+t.x,e.y+t.y)},t.sumVectorArray=function(e){const t=e.length-1,n=new s;for(let i=0;i<t;i++)n.x+=e[i].x,n.y+=e[i].y;return n},t.substrVectors=function(e,t){return new s(e.x-t.x,e.y-t.y)},t.substrVectorArray=function(e){const t=e.length-1,n=new s;for(let i=0;i<t;i++)n.x-=e[i].x,n.y-=e[i].y;return n},t.getNegateVector=function(e){return new s(-Math.abs(e.x),-Math.abs(e.y))},t.getScaledVector=function(e,t){return new s(e.x*t,e.y*t)},t.getDividedVector=d,t.getVectorLength=u,t.deepFloatCmp=function(e,t){return Math.abs(e-t)<1/8192},t.getUnitVector=function(e){const t=u(e);return 0<t?d(e,t):e};const f=new s(0,0);Object.freeze(f),t.Maths=r(n(599))},262:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};function s(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()}Object.defineProperty(t,"__esModule",{value:!0}),t.Perf=t.afterCycle=t.beforeCycle=t.delta=t.fps=void 0;let a=0,c=s();t.fps=0,t.delta=0,t.beforeCycle=function(){a=s(),t.delta=Math.min(1,(a-c)/1e3),t.fps=1/t.delta},t.afterCycle=function(){c=a},t.Perf=r(n(262))},762:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StateStack=void 0,t.StateStack=class{constructor(e=1/0){this.capacity=e,this.storage=[]}push(e){if(this.size()===this.capacity)throw new Error("Stack reached maximum capacity");e.onEnter(),this.storage.push(e)}pop(){let e=this.storage.pop();return null==e||e.onExit(),e}peek(){return this.storage[this.size()-1]}size(){return this.storage.length}}},803:(e,t,n)=>{n.r(t),n.d(t,{html:()=>C,nextTick:()=>h,r:()=>_,reactive:()=>E,t:()=>y,w:()=>S,watch:()=>M});const i=new Map,o=new Set,r=new Set;let s=!1;const a=new WeakMap;function c(e){return(t,n)=>{o.size||setTimeout((()=>{s=!0,o.forEach((e=>e(t,n))),o.clear(),s=!1,r.forEach((e=>e())),r.clear()})),!s&&o.add(e)}}function h(e){if(!o.size)return e&&e(),Promise.resolve();let t;const n=new Promise((e=>{t=e}));return r.add((()=>{e&&e(),t()})),n}function l(e,t){i.forEach((n=>{let i=n.get(e);i||(i=new Set,n.set(e,i)),i.add(t)}))}function d(e){return"function"==typeof e&&!!e.isT}function u(e){return"object"==typeof e&&null!==e&&"function"==typeof e.$on}function f(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function g(e){const t=document.createElement("template");t.innerHTML=e;const n=t.content.cloneNode(!0);return n.normalize(),n.childNodes}function p(e=Symbol()){let t="",n=[],i=[],o=[];const r=new Map,s=()=>{i.length||c();const e=h(m(g(t),n)());return a(),e};s.ch=()=>o,s.l=0,s.add=e=>{if(!e&&0!==e)return;let o,a=e,c=[];var h;d(e)?[a,c,o]=e._h():a="\x3c!----\x3e"===(h=String(e))?h:h.replace(/[<>]/g,(e=>">"===e?"&gt;":"&lt;")),t+=a,t+="\x3c!--❍⇚--\x3e";const l=o&&r.get(o),u=l||{html:a,exp:c,dom:[],tpl:e,key:o};i.push(u),o&&(l?l.exp.forEach(((e,t)=>e._up(c[t].e))):r.set(o,u)),c.forEach((e=>n.push(e))),s.l++},s._up=()=>{const t=p(e);let n=0,r=o[0].dom[0];i.length||c(document.createComment(""));const s=()=>{if(!t.l)return;const e=t(),o=e.lastChild;r[n?"after":"before"](e),l(t,i,n),r=o};i.forEach(((e,i)=>{const a=o[i];e.key&&e.dom.length?(s(),a&&a.dom===e.dom||r[i?"after":"before"](...e.dom),r=e.dom[e.dom.length-1]):a&&e.html===a.html&&!a.key?(s(),a.exp.forEach(((t,n)=>t._up(e.exp[n].e))),e.exp=a.exp,e.dom=a.dom,r=e.dom[e.dom.length-1]):(t.l||(n=i),t.add(e.tpl))})),s();let h=r.nextSibling;for(;h&&f(h,e);){const e=h.nextSibling;v(h),h=e}a()};const a=()=>{t="",s.l=0,n=[],o=[...i],i=[]},c=e=>{t="\x3c!----\x3e",i.push({html:t,exp:[],dom:e?[e]:[],tpl:t,key:0})},h=t=>{let n=0;const o=[];return t.childNodes.forEach((t=>{if(8===t.nodeType&&"❍⇚"===t.data)return n++,void o.push(t);Object.defineProperty(t,e,{value:e}),i[n].dom.push(t)})),o.forEach((e=>e.remove())),t},l=(e,t,n)=>{e.ch().forEach(((e,i)=>{t[n+i].dom=e.dom}))};return s}function y(e,...t){const n=[];let i="";const o=(e,t)=>{if("function"==typeof e){let i=()=>{};return n.push(Object.assign(((...t)=>e(...t)),{e,$on:e=>{i=e},_up:t=>{e=t,i()}})),t+"\x3c!--➳❍--\x3e"}return Array.isArray(e)?e.reduce(((e,t)=>o(t,e)),t):t+e},r=()=>(i||(i=e.reduce((function(e,n,i){return e+=n,void 0!==t[i]?o(t[i],e):e}),"")),i),s=e=>{const t=m(g(r()),n);return e?t(e):t()};return s.isT=!0,s._k=0,s._h=()=>[r(),n,s._k],s.key=e=>(s._k=e,s),s}function m(e,t){const n=document.createDocumentFragment();let i;for(;i=e.item(0);)8!==i.nodeType||"➳❍"!==i.nodeValue?(i instanceof Element&&w(i,t),i.hasChildNodes()&&m(i.childNodes,t)(i),n.append(i),i instanceof HTMLOptionElement&&(i.selected=i.defaultSelected)):n.append(x(i,t));return e=>e?(e.appendChild(n),e):n}function w(e,t){if(!e.hasAttributes())return;const n=e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement,i=e.attributes.length,o=[],r=[];for(let t=0;t<i;t++)r.push(e.attributes[t]);r.forEach((i=>{var r;const s=i.name;if(-1!==i.value.indexOf("\x3c!--➳❍--\x3e")){const i=t.shift();if("@"===s.charAt(0)){const t=s.substring(1);e.addEventListener(t,i),a.has(e)||a.set(e,new Map),null===(r=a.get(e))||void 0===r||r.set(t,i),o.push(s)}else S(i,(t=>{n&&"value"===s?e.value=t:!1!==t?e.setAttribute(s,t):e.removeAttribute(s)}))}})),o.forEach((t=>e.removeAttribute(t)))}function v(e){var t;e.remove(),null===(t=a.get(e))||void 0===t||t.forEach(((t,n)=>e.removeEventListener(n,t)))}function x(e,t){const n=document.createDocumentFragment();e.remove();const i=p(),o=t.shift();if(o&&d(o.e))i.add(o.e);else{i.l&&n.appendChild(i());let e=document.createTextNode("");e=S(o,(t=>b(e,t))),n.appendChild(e instanceof Node?e:e())}return i.l&&n.appendChild(i()),n}function b(e,t){if(!Array.isArray(t))return b(e,[t]);const n="function"==typeof e,i=n?e:p();return t.forEach((e=>i.add(e))),n&&i._up(),i}function S(e,t){const n=Symbol();i.has(n)||i.set(n,new Map);let o=new Map;const r=c(s);function s(){i.set(n,new Map);const s=e(),a=i.get(n);return i.delete(n),o.forEach(((e,t)=>{const n=a.get(t);n&&n.forEach((t=>e.delete(t))),e.forEach((e=>t.$off(e,r)))})),a.forEach(((e,t)=>{e.forEach((e=>t.$on(e,r)))})),o=a,t?t(s):s}return function(e){return f(e,"$on")}(e)&&e.$on(s),s()}function _(e,t={}){if(u(e)||"object"!=typeof e)return e;const n=t.o||new Map,i=t.op||new Map,o=Array.isArray(e),r=[],s=o?[]:Object.create(e,{});for(const t in e){const n=e[t];"object"==typeof n&&null!==n?(s[t]=u(n)?n:_(n),r.push(t)):s[t]=n}const a=e=>(t,o)=>{let r=n.get(t),s=i.get(o);r||(r=new Set,n.set(t,r)),s||(s=new Set,i.set(o,s)),r[e](o),s[e](t)},c=a("add"),h=a("delete"),d=(e,t,i)=>{n.has(e)&&n.get(e).forEach((e=>e(t,i)))},g={$on:c,$off:h,_em:d,_st:()=>({o:n,op:i,r:s,p:p._p}),_p:void 0},p=new Proxy(s,{get(...e){const[,t]=e;if(Reflect.has(g,t))return Reflect.get(g,t);const n=Reflect.get(...e);return l(p,t),o&&f(Array.prototype,t)?function(e,t,n,i){const o=(...i)=>{const o=Array.prototype[e].call(t,...i);if(t.forEach(((e,t)=>n._em(String(t),e))),n._p){const[e,t]=n._p;t._em(e,n)}return o};switch(e){case"shift":case"pop":case"sort":case"reverse":case"copyWithin":return o;case"unshift":case"push":case"fill":return(...e)=>o(...e.map((e=>_(e))));case"splice":return(e,t,...n)=>o(e,t,...n.map((e=>_(e))));default:return i}}(t,s,p,n):n},set(...e){const[t,n,i]=e,o=Reflect.get(t,n);if(Reflect.has(g,n))return Reflect.set(g,n,i);if(i&&u(o)){const e=o,r=e._st(),s=u(i)?function(e,t){const n=t._st();return n.o&&n.o.forEach(((t,n)=>{t.forEach((t=>{e.$on(n,t)}))})),n.p&&(e._p=n.p),e}(i,e):_(i,r);return Reflect.set(t,n,s),d(n,s),r.o.forEach(((t,n)=>{const i=Reflect.get(o,n),r=Reflect.get(s,n);i!==r&&e._em(n,r,i)})),!0}const r=Reflect.set(...e);return r&&(o!==i&&d(n,i,o),p._p&&p._p[1]._em(...p._p)),r}});return r.map((e=>{p[e]._p=[e,p]})),p}const C=y,E=_,M=S}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{const e=n(769),t=n(305);window.addEventListener("load",(function(){try{e.asteroids.init(t.menu)}catch(e){console.error(e),alert(e)}}))})(),n.p})();