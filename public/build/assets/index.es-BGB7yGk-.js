import{P as p}from"./index-Bg4Nbkea.js";import{R as Le}from"./app-B_W6arew.js";/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */function It(t,e){(e==null||e>t.length)&&(e=t.length);for(var a=0,n=Array(e);a<e;a++)n[a]=t[a];return n}function Xa(t){if(Array.isArray(t))return t}function Ba(t){if(Array.isArray(t))return It(t)}function Va(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ka(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,De(n.key),n)}}function Ja(t,e,a){return e&&Ka(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function ot(t,e){var a=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=Gt(t))||e){a&&(t=a);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(t)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function v(t,e,a){return(e=De(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function qa(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Qa(t,e){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var n,r,i,o,s=[],l=!0,u=!1;try{if(i=(a=a.call(t)).next,e===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(n=i.call(a)).done)&&(s.push(n.value),s.length!==e);l=!0);}catch(c){u=!0,r=c}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function Za(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,n)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?ne(Object(a),!0).forEach(function(n){v(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ne(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}function mt(t,e){return Xa(t)||Qa(t,e)||Gt(t,e)||Za()}function F(t){return Ba(t)||qa(t)||Gt(t)||tn()}function en(t,e){if(typeof t!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var n=a.call(t,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function De(t){var e=en(t,"string");return typeof e=="symbol"?e:e+""}function ft(t){"@babel/helpers - typeof";return ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ft(t)}function Gt(t,e){if(t){if(typeof t=="string")return It(t,e);var a={}.toString.call(t).slice(8,-1);return a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set"?Array.from(t):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?It(t,e):void 0}}var re=function(){},Xt={},Re={},ze=null,We={mark:re,measure:re};try{typeof window<"u"&&(Xt=window),typeof document<"u"&&(Re=document),typeof MutationObserver<"u"&&(ze=MutationObserver),typeof performance<"u"&&(We=performance)}catch{}var an=Xt.navigator||{},ie=an.userAgent,oe=ie===void 0?"":ie,D=Xt,A=Re,se=ze,rt=We;D.document;var _=!!A.documentElement&&!!A.head&&typeof A.addEventListener=="function"&&typeof A.createElement=="function",Ue=~oe.indexOf("MSIE")||~oe.indexOf("Trident/"),bt,nn=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,rn=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Ye={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},on={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},He=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],P="classic",tt="duotone",Ge="sharp",Xe="sharp-duotone",Be="chisel",Ve="etch",Ke="graphite",Je="jelly",qe="jelly-duo",Qe="jelly-fill",Ze="notdog",ta="notdog-duo",ea="slab",aa="slab-press",na="thumbprint",ra="utility",ia="utility-duo",oa="utility-fill",sa="whiteboard",sn="Classic",ln="Duotone",fn="Sharp",un="Sharp Duotone",cn="Chisel",dn="Etch",mn="Graphite",vn="Jelly",hn="Jelly Duo",gn="Jelly Fill",pn="Notdog",bn="Notdog Duo",yn="Slab",xn="Slab Press",wn="Thumbprint",An="Utility",Sn="Utility Duo",kn="Utility Fill",Pn="Whiteboard",la=[P,tt,Ge,Xe,Be,Ve,Ke,Je,qe,Qe,Ze,ta,ea,aa,na,ra,ia,oa,sa];bt={},v(v(v(v(v(v(v(v(v(v(bt,P,sn),tt,ln),Ge,fn),Xe,un),Be,cn),Ve,dn),Ke,mn),Je,vn),qe,hn),Qe,gn),v(v(v(v(v(v(v(v(v(bt,Ze,pn),ta,bn),ea,yn),aa,xn),na,wn),ra,An),ia,Sn),oa,kn),sa,Pn);var In={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},On={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},En=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Fn={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},fa=["fak","fa-kit","fakd","fa-kit-duotone"],le={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},jn=["kit"],Cn="kit",Nn="kit-duotone",Tn="Kit",_n="Kit Duotone";v(v({},Cn,Tn),Nn,_n);var $n={kit:{"fa-kit":"fak"}},Mn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ln={kit:{fak:"fa-kit"}},fe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},yt,it={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Dn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Rn="classic",zn="duotone",Wn="sharp",Un="sharp-duotone",Yn="chisel",Hn="etch",Gn="graphite",Xn="jelly",Bn="jelly-duo",Vn="jelly-fill",Kn="notdog",Jn="notdog-duo",qn="slab",Qn="slab-press",Zn="thumbprint",tr="utility",er="utility-duo",ar="utility-fill",nr="whiteboard",rr="Classic",ir="Duotone",or="Sharp",sr="Sharp Duotone",lr="Chisel",fr="Etch",ur="Graphite",cr="Jelly",dr="Jelly Duo",mr="Jelly Fill",vr="Notdog",hr="Notdog Duo",gr="Slab",pr="Slab Press",br="Thumbprint",yr="Utility",xr="Utility Duo",wr="Utility Fill",Ar="Whiteboard";yt={},v(v(v(v(v(v(v(v(v(v(yt,Rn,rr),zn,ir),Wn,or),Un,sr),Yn,lr),Hn,fr),Gn,ur),Xn,cr),Bn,dr),Vn,mr),v(v(v(v(v(v(v(v(v(yt,Kn,vr),Jn,hr),qn,gr),Qn,pr),Zn,br),tr,yr),er,xr),ar,wr),nr,Ar);var Sr="kit",kr="kit-duotone",Pr="Kit",Ir="Kit Duotone";v(v({},Sr,Pr),kr,Ir);var Or={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Er={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Ot={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Fr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ua=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Dn,Fr),jr=["solid","regular","light","thin","duotone","brands","semibold"],ca=[1,2,3,4,5,6,7,8,9,10],Cr=ca.concat([11,12,13,14,15,16,17,18,19,20]),Nr=["aw","fw","pull-left","pull-right"],Tr=[].concat(F(Object.keys(Er)),jr,Nr,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",it.GROUP,it.SWAP_OPACITY,it.PRIMARY,it.SECONDARY]).concat(ca.map(function(t){return"".concat(t,"x")})).concat(Cr.map(function(t){return"w-".concat(t)})),_r={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},N="___FONT_AWESOME___",Et=16,da="fa",ma="svg-inline--fa",U="data-fa-i2svg",Ft="data-fa-pseudo-element",$r="data-fa-pseudo-element-pending",Bt="data-prefix",Vt="data-icon",ue="fontawesome-i2svg",Mr="async",Lr=["HTML","HEAD","STYLE","SCRIPT"],va=["::before","::after",":before",":after"],ha=function(){try{return!0}catch{return!1}}();function et(t){return new Proxy(t,{get:function(a,n){return n in a?a[n]:a[P]}})}var ga=f({},Ye);ga[P]=f(f(f(f({},{"fa-duotone":"duotone"}),Ye[P]),le.kit),le["kit-duotone"]);var Dr=et(ga),jt=f({},Fn);jt[P]=f(f(f(f({},{duotone:"fad"}),jt[P]),fe.kit),fe["kit-duotone"]);var ce=et(jt),Ct=f({},Ot);Ct[P]=f(f({},Ct[P]),Ln.kit);var Kt=et(Ct),Nt=f({},Or);Nt[P]=f(f({},Nt[P]),$n.kit);et(Nt);var Rr=nn,pa="fa-layers-text",zr=rn,Wr=f({},In);et(Wr);var Ur=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xt=on,Yr=[].concat(F(jn),F(Tr)),q=D.FontAwesomeConfig||{};function Hr(t){var e=A.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Gr(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(A&&typeof A.querySelector=="function"){var Xr=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Xr.forEach(function(t){var e=mt(t,2),a=e[0],n=e[1],r=Gr(Hr(a));r!=null&&(q[n]=r)})}var ba={styleDefault:"solid",familyDefault:P,cssPrefix:da,replacementClass:ma,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};q.familyPrefix&&(q.cssPrefix=q.familyPrefix);var V=f(f({},ba),q);V.autoReplaceSvg||(V.observeMutations=!1);var m={};Object.keys(ba).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(a){V[t]=a,Q.forEach(function(n){return n(m)})},get:function(){return V[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){V.cssPrefix=e,Q.forEach(function(a){return a(m)})},get:function(){return V.cssPrefix}});D.FontAwesomeConfig=m;var Q=[];function Br(t){return Q.push(t),function(){Q.splice(Q.indexOf(t),1)}}var G=Et,C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Vr(t){if(!(!t||!_)){var e=A.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var a=A.head.childNodes,n=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return A.head.insertBefore(e,n),t}}var Kr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function de(){for(var t=12,e="";t-- >0;)e+=Kr[Math.random()*62|0];return e}function K(t){for(var e=[],a=(t||[]).length>>>0;a--;)e[a]=t[a];return e}function Jt(t){return t.classList?K(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ya(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Jr(t){return Object.keys(t||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(ya(t[a]),'" ')},"").trim()}function vt(t){return Object.keys(t||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(t[a].trim(),";")},"")}function qt(t){return t.size!==C.size||t.x!==C.x||t.y!==C.y||t.rotate!==C.rotate||t.flipX||t.flipY}function qr(t){var e=t.transform,a=t.containerWidth,n=t.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:u}}function Qr(t){var e=t.transform,a=t.width,n=a===void 0?Et:a,r=t.height,i=r===void 0?Et:r,o="";return Ue?o+="translate(".concat(e.x/G-n/2,"em, ").concat(e.y/G-i/2,"em) "):o+="translate(calc(-50% + ".concat(e.x/G,"em), calc(-50% + ").concat(e.y/G,"em)) "),o+="scale(".concat(e.size/G*(e.flipX?-1:1),", ").concat(e.size/G*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var Zr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function xa(){var t=da,e=ma,a=m.cssPrefix,n=m.replacementClass,r=Zr;if(a!==t||n!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(n))}return r}var me=!1;function wt(){m.autoAddCss&&!me&&(Vr(xa()),me=!0)}var ti={mixout:function(){return{dom:{css:xa,insertCss:wt}}},hooks:function(){return{beforeDOMElementCreation:function(){wt()},beforeI2svg:function(){wt()}}}},T=D||{};T[N]||(T[N]={});T[N].styles||(T[N].styles={});T[N].hooks||(T[N].hooks={});T[N].shims||(T[N].shims=[]);var E=T[N],wa=[],Aa=function(){A.removeEventListener("DOMContentLoaded",Aa),ut=1,wa.map(function(e){return e()})},ut=!1;_&&(ut=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),ut||A.addEventListener("DOMContentLoaded",Aa));function ei(t){_&&(ut?setTimeout(t,0):wa.push(t))}function at(t){var e=t.tag,a=t.attributes,n=a===void 0?{}:a,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?ya(t):"<".concat(e," ").concat(Jr(n),">").concat(i.map(at).join(""),"</").concat(e,">")}function ve(t,e,a){if(t&&t[e]&&t[e][a])return{prefix:e,iconName:a,icon:t[e][a]}}var At=function(e,a,n,r){var i=Object.keys(e),o=i.length,s=a,l,u,c;for(n===void 0?(l=1,c=e[i[0]]):(l=0,c=n);l<o;l++)u=i[l],c=s(c,e[u],u,e);return c};function Sa(t){return F(t).length!==1?null:t.codePointAt(0).toString(16)}function he(t){return Object.keys(t).reduce(function(e,a){var n=t[a],r=!!n.icon;return r?e[n.iconName]=n.icon:e[a]=n,e},{})}function Tt(t,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,i=he(e);typeof E.hooks.addPack=="function"&&!r?E.hooks.addPack(t,he(e)):E.styles[t]=f(f({},E.styles[t]||{}),i),t==="fas"&&Tt("fa",e)}var Z=E.styles,ai=E.shims,ka=Object.keys(Kt),ni=ka.reduce(function(t,e){return t[e]=Object.keys(Kt[e]),t},{}),Qt=null,Pa={},Ia={},Oa={},Ea={},Fa={};function ri(t){return~Yr.indexOf(t)}function ii(t,e){var a=e.split("-"),n=a[0],r=a.slice(1).join("-");return n===t&&r!==""&&!ri(r)?r:null}var ja=function(){var e=function(i){return At(Z,function(o,s,l){return o[l]=At(s,i,{}),o},{})};Pa=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Ia=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Fa=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var a="far"in Z||m.autoFetchSvg,n=At(ai,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Oa=n.names,Ea=n.unicodes,Qt=ht(m.styleDefault,{family:m.familyDefault})};Br(function(t){Qt=ht(t.styleDefault,{family:m.familyDefault})});ja();function Zt(t,e){return(Pa[t]||{})[e]}function oi(t,e){return(Ia[t]||{})[e]}function W(t,e){return(Fa[t]||{})[e]}function Ca(t){return Oa[t]||{prefix:null,iconName:null}}function si(t){var e=Ea[t],a=Zt("fas",t);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function R(){return Qt}var Na=function(){return{prefix:null,iconName:null,rest:[]}};function li(t){var e=P,a=ka.reduce(function(n,r){return n[r]="".concat(m.cssPrefix,"-").concat(r),n},{});return la.forEach(function(n){(t.includes(a[n])||t.some(function(r){return ni[n].includes(r)}))&&(e=n)}),e}function ht(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,n=a===void 0?P:a,r=Dr[n][t];if(n===tt&&!t)return"fad";var i=ce[n][t]||ce[n][r],o=t in E.styles?t:null,s=i||o||null;return s}function fi(t){var e=[],a=null;return t.forEach(function(n){var r=ii(m.cssPrefix,n);r?a=r:n&&e.push(n)}),{iconName:a,rest:e}}function ge(t){return t.sort().filter(function(e,a,n){return n.indexOf(e)===a})}var pe=ua.concat(fa);function gt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,n=a===void 0?!1:a,r=null,i=ge(t.filter(function(h){return pe.includes(h)})),o=ge(t.filter(function(h){return!pe.includes(h)})),s=i.filter(function(h){return r=h,!He.includes(h)}),l=mt(s,1),u=l[0],c=u===void 0?null:u,d=li(i),g=f(f({},fi(o)),{},{prefix:ht(c,{family:d})});return f(f(f({},g),mi({values:t,family:d,styles:Z,config:m,canonical:g,givenPrefix:r})),ui(n,r,g))}function ui(t,e,a){var n=a.prefix,r=a.iconName;if(t||!n||!r)return{prefix:n,iconName:r};var i=e==="fa"?Ca(r):{},o=W(n,r);return r=i.iconName||o||r,n=i.prefix||n,n==="far"&&!Z.far&&Z.fas&&!m.autoFetchSvg&&(n="fas"),{prefix:n,iconName:r}}var ci=la.filter(function(t){return t!==P||t!==tt}),di=Object.keys(Ot).filter(function(t){return t!==P}).map(function(t){return Object.keys(Ot[t])}).flat();function mi(t){var e=t.values,a=t.family,n=t.canonical,r=t.givenPrefix,i=r===void 0?"":r,o=t.styles,s=o===void 0?{}:o,l=t.config,u=l===void 0?{}:l,c=a===tt,d=e.includes("fa-duotone")||e.includes("fad"),g=u.familyDefault==="duotone",h=n.prefix==="fad"||n.prefix==="fa-duotone";if(!c&&(d||g||h)&&(n.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(n.prefix="fab"),!n.prefix&&ci.includes(a)){var x=Object.keys(s).find(function(w){return di.includes(w)});if(x||u.autoFetchSvg){var b=En.get(a).defaultShortPrefixId;n.prefix=b,n.iconName=W(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||i==="fa")&&(n.prefix=R()||"fas"),n}var vi=function(){function t(){Va(this,t),this.definitions={}}return Ja(t,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=f(f({},a.definitions[s]||{}),o[s]),Tt(s,o[s]);var l=Kt[P][s];l&&Tt(l,o[s]),ja()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];a[s]||(a[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(a[s][d]=u)}),a[s][l]=u}),a}}])}(),be=[],X={},B={},hi=Object.keys(B);function gi(t,e){var a=e.mixoutsTo;return be=t,X={},Object.keys(B).forEach(function(n){hi.indexOf(n)===-1&&delete B[n]}),be.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),ft(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){X[o]||(X[o]=[]),X[o].push(i[o])})}n.provides&&n.provides(B)}),a}function _t(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var i=X[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(n))}),e}function Y(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];var r=X[t]||[];r.forEach(function(i){i.apply(null,a)})}function z(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return B[t]?B[t].apply(null,e):void 0}function $t(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,a=t.prefix||R();if(e)return e=W(a,e)||e,ve(Ta.definitions,a,e)||ve(E.styles,a,e)}var Ta=new vi,pi=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,Y("noAuto")},bi={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _?(Y("beforeI2svg",e),z("pseudoElements2svg",e),z("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,ei(function(){xi({autoReplaceSvgRoot:a}),Y("watch",e)})}},yi={icon:function(e){if(e===null)return null;if(ft(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:W(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=ht(e[0]);return{prefix:n,iconName:W(n,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(Rr))){var r=gt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||R(),iconName:W(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=R();return{prefix:i,iconName:W(i,e)||e}}}},I={noAuto:pi,config:m,dom:bi,parse:yi,library:Ta,findIconDefinition:$t,toHtml:at},xi=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,n=a===void 0?A:a;(Object.keys(E.styles).length>0||m.autoFetchSvg)&&_&&m.autoReplaceSvg&&I.dom.i2svg({node:n})};function pt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return at(n)})}}),Object.defineProperty(t,"node",{get:function(){if(_){var n=A.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function wi(t){var e=t.children,a=t.main,n=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(qt(o)&&a.found&&!n.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};r.style=vt(f(f({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ai(t){var e=t.prefix,a=t.iconName,n=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:o}),children:n}]}]}function Si(t){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(a){return a in t})}function te(t){var e=t.icons,a=e.main,n=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.maskId,u=t.extra,c=t.watchable,d=c===void 0?!1:c,g=n.found?n:a,h=g.width,x=g.height,b=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(O){return u.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(u.classes).join(" "),w={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:b,role:u.attributes.role||"img",viewBox:"0 0 ".concat(h," ").concat(x)})};!Si(u.attributes)&&!u.attributes["aria-hidden"]&&(w.attributes["aria-hidden"]="true"),d&&(w.attributes[U]="");var y=f(f({},w),{},{prefix:r,iconName:i,main:a,mask:n,maskId:l,transform:o,symbol:s,styles:f({},u.styles)}),S=n.found&&a.found?z("generateAbstractMask",y)||{children:[],attributes:{}}:z("generateAbstractIcon",y)||{children:[],attributes:{}},k=S.children,$=S.attributes;return y.children=k,y.attributes=$,s?Ai(y):wi(y)}function ye(t){var e=t.content,a=t.width,n=t.height,r=t.transform,i=t.extra,o=t.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[U]="");var u=f({},i.styles);qt(r)&&(u.transform=Qr({transform:r,width:a,height:n}),u["-webkit-transform"]=u.transform);var c=vt(u);c.length>0&&(l.style=c);var d=[];return d.push({tag:"span",attributes:l,children:[e]}),d}function ki(t){var e=t.content,a=t.extra,n=f(f({},a.attributes),{},{class:a.classes.join(" ")}),r=vt(a.styles);r.length>0&&(n.style=r);var i=[];return i.push({tag:"span",attributes:n,children:[e]}),i}var St=E.styles;function Mt(t){var e=t[0],a=t[1],n=t.slice(4),r=mt(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(xt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(xt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(xt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:a,icon:o}}var Pi={found:!1,width:512,height:512};function Ii(t,e){!ha&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Lt(t,e){var a=e;return e==="fa"&&m.styleDefault!==null&&(e=R()),new Promise(function(n,r){if(a==="fa"){var i=Ca(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&St[e]&&St[e][t]){var o=St[e][t];return n(Mt(o))}Ii(t,e),n(f(f({},Pi),{},{icon:m.showMissingIcons&&t?z("missingIconAbstract")||{}:{}}))})}var xe=function(){},Dt=m.measurePerformance&&rt&&rt.mark&&rt.measure?rt:{mark:xe,measure:xe},J='FA "7.2.0"',Oi=function(e){return Dt.mark("".concat(J," ").concat(e," begins")),function(){return _a(e)}},_a=function(e){Dt.mark("".concat(J," ").concat(e," ends")),Dt.measure("".concat(J," ").concat(e),"".concat(J," ").concat(e," begins"),"".concat(J," ").concat(e," ends"))},ee={begin:Oi,end:_a},st=function(){};function we(t){var e=t.getAttribute?t.getAttribute(U):null;return typeof e=="string"}function Ei(t){var e=t.getAttribute?t.getAttribute(Bt):null,a=t.getAttribute?t.getAttribute(Vt):null;return e&&a}function Fi(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function ji(){if(m.autoReplaceSvg===!0)return lt.replace;var t=lt[m.autoReplaceSvg];return t||lt.replace}function Ci(t){return A.createElementNS("http://www.w3.org/2000/svg",t)}function Ni(t){return A.createElement(t)}function $a(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,n=a===void 0?t.tag==="svg"?Ci:Ni:a;if(typeof t=="string")return A.createTextNode(t);var r=n(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild($a(o,{ceFn:n}))}),r}function Ti(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var lt={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(r){a.parentNode.insertBefore($a(r),a)}),a.getAttribute(U)===null&&m.keepOriginalSource){var n=A.createComment(Ti(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(e){var a=e[0],n=e[1];if(~Jt(a).indexOf(m.replacementClass))return lt.replace(e);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(s){return at(s)}).join(`
`);a.setAttribute(U,""),a.innerHTML=o}};function Ae(t){t()}function Ma(t,e){var a=typeof e=="function"?e:st;if(t.length===0)a();else{var n=Ae;m.mutateApproach===Mr&&(n=D.requestAnimationFrame||Ae),n(function(){var r=ji(),i=ee.begin("mutate");t.map(r),i(),a()})}}var ae=!1;function La(){ae=!0}function Rt(){ae=!1}var ct=null;function Se(t){if(se&&m.observeMutations){var e=t.treeCallback,a=e===void 0?st:e,n=t.nodeCallback,r=n===void 0?st:n,i=t.pseudoElementsCallback,o=i===void 0?st:i,s=t.observeMutationsRoot,l=s===void 0?A:s;ct=new se(function(u){if(!ae){var c=R();K(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!we(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o([d.target],!0),d.type==="attributes"&&we(d.target)&&~Ur.indexOf(d.attributeName))if(d.attributeName==="class"&&Ei(d.target)){var g=gt(Jt(d.target)),h=g.prefix,x=g.iconName;d.target.setAttribute(Bt,h||c),x&&d.target.setAttribute(Vt,x)}else Fi(d.target)&&r(d.target)})}}),_&&ct.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function _i(){ct&&ct.disconnect()}function $i(t){var e=t.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),a}function Mi(t){var e=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",r=gt(Jt(t));return r.prefix||(r.prefix=R()),e&&a&&(r.prefix=e,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=oi(r.prefix,t.innerText)||Zt(r.prefix,Sa(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Li(t){var e=K(t.attributes).reduce(function(a,n){return a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a},{});return e}function Di(){return{iconName:null,prefix:null,transform:C,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ke(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Mi(t),n=a.iconName,r=a.prefix,i=a.rest,o=Li(t),s=_t("parseNodeAttributes",{},t),l=e.styleParser?$i(t):[];return f({iconName:n,prefix:r,transform:C,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ri=E.styles;function Da(t){var e=m.autoReplaceSvg==="nest"?ke(t,{styleParser:!1}):ke(t);return~e.extra.classes.indexOf(pa)?z("generateLayersText",t,e):z("generateSvgReplacementMutation",t,e)}function zi(){return[].concat(F(fa),F(ua))}function Pe(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_)return Promise.resolve();var a=A.documentElement.classList,n=function(d){return a.add("".concat(ue,"-").concat(d))},r=function(d){return a.remove("".concat(ue,"-").concat(d))},i=m.autoFetchSvg?zi():He.concat(Object.keys(Ri));i.includes("fa")||i.push("fa");var o=[".".concat(pa,":not([").concat(U,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(U,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=K(t.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var l=ee.begin("onTree"),u=s.reduce(function(c,d){try{var g=Da(d);g&&c.push(g)}catch(h){ha||h.name==="MissingIcon"&&console.error(h)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(g){Ma(g,function(){n("active"),n("complete"),r("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(g){l(),d(g)})})}function Wi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Da(t).then(function(a){a&&Ma([a],e)})}function Ui(t){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:$t(e||{}),r=a.mask;return r&&(r=(r||{}).icon?r:$t(r||{})),t(n,f(f({},a),{},{mask:r}))}}var Yi=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?C:n,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,u=a.maskId,c=u===void 0?null:u,d=a.classes,g=d===void 0?[]:d,h=a.attributes,x=h===void 0?{}:h,b=a.styles,w=b===void 0?{}:b;if(e){var y=e.prefix,S=e.iconName,k=e.icon;return pt(f({type:"icon"},e),function(){return Y("beforeDOMElementCreation",{iconDefinition:e,params:a}),te({icons:{main:Mt(k),mask:l?Mt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:S,transform:f(f({},C),r),symbol:o,maskId:c,extra:{attributes:x,styles:w,classes:g}})})}},Hi={mixout:function(){return{icon:Ui(Yi)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Pe,a.nodeCallback=Wi,a}}},provides:function(e){e.i2svg=function(a){var n=a.node,r=n===void 0?A:n,i=a.callback,o=i===void 0?function(){}:i;return Pe(r,o)},e.generateSvgReplacementMutation=function(a,n){var r=n.iconName,i=n.prefix,o=n.transform,s=n.symbol,l=n.mask,u=n.maskId,c=n.extra;return new Promise(function(d,g){Promise.all([Lt(r,i),l.iconName?Lt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var x=mt(h,2),b=x[0],w=x[1];d([a,te({icons:{main:b,mask:w},prefix:i,iconName:r,transform:o,symbol:s,maskId:u,extra:c,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,l=vt(s);l.length>0&&(r.style=l);var u;return qt(o)&&(u=z("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},Gi={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return pt({type:"layer"},function(){Y("beforeDOMElementCreation",{assembler:a,params:n});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(F(i)).join(" ")},children:o}]})}}}},Xi={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n.title;var r=n.classes,i=r===void 0?[]:r,o=n.attributes,s=o===void 0?{}:o,l=n.styles,u=l===void 0?{}:l;return pt({type:"counter",content:a},function(){return Y("beforeDOMElementCreation",{content:a,params:n}),ki({content:a.toString(),extra:{attributes:s,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(F(i))}})})}}}},Bi={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?C:r,o=n.classes,s=o===void 0?[]:o,l=n.attributes,u=l===void 0?{}:l,c=n.styles,d=c===void 0?{}:c;return pt({type:"text",content:a},function(){return Y("beforeDOMElementCreation",{content:a,params:n}),ye({content:a,transform:f(f({},C),i),extra:{attributes:u,styles:d,classes:["".concat(m.cssPrefix,"-layers-text")].concat(F(s))}})})}}},provides:function(e){e.generateLayersText=function(a,n){var r=n.transform,i=n.extra,o=null,s=null;if(Ue){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();o=u.width/l,s=u.height/l}return Promise.resolve([a,ye({content:a.innerHTML,width:o,height:s,transform:r,extra:i,watchable:!0})])}}},Ra=new RegExp('"',"ug"),Ie=[1105920,1112319],Oe=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),On),_r),Mn),zt=Object.keys(Oe).reduce(function(t,e){return t[e.toLowerCase()]=Oe[e],t},{}),Vi=Object.keys(zt).reduce(function(t,e){var a=zt[e];return t[e]=a[900]||F(Object.entries(a))[0][1],t},{});function Ki(t){var e=t.replace(Ra,"");return Sa(F(e)[0]||"")}function Ji(t){var e=t.getPropertyValue("font-feature-settings").includes("ss01"),a=t.getPropertyValue("content"),n=a.replace(Ra,""),r=n.codePointAt(0),i=r>=Ie[0]&&r<=Ie[1],o=n.length===2?n[0]===n[1]:!1;return i||o||e}function qi(t,e){var a=t.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(e),r=isNaN(n)?"normal":n;return(zt[a]||{})[r]||Vi[a]}function Ee(t,e){var a="".concat($r).concat(e.replace(":","-"));return new Promise(function(n,r){if(t.getAttribute(a)!==null)return n();var i=K(t.children),o=i.filter(function(H){return H.getAttribute(Ft)===e})[0],s=D.getComputedStyle(t,e),l=s.getPropertyValue("font-family"),u=l.match(zr),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!u)return t.removeChild(o),n();if(u&&d!=="none"&&d!==""){var g=s.getPropertyValue("content"),h=qi(l,c),x=Ki(g),b=u[0].startsWith("FontAwesome"),w=Ji(s),y=Zt(h,x),S=y;if(b){var k=si(x);k.iconName&&k.prefix&&(y=k.iconName,h=k.prefix)}if(y&&!w&&(!o||o.getAttribute(Bt)!==h||o.getAttribute(Vt)!==S)){t.setAttribute(a,S),o&&t.removeChild(o);var $=Di(),O=$.extra;O.attributes[Ft]=e,Lt(y,h).then(function(H){var nt=te(f(f({},$),{},{icons:{main:H,mask:Na()},prefix:h,iconName:S,extra:O,watchable:!0})),M=A.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(M,t.firstChild):t.appendChild(M),M.outerHTML=nt.map(function(Ga){return at(Ga)}).join(`
`),t.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function Qi(t){return Promise.all([Ee(t,"::before"),Ee(t,"::after")])}function Zi(t){return t.parentNode!==document.head&&!~Lr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ft)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var to=function(e){return!!e&&va.some(function(a){return e.includes(a)})},eo=function(e){if(!e)return[];var a=new Set,n=e.split(/,(?![^()]*\))/).map(function(l){return l.trim()});n=n.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var r=ot(n),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(to(o)){var s=va.reduce(function(l,u){return l.replace(u,"")},o);s!==""&&s!=="*"&&a.add(s)}}}catch(l){r.e(l)}finally{r.f()}return a};function Fe(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(_){var a;if(e)a=t;else if(m.searchPseudoElementsFullScan)a=t.querySelectorAll("*");else{var n=new Set,r=ot(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var s=ot(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,c=eo(u.selectorText),d=ot(c),g;try{for(d.s();!(g=d.n()).done;){var h=g.value;n.add(h)}}catch(b){d.e(b)}finally{d.f()}}}catch(b){s.e(b)}finally{s.f()}}catch(b){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){r.e(b)}finally{r.f()}if(!n.size)return;var x=Array.from(n).join(", ");try{a=t.querySelectorAll(x)}catch{}}return new Promise(function(b,w){var y=K(a).filter(Zi).map(Qi),S=ee.begin("searchPseudoElements");La(),Promise.all(y).then(function(){S(),Rt(),b()}).catch(function(){S(),Rt(),w()})})}}var ao={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Fe,a}}},provides:function(e){e.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?A:n;m.searchPseudoElements&&Fe(r)}}},je=!1,no={mixout:function(){return{dom:{unwatch:function(){La(),je=!0}}}},hooks:function(){return{bootstrap:function(){Se(_t("mutationObserverCallbacks",{}))},noAuto:function(){_i()},watch:function(a){var n=a.observeMutationsRoot;je?Rt():Se(_t("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Ce=function(e){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},a)},ro={mixout:function(){return{parse:{transform:function(a){return Ce(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=Ce(r)),a}}},provides:function(e){e.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},g={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:d,path:g};return{tag:"g",attributes:f({},h.outer),children:[{tag:"g",attributes:f({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:f(f({},n.icon.attributes),h.path)}]}]}}}},kt={x:0,y:0,width:"100%",height:"100%"};function Ne(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function io(t){return t.tag==="g"?t.children:[t]}var oo={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),i=r?gt(r.split(" ").map(function(o){return o.trim()})):Na();return i.prefix||(i.prefix=R()),a.mask=i,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(e){e.generateAbstractMask=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,u=i.width,c=i.icon,d=o.width,g=o.icon,h=qr({transform:l,containerWidth:d,iconWidth:u}),x={tag:"rect",attributes:f(f({},kt),{},{fill:"white"})},b=c.children?{children:c.children.map(Ne)}:{},w={tag:"g",attributes:f({},h.inner),children:[Ne(f({tag:c.tag,attributes:f(f({},c.attributes),h.path)},b))]},y={tag:"g",attributes:f({},h.outer),children:[w]},S="mask-".concat(s||de()),k="clip-".concat(s||de()),$={tag:"mask",attributes:f(f({},kt),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,y]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:io(g)},$]};return n.push(O,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(S,")")},kt)}),{children:n,attributes:r}}}},so={provides:function(e){var a=!1;D.matchMedia&&(a=D.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},lo={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},fo=[ti,Hi,Gi,Xi,Bi,ao,no,ro,oo,so,lo];gi(fo,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var Wt=I.parse;I.findIconDefinition;I.toHtml;var uo=I.icon;I.layer;I.text;I.counter;var co={};function Ut(t,e){(e==null||e>t.length)&&(e=t.length);for(var a=0,n=Array(e);a<e;a++)n[a]=t[a];return n}function mo(t){if(Array.isArray(t))return t}function vo(t){if(Array.isArray(t))return Ut(t)}function L(t,e,a){return(e=Ao(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function ho(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function go(t,e){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var n,r,i,o,s=[],l=!0,u=!1;try{if(i=(a=a.call(t)).next,e!==0)for(;!(l=(n=i.call(a)).done)&&(s.push(n.value),s.length!==e);l=!0);}catch(c){u=!0,r=c}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function po(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Te(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,n)}return a}function j(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?Te(Object(a),!0).forEach(function(n){L(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Te(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}function yo(t,e){if(t==null)return{};var a,n,r=xo(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)===-1&&{}.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}function xo(t,e){if(t==null)return{};var a={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.indexOf(n)!==-1)continue;a[n]=t[n]}return a}function _e(t,e){return mo(t)||go(t,e)||za(t,e)||po()}function Yt(t){return vo(t)||ho(t)||za(t)||bo()}function wo(t,e){if(typeof t!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var n=a.call(t,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ao(t){var e=wo(t,"string");return typeof e=="symbol"?e:e+""}function dt(t){"@babel/helpers - typeof";return dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dt(t)}function za(t,e){if(t){if(typeof t=="string")return Ut(t,e);var a={}.toString.call(t).slice(8,-1);return a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set"?Array.from(t):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Ut(t,e):void 0}}var So="7.0.0-alpha1",Ht;try{var ko=require("@fortawesome/fontawesome-svg-core/package.json");Ht=ko.version}catch{Ht=co.FA_VERSION||"7.0.0-alpha8"}function Po(t){var e=t.beat,a=t.fade,n=t.beatFade,r=t.bounce,i=t.shake,o=t.flash,s=t.spin,l=t.spinPulse,u=t.spinReverse,c=t.pulse,d=t.fixedWidth,g=t.inverse,h=t.border,x=t.listItem,b=t.flip,w=t.size,y=t.rotation,S=t.pull,k=t.swapOpacity,$=t.rotateBy,O=t.widthAuto,H=Io(Ht,So),nt=L(L(L(L(L(L({"fa-beat":e,"fa-fade":a,"fa-beat-fade":n,"fa-bounce":r,"fa-shake":i,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":c,"fa-fw":d,"fa-inverse":g,"fa-border":h,"fa-li":x,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},"fa-".concat(w),typeof w<"u"&&w!==null),"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),"fa-pull-".concat(S),typeof S<"u"&&S!==null),"fa-swap-opacity",k),"fa-rotate-by",H&&$),"fa-width-auto",H&&O);return Object.keys(nt).map(function(M){return nt[M]?M:null}).filter(function(M){return M})}function Io(t,e){for(var a=t.split("-"),n=_e(a,2),r=n[0],i=n[1],o=e.split("-"),s=_e(o,2),l=s[0],u=s[1],c=r.split("."),d=l.split("."),g=0;g<Math.max(c.length,d.length);g++){var h=c[g]||"0",x=d[g]||"0",b=parseInt(h,10),w=parseInt(x,10);if(b!==w)return b>w}for(var y=0;y<Math.max(c.length,d.length);y++){var S=c[y]||"0",k=d[y]||"0";if(S!==k&&S.length!==k.length)return S.length<k.length}return!(i&&!u)}function Oo(t){return t=t-0,t===t}function Wa(t){return Oo(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,a){return a?a.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Eo=["style"];function Fo(t){return t.charAt(0).toUpperCase()+t.slice(1)}function jo(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,a){var n=a.indexOf(":"),r=Wa(a.slice(0,n)),i=a.slice(n+1).trim();return r.startsWith("webkit")?e[Fo(r)]=i:e[r]=i,e},{})}function Ua(t,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var n=(e.children||[]).map(function(l){return Ua(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=jo(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Wa(u)]=c}return l},{attrs:{}}),i=a.style,o=i===void 0?{}:i,s=yo(a,Eo);return r.attrs.style=j(j({},r.attrs.style),o),t.apply(void 0,[e.tag,j(j({},r.attrs),s)].concat(Yt(n)))}var Ya=!1;try{Ya=!0}catch{}function Co(){if(!Ya&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function $e(t){if(t&&dt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Wt.icon)return Wt.icon(t);if(t===null)return null;if(t&&dt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Pt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?L({},t,e):{}}var Me={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},Ha=Le.forwardRef(function(t,e){var a=j(j({},Me),t),n=a.icon,r=a.mask,i=a.symbol,o=a.className,s=a.title,l=a.titleId,u=a.maskId,c=$e(n),d=Pt("classes",[].concat(Yt(Po(a)),Yt((o||"").split(" ")))),g=Pt("transform",typeof a.transform=="string"?Wt.transform(a.transform):a.transform),h=Pt("mask",$e(r)),x=uo(c,j(j(j(j({},d),g),h),{},{symbol:i,title:s,titleId:l,maskId:u}));if(!x)return Co("Could not find icon",c),null;var b=x.abstract,w={ref:e};return Object.keys(a).forEach(function(y){Me.hasOwnProperty(y)||(w[y]=a[y])}),No(b[0],w)});Ha.displayName="FontAwesomeIcon";Ha.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),rotateBy:p.bool,shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool,widthAuto:p.bool};var No=Ua.bind(null,Le.createElement);export{Ha as F};
