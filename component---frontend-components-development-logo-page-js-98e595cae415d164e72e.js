(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{200:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return g});var o=t(0),r=t.n(o),n=t(204),i=t(205),l=t(210),c=t(211),s=t(212),d=t(203),m=t(213),u=n.c.table.withConfig({displayName:"logo-page__StyledTable",componentId:"mgi064-0"})(["border:1px solid #ccc;border-collapse:collapse;td{border:1px solid #ccc;padding:3px;text-align:left;}"]);function p(e){var a=e.logoNames;return r.a.createElement(u,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Flat"),r.a.createElement("td",null,"Social"))),r.a.createElement("tbody",null,a.map(function(e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,r.a.createElement(d.a,{alt:"logo: "+e,src:Object(i.staticBadgeUrl)({baseUrl:l.a,label:"named logo",message:e,color:"blue",namedLogo:e})})),r.a.createElement("td",null,r.a.createElement(d.a,{alt:"logo: "+e,src:Object(i.staticBadgeUrl)({baseUrl:l.a,label:"Named Logo",message:e,color:"blue",namedLogo:e,style:"social"})})))})))}function g(){return r.a.createElement("div",null,r.a.createElement(c.a,null),r.a.createElement(s.a,null),r.a.createElement(d.f,null,"Named logos"),r.a.createElement(p,{logoNames:m.b}),r.a.createElement(d.f,null,"Simple-icons"),r.a.createElement(p,{logoNames:m.c}))}},203:function(e,a,t){"use strict";t.d(a,"j",function(){return l}),t.d(a,"d",function(){return s}),t.d(a,"b",function(){return d}),t.d(a,"e",function(){return m}),t.d(a,"f",function(){return u}),t.d(a,"a",function(){return g}),t.d(a,"h",function(){return f}),t.d(a,"g",function(){return h}),t.d(a,"c",function(){return b}),t.d(a,"i",function(){return y});t(28),t(29),t(17),t(52),t(18),t(220);var o=t(0),r=t.n(o),n=t(204);function i(){var e=function(e,a){a||(a=e.slice(0));return e.raw=a,e}(["\n  * {\n    box-sizing: border-box;\n  }\n"]);return i=function(){return e},e}var l=Object.freeze({autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false"}),c=" ",s=Object(n.a)(i()),d=n.c.div.withConfig({displayName:"common__BaseFont",componentId:"sc-1u5f0yl-0"})(["font-family:Lekton,sans-serif;color:#534;"]),m=n.c.h2.withConfig({displayName:"common__H2",componentId:"sc-1u5f0yl-1"})(["font-style:italic;margin-top:12mm;font-variant:small-caps;::before{content:'☙ ';}::after{content:' ❧';}"]),u=n.c.h3.withConfig({displayName:"common__H3",componentId:"sc-1u5f0yl-2"})(["font-style:italic;"]),p=n.c.span.withConfig({displayName:"common__BadgeWrapper",componentId:"sc-1u5f0yl-3"})(["padding:2px;height:",";vertical-align:middle;display:",";",";"],function(e){return e.height},function(e){return e.display},function(e){return e.clickable&&Object(n.b)(["cursor:pointer;"])});function g(e){var a=e.src,t=e.alt,o=void 0===t?"":t,n=e.display,i=void 0===n?"inline":n,l=e.height,s=void 0===l?"20px":l,d=e.clickable,m=void 0!==d&&d,u=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["src","alt","display","height","clickable"]);return r.a.createElement(p,{clickable:m,display:i,height:s},a?r.a.createElement("img",Object.assign({alt:o,src:a},u)):c)}var f=n.c.input.withConfig({displayName:"common__StyledInput",componentId:"sc-1u5f0yl-4"})(["height:15px;border:solid #b9a;border-width:0 0 1px 0;padding:0;text-align:center;color:#534;:focus{outline:0;}"]),h=Object(n.c)(f).withConfig({displayName:"common__InlineInput",componentId:"sc-1u5f0yl-5"})(["width:70px;margin-left:5px;margin-right:5px;"]),b=Object(n.c)(f).withConfig({displayName:"common__BlockInput",componentId:"sc-1u5f0yl-6"})(["width:40%;background-color:transparent;"]),y=n.c.hr.withConfig({displayName:"common__VerticalSpace",componentId:"sc-1u5f0yl-7"})(["border:0;display:block;height:3mm;"])},205:function(e,a,t){"use strict";t(101),t(9),t(18);var o=t(244).URL,r=t(232),n=t(219);function i(e){var a=e.baseUrl,t=void 0===a?"":a,o=e.path,n=e.queryParams,i=e.style,l=e.format,c=void 0===l?"":l,s=e.longCache,d=void 0!==s&&s,m=c.length?"."+c:"",u=r.stringify(Object.assign({cacheSeconds:d?"2592000":void 0,style:i},n));return""+t+o+m+(u?"?"+u:"")}function l(e){return encodeURIComponent(e.replace(/-/g,"--").replace(/_/g,"__"))}e.exports={badgeUrlFromPath:i,badgeUrlFromPattern:function(e){var a=e.baseUrl,t=void 0===a?"":a,o=e.pattern,r=e.namedParams,l=e.queryParams,c=e.style,s=e.format,d=void 0===s?"":s,m=e.longCache,u=void 0!==m&&m;return i({baseUrl:t,path:n.compile(o,{strict:!0,sensitive:!0})(r),queryParams:l,style:c,format:d,longCache:u})},encodeField:l,staticBadgeUrl:function(e){var a=e.baseUrl,t=void 0===a?"":a,o=e.label,n=e.message,i=e.color,c=void 0===i?"lightgray":i,s=e.style,d=e.namedLogo,m=e.format,u=void 0===m?"":m,p=[o,n,c].map(l).join("-"),g=r.stringify({style:s,logo:d});return t+"/badge/"+p+(u.length?"."+u:"")+(g?"?"+g:"")},queryStringStaticBadgeUrl:function(e){var a=e.baseUrl,t=void 0===a?"":a,o=e.label,n=e.message,i=e.color,l=e.labelColor,c=e.style,s=e.namedLogo,d=e.logoColor,m=e.logoWidth,u=e.logoPosition,p=e.format,g=void 0===p?"":p,f="?"+r.stringify({label:o,message:n,color:i,labelColor:l,style:c,logo:s,logoColor:d,logoWidth:m,logoPosition:u});return t+"/static/v1"+(g.length?"."+g:"")+f},dynamicBadgeUrl:function(e){var a=e.baseUrl,t=e.datatype,o=e.label,n=e.dataUrl,i=e.query,l=e.prefix,c=e.suffix,s=e.color,d=e.style,m=e.format,u=void 0===m?"":m,p=u.length?"."+u:"",g={label:o,url:n,query:i,style:d};return s&&(g.color=s),l&&(g.prefix=l),c&&(g.suffix=c),a+"/badge/dynamic/"+t+p+"?"+r.stringify(g)},rasterRedirectUrl:function(e,a){var t=e.rasterUrl,r=new o(a,"https://bogus.test"),n=r.pathname,i=r.search,l=new o(n,t);return l.search=i,l}}},210:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var o={}.GATSBY_BASE_URL||""},211:function(e,a,t){"use strict";t.d(a,"a",function(){return s});var o=t(0),r=t.n(o),n=t(248),i=t(233),l=t.n(i),c="We serve fast and scalable informational images as badges\nfor GitHub, Travis CI, Jenkins, WordPress and many more services. Use them to\ntrack the state of your projects, or for promotional purposes.";function s(){return r.a.createElement(n.Helmet,null,r.a.createElement("title",null,"Shields.io: Quality metadata badges for open source projects"),r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{content:"width=device-width,initial-scale=1",name:"viewport"}),r.a.createElement("meta",{content:c,name:"description"}),r.a.createElement("link",{href:l.a,rel:"icon",type:"image/png"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato|Lekton",rel:"stylesheet"}))}},212:function(e,a,t){"use strict";t.d(a,"a",function(){return d});var o=t(44),r=t(0),n=t.n(r),i=t(204),l=t(203),c=function(e){return n.a.createElement("svg",e,n.a.createElement("rect",{rx:"8",x:"140",width:"55",height:"58"}),n.a.createElement("g",{stroke:"#000",strokeWidth:"8"},n.a.createElement("path",{d:"M135.5 54a8 8 0 0 0 8.5 -8.5"}),n.a.createElement("rect",{x:"4",y:"4",rx:"8",width:"190",height:"50",fill:"none"})),n.a.createElement("path",{d:"m23.906 33.641c.953-.083 1.906-.167 2.859-.25.108 2.099 1.511 4.139 3.578 4.722 2.438.895 5.357.799 7.559-.658 1.49-1.129 1.861-3.674.324-4.925-1.557-1.322-3.685-1.504-5.576-2.057-2.343-.565-4.912-1.133-6.611-2.979-1.805-2.088-1.627-5.485.292-7.443 2.041-2.113 5.222-2.55 8.02-2.274 2.46.244 5.058 1.343 6.252 3.635.426.908 1.095 2.241.656 3.108-.888.173-1.81.148-2.715.245-.077-2.084-1.727-4.073-3.863-4.234-1.902-.317-4.02-.252-5.691.802-1.398.989-1.849 3.363-.381 4.494 1.281 1.01 2.962 1.199 4.482 1.642 2.66.627 5.602 1.118 7.596 3.158 2 2.188 1.893 5.84-.088 8.01-2.01 2.32-5.304 2.972-8.237 2.713-2.585-.147-5.319-1.024-6.916-3.184-.987-1.288-1.517-2.905-1.542-4.523"}),n.a.createElement("path",{d:"m45.953 41c0-7.635 0-15.271 0-22.906.938 0 1.875 0 2.813 0 0 2.74 0 5.479 0 8.219 1.391-1.721 3.69-2.523 5.86-2.236 1.975.154 4.03 1.371 4.513 3.402.504 1.973.278 4.02.33 6.04 0 2.495 0 4.989 0 7.484-.938 0-1.875 0-2.813 0-.009-3.675.018-7.351-.014-11.03-.026-1.342-.627-2.835-2-3.282-2.187-.802-5.077.393-5.609 2.773-.417 1.764-.216 3.586-.264 5.381 0 2.051 0 4.102 0 6.153-.938 0-1.875 0-2.813 0"}),n.a.createElement("path",{d:"m63.781 21.328v-3.234h2.813v3.234zm0 19.672v-16.594h2.813v16.594z"}),n.a.createElement("path",{d:"m82.25 35.656c.969.12 1.938.24 2.906.359-.702 3.464-4.348 5.767-7.781 5.386-3.235-.066-6.43-2.328-7.06-5.598-.843-3.307-.404-7.285 2.101-9.784 3.082-3 8.699-2.618 11.235.892 1.374 1.85 1.676 4.267 1.578 6.51-4.125 0-8.25 0-12.375 0-.142 2.889 2.267 6 5.346 5.658 1.881-.162 3.613-1.566 4.045-3.423m-9.234-4.547c3.089 0 6.177 0 9.266 0 .129-2.774-2.616-5.422-5.419-4.713-2.174.427-3.912 2.474-3.846 4.713"}),n.a.createElement("path",{d:"m88.64 41v-22.906h2.813v22.906z"}),n.a.createElement("path",{d:"m106.59 41c0-.698 0-1.396 0-2.094-1.412 2.442-4.776 3.067-7.233 1.949-2.378-1.02-3.971-3.403-4.345-5.924-.507-2.761-.123-5.768 1.389-8.167 1.863-2.705 5.968-3.642 8.711-1.741.422.228 1.028 1.144 1.294 1.018-.006-2.649-.0001-5.298-.003-7.948.932 0 1.865 0 2.797 0 0 7.635 0 15.271 0 22.906-.87 0-1.74 0-2.61 0m-8.89-8.281c-.075 2.246.637 4.861 2.79 5.952 2 1.023 4.682-.047 5.488-2.134.897-1.996.746-4.278.388-6.382-.425-1.95-2.046-3.804-4.158-3.805-1.903-.065-3.633 1.363-4.099 3.181-.327 1.028-.394 2.116-.408 3.188"}),n.a.createElement("path",{d:"m112.52 36.05c.927-.146 1.854-.292 2.781-.438.126 1.69 1.513 3.244 3.239 3.365 1.398.212 3.01.12 4.12-.851.807-.749 1.1-2.243.159-3.01-.908-.723-2.115-.812-3.182-1.172-1.797-.485-3.713-.848-5.243-1.97-1.83-1.551-1.868-4.679-.099-6.293 1.577-1.507 3.918-1.784 6-1.594 1.685.176 3.54.749 4.535 2.217.464.715.708 1.549.844 2.384-.917.125-1.833.25-2.75.375-.121-1.569-1.653-2.762-3.19-2.695-1.246-.082-2.702.012-3.608.982-.624.724-.543 1.971.314 2.481.998.706 2.269.757 3.389 1.173 1.754.512 3.647.848 5.141 1.965 1.686 1.476 1.728 4.244.396 5.966-1.298 1.788-3.597 2.417-5.709 2.448-1.466-.007-2.984-.214-4.299-.893-1.599-.909-2.585-2.655-2.84-4.444"}),n.a.createElement("g",{fill:"#fff"},n.a.createElement("path",{d:"m151.11 41v-22.906h3.03v22.906z"}),n.a.createElement("path",{d:"m158.55 29.844c-.277-4.765 2.335-9.977 7.05-11.551 4.902-1.757 11.226.197 13.477 5.098 2.266 4.706 1.89 10.92-1.767 14.833-4.554 4.948-13.81 3.976-17.08-1.954-1.111-1.946-1.679-4.188-1.68-6.426m3.125.047c-.377 4.273 2.892 8.844 7.375 8.951 3.791.221 7.557-2.653 7.997-6.497.794-3.731.139-8.292-3.107-10.696-3.788-2.814-10.05-1.104-11.591 3.444-.54 1.539-.642 3.181-.675 4.798"})))};c.defaultProps={xmlns:"http://www.w3.org/2000/svg",width:"198",height:"58"};var s=i.c.p.withConfig({displayName:"header__Highlights",componentId:"p619wa-0"})(["font-style:italic;"]);function d(){return n.a.createElement("section",null,n.a.createElement(o.Link,{to:"/"},n.a.createElement(c,null)),n.a.createElement(l.i,null),n.a.createElement(s,null,"Pixel-perfect   Retina-ready   Fast   Consistent   Hackable   No tracking"))}},213:function(e){e.exports={b:["bitcoin","dependabot","discord","gitlab","npm","paypal","serverfault","stackexchange","superuser","telegram","travis"],c:["500px","dblp","dev.to","elementary","homify","rollup.js","webcomponents.org",".net","arduino","about.me","acm","addthis","adobe","adobe-acrobat-reader","adobe-after-effects","adobe-audition","adobe-dreamweaver","adobe-illustrator","adobe-indesign","adobe-lightroom-cc","adobe-lightroom-classic","adobe-photoshop","adobe-premiere","adobe-typekit","adobe-xd","airbnb","allociné","amazon","amazon-aws","amd","american-express","android","angellist","angular","angular-universal","ansible","apache","apache-flink","apple","apple-music","apple-pay","appveyor","arch-linux","archive-of-our-own","artstation","asana","atlassian","atom","at&t","audible","aurelia","auth0","automatic","autotask","aventrix","azure-devops","azure-pipelines","babel","baidu","bamboo","bandcamp","basecamp","bath-asu","beats","behance","big-cartel","bing","bit","bitbucket","bitdefender","bitly","blender","blogger","boost","bootstrap","bower","brand.ai","buddy","buffer","buy-me-a-coffee","buzzfeed","cakephp","campaign-monitor","canva","cash-app","castorama","castro","cevo","chase","chef","circle","circleci","cirrus-ci","civicrm","clockify","clojure","cloudflare","cmake","codacy","codecademy","code-climate","codecov","codeforces","codeigniter","codepen","coderwall","codesandbox","codeship","codewars","codio","coffeescript","composer","compropago","conekta","confluence","conda-forge","co-op","coursera","adobe-creative-cloud","creative-commons","crunchbase","crunchyroll","css3","css-wizardry","common-workflow-language","c++","d3.js","dailymotion","dazn","debian","deezer","delicious","dell","deno","designer-news","deviantart","devrant","diaspora","digg","digitalocean","discourse","discover","disroot","disqus","django","docker","docusign","draugiem.lv","dribbble","drone","dropbox","drupal","dtube","duckduckgo","dynatrace","ebay","evry","exercism","eclipse-ide","elastic","elastic-cloud","elasticsearch","elastic-stack","electron","ello","elsevier","empire-kred","envato","epic-games","esea","eslint","ethereum","etsy","eventbrite","event-store","evernote","everplaces","experts-exchange","f-secure","facebook","faceit","fandango","favro","feathub","fedora","feedly","fido-alliance","filezilla","firebase","fitbit","flask","flattr","flickr","flipboard","flutter","fnac","foursquare","figma","framer","freebsd","freecodecamp","fur-affinity","furry-network","garmin","gatsby","gauges","geocaching","gerrit","ghost","git","github","gitter","glassdoor","gmail","gnu","gnu-social","gog.com","goldenline","goodreads","go","google","google-allo","google-chrome","google-cloud","google-analytics","google-drive","google-hangouts","google-hangouts-chat","google-keep","google-pay","google-play","google-podcasts","gov.uk","grafana","graphcool","graphql","grav","gravatar","greenkeeper","groupon","gulp","gumroad","gumtree","hackaday","hackerearth","hackerrank","hackhands","hackster","hashnode","haskell","hatena-bookmark","haxe","here","heroku","hexo","highly","hipchat","hockeyapp","hootsuite","houzz","html5","huawei","hubspot","hulu","humble-bundle","icloud","ionic","iconjar","icq","ifixit","imdb","inkscape","instacart","instagram","instapaper","intel","intellij-idea","intercom","internet-explorer","invision","itch.io","jabber","java","javascript","jekyll","jenkins","jest","jira","joomla","jquery","jsdelivr","jsfiddle","json","jupyter","justgiving","kaggle","kaios","kentico","keybase","keycdn","khan-academy","kibana","kickstarter","kik","kirby","klout","known","kodi","koding","kotlin","ko-fi","kubernetes","lanyrd","laravel","laravel-horizon","last.fm","launchpad","leetcode","let’s-encrypt","letterboxd","lgtm","librarything","liberapay","line","line-webtoon","linkedin","linux","linux-foundation","livejournal","livestream","logstash","lua","macy’s","magento","magisk","mailchimp","mail.ru","makerbot","manjaro","markdown","marketo","mastercard","mastodon","material-design","mathworks","matrix","matternet","mediafire","mediatemple","medium","meetup","mega","messenger","meteor","micro.blog","microgenetics","microsoft","microsoft-access","microsoft-azure","microsoft-edge","microsoft-excel","microsoft-onedrive","microsoft-onenote","microsoft-outlook","microsoft-powerpoint","microsoft-word","linux-mint","minutemailer","mix","mixcloud","mixer","monero","mongodb","monkey-tie","monogram","monzo","moo","mozilla","mozilla-firefox","mx-linux","myspace","mysql","nativescript","neo4j","netflix","netlify","next.js","nextcloud","nextdoor","nginx","nintendo","nintendo-gamecube","nintendo-switch","node.js","nodemon","nucleo","nuget","nuxt.js","nvidia","ocaml","octopus-deploy","oculus","odnoklassniki","open-access","openstreetmap","opensuse","opera","opsgenie","oracle","origin","osmc","overcast","ovh","pagekit","pandora","pantheon","patreon","periscope","php","picarto.tv","pinboard","pingdom","pingup","pinterest","pivotal-tracker","plangrid","player.me","playstation","playstation-3","playstation-4","plex","pluralsight","plurk","pocket","podcasts","postgresql","postman","powershell","prettier","prismic","probot","processwire","product-hunt","proto.io","protonmail","proxmox","pypi","python","qiita","qualcomm","quantopian","quantcast","quora","qwiklabs","qzone","r","rails","raspberry-pi","react","read-the-docs","reason","redbubble","reddit","red-hat","redis","redux","renren","reverbnation","riot","riseup","roots","rss","ruby","rubygems","runkeeper","rust","safari","salesforce","samsung","samsung-pay","sap","sass","sauce-labs","scala","scaleway","scribd","scrutinizer-ci","sega","sellfy","sensu","sentry","server-fault","shazam","shopify","signal","simple-icons","sina-weibo","sitepoint","skyliner","skype","slack","slashdot","slickpic","slides","smashing-magazine","snapchat","snapcraft","snyk","society6","sogou","songkick","soundcloud","sourceforge","sourcegraph","spacemacs","spacex","sparkfun","sparkpost","spdx","speaker-deck","spotify","spotlight","spreaker","sprint","squarespace","stack-exchange","stack-overflow","stackshare","stadia","statamic","statuspage","staticman","steam","steem","steemit","stitcher","storify","strava","stripe","stubhub","styleshare","stylus","sublime-text","subversion","super-user","swarm","swift","symfony","synology","tails","tapas","teamviewer","ted","teespring","tencent-qq","tencent-weibo","tesla","the-mighty","the-movie-database","tidal","tik-tok","tinder","t-mobile","todoist","toggl","topcoder","toptal","tor","trainerroad","trakt","travis-ci","treehouse","trello","tripadvisor","trulia","tumblr","twilio","twitch","twitter","twoo","typescript","typo3","uber","ubisoft","ubuntu","udacity","udemy","uikit","umbraco","unity","unsplash","untappd","upwork","v8","vagrant","venmo","verizon","viadeo","viber","vim","vimeo","vine","virb","visa","visual-studio-code","vk","vlc-media-player","vsco","vue.js","wattpad","weasyl","webpack","webstorm","wechat","whatsapp","when-i-work","wii","wii-u","wikipedia","windows","wire","wix","wolfram","wolfram-language","wolfram-mathematica","wordpress","wp-engine","xbox","xcode","xero","xing","x-pack","xsplit","y-combinator","yahoo!","yammer","yandex","yarn","yelp","youtube","zapier","zeit","zendesk","zerply","zillow","zorin"],a:["plastic","flat","flat-square","for-the-badge","social"]}},233:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAD9SURBVDhPlY7NjgFBFIX7YezssLCZRGJjwTwAO1tvYO0prCy8gA3vYGHQkUHEUiuNiJ/BTKS43adG161Ohy85uXXrnnOrrCgSvYUkoX2d8tStqbBS3TnEMY6GB7lgMyl9r6rcPD79ystNanekltjFEPPhBiVF2IyEuL5g+HiVamW2QVzKzvbHnx2v/z4S4voCIokaJN13vBr0Im4uyA6XXg2Ss4VXg17EzQXq3BBH2cb3+YyE+HOBQvWfIyFTOIfNEdd/8I4QNxfMz39aT+ruL8Yd4j6ZgeNyQ3mylsWxq92RCrZoImbCzVywRfPxtRA8mLedFsavo8JoQ7CsOwSwBXENhCdAAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=component---frontend-components-development-logo-page-js-98e595cae415d164e72e.js.map