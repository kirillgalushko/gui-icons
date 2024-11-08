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
function l(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M8 13v-2.5a1.5 1.5 0 0 1 3 0v1.5" }, null, -1),
    e("path", { d: "M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" }, null, -1),
    e("path", { d: "M11 11.5v-2a1.5 1.5 0 1 1 3 0v2.5" }, null, -1),
    e("path", { d: "M14 12v-6.5a1.5 1.5 0 0 1 3 0v6.5" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};