jasmineRequire.html=function(e){e.ResultsNode=jasmineRequire.ResultsNode(),e.HtmlReporter=jasmineRequire.HtmlReporter(e),e.QueryString=jasmineRequire.QueryString(),e.HtmlSpecFilter=jasmineRequire.HtmlSpecFilter()},jasmineRequire.HtmlReporter=function(a){var r={start:function(){},elapsed:function(){return 0}};return function(e){var s,n,p,o=e.env||{},t=e.getContainer,l=e.createElement,c=e.createTextNode,d=e.onRaiseExceptionsClick||function(){},f=e.timer||r,m=0,h=0,N=0,v=[];this.initialize=function(){var e;(e=S(""))&&t().removeChild(e),s=b("div",{className:"jasmine_html-reporter"},b("div",{className:"banner"},b("a",{className:"title",href:"http://jasmine.github.io/",target:"_blank"}),b("span",{className:"version"},a.version)),b("ul",{className:"symbol-summary"}),b("div",{className:"alert"}),b("div",{className:"results"},b("div",{className:"failures"}))),t().appendChild(s),n=S(".symbol-summary")},this.jasmineStarted=function(e){p=e.totalSpecsDefined||0,f.start()};var g=b("div",{className:"summary"}),C=new a.ResultsNode({},"",null),i=C;this.suiteStarted=function(e){i.addChild(e,"suite"),i=i.last()},this.suiteDone=function(e){"failed"==e.status&&v.push(e),i!=C&&(i=i.parent)},this.specStarted=function(e){i.addChild(e,"spec")};var R=[];return this.specDone=function(e){if(E(e)&&"undefined"!=typeof console&&void 0!==console.error&&console.error("Spec '"+e.fullName+"' has no expectations."),"disabled"!=e.status&&m++,n.appendChild(b("li",{className:E(e)?"empty":e.status,id:"spec_"+e.id,title:e.fullName})),"failed"==e.status){h++;for(var s=b("div",{className:"spec-detail failed"},b("div",{className:"description"},b("a",{title:e.fullName,href:j(e)},e.fullName)),b("div",{className:"messages"})),t=s.childNodes[1],i=0;i<e.failedExpectations.length;i++){var a=e.failedExpectations[i];t.appendChild(b("div",{className:"result-message"},a.message)),t.appendChild(b("div",{className:"stack-trace"},a.stack))}R.push(s)}"pending"==e.status&&N++},this.jasmineDone=function(){S(".banner").appendChild(b("span",{className:"duration"},"finished in "+f.elapsed()/1e3+"s"));var e=S(".alert");e.appendChild(b("span",{className:"exceptions"},b("label",{className:"label",for:"raise-exceptions"},"raise exceptions"),b("input",{className:"raise",id:"raise-exceptions",type:"checkbox"})));var s=S("#raise-exceptions");if(s.checked=!o.catchingExceptions(),s.onclick=d,m<p){var t="Ran "+m+" of "+p+" specs - run all";e.appendChild(b("span",{className:"bar skipped"},b("a",{href:"?",title:"Run all specs"},t)))}var i="",a="bar ";for(0<p?(i+=x("spec",m)+", "+x("failure",h),N&&(i+=", "+x("pending spec",N)),a+=0<h?"failed":"passed"):(a+="skipped",i+="No specs found"),e.appendChild(b("span",{className:a},i)),u=0;u<v.length;u++)for(var n=v[u],r=0;r<n.failedExpectations.length;r++){var l="AfterAll "+n.failedExpectations[r].message;e.appendChild(b("span",{className:"bar errored"},l))}if(S(".results").appendChild(g),function e(s,t){for(var i,a=0;a<s.children.length;a++){var n=s.children[a];if("suite"==n.type){var r=b("ul",{className:"suite",id:"suite-"+n.result.id},b("li",{className:"suite-detail"},b("a",{href:j(n.result)},n.result.description)));e(n,r),t.appendChild(r)}if("spec"==n.type){"specs"!=t.getAttribute("class")&&(i=b("ul",{className:"specs"}),t.appendChild(i));var l=n.result.description;E(n.result)&&(l="SPEC HAS NO EXPECTATIONS "+l),i.appendChild(b("li",{className:n.result.status,id:"spec-"+n.result.id},b("a",{href:j(n.result)},l)))}}}(C,g),R.length){e.appendChild(b("span",{className:"menu bar spec-list"},b("span",{},"Spec List | "),b("a",{className:"failures-menu",href:"#"},"Failures"))),e.appendChild(b("span",{className:"menu bar failure-list"},b("a",{className:"spec-list-menu",href:"#"},"Spec List"),b("span",{}," | Failures "))),S(".failures-menu").onclick=function(){y("failure-list")},S(".spec-list-menu").onclick=function(){y("spec-list")},y("failure-list");for(var c=S(".failures"),u=0;u<R.length;u++)c.appendChild(R[u])}},this;function S(e){return t().querySelector(".jasmine_html-reporter "+e)}function b(e,s,t){for(var i=l(e),a=2;a<arguments.length;a++){var n=arguments[a];"string"==typeof n?i.appendChild(c(n)):n&&i.appendChild(n)}for(var r in s)"className"==r?i[r]=s[r]:i.setAttribute(r,s[r]);return i}function x(e,s){return s+" "+(1==s?e:e+"s")}function j(e){return"?spec="+encodeURIComponent(e.fullName)}function y(e){s.setAttribute("class","jasmine_html-reporter "+e)}function E(e){return e.failedExpectations.length+e.passedExpectations.length===0&&"passed"===e.status}}},jasmineRequire.HtmlSpecFilter=function(){return function(e){var s=e&&e.filterString()&&e.filterString().replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),t=new RegExp(s);this.matches=function(e){return t.test(e)}}},jasmineRequire.ResultsNode=function(){return function t(e,s,i){this.result=e,this.type=s,this.parent=i,this.children=[],this.addChild=function(e,s){this.children.push(new t(e,s,this))},this.last=function(){return this.children[this.children.length-1]}}},jasmineRequire.QueryString=function(){return function(r){return this.setParam=function(e,s){var t=i();t[e]=s,r.getWindowLocation().search=function(e){var s=[];for(var t in e)s.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return"?"+s.join("&")}(t)},this.getParam=function(e){return i()[e]},this;function i(){var e=r.getWindowLocation().search.substring(1),s=[],t={};if(0<e.length){s=e.split("&");for(var i=0;i<s.length;i++){var a=s[i].split("="),n=decodeURIComponent(a[1]);"true"!==n&&"false"!==n||(n=JSON.parse(n)),t[decodeURIComponent(a[0])]=n}}return t}}};