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
    e("path", { d: "M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0" }, null, -1),
    e("path", { d: "M7 4l-2.75 2" }, null, -1),
    e("path", { d: "M17 4l2.75 2" }, null, -1),
    e("path", { d: "M8 13h1l2 3l2 -6l2 3h1" }, null, -1)
  ]));
}
const d = { render: o };
export {
  d as default,
  o as render
};
