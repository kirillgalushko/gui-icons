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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function l(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M4 9m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v2a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" }, null, -1),
    e("path", { d: "M4 14h16" }, null, -1),
    e("path", { d: "M8 5h6a2 2 0 0 1 2 2v2" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
