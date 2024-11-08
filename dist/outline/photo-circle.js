import { openBlock as l, createElementBlock as o, createElementVNode as e } from "vue";
const n = {
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
  return l(), o("svg", n, t[0] || (t[0] = [
    e("path", { d: "M15 8h.01" }, null, -1),
    e("path", { d: "M4 15l4 -4c.928 -.893 2.072 -.893 3 0l5 5" }, null, -1),
    e("path", { d: "M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2 2" }, null, -1),
    e("path", { d: "M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
