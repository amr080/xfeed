(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{74083:function(e,t,n){"use strict";n.d(t,{j:function(){return s}});var r=n(85893),i=(n(67294),n(27302));function s(e){var t=e.message;return(0,r.jsxs)(i.bZ,{status:"error",mb:"8",children:[(0,r.jsx)(i.zM,{}),(0,r.jsx)(i.Cd,{mr:2,children:"Error:"}),(0,r.jsx)(i.X,{children:t})]})}},124:function(e,t,n){"use strict";n.d(t,{F:function(){return l}});var r=n(85893),i=n(96156),s=n(9008),c=n(11163);n(67294);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var a="https://nextjs-ethereum-starter.vercel.app/",l=function(e){var t=e.customMeta,n=(0,c.useRouter)(),l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({title:"Next.js Ethereum Starter",description:"Ethers.js - Hardhat - Next.js - Typescript",image:"".concat(a,"/images/site-preview.png"),type:"website"},t);return(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:l.title}),(0,r.jsx)("meta",{content:l.description,name:"description"}),(0,r.jsx)("meta",{property:"og:url",content:"".concat(a).concat(n.asPath)}),(0,r.jsx)("link",{rel:"canonical",href:"".concat(a).concat(n.asPath)}),(0,r.jsx)("meta",{property:"og:type",content:l.type}),(0,r.jsx)("meta",{property:"og:site_name",content:"Next.js Ethereum Starter"}),(0,r.jsx)("meta",{property:"og:description",content:l.description}),(0,r.jsx)("meta",{property:"og:title",content:l.title}),(0,r.jsx)("meta",{property:"og:image",content:l.image}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@hackbg"}),(0,r.jsx)("meta",{name:"twitter:title",content:l.title}),(0,r.jsx)("meta",{name:"twitter:description",content:l.description}),(0,r.jsx)("meta",{name:"twitter:image",content:l.image})]})}},82356:function(e,t,n){"use strict";n.d(t,{A:function(){return N}});var r=n(85893),i=n(53850),s=n(43663),c=n(94096),o=n(49444),a=n(78482),l=n(9237),u=n(56185),d=n(27302),x=n(48017),h=n(57495),f=n(62436),j=n(67809),p=n.n(j),m=n(35063),g=n(67294),b=n(99056),w=n(64115),v=n(74696),y=n(588);function k(){var e=(0,h.K)().account,t=(0,v.M)(e),n=t?y.dF(t):"";return(0,r.jsxs)(w.x,{children:[n," ETH"]})}var C=n(74860),O=n(44201),E="https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",P="https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213",_=new(n(83929).zw)({rpc:{1:E,4:P},qrcode:!0,pollingInterval:12e3});function M(){var e=(0,h.K)(),t=e.activate,n=e.activateBrowserWallet,i=(0,C.q)(),s=i.onOpen,c=i.isOpen,o=i.onClose;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.xu,{order:[-1,null,null,2],textAlign:["left",null,null,"right"],children:(0,r.jsx)(u.z,{colorScheme:"teal",variant:"outline",onClick:s,children:"Connect to a wallet"})}),(0,r.jsxs)(O.u_,{isOpen:c,onClose:o,children:[(0,r.jsx)(O.ZA,{}),(0,r.jsxs)(O.hz,{children:[(0,r.jsx)(O.xB,{children:"Connect to a wallet"}),(0,r.jsx)(O.ol,{}),(0,r.jsxs)(O.fe,{children:[(0,r.jsx)(u.z,{justifyContent:"space-between",width:"100%",mb:"4",size:"lg",variant:"outline",rightIcon:(0,r.jsx)(a.E,{maxWidth:"20px",src:"/images/logo-metamask.png",alt:"MetaMask"}),onClick:function(){n(),o()},children:"MetaMask"}),(0,r.jsx)(u.z,{justifyContent:"space-between",width:"100%",mb:"4",size:"lg",variant:"outline",rightIcon:(0,r.jsx)(a.E,{maxWidth:"20px",src:"/images/logo-walletconnect.svg",alt:"WalletConnect"}),onClick:function(){t(_)},children:"WalletConnect"})]})]})]})]})}var S=n(124),z=n(74083),W={transactionStarted:"Started",transactionSucceed:"Completed"};function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:38;return e.replace(e.substring(6,t),"...")}var N=function(e){var t,n=e.children,j=e.customMeta,w=(0,h.K)(),v=w.account,y=w.deactivate,C=w.error,O=w.setError,E=(0,f.z)().notifications;return(0,g.useEffect)((function(){C&&O(C)}),[C,O]),t=p().create({seed:v}).toDataURL(),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(S.F,{customMeta:j}),(0,r.jsx)("header",{children:(0,r.jsx)(i.W,{maxWidth:"container.xl",children:(0,r.jsxs)(s.M,{columns:[1,1,1,2],alignItems:"center",justifyContent:"space-between",py:"8",children:[(0,r.jsxs)(c.k,{py:[4,null,null,0],children:[(0,r.jsx)(m.default,{href:"/",passHref:!0,children:(0,r.jsx)(o.r,{px:"4",py:"1",children:"Home"})}),(0,r.jsx)(m.default,{href:"/feeds",passHref:!0,children:(0,r.jsx)(o.r,{px:"4",py:"1",children:"Data Feeds"})}),(0,r.jsx)(m.default,{href:"/vrf",passHref:!0,children:(0,r.jsx)(o.r,{px:"4",py:"1",children:"Randomness"})}),(0,r.jsx)(m.default,{href:"/external-api",passHref:!0,children:(0,r.jsx)(o.r,{px:"4",py:"1",children:"External API"})})]}),v?(0,r.jsxs)(c.k,{order:[-1,null,null,2],alignItems:"center",justifyContent:["flex-start",null,null,"flex-end"],children:[(0,r.jsx)(k,{}),(0,r.jsx)(a.E,{ml:"4",src:t,alt:"blockie"}),(0,r.jsxs)(l.v2,{placement:"bottom-end",children:[(0,r.jsx)(l.j2,{as:u.z,ml:"4",children:D(v)}),(0,r.jsx)(l.qy,{children:(0,r.jsx)(l.sN,{onClick:function(){y()},children:"Disconnect"})})]})]}):(0,r.jsx)(M,{})]})})}),(0,r.jsx)("main",{children:(0,r.jsxs)(i.W,{maxWidth:"container.xl",children:[C&&(0,r.jsx)(z.j,{message:(0,b.e$)(C)}),n,E.map((function(e){return"walletConnected"===e.type?null:(0,r.jsxs)(d.bZ,{status:"success",position:"fixed",bottom:"8",right:"8",width:"400px",children:[(0,r.jsx)(d.zM,{}),(0,r.jsxs)(x.xu,{children:[(0,r.jsxs)(d.Cd,{children:[e.transactionName," ",W[e.type]]}),(0,r.jsxs)(d.X,{overflow:"hidden",children:["Transaction Hash:"," ",D(e.transaction.hash,61)]})]})]},e.id)}))]})}),(0,r.jsx)("footer",{children:(0,r.jsx)(i.W,{mt:"8",py:"8",maxWidth:"container.xl",children:(0,r.jsx)(o.r,{href:"https://github.com/hackbg",children:"GitHub"})})})]})}},99056:function(e,t,n){"use strict";n.d(t,{e$:function(){return o},jl:function(){return l},gC:function(){return d},Yg:function(){return x}});var r=n(93315),i=n(27391),s=n(30950),c=n(83929);function o(e){return e instanceof s.A5?"No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof i.Uu?"You're connected to an unsupported network. Please switch to Kovan or Rinkeby.":e instanceof s.ab||e instanceof c.ab?"Please authorize this website to access your Ethereum account.":(console.error(e),"An unknown error occurred. Check the console for more details.")}var a=new r.F("Bitcoin","BTC",8,{fixedPrecisionDigits:2,useFixedPrecision:!0}),l=function(e){return a.format(e.toString())},u=new r.W6("United States Dollar","USD",8,{fixedPrecisionDigits:2}),d=function(e){return u.format(e.toString())},x=function(e){return"Mining"===e?"Mining Request":"Success"===e&&"Fulfilling Request"}},12562:function(e,t,n){"use strict";n.r(t);var r=n(85893),i=n(82356);t.default=function(){return(0,r.jsx)(i.A,{})}},45301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(12562)}])}},function(e){e.O(0,[774,27,888,179],(function(){return t=45301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);