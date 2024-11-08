import { openBlock as l, createElementBlock as n, createElementVNode as e } from "vue";
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
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M4 20l16 0" }, null, -1),
    e("path", { d: "M9.4 10l5.2 0" }, null, -1),
    e("path", { d: "M7.8 15l8.4 0" }, null, -1),
    e("path", { d: "M6 20l5 -15h2l5 15" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};