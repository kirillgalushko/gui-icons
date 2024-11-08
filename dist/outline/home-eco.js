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
    e("path", { d: "M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5" }, null, -1),
    e("path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2c.325 0 .631 .077 .902 .215" }, null, -1),
    e("path", { d: "M16 22s0 -2 3 -4" }, null, -1),
    e("path", { d: "M19 21a3 3 0 0 1 0 -6h3v3a3 3 0 0 1 -3 3z" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
