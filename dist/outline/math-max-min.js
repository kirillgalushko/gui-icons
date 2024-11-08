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
    e("path", { d: "M15 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, null, -1),
    e("path", { d: "M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, null, -1),
    e("path", { d: "M3 14s.605 -5.44 2.284 -7.862m3.395 .026c2.137 2.652 4.547 9.113 6.68 11.719" }, null, -1),
    e("path", { d: "M18.748 18.038c.702 -.88 1.452 -3.56 2.252 -8.038" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
