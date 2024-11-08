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
function r(i, t) {
  return l(), o("svg", n, t[0] || (t[0] = [
    e("path", { d: "M10 20.415a8 8 0 1 0 3 -15.415h-3" }, null, -1),
    e("path", { d: "M13 8l-3 -3l3 -3" }, null, -1),
    e("path", { d: "M7 17l4 -4l-4 -4l-4 4z" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
