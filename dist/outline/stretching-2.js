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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(i, t) {
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M11 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }, null, -1),
    e("path", { d: "M6.5 21l3.5 -5" }, null, -1),
    e("path", { d: "M5 11l7 -2" }, null, -1),
    e("path", { d: "M16 21l-4 -7v-5l7 -4" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
