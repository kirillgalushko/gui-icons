import { openBlock as o, createElementBlock as l, createElementVNode as e } from "vue";
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
function r(h, t) {
  return o(), l("svg", n, t[0] || (t[0] = [
    e("path", { d: "M10 12h.01" }, null, -1),
    e("path", { d: "M14 12h.01" }, null, -1),
    e("path", { d: "M10 16a3.5 3.5 0 0 0 4 0" }, null, -1),
    e("path", { d: "M11 4c2 0 3.5 1.5 3.5 4l.164 0a2.5 2.5 0 0 1 2.196 3.32a3 3 0 0 1 1.615 3.063a3 3 0 0 1 -1.299 5.607l-.176 0h-10a3 3 0 0 1 -1.474 -5.613a3 3 0 0 1 1.615 -3.062a2.5 2.5 0 0 1 2.195 -3.32l.164 0c1.5 0 2.5 -2 1.5 -4z" }, null, -1)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};
