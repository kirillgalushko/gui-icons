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
function l(h, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M4 8h4l-4 8h4" }, null, -1),
    e("path", { d: "M16 16v-6a2 2 0 1 1 4 0v6" }, null, -1),
    e("path", { d: "M16 13h4" }, null, -1),
    e("path", { d: "M11 12h2" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
