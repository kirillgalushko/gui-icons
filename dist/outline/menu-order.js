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
function o(i, t) {
  return l(), n("svg", r, t[0] || (t[0] = [
    e("path", { d: "M4 10h16" }, null, -1),
    e("path", { d: "M4 14h16" }, null, -1),
    e("path", { d: "M9 18l3 3l3 -3" }, null, -1),
    e("path", { d: "M9 6l3 -3l3 3" }, null, -1)
  ]));
}
const d = { render: o };
export {
  d as default,
  o as render
};
