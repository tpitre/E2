
// usage: log('inside coolFunc', this, arguments);
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
      arguments.callee = arguments.callee.caller;
      console.log( Array.prototype.slice.call(arguments) );
  }
};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});

/*
Copyright (c) 2009 The Chromium Authors. All rights reserved.
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
*/
(function(e){if(!e.CFInstall){var f=function(a,b){return typeof a=="string"?(b||document).getElementById(a):a},h=function(){if(e.CFInstall._force)return e.CFInstall._forceValue;if(navigator.userAgent.toLowerCase().indexOf("chromeframe")>=0)return true;if(typeof window.ActiveXObject!="undefined")try{if(new ActiveXObject("ChromeTab.ChromeFrame"))return true}catch(a){}return false},i=function(a){try{var b=document.createElement("style");b.setAttribute("type","text/css");if(b.styleSheet)b.styleSheet.cssText=a;else b.appendChild(document.createTextNode(a));var c=document.getElementsByTagName("head")[0];c.insertBefore(b,c.firstChild)}catch(g){}},j=false,k=false,n=function(){if(!j){i('.chromeFrameInstallDefaultStyle {width: 800px;height: 600px;position: absolute;left: 50%;top: 50%;margin-left: -400px;margin-top: -300px;}.chromeFrameOverlayContent {position: absolute;margin-left: -400px;margin-top: -300px;left: 50%;top: 50%;border: 1px solid #93B4D9;background-color: white;z-index: 2001;}.chromeFrameOverlayContent iframe {width: 800px;height: 600px;border: none;}.chromeFrameOverlayCloseBar {height: 1em;text-align: right;background-color: #CADEF4;}.chromeFrameOverlayUnderlay {position: absolute;width: 100%;height: 100%;background-color: white;opacity: 0.5;-moz-opacity: 0.5;-webkit-opacity: 0.5;-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";filter: alpha(opacity=50);z-index: 2000;}');j=true}},l=function(){if(!k){i(".chromeFrameOverlayContent { display: none; }.chromeFrameOverlayUnderlay { display: none; }");document.cookie="disableGCFCheck=1;path=/;max-age=31536000000";k=true}},o=function(a,b){var c=f(b.node);a.id=b.id||(c?c.id||getUid(c):"");a.style.cssText=" "+(b.cssText||"");a.className=b.className||"";a.src=b.src||"about:blank";c&&c.parentNode.replaceChild(a,c)},m=function(a){var b=document.createElement("iframe");b.setAttribute("frameborder","0");b.setAttribute("border","0");o(b,a);return b},p=function(a){a.className="chromeFrameInstallDefaultStyle "+(a.className||"");a=m(a);a.parentNode||document.body.insertBefore(a,document.body.firstChild)},q=function(a){if(!f("chromeFrameOverlayContent")){var b=document.createElement("span");b.innerHTML='<div class="chromeFrameOverlayUnderlay"></div><table class="chromeFrameOverlayContent"id="chromeFrameOverlayContent"cellpadding="0" cellspacing="0"><tr class="chromeFrameOverlayCloseBar"><td><button id="chromeFrameCloseButton">close</button></td></tr><tr><td id="chromeFrameIframeHolder"></td></tr></table>';for(var c=document.body;b.firstChild;)c.insertBefore(b.lastChild,c.firstChild);a=m(a);f("chromeFrameIframeHolder").appendChild(a);f("chromeFrameCloseButton").onclick=l}},d={};d.check=function(a){a=a||{};var b=navigator.userAgent,c=/MSIE (\S+); Windows NT/,g=false;if(c.test(b)){if(parseFloat(c.exec(b)[1])<6&&b.indexOf("SV1")<0)g=true}else g=true;if(!g){n();document.cookie.indexOf("disableGCFCheck=1")>=0&&l();b=(document.location.protocol=="https:"?"https:":"http:")+"//www.google.com/chromeframe";if(!h()){a.onmissing&&a.onmissing();a.src=a.url||b;b=a.mode||"inline";if(!(a.preventPrompt||0))if(b=="inline")p(a);else b=="overlay"?q(a):window.open(a.src);if(!a.preventInstallDetection)var r=setInterval(function(){if(h()){a.oninstall&&a.oninstall();clearInterval(r);window.location=a.destination||window.location}},2E3)}}};d._force=false;d._forceValue=false;d.isAvailable=h;e.CFInstall=d}})(this.ChromeFrameInstallScope||this);

/*
Improved version of JavaScript fix for the iOS viewport scaling bug
Rewritten version
By @mathias, @cheeaun and @jdalton
*/
(function(doc){var addEvent='addEventListener',type='gesturestart',qsa='querySelectorAll',scales=[1,1],meta=qsa in doc?doc[qsa]('meta[name=viewport]'):[];function fix(){meta.content='width=device-width,minimum-scale='+scales[0]+',maximum-scale='+scales[1];doc.removeEventListener(type,fix,true)}if((meta=meta[meta.length-1])&&addEvent in doc){fix();scales=[.25,1.6];doc[addEvent](type,fix,true)}}(document));

/*
IE font-face ClearType fix - V0.1
Authord by Michael Strand of Allcreatives.net
Usage, changes, FAQ etc. see - http://allcreatives.net/2009/12/05/jquery-plugin-ie-font-face-cleartype-fix/
The IE font-face ClearType fix plugin is dual licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) and 
[GPL](http://www.opensource.org/licenses/gpl-license.php) licenses.
There is one configuration setting to be changed below if you have the PNG image in different location from this file.
*/
(function($){$.fn.ieffembedfix=function(){var pngimgurl="../img/hIEfix.png";return this.each(function(){if(jQuery.support.objectAll==false){$(this).css({filter:'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + pngimgurl + ",sizingMethod=crop',zoom:'1'});}});}})(jQuery);
