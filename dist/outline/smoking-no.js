import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
const l = {
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
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M8 13l0 4" }, null, -1),
    e("path", { d: "M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1),
    e("path", { d: "M17 13h3a1 1 0 0 1 1 1v2c0 .28 -.115 .533 -.3 .714m-3.7 .286h-13a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h9" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
