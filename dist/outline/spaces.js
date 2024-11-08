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
    e("path", { d: "M6.045 9.777a6 6 0 1 0 5.951 .023" }, null, -1),
    e("path", { d: "M11.997 20.196a6 6 0 1 0 -2.948 -5.97" }, null, -1),
    e("path", { d: "M17.95 9.785q .05 -.386 .05 -.785a6 6 0 1 0 -3.056 5.23" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};
