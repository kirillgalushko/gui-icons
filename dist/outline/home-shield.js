import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
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
  return o(), n("svg", l, t[0] || (t[0] = [
    e("path", { d: "M9 21v-6a2 2 0 0 1 2 -2h1.341" }, null, -1),
    e("path", { d: "M19.682 10.682l-7.682 -7.682l-9 9h2v7a2 2 0 0 0 2 2h5" }, null, -1),
    e("path", { d: "M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
