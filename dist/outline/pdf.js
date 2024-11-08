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
    e("path", { d: "M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z" }, null, -1),
    e("path", { d: "M3 12h2a2 2 0 1 0 0 -4h-2v8" }, null, -1),
    e("path", { d: "M17 12h3" }, null, -1),
    e("path", { d: "M21 8h-4v8" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
