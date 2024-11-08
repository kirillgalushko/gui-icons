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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function l(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" }, null, -1),
    e("path", { d: "M5 4c-2.5 5 -2.5 10 0 16m14 -16c1.775 3.55 2.29 7.102 1.544 11.01m-11.544 -6.01h1c1 0 1 1 2.016 3.527c.782 1.966 .943 3 1.478 3.343" }, null, -1),
    e("path", { d: "M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" }, null, -1),
    e("path", { d: "M16 19h6" }, null, -1)
  ]));
}
const c = { render: l };
export {
  c as default,
  l as render
};
