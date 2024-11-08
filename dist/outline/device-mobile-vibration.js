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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(i, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M3 3m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" }, null, -1),
    e("path", { d: "M8 4l2 0" }, null, -1),
    e("path", { d: "M9 17l0 .01" }, null, -1),
    e("path", { d: "M21 6l-2 3l2 3l-2 3l2 3" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
