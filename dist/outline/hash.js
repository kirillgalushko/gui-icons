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
    e("path", { d: "M5 9l14 0" }, null, -1),
    e("path", { d: "M5 15l14 0" }, null, -1),
    e("path", { d: "M11 4l-4 16" }, null, -1),
    e("path", { d: "M17 4l-4 16" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
