import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
const i = {
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
function l(r, t) {
  return n(), o("svg", i, t[0] || (t[0] = [
    e("path", { d: "M3 16m0 1a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1z" }, null, -1),
    e("path", { d: "M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6" }, null, -1),
    e("path", { d: "M15 13h-4v-4" }, null, -1),
    e("path", { d: "M11 13l5 -5" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
