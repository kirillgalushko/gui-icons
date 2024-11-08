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
function r(h, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, null, -1),
    e("path", { d: "M13.193 17.924c-.39 .05 -.788 .076 -1.193 .076c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.005 0 5.592 1.394 7.761 4.181" }, null, -1),
    e("path", { d: "M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" }, null, -1),
    e("path", { d: "M19 21v1m0 -8v1" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
