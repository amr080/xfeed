(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[644],{7398:function(e,n,t){"use strict";t.d(n,{u:function(){return j}});var r=t(1662),i=t(6871),s=t(8668),o=t(9703),a=t(1358),c=t(2515),l=t(4332),u=t(7294),d=t(7375),f=t(6450);function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function h(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}var m={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},x=["openDelay","closeDelay","closeOnClick","closeOnMouseDown","onOpen","onClose","placement","id","isOpen","defaultIsOpen","arrowSize","arrowShadowColor","arrowPadding","modifiers","isDisabled","gutter","offset","direction"];var g=["children","label","shouldWrapChildren","aria-label","hasArrow","bg","portalProps"],v=(0,s.m$)(c.E.div),j=(0,s.Gp)((function(e,n){var t=(0,s.mq)("Tooltip",e),c=(0,s.Lr)(e),j=(0,s.Fg)(),b=c.children,w=c.label,y=c.shouldWrapChildren,k=c["aria-label"],O=c.hasArrow,C=c.bg,S=c.portalProps,E=h(c,g);C&&(t.bg=C,t[r.j.arrowBg.var]=(0,o.K1)(j,"colors",C));var P,R=function(e){void 0===e&&(e={});var n=e,t=n.openDelay,i=void 0===t?0:t,s=n.closeDelay,a=void 0===s?0:s,c=n.closeOnClick,l=void 0===c||c,m=n.closeOnMouseDown,g=n.onOpen,v=n.onClose,j=n.placement,b=n.id,w=n.isOpen,y=n.defaultIsOpen,k=n.arrowSize,O=void 0===k?10:k,C=n.arrowShadowColor,S=n.arrowPadding,E=n.modifiers,P=n.isDisabled,R=n.gutter,M=n.offset,T=n.direction,F=h(n,x),I=(0,d.qY)({isOpen:w,defaultIsOpen:y,onOpen:g,onClose:v}),N=I.isOpen,D=I.onOpen,_=I.onClose,z=(0,r.D)({enabled:N,placement:j,arrowPadding:S,modifiers:E,gutter:R,offset:M,direction:T}),A=z.referenceRef,q=z.getPopperProps,U=z.getArrowInnerProps,W=z.getArrowProps,K=(0,d.Me)(b,"tooltip"),V=u.useRef(null),L=u.useRef(),G=u.useRef(),H=u.useCallback((function(){P||(L.current=window.setTimeout(D,i))}),[P,D,i]),Z=u.useCallback((function(){L.current&&clearTimeout(L.current),G.current=window.setTimeout(_,a)}),[a,_]),$=u.useCallback((function(){l&&Z()}),[l,Z]),X=u.useCallback((function(){m&&Z()}),[m,Z]),B=u.useCallback((function(e){N&&"Escape"===e.key&&Z()}),[N,Z]);(0,d.OR)("keydown",B),u.useEffect((function(){return function(){clearTimeout(L.current),clearTimeout(G.current)}}),[]),(0,d.OR)("mouseleave",Z,(function(){return V.current}));var Y=u.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),p({},e,{ref:(0,f.lq)(V,n,A),onMouseEnter:(0,o.v0)(e.onMouseEnter,H),onClick:(0,o.v0)(e.onClick,$),onMouseDown:(0,o.v0)(e.onMouseDown,X),onFocus:(0,o.v0)(e.onFocus,H),onBlur:(0,o.v0)(e.onBlur,Z),"aria-describedby":N?K:void 0})}),[H,Z,X,N,K,$,A]),J=u.useCallback((function(e,n){var t;return void 0===e&&(e={}),void 0===n&&(n=null),q(p({},e,{style:p({},e.style,(t={},t[r.j.arrowSize.var]=O?(0,o.px)(O):void 0,t[r.j.arrowShadowColor.var]=C,t))}),n)}),[q,O,C]),Q=u.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),p({ref:n},F,e,{id:K,role:"tooltip",style:p({},e.style,{position:"relative",transformOrigin:r.j.transformOrigin.varRef})})}),[F,K]);return{isOpen:N,show:H,hide:Z,getTriggerProps:Y,getTooltipProps:Q,getTooltipPositionerProps:J,getArrowProps:W,getArrowInnerProps:U}}(p({},E,{direction:j.direction}));if((0,o.HD)(b)||y)P=u.createElement(s.m$.span,p({tabIndex:0},R.getTriggerProps()),b);else{var M=u.Children.only(b);P=u.cloneElement(M,R.getTriggerProps(M.props,M.ref))}var T=!!k,F=R.getTooltipProps({},n),I=T?(0,o.CE)(F,["role","id"]):F,N=(0,o.ei)(F,["role","id"]);return w?u.createElement(u.Fragment,null,P,u.createElement(l.M,null,R.isOpen&&u.createElement(i.h_,S,u.createElement(s.m$.div,p({},R.getTooltipPositionerProps(),{__css:{zIndex:t.zIndex,pointerEvents:"none"}}),u.createElement(v,p({variants:m},I,{initial:"exit",animate:"enter",exit:"exit",__css:t}),w,T&&u.createElement(a.TX,N,k),O&&u.createElement(s.m$.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper"},u.createElement(s.m$.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:t.bg}}))))))):u.createElement(u.Fragment,null,b)}));o.Ts&&(j.displayName="Tooltip")},9545:function(e,n,t){"use strict";t.d(n,{j:function(){return u}});var r=t(5528),i=t(7294),s=t(7495),o=t(8102),a=t(3453),c=t(1581);function l(e,n){const[t,r]=(0,i.useState)({status:"None"}),{addTransaction:s}=(0,o.W)(),{addNotification:l}=(0,a.l)();return{promiseTransaction:(0,i.useCallback)((async t=>{var i,o,a,u,d,f;if(!e)return;let p;try{p=await t,r({transaction:p,status:"Mining",chainId:e}),s({transaction:Object.assign(Object.assign({},p),{chainId:e}),submittedAt:Date.now(),transactionName:null===n||void 0===n?void 0:n.transactionName});const i=await p.wait();return r({receipt:i,transaction:p,status:"Success",chainId:e}),i}catch(h){const n=null!==(d=null!==(a=null!==(o=null===(i=h.error)||void 0===i?void 0:i.message)&&void 0!==o?o:h.reason)&&void 0!==a?a:null===(u=h.data)||void 0===u?void 0:u.message)&&void 0!==d?d:h.message;if(p){if((e=>(null===e||void 0===e?void 0:e.code)===c.jK.TRANSACTION_REPLACED&&(null===e||void 0===e?void 0:e.replacement)&&("repriced"===(null===e||void 0===e?void 0:e.reason)||!1===(null===e||void 0===e?void 0:e.cancelled)))(h)){const t=0===h.receipt.status?"Fail":"Success";l({notification:{type:"Fail"===t?"transactionFailed":"transactionSucceed",submittedAt:Date.now(),transaction:h.replacement,receipt:h.receipt,transactionName:null===(f=h.replacement)||void 0===f?void 0:f.transactionName,originalTransaction:p},chainId:e}),r({status:t,transaction:h.replacement,originalTransaction:p,receipt:h.receipt,errorMessage:n,chainId:e})}else r({status:"Fail",transaction:p,receipt:h.receipt,errorMessage:n,chainId:e})}else r({status:"Exception",errorMessage:n,chainId:e});return}}),[e,r,s,n]),state:t}}function u(e,n,t){const{library:o,chainId:a}=(0,s.K)(),{promiseTransaction:c,state:u}=l(a,t),[d,f]=(0,i.useState)(void 0);return{send:(0,i.useCallback)((async(...i)=>{const s=function(e,n,t){if(e.signer)return e;if(null===n||void 0===n?void 0:n.signer)return e.connect(n.signer);if(null===t||void 0===t?void 0:t.getSigner())return e.connect(t.getSigner());throw new TypeError("No signer available in contract, options or library")}(e,t,o),a=await c(s[n](...i));if(null===a||void 0===a?void 0:a.logs){const n=a.logs.reduce(((n,t)=>{try{return(0,r.Q)(t.address,e.address)?[...n,e.interface.parseLog(t)]:n}catch(i){return n}}),[]);f(n)}}),[e,n,t,o]),state:u,events:d}}},325:function(e,n,t){"use strict";t.d(n,{j:function(){return s}});t(7294);var r=t(1213),i=t(5893);function s(e){var n=e.message;return(0,i.jsxs)(r.bZ,{status:"error",mb:"8",children:[(0,i.jsx)(r.zM,{}),(0,i.jsx)(r.Cd,{mr:2,children:"Error:"}),(0,i.jsx)(r.X,{children:n})]})}},8821:function(e,n,t){"use strict";t.d(n,{Ar:function(){return D},$0:function(){return z}});var r=t(5115),i=t(4651),s=t(5419),o=t(5193),a=t(1213),c=t(7495),l=t(6977),u=t(7809),d=t.n(u),f=t(1664),p=t(7294),h=t(2020),m=t(8360),x=t(1744),g=t(5893);function v(){var e=(0,c.K)().account,n=(0,m.M)(e),t=n?x.dF(n):"";return(0,g.jsxs)(r.xv,{children:[t," ETH"]})}var j=t(7375),b=t(4023),w=t(3929),y="7b516e5f9bca4abc8f07170d1f0a6cae",k={1:"https://mainnet.infura.io/v3/".concat(y),4:"https://rinkeby.infura.io/v3/".concat(y),42:"https://kovan.infura.io/v3/".concat(y)},O=new w.zw({rpc:{1:k[1],4:k[4],42:k[42]},qrcode:!0});function C(){var e=(0,c.K)(),n=e.activate,t=e.activateBrowserWallet,s=(0,j.qY)(),a=s.onOpen,l=s.isOpen,u=s.onClose;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.xu,{order:[-1,null,null,2],textAlign:["left",null,null,"right"],children:(0,g.jsx)(o.zx,{colorScheme:"teal",variant:"outline",onClick:a,children:"Connect to a wallet"})}),(0,g.jsxs)(b.u_,{isOpen:l,onClose:u,children:[(0,g.jsx)(b.ZA,{}),(0,g.jsxs)(b.hz,{children:[(0,g.jsx)(b.xB,{children:"Connect to a wallet"}),(0,g.jsx)(b.ol,{}),(0,g.jsxs)(b.fe,{children:[(0,g.jsx)(o.zx,{justifyContent:"space-between",width:"100%",mb:"4",size:"lg",variant:"outline",rightIcon:(0,g.jsx)(i.Ee,{maxWidth:"20px",src:"/images/logo-metamask.png",alt:"MetaMask"}),onClick:function(){t(),u()},children:"MetaMask"}),(0,g.jsx)(o.zx,{justifyContent:"space-between",width:"100%",mb:"4",size:"lg",variant:"outline",rightIcon:(0,g.jsx)(i.Ee,{maxWidth:"20px",src:"/images/logo-walletconnect.svg",alt:"WalletConnect"}),onClick:function(){n(O)},children:"WalletConnect"})]})]})]})]})}var S=t(4942),E=t(9008),P=t(1163);function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var M="https://chainlink-fullstack.demo.hack.bg/",T=function(e){var n=e.customMeta,t=(0,P.useRouter)(),r=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){(0,S.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({title:"Chainlink Demo App",description:"Full stack starter project showcasing Chainlink products on Ethereum",image:"".concat(M,"/images/chainlink-logo.png"),type:"website"},n);return(0,g.jsxs)(E.default,{children:[(0,g.jsx)("title",{children:r.title}),(0,g.jsx)("meta",{content:r.description,name:"description"}),(0,g.jsx)("meta",{property:"og:url",content:"".concat(M).concat(t.asPath)}),(0,g.jsx)("link",{rel:"canonical",href:"".concat(M).concat(t.asPath)}),(0,g.jsx)("meta",{property:"og:type",content:r.type}),(0,g.jsx)("meta",{property:"og:site_name",content:"Chainlink Demo App"}),(0,g.jsx)("meta",{property:"og:description",content:r.description}),(0,g.jsx)("meta",{property:"og:title",content:r.title}),(0,g.jsx)("meta",{property:"og:image",content:r.image}),(0,g.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,g.jsx)("meta",{name:"twitter:site",content:"@chainlink"}),(0,g.jsx)("meta",{name:"twitter:title",content:r.title}),(0,g.jsx)("meta",{name:"twitter:description",content:r.description}),(0,g.jsx)("meta",{name:"twitter:image",content:r.image})]})},F=t(325),I={transactionStarted:"Started",transactionSucceed:"Completed"};function N(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:38;return e.replace(e.substring(6,n),"...")}var D=function(e){var n,t=e.children,u=e.customMeta,m=(0,c.K)(),x=m.account,j=m.deactivate,b=m.error,w=m.setError,y=(0,l.z)().notifications;return(0,p.useEffect)((function(){b&&w(b)}),[b,w]),n=d().create({seed:x}).toDataURL(),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(T,{customMeta:u}),(0,g.jsx)("header",{children:(0,g.jsx)(r.W2,{maxWidth:"container.xl",children:(0,g.jsxs)(r.MI,{columns:[1,1,1,2],alignItems:"center",justifyContent:"space-between",py:"8",children:[(0,g.jsxs)(r.kC,{py:[4,null,null,0],children:[(0,g.jsx)(f.default,{href:"/",passHref:!0,children:(0,g.jsx)(r.rU,{px:"4",py:"1",children:"Home"})}),(0,g.jsx)(f.default,{href:"/feeds",passHref:!0,children:(0,g.jsx)(r.rU,{px:"4",py:"1",children:"Data Feeds"})}),(0,g.jsx)(f.default,{href:"/vrf",passHref:!0,children:(0,g.jsx)(r.rU,{px:"4",py:"1",children:"Randomness"})}),(0,g.jsx)(f.default,{href:"/external-api",passHref:!0,children:(0,g.jsx)(r.rU,{px:"4",py:"1",children:"External API"})})]}),x?(0,g.jsxs)(r.kC,{order:[-1,null,null,2],alignItems:"center",justifyContent:["flex-start",null,null,"flex-end"],children:[(0,g.jsx)(v,{}),(0,g.jsx)(i.Ee,{ml:"4",src:n,alt:"blockie"}),(0,g.jsxs)(s.v2,{placement:"bottom-end",children:[(0,g.jsx)(s.j2,{as:o.zx,ml:"4",children:N(x)}),(0,g.jsx)(s.qy,{children:(0,g.jsx)(s.sN,{onClick:function(){j()},children:"Disconnect"})})]})]}):(0,g.jsx)(C,{})]})})}),(0,g.jsx)("main",{children:(0,g.jsxs)(r.W2,{maxWidth:"container.xl",children:[b&&(0,g.jsx)(F.j,{message:(0,h.e$)(b)}),t,y.map((function(e){return"walletConnected"===e.type?null:(0,g.jsxs)(a.bZ,{status:"success",position:"fixed",bottom:"8",right:"8",width:"400px",children:[(0,g.jsx)(a.zM,{}),(0,g.jsxs)(r.xu,{children:[(0,g.jsxs)(a.Cd,{children:[e.transactionName," ",I[e.type]]}),(0,g.jsxs)(a.X,{overflow:"hidden",children:["Transaction Hash:"," ",N(e.transaction.hash,61)]})]})]},e.id)}))]})}),(0,g.jsx)("footer",{children:(0,g.jsx)(r.W2,{mt:"8",py:"8",maxWidth:"container.xl",children:(0,g.jsx)(r.rU,{href:"https://github.com/hackbg/chainlink-fullstack",isExternal:!0,children:(0,g.jsxs)(r.Ug,{children:[(0,g.jsx)(i.Ee,{src:"images/github.svg",width:"20px"}),(0,g.jsx)(r.xv,{children:"GitHub"})]})})})})]})};function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var z=function(e){return(0,g.jsx)(r.xu,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){(0,S.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({maxWidth:"container.sm",p:"8",mt:"8",bg:"gray.100"},e))}},3473:function(e,n,t){"use strict";t.d(n,{c:function(){return a}});var r=t(7495),i=t(4146),s=t(7294),o=t(9680);function a(e){var n=(0,r.K)().library,t=(0,o.X)(e);return(0,s.useMemo)((function(){return n&&null!==t&&void 0!==t&&t.address?new i.CH(t.address,t.abi,n.getSigner()):null}),[t,n])}},9680:function(e,n,t){"use strict";t.d(n,{X:function(){return s}});var r=t(7495),i=t(5829);function s(e){var n,t,s=(0,r.K)().chainId;return s&&i[s]&&(null===(n=Object.values(i[s]).find((function(e){return e.chainId===String(s)})))||void 0===n||null===(t=n.contracts)||void 0===t?void 0:t[e])}},2020:function(e,n,t){"use strict";t.d(n,{e$:function(){return a},Sx:function(){return c},jl:function(){return u},gC:function(){return f},Yg:function(){return p}});var r=t(2236),i=t(157),s=t(950),o=t(3929);function a(e){return e instanceof s.A5?"No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof i.Uu?"You're connected to an unsupported network. Please switch to Kovan or Rinkeby.":e instanceof s.ab||e instanceof o.ab?"Please authorize this website to access your Ethereum account.":(console.error(e),"An unknown error occurred. Check the console for more details.")}function c(e){return e.includes("The execution failed due to an exception.")?"".concat(e," Please check if the contract has enough LINK to pay the oracle."):e}var l=new r.F("Bitcoin","BTC",8,{fixedPrecisionDigits:2,useFixedPrecision:!0}),u=function(e){return l.format(e.toString())},d=new r.W6("United States Dollar","USD",8,{fixedPrecisionDigits:2}),f=function(e){return d.format(e.toString())},p=function(e){return"Mining"===e?"Mining Request":"Success"===e&&"Fulfilling Request"}},3169:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return O}});var r=t(7294),i=t(5115),s=t(1277),o=t(8821),a=t(5861),c=t(7757),l=t.n(c),u=t(5193),d=t(7495),f=t(9545),p=t(2020),h=t(3473),m=t(325),x=t(5893);function g(){var e=(0,d.K)().account,n=(0,r.useState)(""),t=n[0],s=n[1],o=(0,r.useState)(""),c=o[0],g=o[1],v=(0,h.c)("RandomNumberConsumer"),j=(0,f.j)(v,"getRandomNumber",{transactionName:"Randomness Request"}),b=j.send,w=j.state,y=j.events,k=function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:g("");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=(0,r.useCallback)((0,a.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.randomResult();case 2:n=e.sent,g(String(n));case 4:case"end":return e.stop()}}),e)}))),[v]);(0,r.useEffect)((function(){if(y){var e=y.find((function(e){return"RequestedRandomness"===e.name}));e&&s(e.args.requestId)}}),[y]),(0,r.useEffect)((function(){v&&t&&v.on("FulfilledRandomness",(function(e){t===e&&(O(),v.removeAllListeners())}))}),[v,t,O]);var C="Mining"===w.status||"Success"===w.status&&!c,S="Exception"===w.status;return(0,x.jsxs)(x.Fragment,{children:[S&&(0,x.jsx)(m.j,{message:(0,p.Sx)(w.errorMessage)}),(0,x.jsx)(u.zx,{onClick:k,isLoading:C,loadingText:(0,p.Yg)(w.status),colorScheme:"teal",disabled:C||!e,children:"Request Randomness"}),c&&(0,x.jsxs)(i.Kq,{spacing:2,mt:4,children:[(0,x.jsx)(i.xv,{fontSize:"xl",children:"Result"}),(0,x.jsx)(i.EK,{size:"xs",colorScheme:"red",children:c})]})]})}var v=t(7398),j=t(4651),b=t(9680),w=t(6313);function y(e){var n=e.tokenId,t=(0,d.K)().chainId,r=(0,b.X)("RandomSVG"),o=t===w.dC,a=o?"".concat(w.v1,"/assets/").concat(r.address,"/").concat(n):void 0;return(0,x.jsxs)(i.Ug,{children:[(0,x.jsxs)(i.rU,{href:a,isExternal:!0,children:["See on OpenSea Testnet Marketplace ",(0,x.jsx)(s.h0,{mx:"2px"})]}),!o&&(0,x.jsx)(i.Ct,{children:"Rinkeby Only"})]})}function k(){var e=(0,d.K)().account,n=(0,r.useState)(!1),t=n[0],s=n[1],o=(0,r.useState)(!1),c=o[0],g=o[1],b=(0,r.useState)(),w=b[0],k=b[1],O=(0,r.useState)(),C=O[0],S=O[1],E=(0,h.c)("RandomSVG"),P=(0,f.j)(E,"create",{transactionName:"NFT Request"}),R=P.send,M=P.state,T=P.events,F=(0,f.j)(E,"finishMint",{transactionName:"NFT Mint Finish"}),I=F.send,N=F.state,D=F.events,_=function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:k(void 0),g(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=(0,r.useCallback)((0,a.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.tokenURI(w);case 2:return n=e.sent,e.abrupt("return",(t=n,JSON.parse(atob(t.split(",")[1]))));case 4:case"end":return e.stop()}var t}),e)}))),[E,w]);(0,r.useEffect)((function(){if(T){var e=T.find((function(e){return"requestedRandomSVG"===e.name}));e&&k(e.args.tokenId)}}),[T]),(0,r.useEffect)((function(){E&&w&&E.on("CreatedUnfinishedRandomSVG",(function(e){w.eq(e)&&(g(!0),s(!0),E.removeAllListeners())}))}),[E,w]),(0,r.useEffect)((function(){D&&D.find((function(e){return"CreatedRandomSVG"===e.name}))&&z().then((function(e){S(e),s(!1)}))}),[D,z]);var A="Mining"===M.status||"Success"===M.status&&!c,q="Mining"===N.status||"Success"===N.status&&!C,U="Exception"===M.status||"Exception"===N.status,W=M.errorMessage||N.errorMessage;return(0,x.jsxs)(x.Fragment,{children:[U&&(0,x.jsx)(m.j,{message:(0,p.Sx)(W)}),!t&&(0,x.jsx)(v.u,{label:"Request random number and mint new NFT associated with the result",placement:"right-start",fontSize:"xs",hasArrow:!0,children:(0,x.jsx)(u.zx,{onClick:_,isLoading:A,loadingText:(0,p.Yg)(M.status),colorScheme:"teal",disabled:A||!e,children:C?"Request New NFT":"Request NFT"})}),t&&(0,x.jsx)(v.u,{label:"Use the random number from first step to generate unique SVG and store it as on-chain NFT metadata",placement:"right-start",fontSize:"xs",defaultIsOpen:!0,hasArrow:!0,children:(0,x.jsx)(u.zx,{onClick:function(){return I(w)},isLoading:q,loadingText:"Finishing Minting",colorScheme:"teal",disabled:q||!e,children:"Finish Minting"})}),C&&(0,x.jsxs)(i.Kq,{spacing:2,mt:4,children:[(0,x.jsx)(i.xv,{fontSize:"xl",children:"Result"}),(0,x.jsx)(j.Ee,{src:C.image,alt:"Random SVG",boxSize:"360px",backgroundColor:"white",borderRadius:"lg",mt:"8"}),(0,x.jsx)(y,{tokenId:w})]})]})}var O=function(){return(0,x.jsxs)(o.Ar,{children:[(0,x.jsx)(i.X6,{as:"h1",mb:"4",children:"Randomness"}),(0,x.jsx)(i.xv,{fontSize:"xl",children:"Use VRF (Verifiable Random Function) to consume randomness in your smart contracts."}),(0,x.jsxs)(o.$0,{children:[(0,x.jsx)(g,{}),(0,x.jsx)(i.xv,{my:"4",children:"With every new request for randomness, Chainlink VRF generates a random number and cryptographic proof of how that number was determined. VRF enables smart contracts to access randomness without compromising on security or usability."}),(0,x.jsxs)(i.rU,{href:"https://docs.chain.link/docs/get-a-random-number",isExternal:!0,children:["Learn More ",(0,x.jsx)(s.h0,{mx:"2px"})]})]}),(0,x.jsxs)(o.$0,{children:[(0,x.jsx)(k,{}),(0,x.jsx)(i.xv,{my:"4",children:"100% on-chain generated NFT using VRF as randomness source. Each request creates and stores an unique Scalable Vector Graphic (SVG)."}),(0,x.jsxs)(i.rU,{href:"https://chain.link/education/nfts",isExternal:!0,children:["Learn More ",(0,x.jsx)(s.h0,{mx:"2px"})]})]})]})}},5633:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vrf",function(){return t(3169)}])},5861:function(e,n,t){"use strict";function r(e,n,t,r,i,s,o){try{var a=e[s](o),c=a.value}catch(l){return void t(l)}a.done?n(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,s){var o=e.apply(n,t);function a(e){r(o,i,s,a,c,"next",e)}function c(e){r(o,i,s,a,c,"throw",e)}a(void 0)}))}}t.d(n,{Z:function(){return i}})}},function(e){e.O(0,[593,774,888,179],(function(){return n=5633,e(e.s=n);var n}));var n=e.O();_N_E=n}]);