"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var _createClass=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();!function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return t[n].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){r(1),r(2),r(3),r(4),r(5),r(6),r(7),r(8),r(9),t.exports=r(10)},function(t,e,r){var n=r(2);t.exports=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,Object.getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),_createClass(e,[{key:"addView",value:function(){this.generate_interval=3e3,this.addCloud()}},{key:"addCloud",value:function(){var t=this;setInterval(function(){if(n.isDoing(30))var r=n.getTime(),a=e.getCloudShadowAlpha(r.hour),i=e.getCloudShadowAlpha(r.hour+1),o=a+(i-a)/60*r.minute,s=n.getRandom(0,t.height/3*2),h=n.getRandom(50,130),u=n.getRandom(15,30),l=100*(t.width+n.getRandom(0,500)),c=t.paper.ellipse(-200,s,h,u).attr({fill:"rgba(255, 255, 255, "+o+")",filter:t.getShadowFilter()}).animate({cx:t.width+4e3},l,mina.linear,function(){c.remove()})},this.generate_interval)}}],[{key:"getCloudShadowAlpha",value:function(t){var e=[.1,.1,.1,.1,.1,.1,.5,.9,.9,.9,.9,.9,.9,.9,.9,.9,.9,.9,.5,.1,.1,.1,.1,.1,.1];return e[t]}}]),e}(n)},function(t,e){t.exports=function(){function t(e,r,n){_classCallCheck(this,t),this.weather=e,this.width=r,this.height=n,this.paper=Snap(this.width,this.height).remove(),this.addView()}return _createClass(t,[{key:"addView",value:function(){}},{key:"getPaper",value:function(){return this.paper}},{key:"getShadowFilter",value:function(){return this.paper.filter(Snap.filter.shadow(0,0,2,"#000",.1))}}],[{key:"isDoing",value:function(t){return Math.floor(100*Math.random())+1<=t}},{key:"getRandom",value:function(t,e){return Math.floor(Math.random()*(e-t))+t}},{key:"getTime",value:function(){var t=new Date;return{year:t.getFullYear(),month:t.getMonth(),date:t.getDate(),hour:t.getHours(),minute:t.getMinutes(),second:t.getSeconds()}}},{key:"getRgbaString",value:function(t,e,r){var n=arguments.length<=3||void 0===arguments[3]?"1.0":arguments[3];return"rgba("+t+", "+e+", "+r+", "+n+")"}}]),t}()},function(t,e,r){var n=r(2);t.exports=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,Object.getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),_createClass(e,[{key:"addView",value:function(){this.addGround(),this.addPattern(),this.addShadow()}},{key:"addGround",value:function(){this.ground=this.paper.path(e.PATH).attr({fill:"#3a9b00",opacity:1,filter:this.getShadowFilter()})}},{key:"addPattern",value:function(){var t=this.paper.path(e.PATH).attr({fill:"#3a9b00",opacity:1});this.paper.image("/wp-content/themes/comouflage/asset/img/ground.png",0,0,this.width,this.height).attr({mask:t})}},{key:"addShadow",value:function(){var t=n.getTime(),r=e.getGroundShadowAlpha(t.hour),a=e.getGroundShadowAlpha(t.hour+1),i=r+(a-r)/60*t.minute;this.shadow=this.paper.path(e.PATH).attr({fill:"rgba(0, 0, 0, "+i+")"})}}],[{key:"getGroundShadowAlpha",value:function(t){var e=[.7,.7,.7,.7,.7,.7,.5,.3,.1,0,0,0,0,0,0,0,.1,.3,.5,.7,.7,.7,.7,.7,.7];return e[t]}},{key:"PATH",get:function(){return"M0,170.7s178.11,28.21,385.46,0,254.34-3.73,364.66,0S920.7,148,1086.18,148,1280,165.6,1280,165.6V285H0Z"}}]),e}(n)},function(t,e,r){var n=r(2);t.exports=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,Object.getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),_createClass(e,[{key:"addView",value:function(){this.addMoon()}},{key:"addMoon",value:function(){var t=this,e=this.getMoonPos();this.moon=this.paper.circle(e[0],e[1],32).attr({fill:"#ffff00"}),setInterval(function(){var e=t.getMoonPos();t.moon.attr({cx:e[0],cy:e[1]})},6e4)}},{key:"getMoonPos",value:function(){var t=n.getTime(),e=t.hour<12?t.hour+6:t.hour-18,r=t.hour+1<12?t.hour+1+6:t.hour+1-18,a=Math.round(this.width/12*e),i=Math.round(this.height/9*Math.abs(6-e)),o=Math.round(this.width/12*r),s=Math.round(this.height/9*Math.abs(6-r)),h=a+(o-a)/60*t.minute,u=i+(s-i)/60*t.minute;return[h,u]}}]),e}(n)},function(t,e,r){var n=r(2);t.exports=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,Object.getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),_createClass(e,[{key:"addView",value:function(){this.addSky(),this.addPattern()}},{key:"addSky",value:function(){var t=this;this.sky=this.paper.rect(0,0,this.width,this.height).attr({fill:this.paper.gradient("l(0, 0, 0, 1)"+e.getTopSkyColor()+"-"+e.getBottomSkyColor())}),setInterval(function(){t.sky.attr({fill:t.paper.gradient("l(0, 0, 0, 1)"+e.getTopSkyColor()+"-"+e.getBottomSkyColor())})},6e4)}},{key:"addPattern",value:function(){var t=this.paper.rect(0,0,this.width,this.height).attr({fill:"#333",opacity:1});this.paper.image("/wp-content/themes/comouflage/asset/img/sky.png",0,0,this.width,this.height).attr({mask:t})}}],[{key:"getTopSkyColor",value:function(){var t=n.getTime(),r=e.getSkyTopColors(t.hour),a=e.getSkyTopColors(t.hour+1),i=r[0]+(a[0]-r[0])/60*t.minute,o=r[1]+(a[1]-r[1])/60*t.minute,s=r[2]+(a[2]-r[2])/60*t.minute;return n.getRgbaString(i,o,s)}},{key:"getBottomSkyColor",value:function(){var t=n.getTime(),r=e.getSkyBottomColors(t.hour),a=e.getSkyBottomColors(t.hour+1),i=r[0]+(a[0]-r[0])/60*t.minute,o=r[1]+(a[1]-r[1])/60*t.minute,s=r[2]+(a[2]-r[2])/60*t.minute;return n.getRgbaString(i,o,s)}},{key:"getSkyTopColors",value:function(t){var e=[[64,80,111],[64,80,111],[64,80,111],[64,80,111],[64,80,111],[64,80,111],[204,238,255],[204,238,255],[204,238,255],[204,238,255],[204,238,255],[204,238,255],[204,238,255],[204,238,255],[204,238,255],[204,238,255],[204,238,255],[255,232,186],[255,225,131],[64,80,111],[64,80,111],[64,80,111],[64,80,111],[64,80,111],[64,80,111]];return e[t]}},{key:"getSkyBottomColors",value:function(t){var e=[[64,80,111],[64,80,111],[64,80,111],[64,80,111],[64,80,111],[64,80,111],[204,238,255],[204,238,255],[204,238,255],[204,238,255],[204,238,255],[204,238,255],[204,238,255],[204,238,255],[204,238,255],[204,238,255],[229,247,225],[255,213,145],[255,225,131],[64,80,111],[64,80,111],[64,80,111],[64,80,111],[64,80,111],[64,80,111]];return e[t]}}]),e}(n)},function(t,e,r){var n=r(2);t.exports=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,Object.getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),_createClass(e,[{key:"addView",value:function(){this.addSun()}},{key:"addSun",value:function(){var t=this,e=this.getSunPos();this.sun=this.paper.circle(e[0],e[1],32).attr({fill:"#ffffb3",filter:this.getShadowFilter()}),setInterval(function(){var e=t.getSunPos();t.sun.attr({cx:e[0],cy:e[1]})},6e4)}},{key:"getSunPos",value:function(){var t=n.getTime(),e=Math.round(this.width/12*(t.hour-6)),r=Math.round(this.height/9*Math.abs(12-t.hour)),a=Math.round(this.width/12*(t.hour+1-6)),i=Math.round(this.height/9*Math.abs(t.hour+1-12)),o=e+(a-e)/60*t.minute,s=r+(i-r)/60*t.minute;return[o,s]}}]),e}(n)},function(t,e){t.exports=function t(){_classCallCheck(this,t),this.state=0}},function(t,e,r){var n=r(2);t.exports=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,Object.getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),_createClass(e,[{key:"addView",value:function(){this.addWhale()}},{key:"addWhale",value:function(){var t=this.getShadowFilter(),r=(this.paper.path(e.BODY).attr({fill:"#494168",filter:t}),this.paper.path(e.CHIN).attr({fill:"#fff",filter:t}),this.paper.path(e.EYE).attr({fill:"#fff",filter:t}),this.paper.path(e.HAND1).attr({fill:"#494168",filter:t})),n=this.paper.path(e.AHOGE1).attr({fill:"#494168",filter:t}),a=this.paper.path(e.HAND2).attr({fill:"#494168",filter:t,opacity:0}),i=this.paper.path(e.AHOGE2).attr({fill:"#494168",filter:t,opacity:0});setInterval(function(){r.attr({opacity:1}),n.attr({opacity:1}),a.attr({opacity:0}),i.attr({opacity:0})},2e3),setTimeout(function(){setInterval(function(){r.attr({opacity:0}),n.attr({opacity:0}),a.attr({opacity:1}),i.attr({opacity:1})},2e3)},1e3)}},{key:"addMessage",value:function(t,e){jQuery(t).on("click",function(){if("none"==jQuery(e).css("display")){var t=n.getTime();jQuery(e).text(t.year+"/"+t.month+"/"+t.date+" "+t.hour+":"+("00"+t.minute).substr(-2)),jQuery(e).show()}else jQuery(e).hide()});var r=n.getTime();jQuery(e).text(r.year+"/"+r.month+"/"+r.date+" "+r.hour+":"+("00"+r.minute).substr(-2))}}],[{key:"BODY",get:function(){return"M175.71,179c6,5.67,9.6,11,9.28,16.42-6.58.74-17.48,2.57-22.53,5.47-6.7,3.85-19.66,6-26.94,6.83-4-.25-7.7-.59-10.46-1-8.61-1.35-11.48-6.42-12.75-12s1.25-8.47.21-16.28c-1-7.42-7.77-10-15.56-7.17.87-4.34,7.27-7.09,15.2-4.39,1.36-6.83,7.14-8.57,13.7-6.2-9.64,4.9-9.62,11.86-8.3,17.73,2.13,9.43,3.28,10.65,9.95,11.24s10.12-2.65,16.72-10.75C150.45,171.26,169.09,172.78,175.71,179Z"}},{key:"CHIN",get:function(){return"M185,195.45a11.73,11.73,0,0,1-.5,2.75c-2.69,8.82-12.16,8.87-22.8,9.63a220.77,220.77,0,0,1-26.18-.07c7.29-.85,20.25-3,26.94-6.83C167.51,198,178.41,196.19,185,195.45Z"}},{key:"EYE",get:function(){return"M168.79,190c0,2-3,3-3,0A1.5,1.5,0,0,1,168.79,190Z"}},{key:"HAND1",get:function(){return"M143.23,161.89c5.91-5.39,13.83-3.69,14.22,6.55A14.14,14.14,0,0,0,143.23,161.89Z"}},{key:"AHOGE1",get:function(){return"M152.56,201.57c0,4.49-3.27,18.26-14.66,15.69-3.9-.88,6.5-14.93,7.5-16.88"}},{key:"HAND2",get:function(){return"M176.55,161c-6.82-4.67-14.27-1.17-13.62,7.29C166.08,164.49,169.55,161.1,176.55,161Z"}},{key:"AHOGE2",get:function(){return"M152.56,201.83c0,5.53-12.07,15.49-19.44,13.3-3.89-1.15,8.62-13.25,12.28-14.77"}}]),e}(n)},function(t,e,r){var n=r(7),a=r(5),i=r(6),o=r(4),s=r(1),h=r(3),u=r(8);t.exports=function t(e,r,l){_classCallCheck(this,t),this.width=r,this.height=l;var c=new n,p=new a(c,this.width,this.height),d=new i(c,this.width,this.height),f=new o(c,this.width,this.height),g=new s(c,this.width,this.height),y=new h(c,this.width,this.height),v=new u(c,this.width,this.height),k=document.querySelector(e);p.getPaper().appendTo(k).addClass("l-header__sky"),d.getPaper().appendTo(k).addClass("l-header__sun"),f.getPaper().appendTo(k).addClass("l-header__moon"),g.getPaper().appendTo(k).addClass("l-header__cloud"),y.getPaper().appendTo(k).addClass("l-header__ground"),v.getPaper().appendTo(k).addClass("l-header__whale"),v.addMessage(".l-header__whale","#whale-message")}},function(t,e,r){var n=r(9);r(2);jQuery(function(){new n("#world",1280,285)})}]);