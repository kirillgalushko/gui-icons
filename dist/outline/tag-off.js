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
    e("path", { d: "M7.149 7.144a.498 .498 0 0 0 .351 .856a.498 .498 0 0 0 .341 -.135" }, null, -1),
    e("path", { d: "M3.883 3.875a2.99 2.99 0 0 0 -.883 2.125v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l2.796 -2.796m2.005 -2.005l.79 -.79a2.41 2.41 0 0 0 0 -3.41l-7.71 -7.71a2 2 0 0 0 -1.412 -.585h-4.173" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
