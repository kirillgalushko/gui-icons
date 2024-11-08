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
function l(h, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M6 9v1a3 3 0 0 0 3 3h1" }, null, -1),
    e("path", { d: "M18 8v5a3 3 0 0 1 -3 3h-1" }, null, -1),
    e("path", { d: "M10 21v-16a2 2 0 1 1 4 0v16" }, null, -1),
    e("path", { d: "M7 21h10" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
