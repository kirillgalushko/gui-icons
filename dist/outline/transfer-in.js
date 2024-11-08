import { openBlock as n, createElementBlock as r, createElementVNode as e } from "vue";
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
function o(i, t) {
  return n(), r("svg", l, t[0] || (t[0] = [
    e("path", { d: "M4 18v3h16v-14l-8 -4l-8 4v3" }, null, -1),
    e("path", { d: "M4 14h9" }, null, -1),
    e("path", { d: "M10 11l3 3l-3 3" }, null, -1)
  ]));
}
const d = { render: o };
export {
  d as default,
  o as render
};
