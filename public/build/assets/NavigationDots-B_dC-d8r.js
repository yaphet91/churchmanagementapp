import{j as s}from"./app-CSMBYKCr.js";const t=({active:r})=>s.jsx("div",{className:"flex justify-center items-center flex-col p-4",children:["home","about","work","research","honors","skills","contact"].map((o,a)=>s.jsx("a",{href:`#${o}`,className:`w-2 h-2 md:w-4 md:h-4 rounded-full bg-gray-300 m-2 
                transition-colors duration-200 ease-in-out hover:bg-[var(--secondary-color)]
                ${r===o?"bg-[#313BAC]":""}`,style:r===o?{backgroundColor:"#313BAC"}:{}},o+a))});export{t as default};
