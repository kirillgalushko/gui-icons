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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(h, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M20.136 11.136l-8.136 -8.136l-9 9h2v7a2 2 0 0 0 2 2h7" }, null, -1),
    e("path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2c.467 0 .896 .16 1.236 .428" }, null, -1),
    e("path", { d: "M19 22v.01" }, null, -1),
    e("path", { d: "M19 19a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
