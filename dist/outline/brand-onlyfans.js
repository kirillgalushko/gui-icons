import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function l(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M8.5 6a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0 -13z" }, null, -1),
    e("path", { d: "M8.5 15a2.5 2.5 0 1 1 0 -5a2.5 2.5 0 0 1 0 5z" }, null, -1),
    e("path", { d: "M14 16c2.5 0 6.42 -1.467 7 -4h-6c3 -1 6.44 -3.533 7 -6h-4c-3.03 0 -3.764 -.196 -5 1.5" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
