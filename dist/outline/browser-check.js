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
function l(h, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" }, null, -1),
    e("path", { d: "M4 8h16" }, null, -1),
    e("path", { d: "M8 4v4" }, null, -1),
    e("path", { d: "M9.5 14.5l1.5 1.5l3 -3" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
