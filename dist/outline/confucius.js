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
    e("path", { d: "M9 19l3 2v-18" }, null, -1),
    e("path", { d: "M4 10l8 -2" }, null, -1),
    e("path", { d: "M4 18l8 -10" }, null, -1),
    e("path", { d: "M20 18l-8 -8l8 -4" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
