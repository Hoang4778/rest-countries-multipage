async function r({fetch:e,params:s}){const t=await(await e(`https://restcountries.com/v3.1/name/${s.country}?fullText=true`)).json(),o=(await e("https://restcountries.com/v3.1/all")).json();return Promise.all([t,o]),{archetype:t,all:o}}const n=Object.freeze(Object.defineProperty({__proto__:null,load:r},Symbol.toStringTag,{value:"Module"}));export{n as _,r as l};
