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
function r(i, t) {
  return l(), o("svg", n, t[0] || (t[0] = [
    e("path", { d: "M7 8l10 8l-5 4v-16l1 .802m0 6.396l-6 4.802" }, null, -1),
    e("path", { d: "M16 6l4 4" }, null, -1),
    e("path", { d: "M20 6l-4 4" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
