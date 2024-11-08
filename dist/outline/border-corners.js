import { openBlock as r, createElementBlock as n, createElementVNode as e } from "vue";
const o = {
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
  return r(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }, null, -1),
    e("path", { d: "M20 16v2a2 2 0 0 1 -2 2h-2" }, null, -1),
    e("path", { d: "M8 20h-2a2 2 0 0 1 -2 -2v-2" }, null, -1),
    e("path", { d: "M4 8v-2a2 2 0 0 1 2 -2h2" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};