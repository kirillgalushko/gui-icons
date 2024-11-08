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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(i, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }, null, -1),
    e("path", { d: "M15.005 19.31l-1.591 1.59a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 13.592 -4.638" }, null, -1),
    e("path", { d: "M19 16v3" }, null, -1),
    e("path", { d: "M19 22v.01" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
