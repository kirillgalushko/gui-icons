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
function r(h, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" }, null, -1),
    e("path", { d: "M7 15v-4a2 2 0 0 1 4 0v4" }, null, -1),
    e("path", { d: "M7 13l4 0" }, null, -1),
    e("path", { d: "M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
