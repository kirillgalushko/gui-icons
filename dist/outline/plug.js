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
    e("path", { d: "M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054z" }, null, -1),
    e("path", { d: "M4 20l3.5 -3.5" }, null, -1),
    e("path", { d: "M15 4l-3.5 3.5" }, null, -1),
    e("path", { d: "M20 9l-3.5 3.5" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
