(function(window){var svgSprite='<svg><symbol id="icon-dayuhao-copy" viewBox="0 0 1024 1024"><path d="M744.909 509.847c-0.43-4.851-2.499-9.586-6.222-13.299l-425.527-425.558c-8.406-8.396-22.008-8.396-30.393 0-8.406 8.396-8.406 21.998 0 30.394l410.499 410.529-410.499 410.528c-8.406 8.397-8.406 21.999 0 30.394 8.406 8.397 21.987 8.397 30.393 0l425.567-425.6c4.758-4.756 6.813-11.183 6.181-17.388z"  ></path></symbol><symbol id="icon-dayuhao" viewBox="0 0 1024 1024"><path d="M279.090904 514.1530359999999c0.42978899999999864 4.851495 2.4989139999999974 9.586332000000002 6.221701999999993 13.298887L710.8391389999998 953.010179c8.406459999999997 8.396227000000003 22.008245999999993 8.396227000000003 30.393217 8.881784197001252e-15 8.406460000000003-8.396226999999994 8.406460000000003-21.998012999999993 1.0658141036401503e-14-30.394241l-410.4992809999999-410.52895700000005 410.49928100000005-410.52793399999985c8.406460000000004-8.397250999999997 8.406460000000003-21.999036999999994 1.0658141036401503e-14-30.394241-8.406459999999996-8.397251000000006-21.986756999999997-8.397251000000008-30.393217-8.881784197001252e-15L285.271674 496.76501699999983C280.51329999999996 501.5213449999998 278.45850099999996 507.94770700000004 279.090904 514.1530359999999z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)