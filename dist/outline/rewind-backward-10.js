import { openBlock as n, createElementBlock as r, createElementVNode as e } from "vue";
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
function o(i, t) {
  return n(), r("svg", l, t[0] || (t[0] = [
    e("path", { d: "M7 9l-3 -3l3 -3" }, null, -1),
    e("path", { d: "M15.997 17.918a6.002 6.002 0 0 0 -.997 -11.918h-11" }, null, -1),
    e("path", { d: "M6 14v6" }, null, -1),
    e("path", { d: "M9 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" }, null, -1)
  ]));
}
const h = { render: o };
export {
  h as default,
  o as render
};
