import { openBlock as h, createElementBlock as a, createStaticVNode as e } from "vue";
const p = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(o, t) {
  return h(), a("svg", p, t[0] || (t[0] = [
    e('<path d="M11 7h8a1 1 0 0 1 1 1v7c0 .27 -.107 .516 -.282 .696"></path><path d="M16 16h-11a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h2"></path><path d="M7 16v4"></path><path d="M7.5 16l4.244 -4.244"></path><path d="M13.745 9.755l2.755 -2.755"></path><path d="M13.5 16l1.249 -1.249"></path><path d="M16.741 12.759l3.259 -3.259"></path><path d="M4 13.5l4.752 -4.752"></path><path d="M17 17v3"></path><path d="M5 20h4"></path><path d="M15 20h4"></path><path d="M17 7v-2"></path><path d="M3 3l18 18"></path>', 13)
  ]));
}
const l = { render: r };
export {
  l as default,
  r as render
};
