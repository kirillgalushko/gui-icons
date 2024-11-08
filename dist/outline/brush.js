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
    e("path", { d: "M3 21v-4a4 4 0 1 1 4 4h-4" }, null, -1),
    e("path", { d: "M21 3a16 16 0 0 0 -12.8 10.2" }, null, -1),
    e("path", { d: "M21 3a16 16 0 0 1 -10.2 12.8" }, null, -1),
    e("path", { d: "M10.6 9a9 9 0 0 1 4.4 4.4" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
