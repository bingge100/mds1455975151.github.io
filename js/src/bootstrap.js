// build time:Mon Mar 19 2018 16:23:26 GMT+0800 (中国标准时间)
$(document).ready(function(){$(document).trigger("bootstrap:before");NexT.utils.isMobile()&&window.FastClick.attach(document.body);NexT.utils.lazyLoadPostsImages();NexT.utils.registerBackToTop();$(".site-nav-toggle button").on("click",function(){var e=$(".site-nav");var o="site-nav-on";var t=e.hasClass(o);var a=t?"slideUp":"slideDown";var i=t?"removeClass":"addClass";e.stop()[a]("fast",function(){e[i](o)})});CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox();NexT.utils.embeddedVideoTransformer();NexT.utils.addActiveClassToMenuItem();NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar);$(document).trigger("motion:before");CONFIG.motion&&NexT.motion.integrator.bootstrap();$(document).trigger("bootstrap:after")});
//rebuild by neat 