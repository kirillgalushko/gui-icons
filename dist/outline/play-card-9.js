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
    e("path", { d: "M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2" }, null, -1),
    e("path", { d: "M8 6h.01" }, null, -1),
    e("path", { d: "M16 18h.01" }, null, -1),
    e("path", { d: "M10 15h3a1 1 0 0 0 1 -1v-4a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h3" }, null, -1)
  ]));
}
const i = { render: l };
export {
  i as default,
  l as render
};