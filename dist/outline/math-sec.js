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
function l(h, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M3 15c.345 .6 1.258 1 2 1a2 2 0 1 0 0 -4a2 2 0 1 1 0 -4c.746 0 1.656 .394 2 1" }, null, -1),
    e("path", { d: "M21 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" }, null, -1),
    e("path", { d: "M14 8h-4v8h4" }, null, -1),
    e("path", { d: "M10 12h2.5" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
