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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(h, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M3 14l11 -11" }, null, -1),
    e("path", { d: "M10 3h4v4" }, null, -1),
    e("path", { d: "M10 17v4h4" }, null, -1),
    e("path", { d: "M21 10l-11 11" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
