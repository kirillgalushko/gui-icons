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
function r(h, t) {
  return l(), o("svg", n, t[0] || (t[0] = [
    e("path", { d: "M3 17h13.4a3 3 0 0 0 2.5 -1.34l3.1 -4.66h0h-6.23a4 4 0 0 0 -1.49 .29l-3.56 1.42a4 4 0 0 1 -1.49 .29h-3.73h0h-1l-1.5 4z" }, null, -1),
    e("path", { d: "M6 13l1.5 -5" }, null, -1),
    e("path", { d: "M6 8h8l2 3" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
