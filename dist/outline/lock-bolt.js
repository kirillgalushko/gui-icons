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
function r(h, t) {
  return l(), o("svg", n, t[0] || (t[0] = [
    e("path", { d: "M13.5 21h-6.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 1.74 1.012" }, null, -1),
    e("path", { d: "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }, null, -1),
    e("path", { d: "M8 11v-4a4 4 0 1 1 8 0v4" }, null, -1),
    e("path", { d: "M19 16l-2 3h4l-2 3" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};