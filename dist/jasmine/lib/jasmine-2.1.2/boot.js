!function(){window.jasmine=jasmineRequire.core(jasmineRequire),jasmineRequire.html(jasmine);var e=jasmine.getEnv(),n=jasmineRequire.interface(jasmine,e);"undefined"==typeof window&&"object"==typeof exports?c(exports,n):c(window,n);var t=new jasmine.QueryString({getWindowLocation:function(){return window.location}}),i=t.getParam("catch");e.catchExceptions(void 0===i||i);var o=new jasmine.HtmlReporter({env:e,onRaiseExceptionsClick:function(){t.setParam("catch",!e.catchingExceptions())},getContainer:function(){return document.body},createElement:function(){return document.createElement.apply(document,arguments)},createTextNode:function(){return document.createTextNode.apply(document,arguments)},timer:new jasmine.Timer});e.addReporter(n.jsApiReporter),e.addReporter(o);var r=new jasmine.HtmlSpecFilter({filterString:function(){return t.getParam("spec")}});e.specFilter=function(e){return r.matches(e.getFullName())},window.setTimeout=window.setTimeout,window.setInterval=window.setInterval,window.clearTimeout=window.clearTimeout,window.clearInterval=window.clearInterval;var a=window.onload;function c(e,n){for(var t in n)e[t]=n[t];return e}window.onload=function(){a&&a(),o.initialize(),e.execute()}}();