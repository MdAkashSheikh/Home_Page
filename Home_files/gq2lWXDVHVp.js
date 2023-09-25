;/*FB_PKG_DELIM*/

__d("xplatToDOMRef",[],(function(a,b,c,d,e,f){"use strict";var g=a.HTMLElement;function b(a){return function(b){b=g&&b instanceof g?b:null;typeof a==="function"?a(b):a!=null&&typeof a==="object"&&(a.current=b)}}var h=a.HTMLInputElement;function c(a){return function(b){b=h&&b instanceof h?b:null;typeof a==="function"?a(b):a!=null&&typeof a==="object"&&(a.current=b)}}f.xplatToDOMRef=b;f.xplatToInputRef=c}),66);
__d("MessengerThreadTakedownState",[],(function(a,b,c,d,e,f){a=Object.freeze({TAKEN_DOWN:1,RESTORED:2,GEO_BLOCKED:3});f["default"]=a}),66);
__d("CometScrollableAreaImpl.react",["BaseScrollableArea.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){var d=a.horizontal;d=d===void 0?!0:d;var e=a.id,f=a.vertical;f=f===void 0?!0:f;a=babelHelpers.objectWithoutPropertiesLoose(a,["horizontal","id","vertical"]);return h.jsx(c("BaseScrollableArea.react"),babelHelpers["extends"]({},a,{horizontal:d,id:e,ref:b,vertical:f}))}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("MWIsThreadDisabled",["I64","LSIntEnum","MessengerThreadTakedownState"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return a!=null&&(d("I64").equal(a,d("LSIntEnum").ofNumber(c("MessengerThreadTakedownState").TAKEN_DOWN))||d("I64").equal(a,d("LSIntEnum").ofNumber(c("MessengerThreadTakedownState").GEO_BLOCKED)))}g["default"]=a}),98);
__d("isMWXacGroupThread",["LSIntEnum","LSThreadBitOffset"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return d("LSThreadBitOffset").has(d("LSIntEnum").ofNumber(97),a)}g["default"]=a}),98);
__d("ReactStrictDomWeb",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("react");function j(){j=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a};return j.apply(this,arguments)}var k=new Set(["Adlm","Arab","Aran","Armi","Avst","Cprt","Egyp","Hatr","Hebr","Khar","Mand","Mend","Nkoo","Rohg","Samr","Syrc","Thaa","Yezi"]),l=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","iw","khw","ks","mzn","nqo","pnb","ps","sd","ug","ur","yi"]),m=new Map();function n(a){var b=!1,c=null,d=m.get(a);if(d!=null)b=d;else{Intl.Locale!=null&&(c=new Intl.Locale(a).maximize().script);if(c!=null)b=k.has(c);else{d=a.split(/-|_/)[0];b=l.has(d)}m.set(a,b)}return b?"rtl":"ltr"}var o=new Set(["alt","aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-columncount","aria-columnindex","aria-columnspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","autoCapitalize","autoComplete","autoFocus","checked","children","crossOrigin","data-testid","decoding","defaultChecked","defaultValue","dir","disabled","download","draggable","elementTiming","enterKeyHint","fetchPriority","for","height","hidden","href","id","inert","inputMode","label","lang","loading","max","maxLength","min","minLength","multiple","onAuxClick","onBeforeInput","onBlur","onChange","onClick","onContextMenu","onCopy","onCut","onError","onFocus","onFocusIn","onFocusOut","onFullscreenChange","onFullscreenError","onGotPointerCapture","onInput","onInvalid","onKeyDown","onKeyUp","onLoad","onLostPointerCapture","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onPaste","onPointerCancel","onPointerDown","onPointerEnter","onPointerLeave","onPointerMove","onPointerOut","onPointerOver","onPointerUp","onScroll","onSelect","onSelectionChange","onWheel","placeholder","readOnly","referrerPolicy","rel","required","role","rows","selected","spellCheck","src","srcSet","step","style","suppressHydrationWarning","tabIndex","target","type","value","width"]),p={display:"none"};function q(a){Object.keys(a).forEach(function(b){var c=o.has(b);c||delete a[b]})}function a(a,b){var d={$$css:!0,"debug::name":"html-"+a},e=h.forwardRef(function(e,f){var g=e.lang!=null?n(e.lang):null;g=e.dir||g||(b==null?void 0:b.dir);var i=b.style,k=babelHelpers.objectWithoutPropertiesLoose(b,["style"]),l=e.style,m=babelHelpers.objectWithoutPropertiesLoose(e,["style"]);k=babelHelpers["extends"]({},k,m);q(k);g!==null&&(k.dir=g);e.role!==null&&(k.role=e.role==="none"?"presentation":e.role);m=c("stylex").spread;g=m([d,i,l,e.hidden===!0&&p]);m=h.createElement(a,j({},k,g,{ref:f}));return m});e.displayName="html."+a;return e}e={block:{listStyle:"xe8uvvx",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",$$css:!0},inline:{marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",textDecoration:"x1hl2dhg",textAlign:"x16tdsg8",wordWrap:"x1vvkbs",$$css:!0},inlineblock:{borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",$$css:!0},button:{borderTopWidth:"x178xt8z",borderEndWidth:"xm81vs4",borderBottomWidth:"xso031l",borderStartWidth:"xy80clv",$$css:!0},codePre:{fontFamily:"xelszwe",fontSize:"xrv4cvt",overflowX:"xw2csxc",overflowY:"x1odjw0f",$$css:!0},heading:{fontSize:"xngnso2",wordWrap:"x1vvkbs",$$css:!0},img:{aspectRatio:"x19h5e5q",height:"xt7dq6l",maxWidth:"x193iq5w",$$css:!0},input:{borderTopWidth:"x178xt8z",borderEndWidth:"xm81vs4",borderBottomWidth:"xso031l",borderStartWidth:"xy80clv",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",$$css:!0},strong:{fontWeight:"xjs9k72",$$css:!0},textarea:{borderTopWidth:"x178xt8z",borderEndWidth:"xm81vs4",borderBottomWidth:"xso031l",borderStartWidth:"xy80clv",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",resize:"x288g5",$$css:!0}};f={style:e.inline};d=a("a",f);f={style:e.block};f=a("article",f);var r={style:e.block};r=a("aside",r);var s={style:e.inline};s=a("b",s);var t={style:e.inline};t=a("bdi",t);var u={style:e.inline};u=a("bdo",u);var v={style:e.block};v=a("blockquote",v);var w={style:[e.inlineblock,e.button],type:"button"};w=a("button",w);var x={style:[e.inline,e.codePre]};x=a("code",x);var y={style:e.block};y=a("div",y);var z={style:e.inline};z=a("em",z);var A={style:e.block};A=a("fieldset",A);var B={style:e.block};B=a("footer",B);var C={style:e.block};C=a("form",C);var D={style:[e.block,e.heading]},E=a("h1",D),F=a("h2",D),G=a("h3",D),aa=a("h4",D),ba=a("h5",D);D=a("h6",D);var H={style:e.block};H=a("header",H);var I={style:e.inline};I=a("i",I);var J={style:e.img};J=a("img",J);var K={dir:"auto",style:[e.inlineblock,e.input]};K=a("input",K);var L={style:e.inline};L=a("label",L);var M={style:e.block};M=a("li",M);var N={style:e.block};N=a("main",N);var O={style:e.block};O=a("nav",O);var P={style:e.block};P=a("ol",P);var Q={};Q=a("optgroup",Q);var R={};R=a("option",R);var S={style:e.block};S=a("p",S);var T={style:[e.block,e.codePre]};T=a("pre",T);var U={style:e.block};U=a("section",U);var V={style:[e.inlineblock]};V=a("select",V);var W={style:e.inline};W=a("span",W);var X={style:[e.inline,e.strong]};X=a("strong",X);var Y={style:e.inline};Y=a("sub",Y);var Z={style:e.inline};Z=a("sup",Z);var $={dir:"auto",style:[e.inlineblock,e.textarea]};$=a("textarea",$);e={style:e.block};a=a("ul",e);e=Object.freeze({__proto__:null,a:d,article:f,aside:r,b:s,bdi:t,bdo:u,blockquote:v,button:w,code:x,div:y,em:z,fieldset:A,footer:B,form:C,h1:E,h2:F,h3:G,h4:aa,h5:ba,h6:D,header:H,i:I,img:J,input:K,label:L,li:M,main:N,nav:O,ol:P,optgroup:Q,option:R,p:S,pre:T,section:U,select:V,span:W,strong:X,sub:Y,sup:Z,textarea:$,ul:a});d={customProperties:{}};var ca=i.createContext(d);function b(a){var b=a.children;a=a.customProperties;return a?i.createElement(ca.Provider,{children:b,value:{customProperties:a}}):b}f={ThemeProvider:b};g.contexts=f;g.html=e}),98);
__d("react-strict-dom",["ReactStrictDomWeb"],(function(a,b,c,d,e,f){"use strict";a=importNamespace("ReactStrictDomWeb").contexts;b=importNamespace("ReactStrictDomWeb").html;f.contexts=a;f.html=b}),66);