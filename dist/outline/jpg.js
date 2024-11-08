import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
const h = {
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
function r(l, t) {
  return n(), o("svg", h, t[0] || (t[0] = [
    e("path", { d: "M21 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" }, null, -1),
    e("path", { d: "M10 16v-8h2a2 2 0 1 1 0 4h-2" }, null, -1),
    e("path", { d: "M3 8h4v6a2 2 0 0 1 -2 2h-1.5a.5 .5 0 0 1 -.5 -.5v-.5" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
