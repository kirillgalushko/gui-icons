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
    e("path", { d: "M17 3l0 18" }, null, -1),
    e("path", { d: "M4 6l3 -3l3 3" }, null, -1),
    e("path", { d: "M20 6l-3 -3l-3 3" }, null, -1),
    e("path", { d: "M7 3l0 18" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};