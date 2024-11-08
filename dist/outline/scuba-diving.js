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
    e("path", { d: "M19 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }, null, -1),
    e("path", { d: "M2 2l3 3l1.5 4l3.5 2l6 2l1 4l2.5 3" }, null, -1),
    e("path", { d: "M11 8l4.5 1.5" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
