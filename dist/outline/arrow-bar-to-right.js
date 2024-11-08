import { openBlock as l, createElementBlock as o, createElementVNode as e } from "vue";
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
function n(i, t) {
  return l(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M14 12l-10 0" }, null, -1),
    e("path", { d: "M14 12l-4 4" }, null, -1),
    e("path", { d: "M14 12l-4 -4" }, null, -1),
    e("path", { d: "M20 4l0 16" }, null, -1)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};