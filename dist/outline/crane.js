import { openBlock as n, createElementBlock as l, createElementVNode as e } from "vue";
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
function r(i, t) {
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M6 21h6" }, null, -1),
    e("path", { d: "M9 21v-18l-6 6h18" }, null, -1),
    e("path", { d: "M9 3l10 6" }, null, -1),
    e("path", { d: "M17 9v4a2 2 0 1 1 -2 2" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
