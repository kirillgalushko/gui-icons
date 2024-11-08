import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
const l = {
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
function r(i, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M8 12v8.5a1.5 1.5 0 0 0 3 0v-7.5" }, null, -1),
    e("path", { d: "M11 13.5v2a1.5 1.5 0 0 0 3 0v-2.5" }, null, -1),
    e("path", { d: "M14 14.5a1.5 1.5 0 0 0 3 0v-1.5" }, null, -1),
    e("path", { d: "M17 13.5a1.5 1.5 0 0 0 3 0v-4.5a6 6 0 0 0 -6 -6h-2h.208a6 6 0 0 0 -5.012 2.7l-.196 .3q -.468 .718 -3.286 5.728a1.5 1.5 0 0 0 .536 2.022c.734 .44 1.674 .325 2.28 -.28l1.47 -1.47" }, null, -1)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};