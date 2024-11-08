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
function l(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M21 7l-4 -4l-4 4" }, null, -1),
    e("path", { d: "M17 3v11a3 3 0 0 1 -3 3h-11" }, null, -1),
    e("path", { d: "M7 13l-4 4l4 4" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
