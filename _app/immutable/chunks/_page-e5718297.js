import{b as o}from"./paths-6cd3a76e.js";const t=async({fetch:e,params:s})=>(await(await e(`${o}/api/games`)).json()).find(a=>s.slug==a.slug),c=Object.freeze(Object.defineProperty({__proto__:null,load:t},Symbol.toStringTag,{value:"Module"}));export{c as _,t as l};