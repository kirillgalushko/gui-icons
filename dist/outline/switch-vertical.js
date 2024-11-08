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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(i, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M3 8l4 -4l4 4" }, null, -1),
    e("path", { d: "M7 4l0 9" }, null, -1),
    e("path", { d: "M13 16l4 4l4 -4" }, null, -1),
    e("path", { d: "M17 10l0 10" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
