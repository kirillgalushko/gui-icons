import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
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
  return o(), n("svg", l, t[0] || (t[0] = [
    e("path", { d: "M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" }, null, -1),
    e("path", { d: "M4 9h16" }, null, -1),
    e("path", { d: "M10 16l2 -2l2 2" }, null, -1)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};
