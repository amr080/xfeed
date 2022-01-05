(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{325:function(e,t,n){"use strict";n.d(t,{j:function(){return s}});n(7294);var r=n(1213),i=n(5893);function s(e){var t=e.message;return(0,i.jsxs)(r.bZ,{status:"error",mb:"8",children:[(0,i.jsx)(r.zM,{}),(0,i.jsx)(r.Cd,{mr:2,children:"Error:"}),(0,i.jsx)(r.X,{children:t})]})}},9881:function(e,t,n){"use strict";n.d(t,{F:function(){return l}});var r=n(4942),i=n(9008),s=n(1163),c=(n(7294),n(5893));function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var a="https://nextjs-ethereum-starter.vercel.app/",l=function(e){var t=e.customMeta,n=(0,s.useRouter)(),l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({title:"Next.js Ethereum Starter",description:"Ethers.js - Hardhat - Next.js - Typescript",image:"".concat(a,"/images/site-preview.png"),type:"website"},t);return(0,c.jsxs)(i.default,{children:[(0,c.jsx)("title",{children:l.title}),(0,c.jsx)("meta",{content:l.description,name:"description"}),(0,c.jsx)("meta",{property:"og:url",content:"".concat(a).concat(n.asPath)}),(0,c.jsx)("link",{rel:"canonical",href:"".concat(a).concat(n.asPath)}),(0,c.jsx)("meta",{property:"og:type",content:l.type}),(0,c.jsx)("meta",{property:"og:site_name",content:"Next.js Ethereum Starter"}),(0,c.jsx)("meta",{property:"og:description",content:l.description}),(0,c.jsx)("meta",{property:"og:title",content:l.title}),(0,c.jsx)("meta",{property:"og:image",content:l.image}),(0,c.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,c.jsx)("meta",{name:"twitter:site",content:"@hackbg"}),(0,c.jsx)("meta",{name:"twitter:title",content:l.title}),(0,c.jsx)("meta",{name:"twitter:description",content:l.description}),(0,c.jsx)("meta",{name:"twitter:image",content:l.image})]})}},8305:function(e,t,n){"use strict";n.d(t,{A:function(){return M}});var r=n(5115),i=n(4651),s=n(5419),c=n(5193),o=n(1213),a=n(7495),l=n(6977),u=n(7809),d=n.n(u),x=n(1664),h=n(7294),f=n(2020),j=n(8360),p=n(5553),m=n(5893);function g(){var e=(0,a.K)().account,t=(0,j.M)(e),n=t?p.dF(t):"";return(0,m.jsxs)(r.xv,{children:[n," ETH"]})}var b=n(7375),w=n(4023),v="https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",y="https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213",k=new(n(3929).zw)({rpc:{1:v,4:y},qrcode:!0});function C(){var e=(0,a.K)(),t=e.activate,n=e.activateBrowserWallet,s=(0,b.qY)(),o=s.onOpen,l=s.isOpen,u=s.onClose;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.xu,{order:[-1,null,null,2],textAlign:["left",null,null,"right"],children:(0,m.jsx)(c.zx,{colorScheme:"teal",variant:"outline",onClick:o,children:"Connect to a wallet"})}),(0,m.jsxs)(w.u_,{isOpen:l,onClose:u,children:[(0,m.jsx)(w.ZA,{}),(0,m.jsxs)(w.hz,{children:[(0,m.jsx)(w.xB,{children:"Connect to a wallet"}),(0,m.jsx)(w.ol,{}),(0,m.jsxs)(w.fe,{children:[(0,m.jsx)(c.zx,{justifyContent:"space-between",width:"100%",mb:"4",size:"lg",variant:"outline",rightIcon:(0,m.jsx)(i.Ee,{maxWidth:"20px",src:"/images/logo-metamask.png",alt:"MetaMask"}),onClick:function(){n(),u()},children:"MetaMask"}),(0,m.jsx)(c.zx,{justifyContent:"space-between",width:"100%",mb:"4",size:"lg",variant:"outline",rightIcon:(0,m.jsx)(i.Ee,{maxWidth:"20px",src:"/images/logo-walletconnect.svg",alt:"WalletConnect"}),onClick:function(){t(k)},children:"WalletConnect"})]})]})]})]})}var O=n(9881),E=n(325),P={transactionStarted:"Started",transactionSucceed:"Completed"};function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:38;return e.replace(e.substring(6,t),"...")}var M=function(e){var t,n=e.children,u=e.customMeta,j=(0,a.K)(),p=j.account,b=j.deactivate,w=j.error,v=j.setError,y=(0,l.z)().notifications;return(0,h.useEffect)((function(){w&&v(w)}),[w,v]),t=d().create({seed:p}).toDataURL(),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(O.F,{customMeta:u}),(0,m.jsx)("header",{children:(0,m.jsx)(r.W2,{maxWidth:"container.xl",children:(0,m.jsxs)(r.MI,{columns:[1,1,1,2],alignItems:"center",justifyContent:"space-between",py:"8",children:[(0,m.jsxs)(r.kC,{py:[4,null,null,0],children:[(0,m.jsx)(x.default,{href:"/",passHref:!0,children:(0,m.jsx)(r.rU,{px:"4",py:"1",children:"Home"})}),(0,m.jsx)(x.default,{href:"/feeds",passHref:!0,children:(0,m.jsx)(r.rU,{px:"4",py:"1",children:"Data Feeds"})}),(0,m.jsx)(x.default,{href:"/vrf",passHref:!0,children:(0,m.jsx)(r.rU,{px:"4",py:"1",children:"Randomness"})}),(0,m.jsx)(x.default,{href:"/external-api",passHref:!0,children:(0,m.jsx)(r.rU,{px:"4",py:"1",children:"External API"})})]}),p?(0,m.jsxs)(r.kC,{order:[-1,null,null,2],alignItems:"center",justifyContent:["flex-start",null,null,"flex-end"],children:[(0,m.jsx)(g,{}),(0,m.jsx)(i.Ee,{ml:"4",src:t,alt:"blockie"}),(0,m.jsxs)(s.v2,{placement:"bottom-end",children:[(0,m.jsx)(s.j2,{as:c.zx,ml:"4",children:_(p)}),(0,m.jsx)(s.qy,{children:(0,m.jsx)(s.sN,{onClick:function(){b()},children:"Disconnect"})})]})]}):(0,m.jsx)(C,{})]})})}),(0,m.jsx)("main",{children:(0,m.jsxs)(r.W2,{maxWidth:"container.xl",children:[w&&(0,m.jsx)(E.j,{message:(0,f.e$)(w)}),n,y.map((function(e){return"walletConnected"===e.type?null:(0,m.jsxs)(o.bZ,{status:"success",position:"fixed",bottom:"8",right:"8",width:"400px",children:[(0,m.jsx)(o.zM,{}),(0,m.jsxs)(r.xu,{children:[(0,m.jsxs)(o.Cd,{children:[e.transactionName," ",P[e.type]]}),(0,m.jsxs)(o.X,{overflow:"hidden",children:["Transaction Hash:"," ",_(e.transaction.hash,61)]})]})]},e.id)}))]})}),(0,m.jsx)("footer",{children:(0,m.jsx)(r.W2,{mt:"8",py:"8",maxWidth:"container.xl",children:(0,m.jsx)(r.rU,{href:"https://github.com/hackbg",children:"GitHub"})})})]})}},2020:function(e,t,n){"use strict";n.d(t,{e$:function(){return o},jl:function(){return l},gC:function(){return d},Yg:function(){return x}});var r=n(2236),i=n(157),s=n(950),c=n(3929);function o(e){return e instanceof s.A5?"No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof i.Uu?"You're connected to an unsupported network. Please switch to Kovan or Rinkeby.":e instanceof s.ab||e instanceof c.ab?"Please authorize this website to access your Ethereum account.":(console.error(e),"An unknown error occurred. Check the console for more details.")}var a=new r.F("Bitcoin","BTC",8,{fixedPrecisionDigits:2,useFixedPrecision:!0}),l=function(e){return a.format(e.toString())},u=new r.W6("United States Dollar","USD",8,{fixedPrecisionDigits:2}),d=function(e){return u.format(e.toString())},x=function(e){return"Mining"===e?"Mining Request":"Success"===e&&"Fulfilling Request"}},2119:function(e,t,n){"use strict";n.r(t);var r=n(8305),i=n(5893);t.default=function(){return(0,i.jsx)(r.A,{})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2119)}])}},function(e){e.O(0,[634,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);