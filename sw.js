if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),a={module:{uri:r},exports:u,require:t};e[r]=Promise.all(n.map((s=>a[s]||t(s)))).then((s=>(i(...s),u)))}}define(["./workbox-27b29e6f"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AddPayment-8e070957.js",revision:null},{url:"assets/AddPayment-e890ba09.css",revision:null},{url:"assets/AppFunAdd-6f513558.js",revision:null},{url:"assets/AppFunAdd-919c4f27.css",revision:null},{url:"assets/AppFunAllocation-57fc11b4.css",revision:null},{url:"assets/AppFunAllocation-f98b89c7.js",revision:null},{url:"assets/AppFunEdit-2aeb8f3d.js",revision:null},{url:"assets/AppFunPhone-29c8e8b8.css",revision:null},{url:"assets/AppFunPhone-9e796485.js",revision:null},{url:"assets/AppFunRead-56eea31c.css",revision:null},{url:"assets/AppFunRead-a3324afe.js",revision:null},{url:"assets/AppFunSettings-2e1c8a6e.js",revision:null},{url:"assets/AppFunSettings-3ec4a6f5.css",revision:null},{url:"assets/AppFunStatistic-7b799c78.js",revision:null},{url:"assets/AppFunStatistic-a1af4110.css",revision:null},{url:"assets/AppSettingsCemeterys-cf905144.css",revision:null},{url:"assets/AppSettingsCemeterys-f83d6605.js",revision:null},{url:"assets/AppSettingsServices-615537a1.js",revision:null},{url:"assets/AppSettingsServices-6cedc15e.css",revision:null},{url:"assets/AppSettingsTempls-2e0bbdcf.css",revision:null},{url:"assets/AppSettingsTempls-fe6ecd56.js",revision:null},{url:"assets/CemeterysStore-ec7ad96d.js",revision:null},{url:"assets/FuneralsStore-89bcb133.js",revision:null},{url:"assets/index-191f4ffb.js",revision:null},{url:"assets/index-27186ad3.css",revision:null},{url:"assets/index.es-a36042b5.js",revision:null},{url:"assets/LayoutBasic-12150343.js",revision:null},{url:"assets/LayoutBasic-e15a87f0.css",revision:null},{url:"assets/LayoutEmail-1a1c9462.js",revision:null},{url:"assets/LayoutEmail-33728358.css",revision:null},{url:"assets/LayoutLogin-2de72564.js",revision:null},{url:"assets/LayoutLogin-f4435f4e.css",revision:null},{url:"assets/LayoutPrint-6cb9d40e.js",revision:null},{url:"assets/LayoutPrint-f4567a98.css",revision:null},{url:"assets/purify.es-cf254a40.js",revision:null},{url:"assets/ReadPoint-c98c667b.css",revision:null},{url:"assets/ReadPoint-ef664978.js",revision:null},{url:"assets/ServicesStore-d4b68fa8.js",revision:null},{url:"assets/TemplsStore-0a45cedb.js",revision:null},{url:"assets/TheButton-606692d7.js",revision:null},{url:"assets/TheButton-a2990b43.css",revision:null},{url:"assets/TheInputText-5c896192.js",revision:null},{url:"assets/TheInputText-993a4ec6.css",revision:null},{url:"assets/TheSwiper-2fef193e.css",revision:null},{url:"assets/TheSwiper-e0584112.js",revision:null},{url:"index.html",revision:"8a8111c6ccf9c0c14578a488c9da767e"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"android-chrome-192x192.png",revision:"135b0c6212e92e1c0a2e9c708e9b1163"},{url:"android-chrome-512x512.png",revision:"b52d5c7aa119ec1d378a3900361cc3fa"},{url:"manifest.webmanifest",revision:"529da092855cb9b50a417fa31c7c450f"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
