import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
const r = {
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
function i(l, e) {
  return t(), o("svg", r, e[0] || (e[0] = [
    n("path", { d: "M6 4h3a2 2 0 0 1 2 2v6a1 1 0 0 0 1 1h6a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-6.586a1 1 0 0 1 -.707 -.293l-6.414 -6.414a1 1 0 0 1 -.293 -.707v-6.586a2 2 0 0 1 2 -2" }, null, -1)
  ]));
}
const a = { render: i };
export {
  a as default,
  i as render
};
