import { openBlock as l, createElementBlock as n, createElementVNode as e } from "vue";
const o = {
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
function r(i, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M20 8.04l-12.122 12.124a2.857 2.857 0 1 1 -4.041 -4.04l12.122 -12.124" }, null, -1),
    e("path", { d: "M7 13h8" }, null, -1),
    e("path", { d: "M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6z" }, null, -1),
    e("path", { d: "M15 3l6 6" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
