!function(){var e,t;e="https://g.csdnimg.cn/browser_upgrade/1.0.2/css/browser.css",(t=document.createElement("link")).rel="stylesheet",t.type="text/css",t.href=e,document.getElementsByTagName("head")[0].appendChild(t);var n="";document.getElementsByTagName("meta")["csdn-browser-upgrade"]&&(n=document.getElementsByTagName("meta")["csdn-browser-upgrade"].content),temp=""===n?'你当前的浏览器版本过低，为了获得更好的浏览体验，建议更换最新的浏览器，例如  <a href="https://www.google.cn/chrome/" target="_blank">Chrome</a>  或 <a href="http://www.firefox.com.cn/" target="_blank">Firefox</a>':n;function a(){var e=document.createElement("div");e.innerHTML=d;var t=document.body.firstChild;document.body.insertBefore(e,t)}var d='<div id="browser" class="browser-tips"><div class="upgrade-content"><img src="https://g.csdnimg.cn/browser_upgrade/1.0.2/img/monkey@2x.png" width="40"/>'+temp+"</div></div>";document.addEventListener?document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,!1),a()},!1):document.attachEvent&&document.attachEvent("onreadystatechange",function(){"complete"==document.readyState&&(document.detachEvent("onreadystatechange",arguments.callee),a())})}();