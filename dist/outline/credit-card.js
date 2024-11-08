import { openBlock as l, createElementBlock as n, createElementVNode as e } from "vue";
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
function o(i, t) {
  return l(), n("svg", r, t[0] || (t[0] = [
    e("path", { d: "M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" }, null, -1),
    e("path", { d: "M3 10l18 0" }, null, -1),
    e("path", { d: "M7 15l.01 0" }, null, -1),
    e("path", { d: "M11 15l2 0" }, null, -1)
  ]));
}
const h = { render: o };
export {
  h as default,
  o as render
};
