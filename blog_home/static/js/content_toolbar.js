function is_blog(){var e=window.location.host;return e.indexOf("blog.csdn.net")>-1}function siteId(){var e,t=window.location.host;return e=0===t.indexOf("blog")?"UA-127895514-2":0===t.indexOf("download")?"UA-127895514-8":0===t.indexOf("edu")?"UA-127895514-9":0===t.indexOf("bbs")?"UA-127895514-4":0===t.indexOf("ask")?"UA-127895514-5":0===t.indexOf("gitbook")?"UA-127895514-10":0===t.indexOf("iteye")?"UA-127895514-6":0===t.indexOf("passport")?"UA-127895514-7":0===t.indexOf("so")?"UA-127895514-3":0===t.indexOf("www")?t.indexOf("iteye")>0?"UA-127895514-6":"UA-127895514-1":""}function is_bloger(){try{if(is_blog())return!0}catch(e){return!1}}function throttle(e,t){var n,o=null;return function(){var a=this,s=new Date;s-o-t>0?(n&&(clearTimeout(n),n=null),e.apply(a,arguments),o=s):n||(n=setTimeout(function(){e.apply(a,arguments)},t))}}function configuration_tool_parameterv(e){if("[object Object]"==Object.prototype.toString.call(e)){var t=e.need_first_suspend||!1,n=e.need_little_suspend||!1,o=e.little_tool_id||"",a=e.little_need_insert_type||"",s=e.need_change_function||"",i=$("#csdn-toolbar"),c="",r="";if(1!=t||1!=n){n&&""!=o&&(i=$(o)),n&&o&&""!=a&&(c="."+a,r=$(c));var d=throttle(function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>=50?(i.css({position:"fixed",top:"0",left:"0","z-index":"9999",width:"100%"}),n&&$(".secodn_level_csdn_logo").length&&$(".secodn_level_csdn_logo").css({display:"block"}),n&&""!=a&&("onlySearch"==a?$("#csdn_tool_otherPlace").append(r):"onlyUser"==a?$("#csdn_tool_otherPlace").append(r):"searchUser"==a&&($("#csdn_tool_otherPlace").append($(".onlySearch")),$("#csdn_tool_otherPlace").append($(".onlyUser")))),"function"==typeof s&&s("fixed")):(i.css({position:"relative","z-index":""}),n&&$(".secodn_level_csdn_logo").length&&$(".secodn_level_csdn_logo").css({display:"none"}),n&&""!=a&&("onlySearch"==a?$("#nav-left-menu").append(r):"onlyUser"==a?$(".pull-right").append(r):"searchUser"==a&&($("#nav-left-menu").append($(".onlySearch")),$("#csdn_container_tool").append($(".onlyUser")))),"function"==typeof s&&s("noFixed"))},80);return(document.documentElement.scrollTop||document.body.scrollTop)>50&&d(),t?void $(window).on("scroll",d):void(n&&$(window).on("scroll",d))}}}var _gaq=[],userAgent=navigator.userAgent.toLowerCase(),_hmt=_hmt||[];!function(){function e(){dataLayer.push(arguments)}var t=function(e){for(var t=document.cookie.split("; "),n=0;n<t.length;n++){var o=t[n].split("=");if(o[0]==e&&"UD"==e)return decodeURIComponent(o[1]);if(o[0]==e)return decodeURI(o[1])}},n=document.createElement("script");n.src="https://hm.baidu.com/hm.js?6bcd52f51e9b3dce32bec4a3997715ac";var o=document.getElementsByTagName("script")[0];if(o.parentNode.insertBefore(n,o),document.referrer.indexOf("google.com")>-1){var a=document.createElement("script");a.src="https://www.googletagmanager.com/gtag/js?id="+siteId(),o.parentNode.insertBefore(a,o),window.dataLayer=window.dataLayer||[];var s=t("UserName")||"";e("js",new Date),e("config",siteId()),s&&e("set",{user_id:s})}}(),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://g.csdnimg.cn/??asdf/1.1.2/trackad.js,iconfont/nav/iconfont-1.0.0.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),!function(e){function t(e){g.userNick=k("UserNick")||g.userNick,g.userName=k("UserName")||g.userName,g.avatar=N(k("AU"))||g.avatar,g.desc=k("UD")||g.desc,k("UD")&&(g.desc=C(g.desc.replace(/\+/g," "))),e(g)}function n(e){return Math.round(new Date(e).getTime()/1e3)}function o(e){var t,o,a=Math.floor(Date.now()/1e3),s=n("2020/01/16 14:00:00"),i=n("2020/02/09 10:30:00"),c=n("2020/01/08 00:00:00"),r=n("2020/02/29 00:00:00"),d=n("2020/03/14 00:00:00"),l=n("2020/03/14 23:59:59");return"ChineseNewYear"===e?(t=s,o=i):"blogStar"===e?(t=c,o=r):"πDay"===e&&(t=d,o=l),a>t&&a<o}function a(){var e,t,n="https://csdnimg.cn/cdn/content-toolbar/",a=n+"csdnlogo_ChineseNewYear.gif",s=window.csdn.toolbarIsBlack?n+"314-black.gif":n+"314-white.gif";return o("ChineseNewYear")?(e='<img src="'+a+'">',t="欢度新春",{logo_tpl:e,logo_title:t}):o("πDay")?(e='<img src="'+s+'">',{logo_tpl:e}):void 0}function s(){return e("#csdn-toolbar").hasClass("festival")}function i(){o("ChineseNewYear")&&e("#csdn-toolbar").addClass("festival")}function c(){var e=["blog","bbs","download","ask","edu","biwen","mall"],t=document.referrer;if(""!==t)if(t.indexOf(".csdn.net")>-1)for(var n=0;n<e.length;n++)t.indexOf(e[n]+".csdn.net")>-1&&x("c_ref",t,-1);else x("c_ref",t,-1)}function r(t){var n=e("#msg-circle"),o=e("#msgList-notice");parseInt(t)>0&&(n.text(t).fadeIn(),o.find("em").text(t))}function d(t){var n=e("#msg-circle");if(U||k("UN")){var o,a="https://msg.csdn.net/v1/web/message/view/unread",s=99,i=e("#msgList a em"),c=e("#msgToastText"),r=document.head.getElementsByTagName("title"),d={coupon:!0};r=r&&r[0],r&&(o=r.innerHTML),d=JSON.stringify?JSON.stringify(d):'{"coupon":true}',e.ajax({url:a,type:"post",data:d,contentType:"application/json",xhrFields:{withCredentials:!0},dataType:"json",success:function(a){var d;if(a.status){a=a.data;var l=parseInt(a.totalCount);if(parseInt(t)>0){a.totalCount=l+t;var p=e("#msgList-notice");p.find("em").text(t)}if((d=a.totalCount)>0){if(d>=s&&(d="···"),d&&r&&(r.innerHTML="("+d+"条消息)"+o),n.html(d).fadeIn(),!U&&k("UN")&&l>0){e("#csdn-toolbar .onlyUser.unlogin").addClass("anonymous"),e("#csdn-toolbar .onlyUser.unlogin.anonymous").find("img.login_img").attr("src",a.avatarUrl);var u=k("c-toolbar-loginguide");if(!u){var m='<div class="toolbar-notice-bubble">                                  <div class="pos-box">                                    <a href = "https://i.csdn.net/#/msg/index">                                      <span>登录查看未读消息</span>                                    </a>                                    <a class="btn-close">                                      <img src="//csdnimg.cn//cdn/content-toolbar/icon-circle-close.png" >                                    </a>                                  </div>                                </div>';e("#msgBox").append(m),e("#csdn-toolbar .toolbar-notice-bubble").find(".btn-close").click(function(){var t=864e5;x("c-toolbar-loginguide",1,t),e(this).parents(".toolbar-notice-bubble").remove()}),e("#csdn-toolbar .toolbar-notice-bubble").show()}}i.each(function(t,n){var o=e(n).attr("class"),i=Number(a[o],10);i>=s&&(i=s-1+"+"),i&&e(n).html(i)})}a.coupon_order>0&&window.location.href.indexOf("assign_skin_id")==-1&&U&&c.addClass("msg-toast--show")}},error:function(e){}})}}function l(t){var n=e("#msgList-notice");n.attr("href",t),U?e("#remind").attr("href","https://i.csdn.net/#/msg/index"):e("#remind").attr("href",t)}function p(){var t="https://msg.csdn.net/v1/web/message/view/announcement";e.ajax({url:t,type:"post",contentType:"application/json",xhrFields:{withCredentials:!0},dataType:"json",success:function(e){if(e.status){var t=e.data;x("announcement",encodeURIComponent(JSON.stringify(t)),t.announcementExpire),m(t),r(t.announcementCount),l(t.announcementUrl)}},error:function(e){}})}function u(){var t="https://msg.csdn.net/v1/web/message/read_announcement";e.ajax({url:t,type:"post",contentType:"application/json",xhrFields:{withCredentials:!0},dataType:"json",success:function(e){},error:function(e){}})}function m(t){var n=e("#msgList-notice");n.click(function(){n.find("em").empty(),t.announcementCount=0,x("announcement",encodeURIComponent(JSON.stringify(t)),t.announcementExpire),u()})}function f(e){return'        <div id="'+e+'__drop-down-menu" class="drop-down-menu">          <dl class="hot-search">            <dt class="hot-search-menu">              <span>热门搜索</span>            </dt>          </dl>          <dl class="search-history" class="clearfix">            <dt class="search-history-menu">              <span class="search-history-title">搜索记录</span>              <span class="clear">清空</span>            </dt>          </dl>        </div>'}function h(){return o("blogStar")?'<li><a href="https://bss.csdn.net/m/topic/blog_star2019" title="博客之星">博客之星</a></li>':""}var g={userName:"",userNick:'<a class="set-nick" href="https://passport.csdn.net/account/profile">设置昵称<span class="write-icon"></span></a>',desc:'<a class="fill-dec" href="//my.csdn.net" target="_blank">编辑自我介绍，让更多人了解你<span class="write-icon"></span></a>',avatar:"//csdnimg.cn/public/common/toolbar/images/100x100.jpg"},v="none",b=e("#toolbar-tpl-scriptId"),_=window.csdn&&window.csdn.toolbarIsBlack?" csdn-toolbar-skin-black ":"",w="top"==b.attr("fixed")?" navbar-fixed-top ":"",y=b.attr("domain")?b.attr("domain"):window.location.protocol+"//"+window.location.host;y+="_logo";var k=function(e){for(var t=document.cookie.split("; "),n=0;n<t.length;n++){var o=t[n].split("=");if(o[0]==e&&"UD"==e)return decodeURIComponent(o[1]);if(o[0]==e)return decodeURI(o[1])}},x=function(e,t,n){var o=new Date;if(n==-1)return void(document.cookie=e+"="+escape(t)+";domain=.csdn.net;path=/");if(n)o.setTime(o.getTime()+n);else{var a=30;o.setTime(o.getTime()+24*a*60*60*1e3)}document.cookie=e+"="+escape(t)+";expires="+o.toGMTString()+";domain=.csdn.net;path=/"},C=function(e){var t="";return 0==e.length?"":t=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\'/g,"&#39;").replace(/\"/g,"&quot;")},N=function(e){if(!e||!g.userName)return!1;var t=e.split("").join("/"),n=g.userName&&g.userName.toLowerCase();return"//profile.csdnimg.cn/"+t+"/2_"+n},U=!1,O="unlogin";t(function(e){e.userName&&(U=!0,_hmt.push(["_setUserTag","5744",e.userName])),O=U?"":"unlogin"});try{_hmt.push(["_setUserTag","6525",k("uuid_tt_dd")])}catch(I){}try{var j=k("UN")?1:0,D=k("UserName")?1:0,T=k("p_uid");T=T?T.substr(1,1):0,_hmt.push(["_setPageviewProperty",{user_islogin:j,user_isonline:D,user_isvip:1==T?1:0}])}catch(I){}var S={blog:"blog-icon",download:"down-icon",bbs:"bbs-icon",my:"space-icon",code:"code-icon",share:"share-icon",tag:"tag-icon",dashboard:"dashboard-icon",news:"news-icon",tag:"tag-icon",ask:"ask-icon",notify:"notify-icon"};S[b.attr("prod")]&&(v=S[b.attr("prod")]||b.attr("prod"));(function(){var e=window.location.host;return e.split(".")[0]})();window.csdn=window.csdn?window.csdn:{};var A=1571846400,M=1571932800,L=Math.floor(Date.now()/1e3),P=window.csdn.toolbarIsBlack?'<img src="//csdnimg.cn/cdn/content-toolbar/csdnlogo-black.png" class="csdn-logo">':'<img src="//csdnimg.cn/cdn/content-toolbar/csdn-logo_.png?v=20190924.1" class="csdn-logo">',$="CSDN首页",B="https://www.csdn.net";L>A&&L<M&&(P=window.csdn.toolbarIsBlack?'<img src="//csdnimg.cn/cdn/content-toolbar/csdn1024-dark.gif">':'<img src="//csdnimg.cn/cdn/content-toolbar/csdn1024-white.gif">',$="1024");var R=a();R&&(P=R.logo_tpl),c();var E="搜CSDN";is_bloger()&&window.hasOwnProperty("username")&&(E="搜博主文章");var z="",J="";"1"!==k("c-toolbar-writeguide")&&(J='<img class="close-guide-btn" id="close-guide-btn" src="//csdnimg.cn//cdn/content-toolbar/guide-close-btn.png"/>'),U||(z='<div id="writeGuide" class="write-guide">                    <h3>记录你的技术成长历程</h3>'+J+'<p>                        <img class="img-icon" src="//csdnimg.cn//cdn/content-toolbar/test-icon-pen.png"/>                        <strong>300万+</strong>的博主正在CSDN发布技术文章                    </p>                    <p>                        <img class="img-icon" src="//csdnimg.cn//cdn/content-toolbar/test-icon-study.png"/>                        <strong>1500万+</strong>的开发人员正在学习与分享                    </p>                    <a class="btn-to-write-link" data-report-click=\'{"mod":"1585187295_001"}\' href="https://mp.csdn.net" target="_self">开启我的创作之路</a>                  </div>');var V='<div id="csdn-toolbar" class="csdn-toolbar tb_disnone '+_+w+'">        <div class="container row center-block " id="csdn_container_tool">          <ul class="pull-left left-menu clearfix" id="nav-left-menu">            <li>              <a href="'+B+'" title="'+$+'">'+P+'</a>            </li>            <li data-report-click=\'{"mod":"popu_336","dest":"https://www.csdn.net/","extend1":"首页"}\'><a href="//www.csdn.net/" class="toolbar_to_feed" title="首页" style="margin-left:0">首页</a></li>            <li data-report-click=\'{"mod":"popu_336","dest":"https://blog.csdn.net/","extend1":"博客"}\'><a href="//blog.csdn.net/" class="toolbar_to_feed" title="博客">博客</a></li>            <li data-report-click=\'{"mod":"popu_336","dest":"https://edu.csdn.net","extend1":"学院"}\' class="app-control app-edu"><a class="link-title" href="//edu.csdn.net" title="学院">学院</a>              <div class="appControl">              <span class="eduwx">                <img src="https://csdnimg.cn/public/common/toolbar/images/eduwxfix.png" />                <em>CSDN学院</em>              </span>              </div>            </li>            <li data-report-click=\'{"mod":"popu_336","dest":"https://download.csdn.net","extend1":"下载"}\' ><a href="//download.csdn.net" title="下载">下载</a></li>            <li data-report-click=\'{"mod":"popu_336","dest":"https://bbs.csdn.net","extend1":"论坛"}\'><a href="//bbs.csdn.net" title="论坛">论坛</a></li>            <li data-report-click=\'{"mod":"popu_336","dest":"https://ask.csdn.net","extend1":"问答"}\'><a href="//ask.csdn.net" title="问答">问答</a></li>            <li data-report-click=\'{"mod":"popu_336","dest":"https://huiyi.csdn.net/","extend1":"活动"}\'><a href="//huiyi.csdn.net/" title="活动">活动</a></li>            <li data-report-click=\'{"mod":"popu_336","dest":"https://spec.csdn.net/","extend1":"专题"}\'><a href="https://spec.csdn.net/" title="专题">专题</a></li>            <li data-report-click=\'{"mod":"popu_336","dest":"https://job.csdn.net","extend1":"招聘"}\'><a href="http://job.csdn.net" title="招聘">招聘</a></li>            <li data-report-click=\'{"mod":"popu_336","dest":"https://www.csdn.net/apps/download?code=pc_1555579859","extend1":"APP"}\' class="app-control app-app"><a class="link-title" href="https://www.csdn.net/apps/download" data-report-query="code=pc_1555579859" title="APP">APP</a>              <div class="appControl">              <span>                <img src="https://csdnimg.cn/public/common/toolbar/images/csdnqr@2x.png" />                <em>CSDN</em>              </span>              </div>            </li>            <li data-report-click=\'{"mod":"popu_336","dest":"https://mall.csdn.net/vip","extend1":"VIP会员"}\' class="vip-caise"><a href="https://mall.csdn.net/vip" title="VIP会员">VIP会员</a></li>'+h()+'<div class="search_bar onlySearch searchUser">                    <input type="text" class="input_search" name="" autocomplete="off" value="" id="toolber-keyword" placeholder='+E+'>                    <a class="btn-nobg-noborder btn-search">                    <img src="//csdnimg.cn/cdn/content-toolbar/csdn-sou.png?v=1585038746324">                    </a>'+f("search_bar")+'</div>          </ul>          <div class="pull-right onlyUser searchUser login-wrap '+O+'">            <ul class="btns">              <li class="write-bolg-btn">                <a class="" href="https://mp.csdn.net" target="_blank" id="blogClick"  data-report-click=\'{"mod":"popu_370","dest":"https://mp.csdn.net"}\'>                    <i class="csdn-write"></i>                    <span>创作中心</span>                </a>'+z+'</li>              <li class="gitChat upload msgBox" id="msgBox">              <a class="" id="remind" href="#"><i class="message"></i><div class="toolbar-circle" id="msg-circle"></div></a>                <div class="msgList" id="msgList">                  <dd><a href="#" id="msgList-notice">公告<em class="notice"></em></a></dd>                  <div id="msgList-other">                  <dd><a href="//i.csdn.net/#/msg/index">评论<em class="comment"></em></a></dd>                  <dd><a href="//i.csdn.net/#/msg/attention">关注<em class="follow"></em></a></dd>                  <dd><a href="//i.csdn.net/#/msg/like">点赞<em class="thumb_up"></em></a></dd>                  <dd><a href="//im.csdn.net/im/main.html">私信<em class="im"></em></a></dd>                  <dd><a href="//i.csdn.net/#/msg/answer">回答<em class="invitation"></em></a></dd>                  <dd><a href="//i.csdn.net/#/msg/notice">系统通知<em class="system"></em></a></dd>                  <dd><a href="https://i.csdn.net/#/msg/setting">消息设置</a></dd>                  </div>                </div>                <a href="//i.csdn.net/#/msg/notice" class="msg-toast" id="msgToastText">你有一张VIP限时优惠券哦</a>              </li>              <li class="userinfo"><a href="https://passport.csdn.net/account/login">登录/注册</a><span></span>              </li>              <li class="userLogin userAnonymous">                <div class="loginCenter"><a href="https://i.csdn.net/#/uc/profile" target="_blank"><img class="login_img" src="'+g.avatar+'"></a></div>              </li>              <li class="userLogin">                <div class="loginCenter"><a href="//i.csdn.net" target="_blank"><img class="login_img" src="'+g.avatar+'"></a></div>                <div class="userControl">                <div class="bord">                <div data-report-click=\'{"mod":"popu_789","dest":"https://i.csdn.net/#/uc/follow-list","extend1":"我的关注"}\'><i class="pull_icon pull_icon1"></i><a href="https://i.csdn.net/#/uc/follow-list" target="_blank">我的关注</a></div>                <div data-report-click=\'{"mod":"popu_789","dest":"https://i.csdn.net/#/uc/collection-list","extend1":"我的收藏"}\'><i class="pull_icon pull_icon2"></i><a href="https://i.csdn.net/#/uc/collection-list" target="_blank">我的收藏</a></div>                <div data-report-click=\'{"mod":"popu_789","dest":"https://i.csdn.net/#/uc/profile","extend1":"个人中心"}\'><i class="pull_icon pull_icon4"></i><a href="https://i.csdn.net/#/uc/profile" target="_blank">个人中心</a></div>                <div data-report-click=\'{"mod":"popu_789","dest":"https://i.csdn.net/#/account/index","extend1":"帐号设置"}\'><i class="pull_icon pull_icon7"></i><a href="https://i.csdn.net/#/account/index" target="_blank">帐号设置</a></div>                </div>                  <div class="bord">                  <div data-report-click=\'{"mod":"popu_789","dest":"https://blog.csdn.net/'+g.userName+'","extend1":"我的博客"}\'><i class="pull_icon pull_icon5"></i><a href="https://blog.csdn.net/'+g.userName+'" target="_blank">我的博客</a></div>                  <div data-report-click=\'{"mod":"popu_789","dest":"https://mp.csdn.net/console/article","extend1":"管理博客"}\'><i class="pull_icon pull_icon6"></i><a href="https://mp.csdn.net/console/article" target="_blank">管理博客</a></div>                  <div data-report-click=\'{"mod":"popu_789","dest":"https://edu.csdn.net/mycollege","extend1":"我的学院"}\'><i class="pull_icon pull_icon12"></i><a href="https://edu.csdn.net/mycollege" target="_blank">我的学院</a></div>                  <div data-report-click=\'{"mod":"popu_789","dest":"https://mp.csdn.net/console/upDetailed","extend1":"我的下载"}\'><i class="pull_icon pull_icon13"></i><a href="https://mp.csdn.net/console/upDetailed" target="_blank">我的下载</a></div><div><i class="pull_icon pull_icon14"></i><a href="https://huiyi.csdn.net/activity/myorder" target="_blank">我的活动</a></div>                  </div>                  <div class="bord">                  <div data-report-click=\'{"mod":"popu_789","dest":"https://i.csdn.net/#/wallet/index","extend1":"我的钱包"}\'><i class="pull_icon pull_icon8"></i><a href="https://i.csdn.net/#/wallet/index" target="_blank">我的钱包</a></div>                  <div data-report-click=\'{"mod":"popu_789","dest":"https://order.csdn.net/myorder","extend1":"订单中心"}\'><i class="pull_icon pull_icon9"></i><a href="https://order.csdn.net/myorder" target="_blank">订单中心</a></div>                  </div>                  <div class="bord">                  <div data-report-click=\'{"mod":"popu_789","dest":"https://blog.csdn.net/blogdevteam/article/details/103478461","extend1":"帮助"}\'><i class="pull_icon pull_icon10"></i><a href="https://blog.csdn.net/blogdevteam/article/details/103478461" target="_blank">帮助</a></div>                  <div><i class="pull_icon pull_icon11"></i><a href="javascript:void(0);" class="logout">退出</a></div>                  </div>                </div>                <div class="guo_tip_box">关注和收藏在这里</div>              </li>            </ul>          </div>        </div>    </div>';e(document.body).prepend(e(V)),e("#csdn-toolbar .logout").click(function(){var e={mod:"popu_789"},t="https://passport.csdn.net/account/logout?from="+encodeURIComponent(window.location.href);e.dest=t,e.extend1="退出",window.location.href=t,csdn&&csdn.report?csdn.report.reportClick(e):""});(window.location.host.indexOf("bbs.csdn.net")>-1&&window.location.pathname.indexOf("home")>-1||window.location.host.indexOf("bbs.csdn.net")>-1&&window.location.pathname.indexOf("forums")>-1)&&e(".csdn-toolbar").addClass("csdn-toolbarbbshome"),i(),e(function(){if(k("announcement")&&"undefined"!==JSON.parse(decodeURIComponent(k("announcement"))).announcementUrl){var e=JSON.parse(decodeURIComponent(k("announcement"))),t=e.announcementUrl,n=e.announcementCount,o=e.isLogin,a=k("UserName");!o&&a?p():(m(e),r(n),l(t))}else p()}),e(function(){if(k("UN")&&k("announcement")){var t=JSON.parse(decodeURIComponent(k("announcement"))),n=t.announcementCount;d(n),e("#remind").attr("href","https://i.csdn.net/#/msg/index")}}),e(function(){function t(){e("#main-home").hasClass("open")&&e("#csdn-toolbar").addClass("tb_bbs"),e(".left_side > span").on("click",function(){e(this).hasClass("btn_toggle_yc")&&e("#csdn-toolbar").removeClass("tb_bbs"),e(this).hasClass("btn_toggle_xs")&&e("#csdn-toolbar").addClass("tb_bbs")})}function n(){function t(e,t,n){var o;return!!e&&(t&&"number"==typeof t&&Number(t,10)>0&&(n=t),!!n&&void setTimeout(function(){o=e(),o&&"function"==typeof t&&t(o)},n))}function n(e,t,n){var o,a=new Date,s=a.getDate()+n;return a.setDate(s),o=t||a.toGMTString(),document.cookie=e+"="+encodeURIComponent(o)+"; max-age="+n+"; domain="+l,!0}function o(e){for(var t,n,o=document.cookie,a=o.split("; "),s=0;s<a.length;s++)if(a[s]&&(t=a[s].split("="),t[0]===e)){n=t[1];break}return n}function a(e){e.addClass("hide")}function s(){var e,t,n,o,a=!1;return e=new Date,t=e.getTime(),n=new Date(u.start).getTime(),o=new Date(u.end).getTime(),t>=n&&t<o&&(a=!0),a}function i(t,n){var o,a,s,i,c;return!!(o=t?t:null)&&(!!(a=o.posDom?o.posDom instanceof jQuery?o.posDom:e(o.posDom):null)&&(i='<style type="text/css">.hide{display:none;}.advert-bg{background-color:#000;}.advert{width: 1200px;margin: 0 auto;position:relative;line-height: 0;font-size: 0;}.advert .advert-log{display:none;width:90px;height:22px;background-image: url("//csdnimg.cn/public/publick_img/gitchat_logo.png");background-repeat: no-repeat;background-size: contain;position:absolute;top:25px;left:27px;z-index: 10;}.advert .advert-a{display:inline-block;width:100%;height:80px;background-repeat: no-repeat;background-size: contain;background-position: 50% 0;opacity:0;-webkit-transition: all 0.2s linear;-o-transition: all 0.2s linear;-ms-transition: all 0.2s linear;-moz-transition: all 0.2s linear;transition: all 0.2s linear;}.advert-cur .advert-a{background-image: url("//csdnimg.cn/public/publick_img/ad_20180622_toolbar80.jpg") !important;opacity:1;}.advert-ex .advert-a{height:200px;opacity:1;}.csdn-bbs .advert .advert-close, .advert .advert-close{position:absolute;z-index:10;right: 2%;top: 15%;color: #fff;font-size: 22px;}</style>',c='<div class="advert-bg"><div class="advert" id="advert"><a href="https://edu.csdn.net/promotion_activity" data-report-query="id=3&utm_source=618qztt" class="advert-log"></a><a href="https://edu.csdn.net/promotion_activity?id=3&utm_source=618qztt" style="background-image: url(//csdnimg.cn/public/publick_img/ad_20180622_toolbar200.jpg);" class="advert-a"></a><a href="" class="advert-close" id="js_advert_close">&times</a></div></div>',!(a.length<=0)&&(a=a[0],s=e(c),document.head.insertBefore(e(i)[0],document.head.getElementsByTagName("title")[0]),document.body.insertBefore(s[0],a),void(n&&"function"==typeof n&&n({optDom:e(a),tplDom:s})))))}var c=2e3,r=86400,d="is_advert",l=".csdn.net",p=!1,u={start:"2018/06/07 06:00:00",end:"2018/06/30 00:00:00"};return(p=s())?void i({posDom:e("#csdn-toolbar")},function(s){var i,l,p,u;return i=s.optDom,l=s.tplDom,p=e("#js_advert_close"),u=l.find(".advert-a").get(0),p.on("click",function(){return a(l),!1}),o(d)?(l.addClass("advert-cur"),!1):(l.addClass("advert-ex"),void t(function(){return l.removeClass("advert-ex"),!0},function(e){t(function(){return l.addClass("advert-cur"),!0},200),e&&(o(d)||n(d,"",r))},c))}):(o(d)&&n(d,"",0),!1)}t(),n()}),e(function(){var t={showMore:function(){var t=e(".show-more .more");t.is(":animated")&&t.stop(!0,!0).fadeIn(200),t.stop(!0,!0).fadeIn(200)},hideMore:function(){var t=e(".show-more .more");t.is(":animated")&&t.stop(!0,!0).fadeIn(200),t.stop(!0,!0).fadeOut(300)}},n={showMore:function(t,n){var o=e(t);o.is(":animated")&&o.stop(!0,!0).fadeIn(200),o.stop(!0,!0).fadeIn(200),n&&e(n).hide()},hideMore:function(t){var n=e(t);n.is(":animated")&&n.stop(!0,!0).fadeIn(200),n.stop(!0,!0).fadeOut(300)}},o={showMore:function(){var t=e(this).find(".appControl");t.is(":animated")&&t.stop(!0,!0).fadeIn(200),s()?e(this).find(".link-title").css("color",""):e(this).find(".link-title").css("color","#222429"),t.stop(!0,!0).fadeIn(200)},hideMore:function(){var t=e(this).find(".appControl");t.is(":animated")&&t.stop(!0,!0).fadeIn(200),e(this).find(".link-title").css("color",""),t.stop(!0,!0).fadeOut(300)}};if(e(".show-more").hover(t.showMore,t.hideMore),e(".userLogin").hover(function(){n.showMore(".userControl",".guo_tip_box")},function(){n.hideMore(".userControl")}),e(".baidu-app-btn").hover(function(){n.showMore(".baiduControl")},function(){n.hideMore(".baiduControl")}),e(".app-app").hover(o.showMore,o.hideMore),e(".app-edu").hover(o.showMore,o.hideMore),e(".app-gitchat").hover(o.showMore,o.hideMore),e(".guo_tip_box").hover(function(){e(this).css("display","none"),e.get("https://statistic.csdn.net/toolbar/followTipsclose")}),e("#msgBox").hover(function(){n.showMore("#msgList"),U&&e("#msgList-other").show()},function(){n.hideMore("#msgList")}),!k("c_adb")){var a=document.createElement("script");a.type="text/javascript",a.src="https://g.csdnimg.cn/check-adb/1.0.5/check-adb.js",document.head.appendChild(a)}}),e(function(){var t=k("c-toolbar-writeguide");if(!U&&!k("UN")&&"passport.csdn.net"!==window.location.host&&"1"!==t){var n=e("#writeGuide");n.show(),csdn&&csdn.report&&csdn.report.reportView({mod:"1585187295_001"},null,null)}"1"===t&&e("#close-guide-btn").remove(),e("li.write-bolg-btn").hover(function(){csdn&&csdn.report&&csdn.report.reportView({mod:"1585187295_001"},e(this),null)},function(){}),e("#close-guide-btn").on("click",function(){e("#writeGuide").hide(),e("#close-guide-btn").remove(),setTimeout(function(){e("#writeGuide").removeAttr("style")},0);var t=864e5;x("c-toolbar-writeguide",1,t)})}),e(function(){function t(){var e=window.location.host,t=e.split(".")[0],n="";switch(t){case"www":n="";break;case"blog":n="blog";break;case"blog":n="codes_snippet";break;case"bbs":n="discuss";break;case"download":n="doc";break;case"ask":n="ask";break;case"gitchat":n="gitchat";break;case"geek":n="news";break;case"edu":n="course";break;default:n=""}return e.indexOf(".blog.csdn.net")>-1&&(n="blog"),n}function n(){var e="&u=";return is_bloger()&&(e=window.hasOwnProperty("username")?e+username:e),e}function o(e){var o=encodeURIComponent(e),a="//so.csdn.net/so/search/s.do?q="+o+"&t="+t()+n();return""!=o&&void window.open(a)}function a(e){var t=encodeURIComponent(e),n="https://so.csdn.net/so/search/s.do?q="+t+"&t=course";return""!=t&&void window.open(n)}function s(){var t=e("#toolber-keyword").val();""===t&&(i(w),w.show(),h({mod:"popu_369"})),C.indexOf("//edu.csdn.net")!=-1&&a(t),r(t,w),o(e("#toolber-keyword").val())}function i(e){d(e),c(e)}function c(t){e.ajax({url:"https://redisdatarecall.csdn.net/recommend/soHotWord",type:"get",data:{},contentType:"application/json",dataType:"json",success:function(e){if(e.status){t.find(".hot-search-menu").nextAll().remove();for(var n=e.data,o="",a="",s=0;s<n.length;s++)a=n[s].hot?' class="hot"':"",o+="<dd"+a+">"+n[s].word+"</dd>";t.find(".hot-search").append(o)}},error:function(e){}})}function r(e,t){l(e),d(t)}function d(e){e.find(".search-history-menu").nextAll().remove();var t="",n=f("searchHistoryArray"),o=n.length>5?5:n.length;if(0===o)return void e.find(".search-history").hide();for(var a=0;a<o;a++)t+="<dd>"+n[a]+"</dd>";e.find(".search-history").append(t),e.find(".search-history").show()}function l(t){t=p(t);var n=f("searchHistoryArray"),o=e.inArray(t,n);o>-1&&n.splice(o,1),""!==e.trim(t)&&n.unshift(t),n.length>5&&n.pop(),m("searchHistoryArray",n)}function p(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}function u(){m("searchHistoryArray",[])}function m(e,t){x(e,encodeURIComponent(JSON.stringify(t)))}function f(e){var t=k(e);return t?JSON.parse(decodeURIComponent(t)):[]}function h(e){try{csdn&&csdn.report&&csdn.report.reportClick(e)}catch(t){}}function g(){e(".btn-search").length>0?(e(".btn-search").detach(),e(".search_bar").append('<a href="javascript:;" class="btn-nobg-noborder btn_clear"><i class="iconfont-toolbar toolbar-guanbi1"></i></a>')):(e(".btn_clear").detach(),e(".search_bar").append('<a href="//so.csdn.net/so/" target="_blank" class="btn-nobg-noborder btn-search"><i class="iconfont-toolbar toolbar-sousuo"></i></a>'))}function v(e,t){var n=document.createElement("script");n.type="text/javascript",n.readyState?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,t())}:n.onload=function(){t()},n.src=e,document.getElementsByTagName("head")[0].appendChild(n)}var b=e(".btn-search"),_=e(".input_search"),w=e("#search_bar__drop-down-menu"),y=e("#nav-left-menu").find("a").not(".btn-search"),C=document.location.href;C=C.substr(C.indexOf("/")),C.indexOf("//edu.csdn.net")!=-1&&(E="搜索学院课程",e("#toolber-keyword")[0].setAttribute("placeholder",E));for(var N=0;N<y.length;N++){var O=y[N].getAttribute("href");O=O.substr(O.indexOf("/")),C.indexOf("apps/download")>-1&&(y[10].className="active"),C.indexOf(O)!=-1&&"//mall.csdn.net"!=O&&(y[N].className="active",y[0].className=""),C.indexOf("//mall.csdn.net")!=-1&&C.indexOf("vip")==-1&&(C.indexOf("//mall.csdn.net/coupon")!=-1?y[10].className="active":y[8].className="active"),C.indexOf("//www.csdn.net")!=-1&&C.indexOf("app")!==-1&&(y[1].className="")}b.on("click",function(e){return s(),e.preventDefault(),!1}),_.keyup(function(e){var t=e.keyCode;13==t&&s()});var I=e("#toolber-keyword");if(I.focus(function(){i(w),""===_.val()&&(w.show(),h({mod:"popu_369"}))}),_.on("input",function(){""!==e(this).val()?w.hide():(i(w),w.show(),h({mod:"popu_369"}))}),w.find(".clear").on("click",function(){u(),w.find(".search-history").hide(),w.find(".search-history-menu").nextAll().remove()}),e(document).on("click","#search_bar__drop-down-menu dl dd",function(t){var n=e(t.target),o=n.parent().attr("class"),a=n.text();e("#toolber-keyword").val(a),b.click(),w.hide(),"hot-search"===o&&h({mod:"popu_845",extra:JSON.stringify({searchword:a})}),"search-history"===o&&h({mod:"popu_846",extra:JSON.stringify({searchword:a})})}),e(document).on("click",function(t){var n=e(t.target);0===n.closest(".search_bar").length&&w.hide()}),e(document).on("click",".toolbar_delete_bar",function(){e(".input_search").val(" ")}),e(document).on("click",".btn_clear",function(){e(".input_search").val(""),g(),isInputSearch=!1}),U){e("#layerd").find("div.layer_close").click(function(){return confirm("成为CSDN VIP会员,即刻享受全站免广告特权,前往购买?")&&(window.location.href="https://mall.csdn.net/vip"),!1});var j=e("div.box-box-default"),D=e("div.box-box-large"),T=e("div.box-box-aways");j.find("a.btn-remove").click(function(){return confirm("成为CSDN VIP会员,即刻享受全站免广告特权,前往购买?")&&(window.location.href="https://mall.csdn.net/vip"),!1}),D.find("a.btn-remove").click(function(){return confirm("成为CSDN VIP会员,即刻享受全站免广告特权,前往购买?")&&(window.location.href="https://mall.csdn.net/vip"),!1}),T.find("a.btn-remove").click(function(){return confirm("成为CSDN VIP会员,即刻享受全站免广告特权,前往购买?")&&(window.location.href="https://mall.csdn.net/vip"),
!1})}e(document).on("click",".prevent_a",function(e){e.preventDefault()}),v("//csdnimg.cn/search/baidu_opensug-1.0.1.js",function(){BaiduSuggestion.bind("toolber-keyword",{XOffset:"0",YOffset:"-5",fontSize:"14px",width:260,"line-height":"35px",padding:"0 10px",color:"#666C7A",borderColor:"#fff",bgcolorHI:"#F0F1F2",sugSubmit:!1},function(){b.click()})})})}(jQuery),window.csdn=window.csdn||{},window.csdn.configuration_tool_parameterv=configuration_tool_parameterv,jQuery(function(){var e=[];jQuery("a[href*='?']").each(function(t,n){var o=jQuery(n).attr("href");return-1===o.indexOf("csdn.net")&&-1===o.indexOf("iteye.com")||void(!function(e){var t=["//www.csdn.net","//blog.csdn.net","//me.csdn.net","//edu.csdn.net","//download.csdn.net","//ask.csdn.net","//huiyi.csdn.net","//iteye.com"],n=!1;for(var o in t)if(-1<e.indexOf(t[o])){n=!0;break}return n}(o)||e.push(o))}),0<=e.length&&jQuery.ajax({url:"https://statistic.csdn.net/seo/spiderfriendly",type:"get",crossDomain:!0,xhrFields:{withCredentials:!1},data:{urls:e}})});