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
    e("path", { d: "M15 15l-3 -3l3 -3" }, null, -1),
    e("path", { d: "M11 15l-3 -3l3 -3" }, null, -1),
    e("path", { d: "M21 12a9 9 0 1 0 0 .265l0 -.265z" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};