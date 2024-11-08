import { openBlock as l, createElementBlock as n, createElementVNode as e } from "vue";
const r = {
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
function o(h, t) {
  return l(), n("svg", r, t[0] || (t[0] = [
    e("path", { d: "M15.733 15.732a2.5 2.5 0 1 0 3.544 3.527" }, null, -1),
    e("path", { d: "M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055" }, null, -1),
    e("path", { d: "M6 8h2m4 0h9l-3 6.01m-3.319 .693l-4.276 -.45a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const d = { render: o };
export {
  d as default,
  o as render
};
