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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(i, t) {
  return o(), n("svg", l, t[0] || (t[0] = [
    e("path", { d: "M13 14l-4 -4l4 -4" }, null, -1),
    e("path", { d: "M8 14l-4 -4l4 -4" }, null, -1),
    e("path", { d: "M9 10h7a4 4 0 1 1 0 8h-1" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
