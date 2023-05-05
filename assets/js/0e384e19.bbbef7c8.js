"use strict";(self.webpackChunkinventory_oasis_github_io=self.webpackChunkinventory_oasis_github_io||[]).push([[671],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(y,i(i({ref:t},u),{},{components:n})):o.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(1163),r=(n(9496),n(9613));const a={sidebar_label:"Introduction",sidebar_position:1},i="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Welcome to Inventory Oasis, a powerful inventory management system built exclusively on the Godot 4 engine's new resources. This system is tightly integrated with the engine, providing an awesome user experience. With Inventory Oasis, you can manage your inventory with ease, adding and editing items directly through the Inspector.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Inventory Component",permalink:"/docs/inv-component"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Welcome to Inventory Oasis, a powerful inventory management system built exclusively on the Godot 4 engine's new resources. This system is tightly integrated with the engine, providing an awesome user experience. With Inventory Oasis, you can manage your inventory with ease, adding and editing items directly through the Inspector."),(0,r.kt)("p",null,"One of the key benefits of Inventory Oasis is its flexibility. Every item can be extended with custom properties and custom use functions, allowing you to tailor the system to your specific needs. This means you can easily add new item types or modify existing ones to fit your workflow."),(0,r.kt)("p",null,"Thanks to the close integration with the Godot 4 engine, Inventory Oasis provides a seamless experience for game developers and designers. Whether you're building a 2D or 3D game, you can take advantage of Inventory Oasis's powerful features to manage your game assets with ease."),(0,r.kt)("p",null,"In this documentation, you will learn how to use Inventory Oasis to manage your inventory, create new items, and customize the system to fit your needs. We will walk you through the process step by step, providing clear instructions and helpful tips along the way."),(0,r.kt)("p",null,"We hope that you find Inventory Oasis to be a valuable addition to your game development toolkit. Whether you're a seasoned developer or just getting started with Godot 4, Inventory Oasis can help you streamline your workflow and create amazing games."),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Overview Diagram",src:n(2510).Z,width:"1920",height:"1080"})),(0,r.kt)("p",null,"You have an ",(0,r.kt)("strong",{parentName:"p"},"Inventory Component")," that can be attached to ",(0,r.kt)("strong",{parentName:"p"},"any")," scene. The data is stored in this component, together with some helpful functions. (Can be attached to Player, Chest, etc...)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Items")," are Godot Resources that can be extended with custom properties and functions. Editable through the Inspector!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Inventory Slots")," hold information about the item structure and the quantity of the item. This information is accessed through the Inventory Component."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Inventory Window")," just makes an array of Slots and sets the interactor of the inventory to whoever accesses it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Saving")," and ",(0,r.kt)("strong",{parentName:"p"},"Loading")," system. We have included example demos to showcase how to save and load inventory data, which can be easily adapted to fit your specific use case."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Crafting")," in the Game Example!"),(0,r.kt)("h1",{id:"video-tutorial"},"Video Tutorial"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"TODO")),(0,r.kt)("h1",{id:"examples"},(0,r.kt)("a",{parentName:"h1",href:"./category/examples"},"Examples")))}d.isMDXComponent=!0},2510:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/overview-diagram-d90216827cadfa3ebd765f1fcd3d604a.png"}}]);