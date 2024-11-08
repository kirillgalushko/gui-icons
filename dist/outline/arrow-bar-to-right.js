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
function r(i, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M14 12l-10 0" }, null, -1),
    e("path", { d: "M14 12l-4 4" }, null, -1),
    e("path", { d: "M14 12l-4 -4" }, null, -1),
    e("path", { d: "M20 4l0 16" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
