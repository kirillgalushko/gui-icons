import { openBlock as o, createElementBlock as r, createElementVNode as e } from "vue";
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
function n(i, t) {
  return o(), r("svg", l, t[0] || (t[0] = [
    e("path", { d: "M11 14l4 -4l-4 -4" }, null, -1),
    e("path", { d: "M16 14l4 -4l-4 -4" }, null, -1),
    e("path", { d: "M15 10h-7a4 4 0 1 0 0 8h1" }, null, -1)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
