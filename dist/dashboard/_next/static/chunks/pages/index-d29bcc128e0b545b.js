(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(48354)}])},48354:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Home}});var a,s,r=t(85893),i=t(9008),l=t.n(i),o=t(25675),d=t.n(o),c={src:"/_next/static/media/logo-nodes.249ea9ed.svg",height:283,width:425,blurWidth:0,blurHeight:0},u=t(30378),h=t.n(u),x=t(89192),Navigation=()=>(0,r.jsxs)("div",{className:h().navbarParent,children:[(0,r.jsx)("div",{className:h().logoWrapper,children:(0,r.jsx)(d(),{src:c,alt:"Ocean Node Logo",height:70})}),(0,r.jsx)("div",{className:h().connectButtonWrapper,children:(0,r.jsx)(x.NL,{})})]}),j=t(94428),m=t.n(j),components_Footer=()=>{let e=new Date().getFullYear();return(0,r.jsxs)("div",{className:m().footerContainer,children:[(0,r.jsxs)("p",{children:["@ ",e,", Ocean Nodes"]}),(0,r.jsxs)("div",{className:m().footerLinks,children:[(0,r.jsx)("a",{href:"https://oceanprotocol.com/",target:"_blank",children:"Website"}),(0,r.jsx)("a",{href:"https://github.com/oceanprotocol/ocean-node",target:"_blank",children:"GitHub"}),(0,r.jsx)("a",{href:"https://discord.com/invite/TnXjkR5",target:"_blank",children:"Discord"})]})]})},v=t(67294),p=t(93967),b=t.n(p),_=t(11706),f=t.n(_);let truncateString=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;if(e){let t=e.slice(0,2+n),a=e.slice(-n);return"".concat(t,"....").concat(a)}return e};var g=t(59581),N=t(46085),y=t.n(N),S=t(69417),C=t(94054),I=t(50135),w=t(33841),T=t(30638),D=t(23599),k=t(10586),Z=t(50720),E=t(56372),A=t(27484),P=t.n(A),O={src:"/_next/static/media/download.0a4876ec.svg",height:30,width:30,blurWidth:0,blurHeight:0};function DownloadButton(){let[e,n]=(0,v.useState)(!1),[t,a]=(0,v.useState)(!1),[s,i]=(0,v.useState)(P()()),[l,o]=(0,v.useState)(P()()),[c,u]=(0,v.useState)(""),[h,x]=(0,v.useState)(""),[j,m]=(0,v.useState)(""),{signature:p,expiryTimestamp:b}=(0,g.O)(),_=(0,v.useCallback)(async()=>{let e=s?"&startTime=".concat(s.toISOString()):"",n=l?"&endTime=".concat(l.toISOString()):"",t=c?"&maxLogs=".concat(c):"",r=h&&"all"!==h?"&moduleName=".concat(h):"",i=j&&"all"!==j?'&level="'.concat(j,'"'):"";a(!0);try{if(!b||!p){console.error("Missing expiryTimestamp or signature");return}let s=await fetch("/logs?".concat(e).concat(n).concat(t).concat(r).concat(i),{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({expiryTimestamp:b,signature:p})}),l=await s.json();if(l){let e="data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(l)),n=document.createElement("a");n.setAttribute("href",e),n.setAttribute("download","LogsData.json"),document.body.appendChild(n),n.click(),n.remove()}a(!1)}catch(e){console.error(e),a(!1)}},[s,l,c,h,j]);return(0,r.jsxs)("div",{className:y().column,children:[(0,r.jsx)(S.Z,{type:"button",onClick:()=>n(!e),children:"Download Logs"}),e&&(0,r.jsxs)("div",{className:y().filters,children:[(0,r.jsxs)(Z._,{dateAdapter:k.y,children:[(0,r.jsx)(C.Z,{fullWidth:!0,margin:"normal",children:(0,r.jsx)(E.x,{label:"Start Date",value:s,onChange:e=>i(e)})}),(0,r.jsx)(C.Z,{fullWidth:!0,margin:"normal",children:(0,r.jsx)(E.x,{label:"End Date",value:l,onChange:e=>o(e)})})]}),(0,r.jsx)(I.Z,{label:"Max Logs",type:"number",value:c,onChange:e=>u(e.target.value),fullWidth:!0,margin:"normal",variant:"outlined"}),(0,r.jsxs)(C.Z,{fullWidth:!0,margin:"normal",children:[(0,r.jsx)(w.Z,{id:"select-module-name-label",children:"Module Name"}),(0,r.jsxs)(T.Z,{labelId:"select-module-name-label",label:"Module Name",id:"module-name",value:h,onChange:e=>x(e.target.value),children:[(0,r.jsx)(D.Z,{value:"all",children:"all"}),(0,r.jsx)(D.Z,{value:"http",children:"http"}),(0,r.jsx)(D.Z,{value:"p2p",children:"p2p"}),(0,r.jsx)(D.Z,{value:"indexer",children:"indexer"}),(0,r.jsx)(D.Z,{value:"reindexer",children:"reindexer"}),(0,r.jsx)(D.Z,{value:"provider",children:"provider"}),(0,r.jsx)(D.Z,{value:"database",children:"database"}),(0,r.jsx)(D.Z,{value:"config",children:"config"}),(0,r.jsx)(D.Z,{value:"core",children:"core"}),(0,r.jsx)(D.Z,{value:"OceanNode",children:"OceanNode"})]})]}),(0,r.jsxs)(C.Z,{fullWidth:!0,margin:"normal",children:[(0,r.jsx)(w.Z,{id:"select-level-label",children:"Level"}),(0,r.jsxs)(T.Z,{labelId:"select-level-label",label:"Level",id:"level",value:j,onChange:e=>m(e.target.value),children:[(0,r.jsx)(D.Z,{value:"all",children:"all"}),(0,r.jsx)(D.Z,{value:"error",children:"error"}),(0,r.jsx)(D.Z,{value:"warn",children:"warn"}),(0,r.jsx)(D.Z,{value:"info",children:"info"}),(0,r.jsx)(D.Z,{value:"http",children:"http"}),(0,r.jsx)(D.Z,{value:"verbose",children:"verbose"}),(0,r.jsx)(D.Z,{value:"debug",children:"debug"}),(0,r.jsx)(D.Z,{value:"silly",children:"silly"})]})]}),(0,r.jsx)(S.Z,{type:"button",onClick:_,variant:"outlined",startIcon:(0,r.jsx)(d(),{src:O,alt:"download button",width:24,height:24}),disabled:t,children:"Download"})]})]})}function StopNode(){let[e,n]=(0,v.useState)(!1),{signature:t,expiryTimestamp:a}=(0,g.O)();async function stopNode(){n(!0);try{a&&t&&await fetch("/directCommand",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({command:"stopNode",expiryTimestamp:a,signature:t})}),alert("The node has been stopped. The dashboard will no longer be displayed."),window.location.reload()}catch(e){console.error("error",e)}finally{n(!1)}}return(0,r.jsx)(S.Z,{onClick:stopNode,variant:"outlined",color:"error",children:e?(0,r.jsx)(()=>(0,r.jsx)("span",{className:y().loader}),{}):(0,r.jsx)("div",{children:"Stop Node"})})}var R=t(92321),W=t(31536);function NetworkSelector(e){let{chainId:n,setChainId:t}=e,{networks:a}=(0,g.O)();return(0,r.jsxs)(C.Z,{fullWidth:!0,margin:"normal",variant:"outlined",children:[(0,r.jsx)(w.Z,{id:"network-select-label",children:"Network"}),(0,r.jsx)(T.Z,{labelId:"network-select-label",id:"network-select",value:n||"",onChange:e=>t(e.target.value),label:"Network",children:Object.values(a).map(e=>(0,r.jsx)(D.Z,{value:e.chainId.toString(),children:e.network},e.chainId))})]})}(a=s||(s={})).DELIVERED="DELIVERED",a.PENDING="PENDING",a.FAILURE="FAILURE",a.SUCCESS="SUCCESS";let checkJobPool=async function(e){try{let n=await fetch("/api/services/jobs/"+(e||""),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"GET"}),t=await n.json();return t.jobs}catch(e){console.error(e)}return[]};function getSeverityFromStatus(e){switch(e){case s.DELIVERED:return"info";case s.SUCCESS:return"success";case s.PENDING:return"warning";default:return"error"}}function isJobDone(e){return[s.SUCCESS,s.FAILURE].includes(e)}var L=t(8434);function JobStatusPanel(e){console.log("PROPS: ",e);let n=e.job?function(e){switch(e){case s.DELIVERED:return"DodgerBlue";case s.PENDING:return"LightSlateGrey";case s.SUCCESS:return"ForestGreen";case s.FAILURE:return"OrangeRed";default:return"black"}}(e.job.status):"black";return(0,r.jsx)("div",{children:null!==e.job&&(0,r.jsxs)(L.Z,{sx:{bgcolor:n},variant:"filled",severity:e.severity,onClose:()=>{},children:["Job with id ",(0,r.jsx)("strong",{children:e.job.jobId})," has status"," ",(0,r.jsx)("strong",{children:e.job.status})]})})}var F=t(602);function ReIndexChain(){let[e,n]=(0,v.useState)(!1),[t,a]=(0,v.useState)(!1),[i,l]=(0,v.useState)(),{signature:o,expiryTimestamp:d}=(0,g.O)(),[c,u]=(0,v.useState)("info"),[h,x]=(0,v.useState)(null),j=null;async function reIndex(){a(!0);try{if(d&&o&&i){let e=await fetch("/directCommand",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({command:"reindexChain",chainId:i,expiryTimestamp:d,signature:o})});if(200===e.status){let t=await e.json();u(t.status===s.DELIVERED?"info":"error"),x(t),alert("Chain with ID ".concat(i," is now being reindexed."));let a=!1;j=setInterval(async()=>{let e=await checkJobPool(t.jobId);if(1===e.length){let n=e[0];u(getSeverityFromStatus(n.status)),a=isJobDone(n.status),x(n)}else x(null)},3e3),a&&j&&(0,F.clearInterval)(j),n(!1)}else alert("Error reindexing chain. Please try again.")}}catch(e){console.error("error",e)}finally{a(!1)}}return(0,r.jsxs)("div",{className:y().column,children:[(0,r.jsx)(S.Z,{type:"button",onClick:()=>n(!e),children:"ReIndex Chain"}),e&&(0,r.jsxs)("div",{className:y().filters,children:[(0,r.jsx)(NetworkSelector,{chainId:i,setChainId:l}),(0,r.jsx)(S.Z,{type:"button",onClick:reIndex,variant:"outlined",disabled:t,children:"ReIndex Chain"})]}),(0,r.jsx)(JobStatusPanel,{job:h,severity:c})]})}function ReIndexTransaction(){let[e,n]=(0,v.useState)(!1),[t,a]=(0,v.useState)(!1),[i,l]=(0,v.useState)(),[o,d]=(0,v.useState)(),{signature:c,expiryTimestamp:u}=(0,g.O)(),[h,x]=(0,v.useState)("info"),[j,m]=(0,v.useState)(null),p=null;async function reIndexTx(){a(!0);try{if(u&&c&&i&&o){let e=await fetch("/directCommand",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({command:"reindexTx",chainId:i,txId:o,expiryTimestamp:u,signature:c})});if(200===e.status){let t=await e.json();x(t.status===s.DELIVERED?"info":"error"),m(t),alert("Transaction with TX ID ".concat(o," on chain ").concat(i," is now being reindexed."));let a=!1;p=setInterval(async()=>{let e=await checkJobPool(t.jobId);if(1===e.length){let n=e[0];x(getSeverityFromStatus(n.status)),a=isJobDone(n.status),m(n)}else m(null)},3e3),a&&p&&clearInterval(p),n(!1)}else alert("Error reindexing transaction. Please try again.")}}catch(e){console.error("error",e)}finally{a(!1)}}return(0,r.jsxs)("div",{className:y().column,children:[(0,r.jsx)(S.Z,{type:"button",onClick:()=>n(!e),children:"ReIndex Transaction"}),e&&(0,r.jsxs)("div",{className:y().filters,children:[(0,r.jsx)(NetworkSelector,{chainId:i,setChainId:l}),(0,r.jsx)(I.Z,{label:"Transaction ID",value:o,onChange:e=>d(e.target.value),fullWidth:!0,margin:"normal",variant:"outlined"}),(0,r.jsx)(S.Z,{type:"button",onClick:reIndexTx,variant:"outlined",disabled:t,children:"ReIndex Transaction"})]}),(0,r.jsx)(JobStatusPanel,{job:j,severity:h})]})}var B=t(58703),J=t(64666),U=t(37645),G=t(6514),H=t(58951),Q=t(31425);function TransferFees(){let[e,n]=(0,v.useState)(!1),[t,a]=(0,v.useState)(!1),[s,i]=(0,v.useState)(""),[l,o]=(0,v.useState)(""),[d,c]=(0,v.useState)(""),[u,h]=(0,v.useState)(""),{signature:x,expiryTimestamp:j}=(0,g.O)(),[m,p]=(0,v.useState)(null),[b,_]=(0,v.useState)(!1),[f,N]=(0,v.useState)(!1),[C,w]=(0,v.useState)(null),[T,D]=(0,v.useState)(null),validateInputs=()=>s&&l&&d&&u?isNaN(Number(d))?(p("Token amount must be a number."),!1):(p(null),!0):(p("All fields are required."),!1);async function transferFees(){if(validateInputs()){a(!0);try{let e=await fetch("/directCommand",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({command:"collectFees",chainId:s,tokenAddress:l,tokenAmount:d,destinationAddress:u,expiryTimestamp:j,signature:x})});if(200===e.status){let t=await e.json();(null==t?void 0:t.tx)&&(null==t?void 0:t.message)&&(D(t.tx),w(t.message),N(!0),_(!0),n(!1))}else p("Error transferring fees. Please try again.")}catch(e){console.error("error",e),p("Error transferring fees. Please try again.")}finally{a(!1)}}}let handleDialogClose=()=>{N(!1)};return(0,r.jsxs)("div",{className:y().column,children:[(0,r.jsx)(S.Z,{variant:"text",onClick:()=>n(!e),children:"Transfer Fees"}),e&&(0,r.jsxs)("div",{className:y().filters,children:[(0,r.jsx)(I.Z,{label:"Chain ID",value:s,onChange:e=>i(e.target.value),fullWidth:!0,margin:"normal",variant:"outlined",type:"number"}),(0,r.jsx)(I.Z,{label:"Token Address",value:l,onChange:e=>o(e.target.value),fullWidth:!0,margin:"normal",variant:"outlined"}),(0,r.jsx)(I.Z,{label:"Token Amount",value:d,onChange:e=>c(e.target.value),fullWidth:!0,margin:"normal",variant:"outlined",type:"number"}),(0,r.jsx)(I.Z,{label:"Destination Address",value:u,onChange:e=>h(e.target.value),fullWidth:!0,margin:"normal",variant:"outlined"}),m&&(0,r.jsx)(L.Z,{severity:"error",children:m}),(0,r.jsx)(S.Z,{type:"button",onClick:transferFees,variant:"outlined",disabled:t,fullWidth:!0,children:"Transfer Fees"})]}),(0,r.jsx)(B.Z,{open:b,autoHideDuration:6e3,onClose:()=>_(!1),message:"Fees successfully transferred!"}),(0,r.jsxs)(J.Z,{open:f,onClose:handleDialogClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,r.jsx)(U.Z,{id:"alert-dialog-title",children:"Transfer Successful"}),(0,r.jsx)(G.Z,{children:(0,r.jsx)(H.Z,{id:"alert-dialog-description",children:C&&(0,r.jsxs)("span",{children:[C," ",(0,r.jsx)("br",{}),(0,r.jsx)("strong",{style:{marginTop:"10px",display:"block"},children:"Transaction Hash:"})," ",T]})})}),(0,r.jsx)(Q.Z,{children:(0,r.jsx)(S.Z,{onClick:handleDialogClose,autoFocus:!0,children:"Close"})})]})]})}function AdminActions(){let{generateSignature:e,signature:n,validTimestamp:t,admin:a}=(0,g.O)(),{isConnected:s}=(0,R.m)();return(0,r.jsxs)("div",{className:y().root,children:[(0,r.jsx)("div",{className:y().title,children:"ADMIN ACTIONS"}),!s&&(0,r.jsx)(x.NL,{}),s&&!a&&(0,r.jsx)("div",{className:y().unauthorised,children:"Your account does not have admin access"}),(!n||!t)&&s&&a&&(0,r.jsx)("button",{type:"button",className:y().unlockButton,onClick:e,children:"Unlock"}),s&&n&&t&&s&&a&&(0,r.jsxs)(W.Z,{spacing:2,direction:"column",children:[(0,r.jsx)(DownloadButton,{}),(0,r.jsx)(ReIndexChain,{}),(0,r.jsx)(ReIndexTransaction,{}),(0,r.jsx)(TransferFees,{}),(0,r.jsx)(StopNode,{})]})]})}var M=t(17044),q=t.n(M);function Spinner(){return(0,r.jsx)("span",{className:q().loader})}var X=t(85108),V=t.n(X),K=t(75368),Y=t.n(K),z={src:"/_next/static/media/copy.63713a04.svg",height:16,width:15,blurWidth:0,blurHeight:0};function Copy(e){let{text:n}=e,[t,a]=(0,v.useState)(!1),copyToClipboard=e=>{let n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)};return(0,v.useEffect)(()=>{if(!t)return;let e=setTimeout(()=>{a(!1)},1e3);return()=>clearTimeout(e)},[t]),(0,r.jsxs)("div",{className:Y().action,onClick:()=>{copyToClipboard(n),a(!0)},children:[(0,r.jsx)(d(),{src:z,alt:"icont-copy",className:Y().icon}),t&&(0,r.jsx)("div",{className:Y().feedback,children:"Copied!"})]})}function NodePeers(){let[e,n]=(0,v.useState)([]),[t,a]=(0,v.useState)(!0),fetchNodePeers=async()=>{a(!0);try{let e=await fetch("/getOceanPeers",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"GET"}),t=await e.json();n(t)}catch(e){console.error("error",e)}finally{a(!1)}};return(0,v.useEffect)(()=>{fetchNodePeers();let e=setInterval(()=>{fetchNodePeers()},12e4);return()=>clearInterval(e)},[]),(0,r.jsxs)("div",{className:V().nodes,children:[(0,r.jsx)("div",{className:V().title24,children:"Connected Nodes"}),t&&(0,r.jsx)("div",{className:V().loaderContainer,children:(0,r.jsx)(Spinner,{})}),e.length>0?e.map(e=>(0,r.jsxs)("div",{className:V().nodeAddress,children:[truncateString(e,12)," ",(0,r.jsx)(Copy,{text:e})]},e)):(0,r.jsx)("div",{children:"There are no nodes connected"})]})}function SupportedStorage(e){let{data:n}=e;return(0,r.jsxs)("div",{className:f().indexer,children:[(0,r.jsx)("div",{className:f().title29,children:"SUPPORTED STORAGE"}),(0,r.jsxs)("div",{className:f().provider,children:[(0,r.jsxs)("div",{className:f().providerRow,children:[(0,r.jsx)("div",{className:f().providerTitle,children:(0,r.jsx)("b",{children:"arwave:"})}),(0,r.jsxs)("div",{children:[null==n?void 0:n.supportedStorage.arwave.toString()," "]})]}),(0,r.jsxs)("div",{className:f().providerRow,children:[(0,r.jsx)("div",{className:f().providerTitle,children:(0,r.jsx)("b",{children:"ipfs:"})}),(0,r.jsxs)("div",{children:[null==n?void 0:n.supportedStorage.ipfs.toString()," "]})]}),(0,r.jsxs)("div",{className:f().providerRow,children:[(0,r.jsx)("div",{className:f().providerTitle,children:(0,r.jsx)("b",{children:"url:"})}),(0,r.jsxs)("div",{children:[null==n?void 0:n.supportedStorage.url.toString()," "]})]})]})]})}function SupportedNetworks_SupportedStorage(e){let{data:n}=e;return(0,r.jsxs)("div",{className:f().indexer,children:[(0,r.jsx)("div",{className:f().title29,children:"SUPPORTED Networks"}),(0,r.jsx)("div",{className:f().provider,children:null==n?void 0:n.provider.map(e=>(0,r.jsxs)("div",{className:f().providerRow,children:[(0,r.jsx)("div",{className:f().providerTitle,children:(0,r.jsx)("b",{children:e.chainId})}),(0,r.jsxs)("div",{children:[e.network," "]})]}))})]})}var $=t(72882),ee=t(7906),en=t(53184),et=t(53816),ea=t(53252),es=t(295),er=t(27061);function IndexQueue(){let[e,n]=(0,v.useState)([]),{networks:t}=(0,g.O)(),[a,s]=(0,v.useState)(!1),i=null;return(0,v.useEffect)(()=>{let fetchQueue=()=>{fetch("/api/services/indexQueue").then(e=>{400===e.status?(console.warn("Cannot fetch queue: Node is not running Indexer"),s(!0),i&&clearInterval(i)):e.json().then(e=>{let a=e.queue.map(e=>{let n=t.find(n=>n.chainId===e.chainId);return{txId:e.txId,chainId:e.chainId,chain:n?n.network:"Unknown Network"}});n(a)})}).catch(e=>{console.error("Error fetching queue:",e)})};fetchQueue();let e=1e4;return er.env.INDEXER_INTERVAL&&(e=Number(er.env.INDEXER_INTERVAL)),i=setInterval(fetchQueue,e),()=>{i&&clearInterval(i)}},[]),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:f().title24,style:{paddingTop:"55px",paddingBottom:"55px"},children:"Indexing Queue"}),e.length>0?(0,r.jsx)($.Z,{children:(0,r.jsxs)(ee.Z,{"aria-label":"simple table",children:[(0,r.jsx)(en.Z,{children:(0,r.jsxs)(et.Z,{children:[(0,r.jsx)(ea.Z,{children:(0,r.jsx)("b",{children:"Transaction ID"})}),(0,r.jsx)(ea.Z,{align:"right",children:(0,r.jsx)("b",{children:"Network"})})]})}),(0,r.jsx)(es.Z,{children:e.map((e,n)=>(0,r.jsxs)(et.Z,{children:[(0,r.jsx)(ea.Z,{component:"th",scope:"row",children:e.txId}),(0,r.jsx)(ea.Z,{align:"right",children:e.chain})]},n))})]})}):(0,r.jsx)("p",{children:"Indexing queue is empty."}),a&&(0,r.jsx)(L.Z,{className:f().indexerQueueAlert,severity:"warning",onClose:()=>{s(!1)},children:"Node is not running Indexer. No need to get queue at this point!"})]})}var ei=t(86886),el=t(66242);function Indexer(e){let{data:n}=e;return(0,r.jsxs)("div",{className:b()([f().indexer,f().borderBottom]),children:[(0,r.jsx)("div",{className:f().title29,children:"INDEXER"}),(0,r.jsx)(ei.ZP,{container:!0,spacing:2,children:null==n?void 0:n.indexer.map(e=>(0,r.jsx)(ei.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,r.jsxs)(el.Z,{className:b()([f().indexBlock,e.delayed&&f().delayed]),sx:{marginBottom:4,borderRadius:"8px",position:"relative"},children:[(0,r.jsx)("h5",{children:e.network}),(0,r.jsxs)("div",{children:["ChainID: ",e.chainId]}),(0,r.jsxs)("div",{children:["BLOCK: ",e.block]})]},e.block)},e.block))}),(0,r.jsx)(IndexQueue,{})]})}function AdminAccounts(){let{allAdmins:e}=(0,g.O)();return(0,r.jsxs)("div",{className:f().indexer,children:[(0,r.jsx)("div",{className:f().title29,children:"Admin Accounts"}),(0,r.jsx)("div",{className:f().provider,children:e.map((e,n)=>(0,r.jsx)("div",{className:f().providerRow,children:e},n))})]})}function NodePlatform(e){let{platformData:n}=e;return(0,r.jsxs)("div",{className:f().indexer,children:[(0,r.jsx)("div",{className:f().title29,children:"PLATFORM"}),(0,r.jsx)("div",{className:f().provider,children:n.map(e=>(0,r.jsxs)("div",{className:f().providerRow,children:[(0,r.jsx)("div",{className:f().providerTitle,children:(0,r.jsxs)("b",{children:[e.key,":"]})}),(0,r.jsxs)("div",{children:[e.value," "]})]},e.value))})]})}function Dashboard(){let[e,n]=(0,v.useState)(),[t,a]=(0,v.useState)(!0),[s,i]=(0,v.useState)(""),{setAllAdmins:l,setNetworks:o}=(0,g.O)();(0,v.useEffect)(()=>{a(!0);try{fetch("/directCommand",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({command:"status"})}).then(e=>e.json()).then(e=>{n(e),l(e.allowedAdmins),o(e.indexer),a(!1)})}catch(e){a(!1),console.error("error",e)}},[]),(0,v.useEffect)(()=>{fetch("https://api.ipify.org?format=json").then(e=>e.json()).then(e=>{i(e.ip)}).catch(e=>{console.error("Failed to fetch IP address:",e)})},[]);let d=[{id:null==e?void 0:e.id,ip:s,indexerData:null==e?void 0:e.indexer}],c=[];return e&&Object.keys(null==e?void 0:e.platform).forEach(n=>{let t={key:n,value:JSON.stringify(null==e?void 0:e.platform[n])};c.push(t)}),(0,r.jsxs)("div",{className:f().root,children:[(0,r.jsx)(AdminActions,{}),(0,r.jsx)("div",{className:f().bodyContainer,children:t?(0,r.jsx)("div",{className:f().loaderContainer,children:(0,r.jsx)(Spinner,{})}):(0,r.jsxs)("div",{className:f().body,children:[(0,r.jsx)(()=>(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:f().title29,children:"NETWORK"}),(0,r.jsx)("div",{className:f().details,children:(0,r.jsxs)("div",{className:f().details,children:[(0,r.jsxs)("div",{className:f().columnP2P,children:[(0,r.jsxs)("div",{className:b()([f().title24,f().borderBottom]),children:["P2P - ",(null==e?void 0:e.p2p)?"UP":"DOWN"]}),(0,r.jsxs)("div",{className:f().nodes,children:[(0,r.jsx)("div",{className:f().title24,children:"NODE ID"}),d.map(e=>(0,r.jsxs)("div",{className:f().node,children:[(0,r.jsx)("div",{className:f().nodeAddress,children:(0,r.jsx)("div",{className:f().node,children:truncateString(e.id,12)})}),(0,r.jsx)(Copy,{text:null==e?void 0:e.id})]},e.id))]}),(0,r.jsxs)("div",{className:f().nodes,children:[(0,r.jsx)("div",{className:f().title24,children:"Address"}),(0,r.jsxs)("div",{className:f().node,children:[truncateString(null==e?void 0:e.address,12),(0,r.jsx)(Copy,{text:null==e?void 0:e.address})]})]}),(0,r.jsx)(NodePeers,{})]}),(0,r.jsxs)("div",{className:f().columnHTTP,children:[(0,r.jsxs)("div",{className:b()([f().title24,f().borderBottom]),children:["HTTP - ",(null==e?void 0:e.http)?"UP":"DOWN"]}),(0,r.jsx)("div",{className:f().nodes,children:(0,r.jsxs)("div",{className:f().nodeAddress,children:[(0,r.jsx)("h5",{className:f().title24,children:"IP : "}),(0,r.jsx)("div",{className:f().nodeAddress,children:s}),(0,r.jsx)(Copy,{text:s})]})})]})]})})]}),{}),(0,r.jsx)(Indexer,{data:e}),(0,r.jsx)(SupportedNetworks_SupportedStorage,{data:e}),(0,r.jsx)(SupportedStorage,{data:e}),(0,r.jsx)(AdminAccounts,{}),(0,r.jsx)(NodePlatform,{platformData:c})]})})]})}function Home(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:"Ocean nodes"}),(0,r.jsx)("meta",{name:"description",content:"Ocean nodes dashboard"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("header",{children:(0,r.jsx)(Navigation,{})}),(0,r.jsx)("main",{children:(0,r.jsx)(Dashboard,{})}),(0,r.jsx)("footer",{children:(0,r.jsx)(components_Footer,{})})]})}},46085:function(e){e.exports={download:"Admin_download__ZZ4G0",unlockButton:"Admin_unlockButton__ke4Fn",buttonIcon:"Admin_buttonIcon___M4VS",loader:"Admin_loader__3WuLo",rotation:"Admin_rotation__lknWO",rotationBack:"Admin_rotationBack__qlWG_",root:"Admin_root__Q70by",title:"Admin_title__Xr7QQ",unauthorised:"Admin_unauthorised__6u5Bb"}},75368:function(e){e.exports={icon:"Copy_icon__BB7bs",feedback:"Copy_feedback__Wse_F",action:"Copy_action__IlKRq",button:"Copy_button__zsJoM"}},11706:function(e){e.exports={root:"Dashboard_root__SCu4R",bodyContainer:"Dashboard_bodyContainer__Fs5NF",body:"Dashboard_body__kpkou",details:"Dashboard_details__TI_cX",columnP2P:"Dashboard_columnP2P__0zKqU",columnHTTP:"Dashboard_columnHTTP__lhw_5",nodes:"Dashboard_nodes__7r0Ge",indexerQueueAlert:"Dashboard_indexerQueueAlert__iCMHE",borderBottom:"Dashboard_borderBottom__5pTDi",title29:"Dashboard_title29__TBf_2",title24:"Dashboard_title24__q5w52",nodeAddress:"Dashboard_nodeAddress__jgxgu",node:"Dashboard_node__UCu0_",indexer:"Dashboard_indexer__PpMWp",indexBlock:"Dashboard_indexBlock__Ng0C_",delayed:"Dashboard_delayed__3Tj7O",provider:"Dashboard_provider__wMZ4i",providerRow:"Dashboard_providerRow__k2QJ8",providerTitle:"Dashboard_providerTitle__5DXbm",loaderContainer:"Dashboard_loaderContainer__CAGjT",loader:"Dashboard_loader__p4KHC",rotation:"Dashboard_rotation__RIDl3"}},94428:function(e){e.exports={footerContainer:"style_footerContainer___mKsH",footerLinks:"style_footerLinks__1vBvO"}},30378:function(e){e.exports={navbarParent:"style_navbarParent__OgqE_",logoWrapper:"style_logoWrapper__ARfWA",connectButtonWrapper:"style_connectButtonWrapper__G4TF7"}},85108:function(e){e.exports={title24:"style_title24__8ssRQ",loaderContainer:"style_loaderContainer__dYPch",nodes:"style_nodes__ioZOx",nodeAddress:"style_nodeAddress__t2M8E"}},17044:function(e){e.exports={loader:"style_loader__s3fCW",rotation:"style_rotation__wALkg"}}},function(e){e.O(0,[9130,9774,2888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);