(self.webpackChunkCnblogs_Theme_SimpleMemory=self.webpackChunkCnblogs_Theme_SimpleMemory||[]).push([[2089],{3255:function(){var e;(e=jQuery).fn.circleMagic=function(o){var t,a,n,r,i=!0,l=[],s=e.extend({color:"rgba(255,255,255,.5)",radius:10,density:.3,clearOffset:.2},o),h=this[0];function d(){i=!(document.body.scrollTop>a)}function c(){t=h.clientWidth,a=h.clientHeight,h.height=a+"px",n.width=t,n.height=a}function f(){if(i)for(var e in r.clearRect(0,0,t,a),l)l[e].draw();requestAnimationFrame(f)}function m(){var e=this;function o(){e.pos.x=Math.random()*t,e.pos.y=a+100*Math.random(),e.alpha=.1+Math.random()*s.clearOffset,e.scale=.1+.3*Math.random(),e.speed=Math.random(),"random"===s.color?e.color="rgba("+Math.floor(255*Math.random())+", "+Math.floor(255*Math.random())+", "+Math.floor(255*Math.random())+", "+Math.random().toPrecision(2)+")":e.color=s.color}e.pos={},o(),this.draw=function(){e.alpha<=0&&o(),e.pos.y-=e.speed,e.alpha-=5e-4,r.beginPath(),r.arc(e.pos.x,e.pos.y,e.scale*s.radius,0,2*Math.PI,!1),r.fillStyle=e.color,r.fill(),r.closePath()}}!function(){var e;t=h.offsetWidth,a=h.offsetHeight,(e=document.createElement("canvas")).id="homeTopCanvas",h.appendChild(e),e.parentElement.style.overflow="hidden",(n=document.getElementById("homeTopCanvas")).width=t,n.height=a,n.style.position="absolute",n.style.left="0",n.style.bottom="0",n.style.zIndex="1",r=n.getContext("2d");for(var o=0;o<t*s.density;o++){var i=new m;l.push(i)}f()}(),window.addEventListener("scroll",d,!1),window.addEventListener("resize",c,!1)}}}]);