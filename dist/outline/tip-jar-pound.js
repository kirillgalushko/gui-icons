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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function h(l, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M17 4v1.882c0 .685 .387 1.312 1 1.618s1 .933 1 1.618v8.882a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-8.882c0 -.685 .387 -1.312 1 -1.618s1 -.933 1 -1.618v-1.882" }, null, -1),
    e("path", { d: "M6 4h12z" }, null, -1),
    e("path", { d: "M14 10h-1a2 2 0 0 0 -2 2v2c0 1.105 -.395 2 -1.5 2h4.5" }, null, -1),
    e("path", { d: "M10 13h3" }, null, -1)
  ]));
}
const d = { render: h };
export {
  d as default,
  h as render
};
